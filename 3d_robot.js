import {GLTFLoader} from './three/examples/jsm/loaders/GLTFLoader.js';

var robot;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50
    , 4/3, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xFFFFFF, 1 );

renderer.setSize(537, 432);
document.getElementById("3d_robot").appendChild(renderer.domElement);

const gltfLoader = new GLTFLoader();
const url = 'model/mini_v12_for_web.gltf';
gltfLoader.load(url, (gltf) => {
    robot = gltf.scene;
    scene.add(robot);
});

const light = new THREE.PointLight(0xFFFFFF, 1.5);
light.position.set(0, 0.5, 2);
scene.add(light);

const light2 = new THREE.PointLight(0xFFFFFF, 1);
light2.position.set(-1, -0.5, -2);
scene.add(light2);

const ambient = new THREE.AmbientLight(0xFFFFFF, 0.3);
scene.add(ambient);

camera.position.z = 0.35;
camera.position.y = 0.1;
camera.position.x = 0;

function animate() {
    requestAnimationFrame(animate);
    if (robot) {
        robot.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
}

animate()