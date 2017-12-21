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
  camera.setAttribute('position', {x: xx, y: 1.5, z: zz});  
}


function ground(x,y,z,e,w,h) {
  var ground = document.createElement('a-box');
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


function got(){
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

got();
ground(0,0,-0,-90,100,100);


setInterval(function(){
  zz = camera.components.position.attrValue.z - Math.cos(camera.components.rotation.data.y*3.1415/180);
  xx = camera.components.position.attrValue.x - Math.sin(camera.components.rotation.data.y*3.1415/180);
  index = index + 20
  for (i = index ; i < 20+index; i++) { 
    var rain = document.createElement('a-sphere');
    rain.setAttribute('geometry', {radius:0.10});
    rain.setAttribute('id',"ball"+i);
    rain.setAttribute('position', {x: xx + Math.random()*10 -5, y: 20+100*Math.random(), z: zz -Math.random()*10 -5});
    rain.setAttribute('material', 'color', '#7F7FFF');
    rain.setAttribute('shadow','cast','true');
    rain.setAttribute('dynamic-body',{sphereRadius: NaN});
    sceneEl.appendChild(rain);
  }
  
  
}, 1000);



setInterval(function(){
  index_two = index_two + 80
  for (i = index_two-140 ; i < index_two -80; i++) { 
    var know = "#ball"+i
    wat = sceneEl.querySelector("#ball"+i);
    sceneEl.removeChild(wat);
  }
}, 4000);



