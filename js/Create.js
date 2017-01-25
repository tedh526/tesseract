var player;
var walls;
var cursors;


function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'ground');

    //  The walls group contains the ground and the 2 ledges we can jump on
    walls = game.add.group();

    //  We will enable physics for any object that is created in this group
    walls.enableBody = true;

    //  Now let's create two ledges
    var wall = walls.create(400, 400, 'wall');
    wall.body.immovable = true;

    wall = walls.create(-150, 250, 'wall');
    wall.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    player.scale.setTo(1);

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [22, 23, 24, 25, 26, 27, 28], 10, true);
    player.animations.add('right', [33, 34, 35, 36, 37, 38, 39], 10, true);
    player.animations.add('down', [0, 1, 2, 3, 4, 5, 6], true);
    player.animations.add('up', [11, 12, 13, 14, 15, 16, 17], true);

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    
}