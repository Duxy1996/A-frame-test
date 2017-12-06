var xx = 0
var rocket_he = 3.75

var sceneEl = document.querySelector('a-scene');
camera = sceneEl.querySelector('#camera');
camera.setAttribute('position', {x: 0, y: 1.5, z: 5});

var extendDeep = AFRAME.utils.extendDeep;
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerGeometry('prism', {
  schema: {
    depth: {default: 1, min: 0},
    height: {default: 1, min: 0},
    width: {default: 1, min: 0},
    segmentsHeight: {default: 1, min: 1, max: 20, type: 'int'},
    segmentsWidth: {default: 1, min: 1, max: 20, type: 'int'},
    segmentsDepth: {default: 1, min: 1, max: 20, type: 'int'}
  },
  init: function (data) {
    var triangleGeometry = new THREE.Geometry();
    triangleGeometry.vertices = [
    new THREE.Vector3(-data.width,  data.width, data.depth/2),  //0 
    new THREE.Vector3(-data.width * data.height, -data.width * data.height, data.depth/2),  //1
    new THREE.Vector3( data.width, -data.width, data.depth/2),  //2
    new THREE.Vector3(-data.width,  data.width, -data.depth/2), //3
    new THREE.Vector3(-data.width * data.height, -data.width * data.height, -data.depth/2), //4
    new THREE.Vector3( data.width, -data.width, -data.depth/2)];//5

    triangleGeometry.faces = [
    new THREE.Face3(0, 1, 2),
    new THREE.Face3(3, 5, 4),

    new THREE.Face3(0, 2, 5),
    new THREE.Face3(0, 5, 3),

    new THREE.Face3(0, 3, 1),
    new THREE.Face3(1, 3, 4),
    
    new THREE.Face3(1, 4, 2),
    new THREE.Face3(4, 5, 2),
    ];


    triangleGeometry.mergeVertices();
    triangleGeometry.computeFaceNormals();
    triangleGeometry.computeVertexNormals();

    this.geometry = triangleGeometry;
  }
});

var extendDeep = AFRAME.utils.extendDeep;
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-prism', extendDeep({}, meshMixin, {
  defaultComponents: {
    geometry: {primitive: 'prism'}
  },
  
  mappings: {
    depth: 'geometry.depth',
    height: 'geometry.height',
    width: 'geometry.width'
  }
}));

function pilar(x,y,z) {
  var column = document.createElement('a-cylinder');
  column.setAttribute('geometry', {
    height: 7.5,
    radius: 0.5
  });
  column.setAttribute('position', {x: x, y: 3.75 + y, z: z});
  column.setAttribute('src', '#piedra');
  sceneEl.appendChild(column);

  var box = document.createElement('a-box');
  box.setAttribute('geometry', {
    height:0.6,
    width: 1.1,
    depth: 1.1
  });
  box.setAttribute('position', {x: x, y: 0.3 + y, z: z});
  box.setAttribute('material', 'color', '#C6B566');
  sceneEl.appendChild(box);

  var cone = document.createElement('a-cone');
  cone.setAttribute('geometry', {
    width:  1,
    height: 1
  });
  cone.setAttribute('position', {x: x, y: 7 + y, z: z});
  cone.setAttribute('material', 'color', '#C6B566');
  cone.setAttribute('rotation', {x: 180, y: 0, z: 0});
  sceneEl.appendChild(cone);

  box = document.createElement('a-box');
  box.setAttribute('geometry', {
    height:0.6,
    width: 2,
    depth: 2
  });
  box.setAttribute('position', {x: x, y: 7.75 + y, z: z});
  box.setAttribute('material', 'color', '#C6B566');
  sceneEl.appendChild(box);

}

for (i = 0; i < 17; i++) { 
  pilar(0,0,-i*3);    
}

for (i = 0; i < 17; i++) { 
  pilar(21.5,0,-i*3); 
}

for (i = 0; i < 6; i++) { 
  pilar(3*i+3,0,0);
}

var roof = document.createElement('a-prism');
roof.setAttribute('geometry', {  
  height: 0.25,
  width: 9,
  depth: 50
});
roof.setAttribute('rotation', {x: 0, y: 0, z: 225});
roof.setAttribute('position', {x: 10.75, y: 8, z: -24});
roof.setAttribute('material', 'color', '#FFC65D');
sceneEl.appendChild(roof);

roof = document.createElement('a-prism');
roof.setAttribute('geometry', {  
  height: 0.3,
  width: 9.5,
  depth: 2
});
roof.setAttribute('rotation', {x: 0, y: 0, z: 225});
roof.setAttribute('position', {x: 10.75, y: 8.01, z: +0.01});
roof.setAttribute('material', 'color', '#FFC65D');
sceneEl.appendChild(roof);

ground(0,0,-30,-90,100)
function ground(x,y,z,e,size) {
  var entityEl = document.createElement('a-plane');
  entityEl.setAttribute('geometry', {
    width: size,
    height: size
  });  
  console.log(y);
  entityEl.setAttribute('rotation', {x: e, y: 90, z: 0});
  entityEl.setAttribute('position', {x: x, y: y, z: z});
  entityEl.setAttribute('material', 'color', '#8C6B21');
  sceneEl.appendChild(entityEl);
}

function WhichButton(event) {   
    camera = sceneEl.querySelector('#camera');
    console.log(camera.components.rotation.data.y)
    zz = camera.components.position.attrValue.z - Math.cos(camera.components.rotation.data.y*3.1415/180)
    xx = camera.components.position.attrValue.x - Math.sin(camera.components.rotation.data.y*3.1415/180)
    camera.setAttribute('position', {x: xx, y: 1.5, z: zz});
}


friso = document.createElement('a-triangle');
friso.setAttribute('geometry', {  
  vertexA: {x: 0, y: 1.5, z: 0},
  vertexB: {x: -9, y: -1, z: 0},
  vertexC: {x: 9, y: -1, z: 0}
});

friso.setAttribute('rotation', {x: 0, y: 0, z: 0});
friso.setAttribute('position', {x: 10.75, y: 9.7, z: 1.1});
friso.setAttribute('src', '#platform');
sceneEl.appendChild(friso);