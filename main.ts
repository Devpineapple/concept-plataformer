namespace SpriteKind {
    export const ground = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_grounded == 1) {
        mySprite.setVelocity(0, -40)
        jump_times += 1
    } else {
        if (jump_times < 2) {
            mySprite.setVelocity(0, -31)
            jump_times += 1
        } else {
        	
        }
    }
})
let textSprite: TextSprite = null
let jump_times = 0
let is_grounded = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 f 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 f 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 f 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 f 2 2 f 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`200010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009000000090001020300000000000000000000000000000000000000000000000700000008000405060000000000000000000000000000000000000000000000000009000700000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000070000000000000000000000000900000000000000000000000000000000000000000000000000000000000000080000000000000000000000000102020202020202020202020202020300000001020203000000000000000000`, img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....2...2.222...................
    ....2...2.222...................
    ......2.2.......................
    ......2.........................
    ......2............2............
    ...................2............
    2222222222222222...2222.........
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
game.onUpdate(function () {
    textSprite = textsprite.create("is_grounded:" + is_grounded, 3, 2)
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        is_grounded = 1
    } else {
        is_grounded = 0
    }
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.vy += 0.5
        jump_times = 1
    } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.vy += 0.5
        mySprite.vx += -1
        mySprite.vx += 0
        jump_times = 1
    } else {
        mySprite.vy += 1
    }
    if (is_grounded == 1) {
        jump_times = 0
    }
})
