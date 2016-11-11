var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild( renderer.domElement )

var geometry = new THREE.BoxGeometry( 10, 10, 10 );
var material = new THREE.MeshBasicMaterial( { color: 'lightblue'} );
var cube = new THREE.Mesh( geometry, material );

var sGeometry = new THREE.SphereGeometry( 5, 32, 32 );
var sMaterial = new THREE.MeshBasicMaterial( {color: "grey"} );
var sphere = new THREE.Mesh( sGeometry, sMaterial );
scene.add( sphere, cube );

camera.position.z = 20;

delta = 0
function render(){
  requestAnimationFrame( render )

  delta += 0.01

  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  // // cube.rotation.z += 0.01
  // cube.rotation.x = Math.sin(delta)*20
  // sphere.position.y = Math.sin(delta)*2
  // sphere.position.z = Math.sin(delta)*5

  renderer.render(scene, camera)
}
render()
