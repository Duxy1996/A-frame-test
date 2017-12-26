// The cloth
        // Cloth graphic object
        var clothWidth = 4;
        var clothHeight = 3;
        var clothNumSegmentsZ = clothWidth * 5;
        var clothNumSegmentsY = clothHeight * 5;
        var clothSegmentLengthZ = clothWidth / clothNumSegmentsZ;
        var clothSegmentLengthY = clothHeight / clothNumSegmentsY;
        var clothPos = new THREE.Vector3( -3, 3, 2 );

        //var clothGeometry = new THREE.BufferGeometry();
        var clothGeometry = new THREE.PlaneBufferGeometry( clothWidth, clothHeight, clothNumSegmentsZ, clothNumSegmentsY );
        clothGeometry.rotateY( Math.PI * 0.5 );
        clothGeometry.translate( clothPos.x, clothPos.y + clothHeight * 0.5, clothPos.z - clothWidth * 0.5 );
        //var clothMaterial = new THREE.MeshLambertMaterial( { color: 0x0030A0, side: THREE.DoubleSide } );
        var clothMaterial = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
        cloth = new THREE.Mesh( clothGeometry, clothMaterial );
        cloth.castShadow = true;
        cloth.receiveShadow = true;
        scene.add( cloth );
        textureLoader.load( "textures/grid.png", function( texture ) {
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set( clothNumSegmentsZ, clothNumSegmentsY );
          cloth.material.map = texture;
          cloth.material.needsUpdate = true;
        } );

        // Cloth physic object
        var softBodyHelpers = new Ammo.btSoftBodyHelpers();
        var clothCorner00 = new Ammo.btVector3( clothPos.x, clothPos.y + clothHeight, clothPos.z );
        var clothCorner01 = new Ammo.btVector3( clothPos.x, clothPos.y + clothHeight, clothPos.z - clothWidth );
        var clothCorner10 = new Ammo.btVector3( clothPos.x, clothPos.y, clothPos.z );
        var clothCorner11 = new Ammo.btVector3( clothPos.x, clothPos.y, clothPos.z - clothWidth );
        var clothSoftBody = softBodyHelpers.CreatePatch( physicsWorld.getWorldInfo(), clothCorner00, clothCorner01, clothCorner10, clothCorner11, clothNumSegmentsZ + 1, clothNumSegmentsY + 1, 0, true );
        var sbConfig = clothSoftBody.get_m_cfg();
        sbConfig.set_viterations( 10 );
        sbConfig.set_piterations( 10 );

        clothSoftBody.setTotalMass( 0.9, false );
        Ammo.castObject( clothSoftBody, Ammo.btCollisionObject ).getCollisionShape().setMargin( margin * 3 );
        physicsWorld.addSoftBody( clothSoftBody, 1, -1 );
        cloth.userData.physicsBody = clothSoftBody;
        // Disable deactivation
        clothSoftBody.setActivationState( 4 );