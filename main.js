import * as THREE from 'https://cdn.skypack.dev/three';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ground
let geometry = new THREE.PlaneGeometry(100, 100);
let material = new THREE.MeshBasicMaterial({color: 0x444444, side: THREE.DoubleSide});
let plane = new THREE.Mesh(geometry, material);
plane.rotation.x = Math.PI / 2;
scene.add(plane);

// Car (placeholder box)
let carGeometry = new THREE.BoxGeometry(1, 0.5, 2);
let carMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
let car = new THREE.Mesh(carGeometry, carMaterial);
car.position.y = 0.25;
scene.add(car);

// Camera
camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(car.position);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
