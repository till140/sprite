input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Down), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let _1: game.LedSprite = null
sprite = game.createSprite(2, 4)
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    _1 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        _1.change(LedSpriteProperty.Y, 1)
        basic.pause(400)
    }
    if (sprite.isTouching(_1)) {
        game.addScore(1)
        _1.delete()
    } else {
        _1.delete()
        game.removeLife(1)
    }
})
