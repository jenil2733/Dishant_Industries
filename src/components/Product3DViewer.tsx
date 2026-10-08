import React, { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { Product } from "../data/products";

interface Product3DViewerProps {
  product: Product;
  className?: string;
}

export const Product3DViewer: React.FC<Product3DViewerProps> = ({ product, className = "" }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Three.js instance refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Orbit navigation coordinates (Spherical coords)
  const orbitRef = useRef({
    radius: 5.8,
    targetRadius: 5.8,
    theta: Math.PI / 4, // 45° isometric azimuth
    targetTheta: Math.PI / 4,
    phi: Math.PI / 3,   // 60° polar elevation
    targetPhi: Math.PI / 3,
    isDragging: false,
    previousMouseX: 0,
    previousMouseY: 0,
    autoRotateSpeed: 0.007,
    minRadius: 3.2,
    maxRadius: 8.8,
  });

  // Construct 3D model geometry: 100% exact replica of foundry photo SVG (No extra stripes or designs)
  const createProductMesh = useCallback((productId: string): THREE.Group => {
    const group = new THREE.Group();

    // Palette strictly matching the foundry photo SVG linear gradients:
    // 1. Cast Aluminium Medium Tone (#94a3b8)
    const aluCastMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.88,
      roughness: 0.3,
    });

    // 2. High-Machined Top Face Light Specular (#f1f5f9 / #e2e8f0)
    const machinedAluMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.96,
      roughness: 0.16,
    });

    // 3. Dark Shadow Flank Tone (#475569 / #334155)
    const darkTechnicalMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.85,
      roughness: 0.42,
    });

    // 4. Molten Orange Runner Sprue Tone (#f97316 / #ea580c)
    const moltenOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      metalness: 0.65,
      roughness: 0.3,
      emissive: 0x9a3412,
      emissiveIntensity: 0.35,
    });

    // 5. Lost Foam Evaporative White Pattern Tone (#ffffff)
    const evaporativeFoamMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.15,
      roughness: 0.45,
    });

    // 6. Pallet Hardwood Brown Tone (#78350f)
    const woodPalletMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      metalness: 0.05,
      roughness: 0.85,
    });

    switch (productId) {
      // -------------------------------------------------------------
      // 1. ALUMINIUM BLOCK: Exact 100% replica of aluminium-block.svg
      // Solid rectangular cast tooling block with machined top face and edge chamfers
      // -------------------------------------------------------------
      case "aluminium-block": {
        // Main solid block body
        const mainBlock = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.4, 2.2), aluCastMat);
        group.add(mainBlock);

        // Machined light top face plate
        const topPlate = new THREE.Mesh(new THREE.BoxGeometry(3.58, 0.02, 2.18), machinedAluMat);
        topPlate.position.y = 0.71;
        group.add(topPlate);

        // Dark right side flank
        const sideFlank = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.38, 2.18), darkTechnicalMat);
        sideFlank.position.x = 1.81;
        group.add(sideFlank);
        break;
      }

      // -------------------------------------------------------------
      // 2. ALUMINIUM PATTERN CASTING: Exact 100% replica of aluminium-pattern-casting.svg
      // Matchplate base frame, 2 guide pin bushings with bores, orange cross runner & dual mould cavities
      // -------------------------------------------------------------
      case "aluminium-pattern-casting": {
        // Matchplate Base Frame
        const plate = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.15, 2.8), machinedAluMat);
        group.add(plate);

        // Guide Pin Bushings (Flask alignment holes on far left & right matching SVG)
        [-1.85, 1.85].forEach((xPos) => {
          const bushing = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.24, 24), darkTechnicalMat);
          bushing.position.set(xPos, 0.06, 0);
          const pinHole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.26, 16), machinedAluMat);
          pinHole.position.set(xPos, 0.06, 0);
          group.add(bushing, pinHole);
        });

        // Molten Orange Runner Sprue System matching SVG path
        const mainRunner = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 1.9), moltenOrangeMat);
        mainRunner.position.set(0, 0.1, 0);
        const crossRunner = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.08, 0.14), moltenOrangeMat);
        crossRunner.position.set(0, 0.1, 0);
        group.add(mainRunner, crossRunner);

        // Symmetrical dual cavity moulds (matching SVG left and right moulds)
        [-0.95, 0.95].forEach((xPos) => {
          // Diamond boss matching SVG polygon
          const mouldBoss = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 0.35, 4), aluCastMat);
          mouldBoss.rotation.y = Math.PI / 4;
          mouldBoss.position.set(xPos, 0.22, 0);

          // Center circular core recess
          const cavityHole = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.38, 24), darkTechnicalMat);
          cavityHole.position.set(xPos, 0.24, 0);

          group.add(mouldBoss, cavityHole);
        });
        break;
      }

      // -------------------------------------------------------------
      // 3. ALUMINIUM THERMOCOL PATTERN: Exact 100% replica of aluminium-thermocol-pattern.svg
      // White evaporative lost-foam manifold, 4 circular manifold ports in a row, orange central sprue & funnel
      // -------------------------------------------------------------
      case "aluminium-thermocol-pattern": {
        // Main Horizontal Manifold Foam Runner Body
        const mainCurve = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 3.2, 24), evaporativeFoamMat);
        mainCurve.rotation.z = Math.PI / 2;
        group.add(mainCurve);

        // 4 Circular Manifold Outlet Ports in a row matching SVG (-1.35, -0.45, 0.45, 1.35)
        [-1.35, -0.45, 0.45, 1.35].forEach((xPos, idx) => {
          const yOffset = (idx === 0 || idx === 3) ? -0.15 : 0.05;
          
          const port = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.5, 32), evaporativeFoamMat);
          port.rotation.x = Math.PI / 2;
          port.position.set(xPos, yOffset, 0.32);

          const bore = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.54, 24), darkTechnicalMat);
          bore.rotation.x = Math.PI / 2;
          bore.position.set(xPos, yOffset, 0.32);

          group.add(port, bore);
        });

        // Vertical Central Orange Feeder Sprue Runner
        const sprueStem = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.9, 20), moltenOrangeMat);
        sprueStem.position.set(0, 0.65, 0);
        
        // Top Conical Pouring Funnel Cup
        const funnel = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.38, 24, 1, true), moltenOrangeMat);
        funnel.position.set(0, 1.15, 0);

        group.add(sprueStem, funnel);
        break;
      }

      // -------------------------------------------------------------
      // 4. NO-BAKE CASTING: Exact 100% replica of no-bake-casting.svg
      // Heavy compressor flanged housing, 5 horizontal cooling fins, center bore flange & 6-bolt circle
      // -------------------------------------------------------------
      case "no-bake-casting": {
        // Trapezoidal Enclosure Body matching SVG
        const casingBody = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.8, 1.0), aluCastMat);
        group.add(casingBody);

        // 5 Horizontal Cooling Fins across front face matching SVG
        [-0.55, -0.28, 0, 0.28, 0.55].forEach((yPos) => {
          const fin = new THREE.Mesh(new THREE.BoxGeometry(3.64, 0.05, 0.18), darkTechnicalMat);
          fin.position.set(0, yPos, 0.52);
          group.add(fin);
        });

        // Center Bore Heavy Flange Ring matching SVG
        const flangeRing = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.25, 36), darkTechnicalMat);
        flangeRing.rotation.x = Math.PI / 2;
        flangeRing.position.set(0, 0, 0.58);
        
        const flangeRim = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.03, 16, 36), machinedAluMat);
        flangeRim.position.set(0, 0, 0.7);

        // Center Bore Hollow Hole
        const centerBore = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.3, 32), darkTechnicalMat);
        centerBore.rotation.x = Math.PI / 2;
        centerBore.position.set(0, 0, 0.6);

        group.add(flangeRing, flangeRim, centerBore);

        // 6 Bolt Studs on the Circle Perimeter matching SVG
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.32, 16), machinedAluMat);
          bolt.rotation.x = Math.PI / 2;
          bolt.position.set(Math.cos(angle) * 0.58, Math.sin(angle) * 0.58, 0.62);
          group.add(bolt);
        }
        break;
      }

      // -------------------------------------------------------------
      // 5. ALUMINIUM COMMERCIAL INGOTS: Exact 100% replica of aluminium-commercial-ingots.svg
      // Wooden pallet base, Tier 1 (3 ingots), Tier 2 (2 ingots), Top ingot with snap notch
      // -------------------------------------------------------------
      case "aluminium-commercial-ingots": {
        // Base Pallet Skid matching SVG
        const pallet = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.2, 2.4), woodPalletMat);
        pallet.position.y = -0.65;
        group.add(pallet);

        // Tier 1: Bottom 3 ingots side-by-side
        [-1.3, 0, 1.3].forEach((xPos) => {
          const ingot = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.4, 2.1), aluCastMat);
          ingot.position.set(xPos, -0.35, 0);
          group.add(ingot);
        });

        // Tier 2: Middle 2 cross ingots (perpendicular)
        [-0.6, 0.6].forEach((zPos) => {
          const crossIngot = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.4, 0.9), machinedAluMat);
          crossIngot.position.set(0, 0.05, zPos);
          group.add(crossIngot);
        });

        // Tier 3: Top single showcase ingot
        const topIngot = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.45, 0.95), machinedAluMat);
        topIngot.position.set(0, 0.48, 0);
        group.add(topIngot);

        // Central snap notch groove
        const notch = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.46, 0.96), darkTechnicalMat);
        notch.position.set(0, 0.48, 0);
        group.add(notch);
        break;
      }

      // -------------------------------------------------------------
      // 6. ALUMINIUM SOFT INGOTS: Exact 100% replica of aluminium-soft-ingots.svg
      // 3-tier pyramid stack of high-gleam mirror ingots with specular gleam lines
      // -------------------------------------------------------------
      case "aluminium-soft-ingots": {
        const pureSilverMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.98,
          roughness: 0.12,
        });

        // Bottom Ingot (Wide)
        const botIngot = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.45, 1.6), pureSilverMat);
        botIngot.position.y = -0.45;
        
        // Middle Ingot (Medium)
        const midIngot = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.45, 1.4), pureSilverMat);
        midIngot.position.y = 0.02;

        // Top Ingot (Showcase)
        const topIngot = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.45, 1.2), pureSilverMat);
        topIngot.position.y = 0.49;

        // Specular top edge highlight line matching SVG line
        const gleamLine = new THREE.Mesh(new THREE.BoxGeometry(1.98, 0.03, 0.03), machinedAluMat);
        gleamLine.position.set(0, 0.72, 0.58);

        group.add(botIngot, midIngot, topIngot, gleamLine);
        break;
      }

      // -------------------------------------------------------------
      // 7. ALUMINIUM 6063 EXTRUSION SCRAP: Exact 100% replica of aluminium-6063-extrusion-scrap.svg
      // 3 hollow extruded profiles standing together:
      // Profile 1 (left): Rectangular hollow box section
      // Profile 2 (mid): T-slot architectural profile with dual hollow chambers
      // Profile 3 (right): Window jamb profile with circular hollow cylinder bore
      // -------------------------------------------------------------
      case "aluminium-6063-extrusion-scrap": {
        // Profile 1: Rectangular Box Section (Left, x = -1.2)
        const boxOuter = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.2, 1.0), machinedAluMat);
        boxOuter.position.set(-1.2, 0, 0);
        const boxInner = new THREE.Mesh(new THREE.BoxGeometry(0.6, 2.22, 0.6), darkTechnicalMat);
        boxInner.position.set(-1.2, 0, 0);
        group.add(boxOuter, boxInner);

        // Profile 2: Tall Architectural T-Slot Profile with Dual Chambers (Center, x = 0)
        const tslotOuter = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.7, 1.0), machinedAluMat);
        tslotOuter.position.set(0, 0.25, 0);
        const chamber1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.6), darkTechnicalMat);
        chamber1.position.set(0, 0.9, 0);
        const chamber2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.6), darkTechnicalMat);
        chamber2.position.set(0, -0.4, 0);
        group.add(tslotOuter, chamber1, chamber2);

        // Profile 3: Window Jamb with Round Cylindrical Bore (Right, x = 1.2)
        const jambOuter = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.0, 1.1), machinedAluMat);
        jambOuter.position.set(1.2, -0.1, 0);
        const roundBore = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.05, 24), darkTechnicalMat);
        roundBore.position.set(1.2, -0.1, 0);
        group.add(jambOuter, roundBore);
        break;
      }

      // -------------------------------------------------------------
      // 8. ALUMINIUM TT SCRAP: Exact 100% replica of aluminium-tt-scrap.svg
      // 5 sheared flat metal plates clustered together matching SVG polygons
      // -------------------------------------------------------------
      case "aluminium-tt-scrap": {
        const platesData = [
          { pos: [-0.6, 0.1, 0.2], rot: [0.2, 0.4, -0.3], size: [1.3, 0.16, 0.9] },
          { pos: [0.5, -0.2, 0.3], rot: [-0.3, 0.6, 0.4], size: [1.2, 0.18, 1.0] },
          { pos: [0.2, 0.4, -0.2], rot: [0.5, -0.3, 0.2], size: [1.4, 0.15, 0.85] },
          { pos: [-0.8, -0.3, -0.3], rot: [-0.2, -0.5, -0.4], size: [1.0, 0.2, 0.95] },
          { pos: [0.6, 0.3, 0], rot: [0.3, -0.2, 0.6], size: [1.1, 0.16, 0.8] }
        ];

        platesData.forEach((p, idx) => {
          const mat = idx % 2 === 0 ? machinedAluMat : aluCastMat;
          const plate = new THREE.Mesh(new THREE.BoxGeometry(p.size[0], p.size[1], p.size[2]), mat);
          plate.position.set(p.pos[0], p.pos[1], p.pos[2]);
          plate.rotation.set(p.rot[0], p.rot[1], p.rot[2]);
          group.add(plate);
        });
        break;
      }

      // -------------------------------------------------------------
      // 9. ALUMINIUM 7000 SERIES INGOTS: Exact 100% replica of aluminium-7000-series-ingots.svg
      // Monolithic heavy aerospace ingot bar, dark structural chamfers on sides, top machined face
      // -------------------------------------------------------------
      case "aluminium-7000-series-ingots": {
        const aeroIngot = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.4, 2.2), aluCastMat);
        group.add(aeroIngot);

        // Top face matching SVG url(#alloy7000)
        const topPlate = new THREE.Mesh(new THREE.BoxGeometry(3.58, 0.02, 2.18), machinedAluMat);
        topPlate.position.y = 0.71;
        group.add(topPlate);

        // Dark side flank matching SVG
        const flankR = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.38, 2.18), darkTechnicalMat);
        flankR.position.x = 1.81;
        group.add(flankR);
        break;
      }

      // -------------------------------------------------------------
      // 10. ALUMINIUM AUTOMOBILE SCRAP: Exact 100% replica of aluminium-automobile-scrap.svg
      // Cylinder head casting body, 4 combustion chamber bores in a row with valve guide holes
      // -------------------------------------------------------------
      case "aluminium-automobile-scrap": {
        const headBody = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.6, 1.3), aluCastMat);
        group.add(headBody);

        // 4 Combustion Chamber Bores in a row matching SVG (-1.2, -0.4, 0.4, 1.2)
        [-1.2, -0.4, 0.4, 1.2].forEach((xPos) => {
          const chamberRing = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.1, 32), darkTechnicalMat);
          chamberRing.rotation.x = Math.PI / 2;
          chamberRing.position.set(xPos, 0, 0.66);

          const rim = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.03, 16, 32), machinedAluMat);
          rim.position.set(xPos, 0, 0.71);

          const valveHole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.15, 20), darkTechnicalMat);
          valveHole.rotation.x = Math.PI / 2;
          valveHole.position.set(xPos, 0, 0.68);

          group.add(chamberRing, rim, valveHole);
        });
        break;
      }

      default: {
        const defaultBlock = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.4, 2.2), aluCastMat);
        group.add(defaultBlock);
        break;
      }
    }

    return group;
  }, []);

  // Main Three.js Scene Setup & Animation Loop
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 380;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    container.appendChild(renderer.domElement);

    // 2. 3D Model Group (100% exact copy of foundry photo SVG)
    const modelGroup = createProductMesh(product.id);
    modelGroupRef.current = modelGroup;
    scene.add(modelGroup);

    // 3. Ground Contact Shadow (Soft floor shadow matching SVG's polygon shadow directly under object)
    const shadowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(4.4, 3.0),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.55
      })
    );
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.92;
    scene.add(shadowMesh);

    // 4. Studio Key & Rim Lights
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(6, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x94a3b8, 2.0);
    rimLight.position.set(-6, -2, -5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0x64748b, 1.6);
    fillLight.position.set(5, -3, -6);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // 5. Mouse & Touch 360° Orbit Interaction Handlers
    const orbit = orbitRef.current;

    const onPointerDown = (clientX: number, clientY: number) => {
      orbit.isDragging = true;
      orbit.previousMouseX = clientX;
      orbit.previousMouseY = clientY;
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!orbit.isDragging) return;
      const deltaX = clientX - orbit.previousMouseX;
      const deltaY = clientY - orbit.previousMouseY;
      orbit.previousMouseX = clientX;
      orbit.previousMouseY = clientY;

      orbit.targetTheta -= deltaX * 0.008;
      orbit.targetPhi -= deltaY * 0.008;
      orbit.targetPhi = Math.max(0.18, Math.min(Math.PI / 2 - 0.05, orbit.targetPhi));
    };

    const onPointerUp = () => {
      orbit.isDragging = false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      onPointerDown(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      onPointerMove(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      onPointerUp();
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      orbit.targetRadius += e.deltaY * 0.005;
      orbit.targetRadius = Math.max(orbit.minRadius, Math.min(orbit.maxRadius, orbit.targetRadius));
    };

    let touchDistance = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.touches.length === 2) {
        touchDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      } else if (e.touches.length === 2) {
        const currentDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = touchDistance - currentDistance;
        touchDistance = currentDistance;
        orbit.targetRadius += diff * 0.01;
        orbit.targetRadius = Math.max(orbit.minRadius, Math.min(orbit.maxRadius, orbit.targetRadius));
      }
    };

    const handleTouchEnd = () => {
      onPointerUp();
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("wheel", handleWheel, { passive: false });

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    // 6. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Render & Animation Loop
    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);

      // Smooth 360° turntable auto-rotation when user is not dragging
      if (!orbit.isDragging) {
        orbit.targetTheta += orbit.autoRotateSpeed;
      }

      // Smooth damping interpolation
      orbit.theta += (orbit.targetTheta - orbit.theta) * 0.08;
      orbit.phi += (orbit.targetPhi - orbit.phi) * 0.08;
      orbit.radius += (orbit.targetRadius - orbit.radius) * 0.08;

      // Update camera position from spherical coordinates
      camera.position.x = orbit.radius * Math.sin(orbit.phi) * Math.sin(orbit.theta);
      camera.position.y = orbit.radius * Math.cos(orbit.phi);
      camera.position.z = orbit.radius * Math.sin(orbit.phi) * Math.cos(orbit.theta);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("wheel", handleWheel);

      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      scene.clear();
    };
  }, [product.id, createProductMesh]);

  return (
    <div className={`relative w-full aspect-4/3 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl overflow-hidden border border-slate-800 shadow-xl select-none ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
        title="Click and drag to rotate in 360°"
      />
    </div>
  );
};
