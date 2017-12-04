var xx = 0
var sceneEl = document.querySelector('a-scene');
camera = sceneEl.querySelector('#camera');
camera.setAttribute('position', {x: 0, y: 0, z: -5});

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
    camera = sceneEl.querySelector('#camera');
    zz = camera.components.position.attrValue.z - Math.cos(camera.components.rotation.data.y*3.1415/180)
    xx = camera.components.position.attrValue.x - Math.sin(camera.components.rotation.data.y*3.1415/180)
    camera.setAttribute('position', {x: xx, y: 0, z: zz});
}

