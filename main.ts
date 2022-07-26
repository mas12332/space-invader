input.onButtonPressed(Button.A, function () {
    RAIDER.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    BULLET = game.createSprite(RAIDER.get(LedSpriteProperty.X), RAIDER.get(LedSpriteProperty.Y))
    bullet1 = game.createSprite(RAIDER.get(LedSpriteProperty.X), RAIDER.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        BULLET.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        bullet1.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    RAIDER.change(LedSpriteProperty.X, 1)
})
let ENEMY_2: game.LedSprite = null
let enemy: game.LedSprite = null
let bullet1: game.LedSprite = null
let BULLET: game.LedSprite = null
let RAIDER: game.LedSprite = null
RAIDER = game.createSprite(2, 4)
let score = 0
BULLET = BULLET
bullet1 = bullet1
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    enemy = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000 + score)
        enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(1000 - score)
    }
    enemy.delete()
})
basic.forever(function () {
    if (enemy.isTouching(RAIDER)) {
        RAIDER.delete()
        game.gameOver()
        control.reset()
        basic.pause(5000)
    }
    if (enemy.isTouching(BULLET)) {
        enemy.delete()
    }
})
basic.forever(function () {
    if (score <= 800) {
        if (score > 400) {
            ENEMY_2 = game.createSprite(randint(0, 4), 0)
            for (let index = 0; index < 4; index++) {
                basic.pause(1000 - score)
                ENEMY_2.change(LedSpriteProperty.Y, 1)
                basic.pause(1000 - score)
            }
            ENEMY_2.delete()
        }
    }
})
basic.forever(function () {
    if (score > 800) {
        basic.clearScreen()
        basic.showString("WINNER")
        control.reset()
        basic.pause(5000)
    }
})
