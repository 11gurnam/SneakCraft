import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { IThreeDRenderer } from "./type/three-d-renderer.types";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeDRendrer: React.FC<IThreeDRenderer> = (props) => {

    const modelRef = useRef<THREE.Object3D | null>(null);
    const intialized = useRef(false)

    useEffect(() => {
        if (intialized.current) return;

        intialized.current = true;

        (async () => {
            await onInit();
        })();

    }, []);

    async function onInit() {
        //intializing the scene
        const scene = new THREE.Scene();

        const parentEl = props.parentRef;
        if (!parentEl.current) return;

        //camera setting
        const rect = parentEl.current?.getBoundingClientRect()!;
        const camera = new THREE.PerspectiveCamera(
            75, // FOV
            rect.width / rect.height,
            0.1,
            1000
        );

        //right side view of the model
        camera.position.set(2, 0, 0); // right side view
        camera.lookAt(0, 0, 0);       // look at model


        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(rect.width, rect.height);
        renderer.setClearColor(0x0f0f0f);
        parentEl.current.appendChild(renderer.domElement);

        //add lights to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);


        //load the 3d model
        const loader = new GLTFLoader();
        try {
            const gltf = await loader.loadAsync('/assets/van-shoe.glb');
            const model = gltf.scene;
            modelRef.current = model;
            // create a wrapper group
            const group = new THREE.Group();
            group.add(model);

            // compute bounding box
            const box = new THREE.Box3().setFromObject(group);
            const center = box.getCenter(new THREE.Vector3());

            // move model inside group
            model.position.sub(center);

            // OPTIONAL: normalize scale
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2 / maxDim;
            group.scale.setScalar(scale);

            // add group instead of model
            scene.add(group);
        } catch (err) {
            console.error(err);
        }


        const animate = () => {
            requestAnimationFrame(animate);

            if (modelRef.current) {
                modelRef.current.rotation.y += 0.01;
            }
            renderer.render(scene, camera);
        };

        animate();
    }


    return null;
};

export default ThreeDRendrer;
