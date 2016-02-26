var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 76, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xdecade});
var cube = new THREE.Mesh( geometry, material );


scene.add( cube );

camera.position.z = 5;
var rx = 0,
    ry = 0;

var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += rx;
  cube.rotation.y += ry;

  renderer.render(scene, camera);
};

render();
