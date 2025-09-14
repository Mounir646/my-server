// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 15;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Particles (Galaxy)
const particleCount = 2000;
const geometry = new THREE.BufferGeometry();
const positions = [];
const colors = [];

for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 50;
    const y = (Math.random() - 0.5) * 50;
    const z = (Math.random() - 0.5) * 50;
    positions.push(x, y, z);

    colors.push(Math.random(), Math.random(), Math.random());
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
    size: 0.3,
    vertexColors: true,
    transparent: true,
    opacity: 0.8
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Animate
function animate() {
    requestAnimationFrame(animate);

    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0005;

    renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
