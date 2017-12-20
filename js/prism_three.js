
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