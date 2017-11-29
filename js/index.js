var xx = 0
var sceneEl = document.querySelector('a-scene');
camera = sceneEl.querySelector('#camera');
camera.setAttribute('position', {x: 0, y: 3.75, z: 0});

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

function WhichButton(event) {
    console.log("Go forward")
    xx = xx - 1
    camera = sceneEl.querySelector('#camera');
    camera.setAttribute('position', {x: 0, y: 3.75, z: xx});
}