var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild( renderer.domElement )

var geometry = new THREE.BoxGeometry( 10, 10, 10 );
var material = new THREE.MeshBasicMaterial( { color: 'lightblue'} );
var cube = new THREE.Mesh( geometry, material );

var sGeometry = new THREE.SphereGeometry( 5, 32, 32 );
var sMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( sGeometry, sMaterial );
scene.add( sphere, cube );

camera.position.z = 20;

// lights
var light = new THREE.DirectionalLight(0xff0000, 2.0, 600)
light.position.set( 50, 50, 50 )
scene.add(light)


function render(){
  requestAnimationFrame( render )
  cube.position.x = 10
  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  // sphere.rotation.x += 0.01
  // sphere.rotation.y += 0.01
  // cube.rotation.z += 0.01

  renderer.render(scene, camera)
}
render()
