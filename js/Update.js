function update() {

    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, walls);


    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (wasd.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (wasd.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else if (wasd.up.isDown)
    {
        //  Move to the right
        player.body.velocity.y = -150;

        player.animations.play('up');
    }
    else if (wasd.down.isDown)
    {
        //  Move to the right
        player.body.velocity.y = 150;

        player.animations.play('down');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 0;
    }


function fire(direction) {
        if (game.time.now > nextFire && bullets.countDead() > 0) {
                nextFire = game.time.now + fireRate;
                var bullet = bullets.getFirstDead();
                bullet.scale.setTo(0.5);
                bullet.reset(player.x, player.y);
                switch(direction) {
                    case 'left' : game.physics.arcade.moveToXY(bullet, -1000, player.y, 500); break;
                    case 'right': game.physics.arcade.moveToXY(bullet, 1000, player.y, 500); break;
                    case 'up': game.physics.arcade.moveToXY(bullet, player.x, -1000, 500); break;
                    case 'down': game.physics.arcade.moveToXY(bullet, player.x, 1000, 500); break;
                    case 'up-left': game.physics.arcade.moveToXY(bullet, player.x - 1000, player.y - 1000, 500); break;
                    case 'up-right': game.physics.arcade.moveToXY(bullet, player.x + 1000, player.y - 1000, 500); break;
                    case 'down-left': game.physics.arcade.moveToXY(bullet, player.x - 1000, player.y + 1000, 500); break;
                    case 'down-right': game.physics.arcade.moveToXY(bullet, player.x + 1000, player.y + 1000, 500); break;
                }
        }
}
    // function fire() {
    //     if (game.time.now > nextFire && bullets.countDead() > 0) {
    //         nextFire = game.time.now + fireRate;
    //         var bullet = bullets.getFirstDead();
    //         bullet.scale.setTo(0.5);
    //         console.log('player', player.x, player.y)
    //         bullet.reset(player.x - 8, player.y - 8);

    //         game.physics.arcade.moveToPointer(bullet, 300);
    //         console.log('bullet', bullet.x, bullet.y)
    //     }
    // }

    if (cursors.up.isDown && cursors.left.isDown)
    {
        fire('up-left');
    }
    else if (cursors.up.isDown && cursors.right.isDown)
    {
        fire('up-right');
    }
    else if (cursors.down.isDown && cursors.left.isDown)
    {
        fire('down-left');
    }
    else if (cursors.down.isDown && cursors.right.isDown)
    {
        fire('down-right');
    }
    else if (cursors.left.isDown)
    {
        fire('left');
    }
    else if (cursors.right.isDown)
    {
        fire('right');
    }
    else if (cursors.up.isDown)
    {
        fire('up');
    }
    else if (cursors.down.isDown)
    {
        fire('down');
    }

}
