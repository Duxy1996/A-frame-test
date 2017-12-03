var xx = 0
var rocket_he = 3.75

var sceneEl = document.querySelector('a-scene');

console.log(AFRAME)
AFRAME.registerPrimitive('a-ocean', {
  defaultComponents: {
    ocean: {},
    rotation: {x: -90, y: 0, z: 0}
  },
  mappings: {
    width: 'ocean.width',
    depth: 'ocean.depth',
    density: 'ocean.density',
    color: 'ocean.color',
    opacity: 'ocean.opacity'
  }
});

for (i = 0; i < 10; i++) { 
    var entityEl = document.createElement('a-cylinder');
    entityEl.setAttribute('geometry', {
      height: 7.5,
      radius: 0.5
    });
    entityEl.setAttribute('position', {x: 4, y: 3.75, z: -i*3});
    entityEl.setAttribute('material', 'color', '#FFC65D');
    sceneEl.appendChild(entityEl);
}

for (i = 0; i < 10; i++) { 
    var entityEl = document.createElement('a-cylinder');
    entityEl.setAttribute('geometry', {
      height: 7.5,
      radius: 0.5
    });
    entityEl.setAttribute('position', {x: -4, y: 3.75, z: -i*3});
    entityEl.setAttribute('material', 'color', '#FFC65D');
    sceneEl.appendChild(entityEl);
}



function ground_matrix(number_terr,size){
  var cuadras = []
  var i;
  for (i = 0; i < number_terr; i++) {
    var j;
    cuadra = []
    for(j = 0; j < number_terr; j++){
      cuadras.push([j*size,0,i*size,-100 ]) 
    };
  };
  for (cuad in cuadras){
    var x = cuadras[cuad][0];
    var y = cuadras[cuad][1];
    var z = cuadras[cuad][2];
    if(cuad % number_terr == 0) {
      var e = -90;
    } else {
      var e = cuadras[cuad-1][3];
      e = ((size/2)*Math.cos((180 + e)*Math.PI/180));  
      y = (cuadras[cuad-1][1] + e);
      var yy = (cuadras[cuad-1][1] + 2*e);
      cuadras[cuad][1] = yy 
      e = cuadras[cuad][3]
    }    
    ground(x,y,z,e,size);
  };
};

function ground(x,y,z,e,size) {
  var entityEl = document.createElement('a-plane');
  entityEl.setAttribute('geometry', {
    width: size,
    height: size
  });  
  console.log(y);
  entityEl.setAttribute('rotation', {x: e, y: 90, z: 0});
  entityEl.setAttribute('position', {x: x, y: y, z: z});
  entityEl.setAttribute('material', 'color', '#7BC8A4');
  sceneEl.appendChild(entityEl);
}

ground_matrix(3,5)

