namespace SpriteKind {
    export const ground = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -20)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-50, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 0)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 1 1 1 1 1 1 9 9 9 
    9 9 9 9 9 9 1 1 9 9 9 9 1 9 9 9 
    9 9 9 9 9 9 1 9 9 9 9 9 1 1 9 9 
    9 9 9 9 9 9 1 9 9 9 9 9 9 1 9 9 
    9 9 9 9 9 9 1 1 1 1 1 1 1 1 9 9 
    9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.ground)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    mySprite.vy += 1
})
