import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Detailed, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import styles from "@/styles/Home.module.css";

function Iphone({ index, z, speed, props }) {
  const ref = useRef();

  const { viewport, camera } = useThree();

  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const { nodes, materials } = useGLTF("/guskIphone.glb");

  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),

    x: THREE.MathUtils.randFloatSpread(2),

    spin: THREE.MathUtils.randFloat(8, 10),

    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z
      );

    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    );

    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });

  return (
    <Detailed ref={ref} distances={[0, 65, 80]}>
      <group {...props} dispose={null}>
        <group scale={0.1}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Frame001_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Frame001_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              geometry={nodes.Frame001_Antenna_0.geometry}
              material={materials.Antenna}
            />
            <mesh
              geometry={nodes.Frame001_Frame2_0.geometry}
              material={materials.Frame2}
            />
            <mesh
              geometry={nodes.Frame001_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body002_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body002_Bezel_0.geometry}
              material={materials.Bezel}
            />
            <mesh
              geometry={nodes.Body002_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Body002_Wallpaper_0.geometry}
              material={materials.Wallpaper}
            />
            <mesh
              geometry={nodes.Body002_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh
              geometry={nodes.Body002_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Body002_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Camera002_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Camera002_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              geometry={nodes.Camera002_Camera_Frame001_0.geometry}
              material={materials["Camera_Frame.001"]}
            />
            <mesh
              geometry={nodes.Camera002_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body003_Screen_Glass_0.geometry}
              material={materials.Screen_Glass}
            />
            <mesh
              geometry={nodes.Button001_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Circle001_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Apple_Logo001_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              geometry={nodes.Camera004_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Camera004_Gray_Glass_0.geometry}
              material={materials.Gray_Glass}
            />
            <mesh
              geometry={nodes.Camera004_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              geometry={nodes.Camera004_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              geometry={nodes.Camera004_Camera_Frame_0.geometry}
              material={materials.Camera_Frame}
            />
            <mesh
              geometry={nodes.Camera004_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh
              geometry={nodes.Camera004_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Camera004_Black_Glass_0.geometry}
              material={materials.Black_Glass}
            />
            <mesh
              geometry={nodes.Camera005_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
        </group>
      </group>
    </Detailed>
  );
}

export default function Iphones({
  count = 6,
  depth = 30,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
  return (
    <div className={styles.canvas}>
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 45, near: 0.01, far: depth + 30 }}
      >
        <color attach="background" args={["#whitesmoke"]} />
        <spotLight
          position={[10, 20, 10]}
          penumbra={1}
          intensity={3}
          color="orange"
        />

        {Array.from({ length: count }, (_, i) => (
          <Iphone
            key={i}
            index={i}
            z={Math.round(easing(i / count) * depth)}
            speed={0.1}
          />
        ))}
        <Environment preset="sunset" />

        <EffectComposer multisampling={0}>
          <DepthOfField
            target={[0, 0, 60]}
            focalLength={0.9}
            bokehScale={14}
            height={700}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
