sceneEl = document.querySelector('a-scene');
orange_cube = sceneEl.querySelector('#orange-cube');
green_cube  = sceneEl.querySelector('#green-cube');
blue_cube   = sceneEl.querySelector('#blue-cube');
purple_cube = sceneEl.querySelector('#purple-cube');


orange_cube.addEventListener('click', function (evt) {
 window.open("./day3.html");
});

green_cube.addEventListener('click', function (evt) {
 window.open("./day2.html");
});

blue_cube.addEventListener('click', function (evt) {
 window.open("./day1.html");
});

function rotate_tvs(tv){
  rotation_y = 0.25*3.14159264/180;
  console.log(tv.getAttribute('position'));
  zz = tv.getAttribute('position').z;
  xx = tv.getAttribute('position').x;
  xx_aux = xx * Math.cos(rotation_y) - zz * Math.sin(rotation_y);
  zz_aux = zz * Math.cos(rotation_y) + xx * Math.sin(rotation_y);
  tv.setAttribute('position', {x: xx_aux , y: 2 , z: zz_aux });
  tv.setAttribute('rotation', {x: 0 , y: 0 , z: 0 });
}



setInterval(function(){ 
  rotate_tvs(purple_cube);
  rotate_tvs(orange_cube);
  rotate_tvs(green_cube);
  rotate_tvs(blue_cube);
   }, 125);