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

    function fire() {
        if (game.time.now > nextFire && bullets.countDead() > 0) {
            nextFire = game.time.now + fireRate;
            var bullet = bullets.getFirstDead();
            bullet.reset(player.x - 8, player.y - 8);

            game.physics.arcade.moveToPointer(bullet, 300);
        }
    }


    if (cursors.left.isDown)
    {
        fire();
    }
    else if (cursors.right.isDown)
    {
        fire();
    }
    else if (cursors.up.isDown)
    {
        fire();
    }
    else if (cursors.down.isDown)
    {
        fire();
    }
}
