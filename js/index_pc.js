var sceneEl = document.querySelector('a-scene');
var index   = 0;
var index_two   = 0;
camera = sceneEl.querySelector('#camera');
camera.setAttribute('position', {x: 0, y: 1.5, z: 5});

var extendDeep = AFRAME.utils.extendDeep;
var meshMixin = AFRAME.primitives.getMeshMixin();

function WhichButton(event) {
  camera = sceneEl.querySelector('#camera');
  zz = camera.components.position.attrValue.z - Math.cos(camera.components.rotation.data.y*3.1415/180);
  xx = camera.components.position.attrValue.x - Math.sin(camera.components.rotation.data.y*3.1415/180);
  if(((xx > -2.5)&&(xx<23.5))&&(zz < 1.95)){
    camera.setAttribute('position', {x: xx, y: 1.85, z: zz});
    if(zz < (1.95 - 0.5)){
      camera.setAttribute('position', {x: xx, y: 2.15, z: zz});
    }
    if(zz < (1.95 - 1)){
      camera.setAttribute('position', {x: xx, y: 2.5, z: zz});
    }
  }
  else{
    camera.setAttribute('position', {x: xx, y: 1.5, z: zz});
  }
}

setInterval(function(){
  light = sceneEl.querySelector('#light');
  xx = light.components.position.attrValue.x + 0.003;
  light.setAttribute('position', {x: xx, y: 7, z: 9});
}, 30);

function ground(x,y,z,e,w,h) {
  var ground = document.createElement('a-plane');
  ground.setAttribute('geometry', {
    width: w,
    height: h
  });
  ground.setAttribute('static-body',{sphereRadius: NaN});
  ground.setAttribute('rotation', {x: e, y: 0, z: 0});
  ground.setAttribute('position', {x: x, y: y, z: z});
  ground.setAttribute('material', 'color', '#8C6B21');
  ground.setAttribute('shadow','receive','true');
  sceneEl.appendChild(ground);
}

function friso(x,y,z){
  var friso = document.createElement('a-triangle');
  friso.setAttribute('geometry', {
    vertexA: {x: 0, y: 1.5, z: 0},
    vertexB: {x: -9, y: -1, z: 0},
    vertexC: {x: 9, y: -1, z: 0}
  });

  friso.setAttribute('rotation', {x: 0, y: 0, z: 0});
  friso.setAttribute('position', {x: 10.75 + x, y: 9.7 + y, z: 1.1 + z});
  friso.setAttribute('src', '#platform');
  sceneEl.appendChild(friso);
}

function roof(x,y,z){
  var roof = document.createElement('a-prism');
  roof.setAttribute('geometry', {
    height: 0.25,
    width: 9,
    depth: 50
  });
  roof.setAttribute('rotation', {x: 0, y: 0, z: 225});
  roof.setAttribute('position', {x: 10.75 + x, y: 8 + y, z: -24 + z});
  roof.setAttribute('material', 'color', '#FFC65D');
  roof.setAttribute('shadow','cast','true');
  roof.setAttribute('shadow','receive','true');
  roof.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(roof);

  roof = document.createElement('a-prism');
  roof.setAttribute('geometry', {
    height: 0.3,
    width: 9.5,
    depth: 2
  });
  roof.setAttribute('rotation', {x: 0, y: 0, z: 225});
  roof.setAttribute('position', {x: 10.75 + x, y: 8.01 + y, z: +0.01 + z});
  roof.setAttribute('material', 'color', '#FFC65D');
  roof.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(roof);
}

function column(x,y,z) {
  var column = document.createElement('a-cylinder');
  column.setAttribute('geometry', {
    height: 7.5,
    radius: 0.5
  });
  column.setAttribute('position', {x: x, y: 3.75 + y, z: z});
  column.setAttribute('src', '#piedra');
  column.setAttribute('shadow','cast','true');
  column.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(column);

  var box = document.createElement('a-box');
  box.setAttribute('geometry', {
    height:0.6,
    width: 1.1,
    depth: 1.1
  });
  box.setAttribute('position', {x: x, y: 0.3 + y, z: z});
  box.setAttribute('material', 'color', '#C6B566');
  box.setAttribute('shadow','cast','true');
  box.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(box);

  var cone = document.createElement('a-cone');
  cone.setAttribute('geometry', {
    width:  1,
    height: 1
  });
  cone.setAttribute('position', {x: x, y: 7 + y, z: z});
  cone.setAttribute('material', 'color', '#C6B566');
  cone.setAttribute('rotation', {x: 180, y: 0, z: 0});
  cone.setAttribute('shadow','cast','true');
  cone.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(cone);

  box = document.createElement('a-box');
  box.setAttribute('geometry', {
    height:0.6,
    width: 2,
    depth: 2
  });
  box.setAttribute('position', {x: x, y: 7.75 + y, z: z});
  box.setAttribute('material', 'color', '#C6B566');
  box.setAttribute('shadow','cast','true');
  sceneEl.appendChild(box);
}

function columns(x,y,z){
  for (i = 0 - z/3; i < 17 - z/3; i++) {
    column(x,y,-i*3);
  }

  for (i = 0 - z/3; i < 17 - z/3; i++) {
    column(21.5+x,y,-i*3);
  }

  for (i = 0 + x/3; i < 6 + x/3; i++) {
    column(3*i+3,y,z);
  }
}

function floor_part(x,y,z){
  var box = document.createElement('a-box');
  box.setAttribute('geometry', {
    height:0.34,
    width: 26,
    depth: 52
  });
  box.setAttribute('position', {x: x + 11, y: 0.25 + y, z: z - 24});
  box.setAttribute('material', 'color', '#C6B566');
  box.setAttribute('shadow','cast','true');
  box.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(box);

  var box = document.createElement('a-box');
  box.setAttribute('geometry', {
    height:0.33,
    width: 25,
    depth: 51
  });
  box.setAttribute('position', {x: x + 11, y: 0.63 + y, z: z - 24});
  box.setAttribute('material', 'color', '#C6B566');
  box.setAttribute('shadow','cast','true');
  box.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(box);

  var box = document.createElement('a-box');
  box.setAttribute('geometry', {
    height:0.33,
    width: 24,
    depth: 50
  });
  box.setAttribute('position', {x: x + 11, y: 0.96 + y, z: z - 24});
  box.setAttribute('material', 'color', '#C6B566');
  box.setAttribute('shadow','cast','true');
  box.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(box);
}

function wall(){
  var box = document.createElement('a-box');
  box.setAttribute('geometry', {
    height: 5,
    width: 2,
    depth: 60
  });
  box.setAttribute('position', {x: -7.5, y: 0, z:-25});
  box.setAttribute('rotation', {x: 0, y: -8, z:0});
  box.setAttribute('material', 'color', '#C6B566');
  box.setAttribute('shadow','cast','true');
  box.setAttribute('static-body',{sphereRadius: NaN});
  sceneEl.appendChild(box);
}

function partenon(x,y,z){
  friso(x,y+1,z);
  roof(x,y+1,z);
  columns(x,y+1,z);
  floor_part(x,y,z);
  wall();
}

partenon(0,0,0);
ground(10,0.1,7,-90,40,10);
ground(-2.5,0.1,-3,-90,15,10);
ground(+0.5,0.1,-13-16,-90,15,42);
ground(+25,0.1,-13-20,-90,30,70);
ground(1.5,0.1,-59,-90,17,18);






