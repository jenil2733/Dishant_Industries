import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroThreeObject: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 340;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(3.2, 2.4, 4.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Group for object rotation
    const group = new THREE.Group();
    scene.add(group);

    // Geometry: Cast Aluminium Block / Ingot shape
    const blockGeometry = new THREE.BoxGeometry(2.4, 0.9, 1.4, 2, 2, 2);
    
    // Aluminium material: high metalness, low roughness, brushed silver specular finish
    const aluminiumMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.25,
    });

    const blockMesh = new THREE.Mesh(blockGeometry, aluminiumMaterial);
    group.add(blockMesh);

    // Stepped runner/gate details to represent foundry casting
    const sprueGeom = new THREE.BoxGeometry(0.5, 0.4, 0.5);
    const sprueMesh = new THREE.Mesh(sprueGeom, aluminiumMaterial);
    sprueMesh.position.set(0, 0.65, 0);
    group.add(sprueMesh);

    // Molten orange rim line / glowing base reflection
    const ringGeom = new THREE.TorusGeometry(1.9, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.9,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -0.7;
    group.add(ringMesh);

    // Molten orange glow light underneath the casting
    const moltenLight = new THREE.PointLight(0xff5500, 3.8, 10);
    moltenLight.position.set(0, -1.2, 0);
    scene.add(moltenLight);

    // Bright studio key lights for crisp metallic reflections on light background
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(5, 7, 5);
    scene.add(keyLight);

    const warmRimLight = new THREE.DirectionalLight(0xff6600, 2.5);
    warmRimLight.position.set(-4, -1, -3);
    scene.add(warmRimLight);

    const fillLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(fillLight);

    // Mouse interaction scoped strictly inside the component container
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.4;
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow idle floating and continuous rotation
      group.rotation.y += 0.006;
      group.position.y = Math.sin(elapsedTime * 1.5) * 0.06;

      // Smooth mouse tilt lerp
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
      group.rotation.z += (-targetRotationY * 0.5 - group.rotation.z) * 0.05;

      // Pulsing molten orange rim light
      moltenLight.intensity = 3.2 + Math.sin(elapsedTime * 3) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      blockGeometry.dispose();
      aluminiumMaterial.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      sprueGeom.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] flex items-center justify-center pointer-events-auto">
      {/* Background molten halo glow */}
      <div className="absolute inset-0 bg-radial from-orange-500/10 via-amber-500/5 to-transparent blur-2xl pointer-events-none" />
      
      {/* 3D Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Specular Metallic Tag - Light theme styled */}
      <div className="absolute bottom-2 right-4 text-[11px] font-mono tracking-wider text-slate-700 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200 shadow-xs pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
        Interactive Cast Aluminium Specimen
      </div>
    </div>
  );
};
