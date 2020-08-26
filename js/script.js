var scene = new THREE.Scene();
scene.background = new THREE.Color(0x000)
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);


camera.position.set(0, 0, 100);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height)
    camera.aspect = width / height;
    camera.updateProjectionMatrix;
})

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.screenSpacePanning = false;
// controls.minDistance = 100;
// controls.maxDistance = 500;
controls.maxPolarAngle = Math.PI / 2;
controls.update();

var geometry = new THREE.PlaneBufferGeometry(1000, 1000);
geometry.rotateX(4.7)
var texture1 = new THREE.TextureLoader().load('img/bg.jpg')
var material = new THREE.MeshBasicMaterial({ map: texture1, flatShading: true });
var cube = new THREE.Mesh(geometry, material);
cube.position.set(0, -30, 0)
scene.add(cube);


var geometry2 = new THREE.BoxGeometry(20,20,20,10,10,10);
var texture2 = new THREE.TextureLoader().load('img/star.png')
var material2 = new THREE.MeshBasicMaterial({ map: texture2, flatShading: true });
for (var i=0; i<100; i++) {
    var cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.x = Math.random() * 800 - 400;
    cube2.position.y = Math.random() * 800 - 400;
    cube2.position.z = Math.random() * 800 - 400;
    scene.add(cube2);
}


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}
animate();