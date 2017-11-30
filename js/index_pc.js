var xx = 0
var sceneEl = document.querySelector('a-scene');
//camera = sceneEl.querySelector('#camera');
//camera.setAttribute('position', {x: 0, y: 3.75, z: 0});

console.log(AFRAME)
AFRAME.registerPrimitive('a-ocean', {
  // Attaches the `ocean` component by default.
  // Defaults the ocean to be parallel to the ground.
  defaultComponents: {
    ocean: {},
    rotation: {x: -90, y: 0, z: 0}
  },
  // Maps HTML attributes to the `ocean` component's properties.
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



