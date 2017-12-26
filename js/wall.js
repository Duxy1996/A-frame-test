// Wall
        var brickMass = 0.5;
        var brickLength = 1.2;
        var brickDepth = 0.6;
        var brickHeight = brickLength * 0.5;
        var numBricksLength = 6;
        var numBricksHeight = 8;
        var z0 = - numBricksLength * brickLength * 0.5;
        pos.set( 0, brickHeight * 0.5, z0 );
        quat.set( 0, 0, 0, 1 );
        for ( var j = 0; j < numBricksHeight; j ++ ) {

          var oddRow = ( j % 2 ) == 1;

          pos.z = z0;

          if ( oddRow ) {
            pos.z -= 0.25 * brickLength;
          }

          var nRow = oddRow? numBricksLength + 1 : numBricksLength;
          for ( var i = 0; i < nRow; i ++ ) {

            var brickLengthCurrent = brickLength;
            var brickMassCurrent = brickMass;
            if ( oddRow && ( i == 0 || i == nRow - 1 ) ) {
              brickLengthCurrent *= 0.5;
              brickMassCurrent *= 0.5;
            }

            var brick = createParalellepiped( brickDepth, brickHeight, brickLengthCurrent, brickMassCurrent, pos, quat, createMaterial() );
            brick.castShadow = true;
            brick.receiveShadow = true;

            if ( oddRow && ( i == 0 || i == nRow - 2 ) ) {
              pos.z += 0.75 * brickLength;
            }
            else {
              pos.z += brickLength;
            }

          }
          pos.y += brickHeight;
        }