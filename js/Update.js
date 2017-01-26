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

                switch(direction) {
                    case 'left' :
                        bullet.reset(player.x - 50, player.y);
                        game.physics.arcade.moveToXY(bullet, -1000, player.y, 500);
                        break;
                    case 'right':
                        bullet.reset(player.x + 50, player.y);
                        game.physics.arcade.moveToXY(bullet, 1000, player.y, 500);
                        break;
                    case 'up':
                        bullet.reset(player.x, player.y - 50);
                        game.physics.arcade.moveToXY(bullet, player.x, -1000, 500);
                        break;
                    case 'down':
                        bullet.reset(player.x, player.y + 50);
                        game.physics.arcade.moveToXY(bullet, player.x, 1000, 500);
                        break;
                    case 'up-left':
                        bullet.reset(player.x - 50, player.y - 50);
                        game.physics.arcade.moveToXY(bullet, player.x - 1000, player.y - 1000, 500);
                        break;
                    case 'up-right':
                        bullet.reset(player.x + 50, player.y  - 50);
                        game.physics.arcade.moveToXY(bullet, player.x + 1000, player.y - 1000, 500);
                        break;
                    case 'down-left':
                        bullet.reset(player.x - 50, player.y + 50);
                        game.physics.arcade.moveToXY(bullet, player.x - 1000, player.y + 1000, 500);
                        break;
                    case 'down-right':
                        bullet.reset(player.x + 50, player.y + 50);
                        game.physics.arcade.moveToXY(bullet, player.x + 1000, player.y + 1000, 500);
                        break;

                }
        }
}



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
