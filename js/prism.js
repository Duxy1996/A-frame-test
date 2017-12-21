
AFRAME.registerGeometry('prism_well', {
  schema: {
    depth: {default: 1, min: 0},
    height: {default: 1, min: 0},
    width: {default: 1, min: 0}
  },
  init: function (data) {
    var triangleGeometry = new THREE.Geometry();
    var length = 1, width = 1;

    var shape = new THREE.Shape();
    shape.moveTo( 0, 0 );
    shape.lineTo( -5, -5 );
    shape.lineTo( 5, -5 );
    shape.lineTo( 0, 0 );

    var extrudeSettings = {
      steps: 2,
      amount: 5,
      bevelEnabled: false,
      bevelThickness: 0,
      bevelSize: 0,
      bevelSegments: 0
    };
    triangleGeometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );

    this.geometry = triangleGeometry;
  }
});

var extendDeep = AFRAME.utils.extendDeep;
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-prism-well', extendDeep({}, meshMixin, {
  defaultComponents: {
    geometry: {primitive: 'prism_well'}
  },
  
  mappings: {
    depth: 'geometry.depth',
    height: 'geometry.height',
    width: 'geometry.width'
  }
}));