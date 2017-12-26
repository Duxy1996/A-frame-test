var sceneEl = document.querySelector('a-scene');
//var index   = 0;
//var index_two   = 0;
camera = sceneEl.querySelector('#camera');
camera.setAttribute('position', {x: 0, y: 1.5, z: 0});
camera.setAttribute('rotation', {x: 0, y: 0  , z: 0});

//camera = sceneEl.querySelector('#camera');


function create_stars(){
  rotation_y = camera.components.rotation.attrValue.y * 3.1415/180;
  zz = camera.components.position.attrValue.z;
  xx = camera.components.position.attrValue.x;
  yy = camera.components.position.attrValue.y;
  for (i = 0 ; i < 200; i++) { 
    var light_speed = document.createElement('a-sphere');
    light_speed.setAttribute('geometry', {radius:0.10});
    light_speed.setAttribute('id',"ball"+i);    
    xx_aux = xx - 12*Math.random() + 12*Math.random();
    xx_aux_aux = xx_aux;
    zz_aux = zz - 10*Math.random() - 2;
    xx_aux = xx_aux * Math.cos(rotation_y) - zz_aux * Math.sin(rotation_y);
    yy_aux = yy + 10*Math.random() - 10 *Math.random();
    zz_aux = zz_aux * Math.cos(rotation_y) + xx_aux_aux * Math.sin(rotation_y);
    light_speed.setAttribute('position', {x: xx_aux , y: yy_aux , z: zz_aux });
    light_speed.setAttribute('material', 'color', '#FFFFFF');
    light_speed.setAttribute('static-body','');
    sceneEl.appendChild(light_speed);
  }
}
// get yaw: console.log(Math.sin(camera.components.rotation.attrValue.x*3.1415/180));
setInterval(function(){
  
}, 1000);
create_stars();


