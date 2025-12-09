import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import React, { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

const Ring: React.FC = () => {
    const groupRef = useRef<THREE.Group>(new THREE.Group());

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    const ringGeometry = useMemo(() => {
        const shape = new THREE.Shape();
        const radius = 0.35;
        shape.absarc(0, 0, radius, 0, Math.PI * 2, false);

        const depth = 10;
        const extrudeSettings: THREE.ExtrudeGeometryOptions = {
            depth,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 4,
            curveSegments: 64,
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        geometry.translate(0, 0, -depth / 2);

        return geometry;
    }, []);

    const elements = [];
    for (let i = -10; i <= 10; i++) {
        elements.push({
            id: `helix-ring-${i}`,
            y: i * 0.85,
            rotation: i * (Math.PI / 16),
        });
    }

    return (
        <group 
            scale={1}
            position={[0, 0, 0]} // Centered
            ref={groupRef}
            rotation={[0, 0, 0]}
        >
            {elements.map((el) => (
                <mesh
                    key={el.id}
                    geometry={ringGeometry}
                    position={[0, el.y, 0]}
                    rotation={[0, Math.PI / 2 + el.rotation, 0]}
                    castShadow
                >
                    <meshPhysicalMaterial
                        color="#4092ef" // Icycon Main Color
                        metalness={0.7}
                        roughness={0.5}
                        clearcoat={0}
                        clearcoatRoughness={0.15}
                        reflectivity={0}
                        iridescence={0.96}
                        iridescenceIOR={1.5}
                        iridescenceThicknessRange={[100, 400]}
                    />
                </mesh>
            ))}
        </group>
    );
};

const HelixRings: React.FC = () => {
    const [zoom, setZoom] = useState(30);

    useEffect(() => {
        const handleResize = () => {
            // Adjust zoom based on screen width.
            // For an orthographic camera, a SMALLER zoom value makes the scene appear smaller ("zoomed out").
            if (window.innerWidth < 768) {
                setZoom(20); // Zoom out on mobile to fit the helix
            } else {
                setZoom(30); // Default zoom for desktop
            }
        };

        handleResize(); // Set initial zoom
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas
                orthographic
                shadows
                camera={{
                    zoom: zoom,
                    position: [0, 0, 7],
                    near: 0.1,
                    far: 1000,
                }}
                gl={{ antialias: true, alpha: true }} // alpha: true for transparent background
            >
                <hemisphereLight
                    color={"#4092ef"} // Icycon Main Color
                    groundColor={"#001358"} // Icycon Dark Color
                    intensity={3}
                />

                <directionalLight
                    position={[10, 10, 5]}
                    intensity={2}
                    castShadow
                    color={"#a5f3fc"} // Light Cyan for highlight
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />

                <Ring />

                <EffectComposer multisampling={8}>
                    <Bloom
                        kernelSize={3}
                        luminanceThreshold={0}
                        luminanceSmoothing={0.4}
                        intensity={0.6}
                    />
                    <Bloom
                        kernelSize={KernelSize.HUGE}
                        luminanceThreshold={0}
                        luminanceSmoothing={0}
                        intensity={0.5}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default HelixRings;