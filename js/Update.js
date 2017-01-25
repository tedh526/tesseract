function update() {

    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, walls);


    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else if (cursors.up.isDown)
    {
        //  Move to the right
        player.body.velocity.y = -150;

        player.animations.play('up');
    }
    else if (cursors.down.isDown)
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


}
