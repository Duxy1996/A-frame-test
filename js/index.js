



var sceneEl = document.querySelector('a-scene');


for (i = 0; i < 10; i++) { 
    var entityEl = document.createElement('a-cylinder');
    entityEl.setAttribute('geometry', {
      height: 7.5,
      radius: 0.5
    });
    entityEl.setAttribute('position', {x: 3, y: 3, z: -i*3});
    entityEl.setAttribute('material', 'color', '#FFC65D');
    sceneEl.appendChild(entityEl);
}

for (i = 0; i < 10; i++) { 
    var entityEl = document.createElement('a-cylinder');
    entityEl.setAttribute('geometry', {
      height: 7.5,
      radius: 0.5
    });
    entityEl.setAttribute('position', {x: -3, y: 3, z: -i*3});
    entityEl.setAttribute('material', 'color', '#FFC65D');
    sceneEl.appendChild(entityEl);
}