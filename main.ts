namespace SpriteKind {
    export const road = SpriteKind.create()
    export const countdown = SpriteKind.create()
    export const ui = SpriteKind.create()
    export const start = SpriteKind.create()
    export const pHitBox = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.pHitBox, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        acceleration += 5
        eAcceleration += -5
    } else {
        acceleration += -5
        eAcceleration += 5
    }
    console.logValue("acell", acceleration)
})
// Create an array of enemies
function spawnCar (amount: number) {
    amount = amount - 1
    for (let i = 0; i <= amount; i++) {
        if (i % 2 == 0) {
            new eCar(i, i, i, 1);
        } else {
            (new eCar(i, i, i-1, 2));
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameState == "Racing" || gameState == "practicing") {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..........2222222222..........
            ........22111222211722........
            ..25...327199799777a123...52..
            .3ff3.3299a777aa97aa7a23.3ff3.
            ..44.44297179999799999244.44..
            ..32223299333799933379232223..
            .3223234444444444444444323223.
            .3223442433333333333334443223.
            .323d665ffffcffffcffff566d323.
            .33d5565ffdddbbbddddff5655d33.
            ..33222222223666632222222233..
            ..ff33233ff33655633ff33233ff..
            ..dff333fcef222222fcef333ffd..
            ..dff333fdcf3f23f3fdcf333fdf..
            ..fdff...c..3.33.3.c....ffdf..
            ...df....................df...
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..........2222222222..........
            ........22111222211722........
            ..25...327199799777a123...52..
            .3ff3.3299a777aa97aa7a23.3ff3.
            ..44.44297179999799999244.44..
            ..32223299333799933379232223..
            .3223234444444444444444323223.
            .3223442433333333333334443223.
            .323d665ffffcffffcffff566d323.
            .33d5565ffdddbbbddddff5655d33.
            ..33222222223666632222222233..
            ..fd33233ff33655633ff33233df..
            ..dff333fcef222222fcef333fdf..
            ..fff333fdcf3f23f3fdcf333fff..
            ..ffff......3.33.3......ffff..
            ...ff....................ff...
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..........2222222222..........
            ........22111222211722........
            ..25...327199799777a123...52..
            .3ff3.3299a777aa97aa7a23.3ff3.
            ..44.44297179999799999244.44..
            ..32223299333799933379232223..
            .3223234444444444444444323223.
            .3223442433333333333334443223.
            .323d665ffffcffffcffff566d323.
            .33d5565ffdddbbbddddff5655d33.
            ..33222222223666632222222233..
            ..ff33233ff33655633ff33233ff..
            ..fff333fcef222222fcef333fff..
            ..dff333fdcf3f23f3fdcf333ffd..
            ..dfff......3.33.3......ffdf..
            ...df....................fd...
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..........2222222222..........
            ........22111222211722........
            ..25...327199799777a123...52..
            .3ff3.3299a777aa97aa7a23.3ff3.
            ..44.44297179999799999244.44..
            ..32223299333799933379232223..
            .3223234444444444444444323223.
            .3223442433333333333334443223.
            .323d665ffffcffffcffff566d323.
            .33d5565ffdddbbbddddff5655d33.
            ..33222222223666632222222233..
            ..ff33233ff33655633ff33233ff..
            ..fff333fcef222222fcef333fff..
            ..fff333fdcf3f23f3fdcf333fff..
            ..ffff......3.33.3......ffff..
            ...df....................fd...
            ..............................
            ..............................
            ..............................
            ..............................
            `],
        acceleration,
        true
        )
        isMoving = true
        if (isGreenFlag == 1) {
        	
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameState == "garage") {
        if (mode == "play") {
            color.FadeToWhite.startScreenEffect(500)
            color.pauseUntilFadeDone()
            startRace2()
            color.startFade(color.White, color.originalPalette, 500)
            color.pauseUntilFadeDone()
            color.clearFadeEffect()
        } else {
            color.FadeToWhite.startScreenEffect(500)
            color.pauseUntilFadeDone()
            startPractice()
            color.startFade(color.White, color.originalPalette, 500)
            color.pauseUntilFadeDone()
            color.clearFadeEffect()
        }
    }
    if (gameState == "startScreen") {
        color.FadeToWhite.startScreenEffect(500)
        color.pauseUntilFadeDone()
        goToGarage()
        color.startFade(color.White, color.originalPalette, 500)
        color.pauseUntilFadeDone()
        color.clearFadeEffect()
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (gameState == "Racing" || gameState == "practicing") {
        brakePower = 3
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameState == "Racing" || gameState == "practicing") {
        mySprite.setVelocity(0 - acceleration, 0)
        if (isGreenFlag == 1) {
        	
        }
    }
    if (gameState == "garage") {
        animation.stopAnimation(animation.AnimationTypes.All, practiceButton)
        practiceButton.setImage(img`
            ....11111111111111111111111111111111111111111111111111....
            ..11ffffffffffffffffffffffffffffffffffffffffffffffffff11..
            .1ff88888888888888888888888888888888888888888888888888ff1.
            .1f888ffffffffffffffff8ffffffffffffffff8ffffffffffff888f1.
            1f8888f111ff111ffff1ffff111ff11111f111fff111ff11111f8888f1
            1f8888f1ff1f1ff1ff1f1ff1fff1fff1ffff1fff1fff1f1fffff8888f1
            1f8888f1ff1f1ff1ff1f1f1ff8fff8f1f88f1ff1ff8fff1fff888888f1
            1f8888f111ff111fff1f1f1f888888f1f88f1ff1f8888f111f888888f1
            1f8888f1ffff1f1fff111f1f888888f1f88f1ff1f8888f1fff888888f1
            1f8888f1f88f1ff1ff1f1f1ff8fff8f1f88f1ff1ff8fff1f88888888f1
            1f8888f1f88f1ff1ff1f1ff1fff1f8f1f8ff1fff1fff1f1fffff8888f1
            1f8888f1f88f1fff1f1f1fff111ff8f1f8f111fff111ff11111f8888f1
            .1f888fff88fff8fffffff8fffff88fff8fffff8ffffffffffff888f1.
            .1ff88888888888888888888888888888888888888888888888888ff1.
            ..11ffffffffffffffffffffffffffffffffffffffffffffffffff11..
            ....11111111111111111111111111111111111111111111111111....
            `)
        animation.runImageAnimation(
        playButton,
        [img`
            .....1111111111111111111111111111.....
            ...11111111111111111111111111111111...
            ..111ffffffffffffffffffffffffffff111..
            .11ff8888888888888888888888888888ff11.
            .11f888fffffffffff8ffffffffffff888f11.
            11f8888f111ffff1ffff111ff11111f8888f11
            11f8888f1ff1ff1f1ff1fff1f1fffff8888f11
            11f8888f1ff1ff1f1f1ff8fff1fff888888f11
            11f8888f111fff1f1f1f8888f111f888888f11
            11f8888f1f1fff111f1f8888f1fff888888f11
            11f8888f1ff1ff1f1f1ff8fff1f88888888f11
            11f8888f1ff1ff1f1ff1fff1f1fffff8888f11
            11f8888f1fff1f1f1fff111ff11111f8888f11
            .11f888fff8fffffff8ffffffffffff888f11.
            .11ff8888888888888888888888888888ff11.
            ..111ffffffffffffffffffffffffffff111..
            ...11111111111111111111111111111111...
            .....1111111111111111111111111111.....
            `,img`
            ......................................
            .....1111111111111111111111111111.....
            ...11ffffffffffffffffffffffffffff11...
            ..1ff8888888888888888888888888888ff1..
            ..1f888fffffffffff8ffffffffffff888f1..
            .1f8888f111ffff1ffff111ff11111f8888f1.
            .1f8888f1ff1ff1f1ff1fff1f1fffff8888f1.
            .1f8888f1ff1ff1f1f1ff8fff1fff888888f1.
            .1f8888f111fff1f1f1f8888f111f888888f1.
            .1f8888f1f1fff111f1f8888f1fff888888f1.
            .1f8888f1ff1ff1f1f1ff8fff1f88888888f1.
            .1f8888f1ff1ff1f1ff1fff1f1fffff8888f1.
            .1f8888f1fff1f1f1fff111ff11111f8888f1.
            ..1f888fff8fffffff8ffffffffffff888f1..
            ..1ff8888888888888888888888888888ff1..
            ...11ffffffffffffffffffffffffffff11...
            .....1111111111111111111111111111.....
            ......................................
            `],
        500,
        true
        )
        mode = "play"
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (gameState == "Racing" || gameState == "practicing") {
        mySprite.setVelocity(0, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (gameState == "Racing" || gameState == "practicing") {
        mySprite.setVelocity(0, 0)
    }
})
function startRace2 () {
    music.stopAllSounds()
    scene.setBackgroundImage(img`
        88888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888
        8888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888
        8888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888
        8888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888
        888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888
        88888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888
        88888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888
        88888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888
        8888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888
        8888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888
        8888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888
        888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888
        888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888
        888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888
        88888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888
        88888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888
        88888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888
        8888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888
        8888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888
        8888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888
        888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888
        888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888
        888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888
        88888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888
        88888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888
        88888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888
        8888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888
        8888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888
        8888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888
        888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888
        888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888
        888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888
        88888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888
        88888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888
        8888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888
        8888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888
        8888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888
        888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888
        888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888
        888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888
        88888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888
        88888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888
        88888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888
        8888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888
        8888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888
        8888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888
        888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888
        888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888
        888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888
        88888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888
        88888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888
        88888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888
        8888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888
        8888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888
        8888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888
        888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888
        888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888
        888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888
        88888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888
        88888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888
        88888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888
        8888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888
        8888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888
        8888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888
        888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888
        888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888
        888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888
        88888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888
        88888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888
        88888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888
        8888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888
        8888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888
        8888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888
        888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888
        888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888
        888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888
        88888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888
        88888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888
        88888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888
        8888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888
        8888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888
        8888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888
        888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888
        888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888
        88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888
        88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888
        88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888
        8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888
        8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888
        8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888
        888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888
        888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888
        888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888
        88888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888
        88888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888
        88888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888
        8888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888
        8888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888
        8888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888
        888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888
        888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888
        888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888
        88888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888
        88888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888
        88888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888
        8888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888
        8888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888
        888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888
        888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888
        888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88
        88dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88
        88dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88
        88ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
        8dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
        8dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
        8ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    isGreenFlag = 0
    gameState = "Racing"
    eAcceleration = 0
    eMaxSize = 35
    eMinSize = 18
    startRace = 0
    brakePower = 3
    carLeftX = 50
    carRightX = 110
    paradeLapSpeed = 0
    paradeLapSpeedMax = 75
    for (let index2 = 0; index2 <= 4; index2++) {
        line = sprites.create(img`
            . . . . . . . e 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.road)
        startFinishLine = sprites.create(img`
            ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11
            ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11
            11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff
            11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff
            `, SpriteKind.start)
        line.setPosition(80, 30 * index2)
        startFinishLine.setPosition(80, 0)
    }
    hitBox = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..dddddddddddddddddddddddddd..
        ..dddddddddddddddddddddddddd..
        ..dddddddddddddddddddddddddd..
        ..dddddddddddddddddddddddddd..
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.pHitBox)
    mySprite = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..........2222222222..........
        ........22111222211722........
        ..25...327199799777a123...52..
        .3ff3.3299a777aa97aa7a23.3ff3.
        ..44.44297179999799999244.44..
        ..32223299333799933379232223..
        .3223234444444444444444323223.
        .3223442433333333333334443223.
        .323d665ffffcffffcffff566d323.
        .33d5565ffdddbbbddddff5655d33.
        ..33222222223666632222222233..
        ..ff33233ff33655633ff33233ff..
        ..fff333fcef222222fcef333fff..
        ..fff333fdcf3f23f3fdcf333fff..
        ..ffff......3.33.3......ffff..
        ...ff....................ff...
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Player)
    mySprite.setPosition(carRightX, 84)
    hitBox.setPosition(mySprite.x, mySprite.y)
    hitBox.follow(mySprite, 100)
    mySprite.setStayInScreen(true)
    info.setScore(playerPos)
    sprites.destroyAllSpritesOfKind(SpriteKind.ui)
    spawnCar(9)
    textSprite = textsprite.create("parade lap", 0, 1)
    textSprite.setPosition(35, 5)
    lap = 0
}
function goToGarage () {
    gameState = "garage"
    music.stopAllSounds()
    music.setVolume(60)
    music.play(music.createSong(hex`008c0004080c0405001c000f0a006400f4010a000004000000000000000000000000000000000230000000200001142000400001904000600001126000800001168000a0000114a000c0000190c000e0000112e0000001011606001c00010a006400f401640000040000000000000000000000000000000002180000002000011420004000019040006000011260008000011607001c00020a006400f401640000040000000000000000000000000000000003800400000200012702000400011b0400060001200600080001a308000a0001270a000c00011b0c000e0001200e00100001a310001200012712001400011b1400160001201600180001a318001a0001271a001c00011b1c001e0001201e00200001a32000220001a822002400019c2400260001202600280001a328002a0001a82a002c00019c2c002e0001202e00300001a33000320001a832003400019c3400360001203600380001a338003a0001a83a003c00019c3c003e0001203e00400001a340004200012542004400011944004600011e46004800016348004a0001254a004c0001194c004e00011e4e005000016350005200012552005400011954005600011e56005800016358005a0001255a005c0001195c005e00011e5e006000016360006200012562006400011964006600011e66006800012268006a0001256a006c0001196c006e00011e6e007000012270007200012572007400011974007600011e76007800012278007a0001257a007c0001197c007e00011e7e008000012280008200012782008400011b8400860001208600880001a388008a0001278a008c00011b8c008e0001208e00900001a390009200012792009400011b9400960001209600980001a398009a0001279a009c00011b9c009e0001209e00a00001a3a000a20001a8a200a400019ca400a6000120a600a80001a3a800aa0001a8aa00ac00019cac00ae000120ae00b00001a3b000b20001a8b200b400019cb400b6000120b600b80001a3b800ba0001a8ba00bc00019cbc00be000120be00c00001a3c000c2000125c200c4000119c400c600011ec600c8000163c800ca000125ca00cc000119cc00ce00011ece00d0000163d000d2000125d200d4000119d400d600011ed600d8000163d800da000125da00dc000119dc00de00011ede00e0000163e000e2000125e200e4000119e400e600011ee600e8000122e800ea000125ea00ec000119ec00ee00011eee00f0000122f000f2000125f200f4000119f400f600011ef600f8000122f800fa000125fa00fc000119fc00fe00011efe000001012200010201012702010401011b0401060101200601080101a308010a0101270a010c01011b0c010e0101200e01100101a310011201012712011401011b1401160101201601180101a318011a0101271a011c01011b1c011e0101201e01200101a32001220101a822012401019c2401260101202601280101a328012a0101a82a012c01019c2c012e0101202e01300101a33001320101a832013401019c3401360101203601380101a338013a0101a83a013c01019c3c013e0101203e01400101a340014201012542014401011944014601011e46014801016348014a0101254a014c0101194c014e01011e4e015001016350015201012552015401011954015601011e56015801016358015a0101255a015c0101195c015e01011e5e016001016360016201012562016401011964016601011e66016801012268016a0101256a016c0101196c016e01011e6e017001012270017201012572017401011974017601011e76017801012278017a0101257a017c0101197c017e01011e7e018001012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8005c020000010004141500031c001d000200032000210004131600033800390004131600034000410004141500036000610004160003048000810002160384008500010388008900020f038c008d0002120390009100020f0392009300011294009500030f16039600970001129800990001039c009d00021003a000a100021603a400a5000103a800a900020f03ac00ad00021203b000b100020f03b200b3000112b400b500030f1603b600b7000112b800b9000103bc00bd00021003c000c100021603c400c5000103c800c900020f03cc00cd00021203d000d100020f03d200d3000112d400d500030f1603d600d7000112d800d9000103dc00dd00021003e000e100021603e400e5000103e800e900020f03ec00ed00021203f000f100030f1603f200f300021216f400f500020f03f600f7000112f800f9000103fc00fd0003101603fe00ff0001160001010102160304010501010308010901020f030c010d0102120310011101020f0312011301011214011501030f16031601170101121801190101031c011d010210032001210102160324012501010328012901020f032c012d0102120330013101020f0332013301011234013501030f16033601370101123801390101033c013d010210034001410102160344014501010348014901020f034c014d0102120350015101020f0352015301011254015501030f16035601570101125801590101035c015d010210036001610102160364016501010368016901020f036c016d0102120370017101030f16037201730102121674017501020f037601770101127801790101037c017d01031016037e017f010116`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        ddddddddddddddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdddddddddffddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddffddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffdddddddddddddddfffffffffffffdddddddddddddddffffffffffffdddddddddddddddccffffddffddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffdcccccccccccccdfffffffffffffdcccccccccccdffffffffffffdcccccccccccdddcccccfffdffddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffddddddddddddddfffffffffffffdddddddddddddffffffffffffddddddddddddddcccccccffdffddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccddddddddddddddcccccccccccdddddddddddddcccccccccccddccccccccfffffddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccc11ffffddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccddddddddddddddcccccccccccddddddddddddcccccccccccddccccccc111ffffddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffddddddddddddddfffffffffffddddddddddddfffffffffffddddddddddddddccccccc1111fffddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffdcccccccccccdfffffffffffdccccccccccdffffffffffdcccccccccccddccccccc11111fffddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddddddddddddfffffffffffdddddddddddffffffffffdddddddddddddccccccc111111fffddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccdddddddddddddcccccccccddddddddddddcccccccccdddccccccc1111111ffddddddddddddddd
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccc11111111ffddddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdddddddddddddddccccccccccddddddddddddccccccccddddddddddddcccccccccdddcccccc111111111ffddddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdfffffffffffddddddddddddffffffffffddddddddddfffffffffdddddddddddddccccccc111111111ffddddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdfffffffffffdccccccccccdfffffffffdccccccccdfffffffffdcccccccccddddddddd1111111111ffddddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccddfffffffffffdddddddddddfffffffffddddddddddffffffffdddddddddddddddddccc1111111111ffddddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcddddddddddddcccccccccdddddddddddccccccccddddddddddcccccccccddddcccccc1111111111ffddddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdccccccc1111111111ffddddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdffffcccccc1111111111ffddddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdddfffccccc1111111111ffdddccccdddddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcdddffcccc11111111111ffdddddcccdddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccdffcccc11111111111ffddddddceeddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccddffccc11111111111ffddddddde1ddddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdccccdffccc11111111111ffdccccce111dddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdccccddffcc11111111111ffddddddee11dddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffddddddd31dfddd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd443333ffdd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd4435e33ffd
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd4435e333ff
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd4435e333ff
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd443e1eecff
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd443e1eecff
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd443e1eecff
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd443e1eecff
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd443e1eeccf
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd443e11ec3f
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd443ee1ec3f
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd4433e1ec3f
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd4443e1e33f
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffdddd44435e333d
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc11111111111ffddddd4435e333d
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffdddd4435e3333
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffdddd4435e3333
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffdddd4435ee333
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffdddd44335e333
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffdddd44335e333
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffdddd44335e333
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffdddd43444c444
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddd444c4444
        ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        ccdccdccdccdccdccdccdccdccdccdc322dddddddddddddddeeee1111111ccdcdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        ccdccdccdccdccdccdccdccdccdc333525552525222222dddddddeeeeeee111cdddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        ccdccdccdccdccdccdccdccdcc33225223333333333332222252255233dcce11dddfccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        ccdccdccdccdccdccdccdcc22252552333dddddddcddd33333332225223ceeeeeecc5cdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        ccdccdccdccdccdccdcc32225523333dddffffffdcfffdddddddddd32523dceeccccd5dccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        ccdccdccdccdccdcc3322255223edddfffffffdddcfffffffffffffd32e23dccccccdd5ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        dfffffccdccdccd322255223eeddfffffffffffddcffffffffffffffd32e23dddddfffd25dccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        dddddfffffc33222255223edddfffffffffffdddcffffffffffffffffd32e23dfffffffdd2ccdccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        dfdddddddddd222555233edffffffffffffffffdcfffffffffffffffffdd3e23ddfffffffd33dccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        fffd33333333333322223edffffffffffffffffdcfffffffffffffffffffd35e23dfffffffdd2ccdccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        cfd33333333333333333eddddddffffffffffddcfffffffffffffffffffffd35233dffffffffd32dccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        cf4444433333333333333333333ddddfffffffdcffffffffffffffffffffffd32233dffffffffdd5ccdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc111111111111ffddddddddddddd
        cf44444444444444444444443333333dddfffddcffffffffffffffffffffffd432223dfffffffffd5cdccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        cf4e111e444444444443333444444433333dffdcfddffffffffffffffffffffd435223ddffffffffd5dccdccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        ccee11114444443992223333333334443333dccce11ecffffffffffffffffffd432ee233ddffffffffd5edccdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        c1e1e514444333399eee3333333333344333e11111111eecccddddddfffffffd43322ee233ddfffffffddeecdccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        ce5555444333333222223333333333333443333cc1ecccc333333333ddddddd4443322252233ddfddddde111eccdccdccdccdccdccdccdccdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        c55444433333333333333333333333333334333322222c33333333333333444444443333252222d1111111111111ccdccdccdccdccdccdccdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        c5433333333333334444433322333333333333222222222222222333333333333334444333322e11eeeeeeee1111111111eeeccdccdccdccdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        c543e77323223334444433222223333333333322222222222222222222222222223333333332eeee55555555eeee11111111111eeeeecdccdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        c443e7e3232334444433333333222333333333222222222222222222222222222222222223255255523325555555eee111111111111eeeecdccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        c4433333333344444ffffffff22252333333332222222222222222222222222226ffff22325223333333333325555555eeee1111111111eeeccdccdcccdcccccdffcc1111111111111ffdddddddddddd
        c443beb3993444433ffffffff222522333333332222222222222222222222226666fdfd23233344444442555522555555555555eee11111111eeccdcccdcccccdffcc1111111111111ffdddddddddddd
        d444ebe39334443ffccdcccccff2222333333333333222222222222222222222f6fdf2222333444432222222555225522222235555555eeee111ecdcccdcccccdffcc1111111111111ffdddddddddddd
        d4443333333443fdccffffffcccf2324433333333333333333333333332222222222222223444433333333322225522222333feffddd5555eee11edcccdcccccdffcc1111111111111ffdddddddddddd
        d444433333443fccdf333333fdc5f3244444444333333333333333333333333222222222234443333fffffffff2225523ffffeeeee1efddd55ee11dcccdcccccdffcc1111111111111ffdddddddddddd
        d44443333344fc653fddddddf3f6f32444444444444444444444333333333333313113123344333ffccdccccccff2253344fffffe1e1eee1dddee1ecccdcccccdffcc1111111111111ffdddddddddddd
        d4ccce3ee3445cf3fddcdccddf3ff324444444444444444444444444444333333ee21212344433fdccfffffffcccf22533444fffff1e1e1e111deeecccdcccccdffcc1111111111111ffdddddddddddd
        d4c4c4e333445653fddfddfddf35f334433333333333333333444444444444444321213234433fccdf3333333fdc6f2553333444ffffeee1edd35ee5ccdcccccdffcc1111111111111ffdddddddddddd
        d4c4ccc4c444fcf3fcdcccdcdf35f3343333333333333333333333333344444444432222344335cdf3fffffff3f6ccf35322334444f4ffddd33255e5ccdcccccdffcc1111111111111ffdddddddddddd
        d4c4c4ccc444fcf3fcdc1cdcdf35f33422221122233333333333333333333333444432223443fc653fdddddddf3f6cf323222333444433333225555cdcdcccccdffcc1111111111111ffdddddddddddd
        d44444444444fdf3fcddccdcdf35f342222122122122222222222222333333333334322234435cf3fddcdcccddf3fc5f2322222333433333cccc3dcccddcccccdffcc1111111111111ffdddddddddddd
        dfffff44444dfdf3fdcfdcfddf3ff34333e33e333122717171722222222222233334322334435653fddfdddfddf356cf332222222333ceeeeeee3cdccddcccccdffcc1111111111111ffdddddddddddd
        ddddddfff44dfdf3fdcddddcdf3df43333e33e33e339e7717172222222222222223432233443fcf3fcdccfcdcdf356cf32911919933cdccccc333dcdcddcccccdffcc11111111111111ffddddddddddd
        dddddddddf4dfddf3fdccdcdf3f6f433333ee333e339e9e9e9722222222222222223223334435653fcddf1fdcdf3fc5f321e9e91133ceeeee3223ddccddcccccdffcc11111111111111ffddddddddddd
        ddddddddddfddfdddf333333fddffdddd3333333333333333333333322222222222222334443fdf3fcddcfcdcdf3565f3322222223cdcccc32233dcdceecccccdffdd11111111111111ffddddddddddd
        ddddddddddddddfdddffffffddffffffffffffddddd333333333333333333333322223334443fdf3fdcfddcfddf3fc5f43f6fff623ceee115223ddddcfeddddddff1111111111111111ffddddddddddd
        dddddddddddddddffdddddddffffffddfffffffffffffdddddd3333333333333333333344443fdf3fdcdddddcdf3c6ff436f66f633cd1111e533ddcdfeeeeeeeeee1111111111111111ffddddddddddd
        dddddddddddddddddfffffffffffddddddddddddddfffffffffffdddd3333333333333334443fddf3fdcccdcdf3f6d5f43f6ff233255e1111ee5dddfeeeeeeeeeeee111111111111111ffddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddffffffddd3333333333333344ffddf3fffffff3f6c5ff4322333332255eee11ffffffeeeeeeeeeeeee11111111111111ffddddddddddd
        66666ddddddddddddddddddddddddddddddddddddddddddddddddddddffffdddddd333333344ffdddf3333333fdd5fff4333333222225fffffffeeeeeeeeeeeeeeeeeee111111111111ffddddddddddd
        ddddd6666666666dddddddddddddddddddddddddddddddddddddddddddddfffffffdddddddd4fffdddfffffffdddffff4ffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeee11111111111ffddddddddddd
        ddddddddddddddd6666666666dddddddddddddddddddddddddddddddddddddddddfffffffffffffffdddddddddfffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111111111ffddddddddddd
        ddddddddddddddddddddddddd6666666666ddddddddddddddddddddddddddddddddddddddddfffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111ffddddddddddd
        ddddddddddddddddddddddddddddddddddd6666666666dddddddddddddddddddddddddddddddcccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111ffddddddddddd
        6dddddddddddddddddddddddddddddddddddddddddddd6666666666ddddddddddddddddddddcccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111111ffddddddddddd
        6666666dddddddddddddddddddddddddddddddddddddddddddddddd6666666666ddddddddccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111ffddddddddddd
        d6666666666666666dddddddddddddddddddddddddddddddddddddddddddddddd6666666666cceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111ffddddddddddd
        ddddddd66666666666666666666ddddddddddddddddddddddddddddddddddddddddddddcccc666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111ffddddddddddd
        ddddddddddddddddd66666666666666666666ddddddddddddddddddddddddddddddddddddccceeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11ffddddddddddd
        ddddddddddddddddddddddddddd666666666666666666666dddddddddddddddddddddddddddddddddddeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1ffddddddddddd
        ddddddddddddddddddddddddddddddddddddd666666666666666666666dddddddddddddddddddddddddddddddddddeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddd66666666666666666666dddddddddddddddddddddddddddddddddddeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeffddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666666666666666666dddddddddddddddddddddddddddddddddddeeeeeeeeeee6666666666eeeeeeeeeeeeefffdddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666666666666666666ddddddddddddddddddddddddddddddddddeeeeeeeeeee6666666666eeeeff6ddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666666666666666666ddddddddddddddddddddddddddddddddddeeeeeeeeeee6666666666dddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666666666666666666ddddddddddddddddddddddddddddddddddddddddddddd666666
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666666666666666666ddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666666666ddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66666666ddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666ddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666dddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666dddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666ddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666ddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666ddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666ddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666dddddddddddddddddddddddddddddddddddd
        `)
    animation.stopAnimation(animation.AnimationTypes.All, playButton)
    animation.runImageAnimation(
    playButton,
    [img`
        ......................................
        .....1111111111111111111111111111.....
        ...11ffffffffffffffffffffffffffff11...
        ..1ff8888888888888888888888888888ff1..
        ..1f888fffffffffff8ffffffffffff888f1..
        .1f8888f111ffff1ffff111ff11111f8888f1.
        .1f8888f1ff1ff1f1ff1fff1f1fffff8888f1.
        .1f8888f1ff1ff1f1f1ff8fff1fff888888f1.
        .1f8888f111fff1f1f1f8888f111f888888f1.
        .1f8888f1f1fff111f1f8888f1fff888888f1.
        .1f8888f1ff1ff1f1f1ff8fff1f88888888f1.
        .1f8888f1ff1ff1f1ff1fff1f1fffff8888f1.
        .1f8888f1fff1f1f1fff111ff11111f8888f1.
        ..1f888fff8fffffff8ffffffffffff888f1..
        ..1ff8888888888888888888888888888ff1..
        ...11ffffffffffffffffffffffffffff11...
        .....1111111111111111111111111111.....
        ......................................
        `,img`
        .....1111111111111111111111111111.....
        ...11111111111111111111111111111111...
        ..111ffffffffffffffffffffffffffff111..
        .11ff8888888888888888888888888888ff11.
        .11f888fffffffffff8ffffffffffff888f11.
        11f8888f111ffff1ffff111ff11111f8888f11
        11f8888f1ff1ff1f1ff1fff1f1fffff8888f11
        11f8888f1ff1ff1f1f1ff8fff1fff888888f11
        11f8888f111fff1f1f1f8888f111f888888f11
        11f8888f1f1fff111f1f8888f1fff888888f11
        11f8888f1ff1ff1f1f1ff8fff1f88888888f11
        11f8888f1ff1ff1f1ff1fff1f1fffff8888f11
        11f8888f1fff1f1f1fff111ff11111f8888f11
        .11f888fff8fffffff8ffffffffffff888f11.
        .11ff8888888888888888888888888888ff11.
        ..111ffffffffffffffffffffffffffff111..
        ...11111111111111111111111111111111...
        .....1111111111111111111111111111.....
        `],
    500,
    true
    )
    practiceButton = sprites.create(img`
        ....11111111111111111111111111111111111111111111111111....
        ..11ffffffffffffffffffffffffffffffffffffffffffffffffff11..
        .1ff88888888888888888888888888888888888888888888888888ff1.
        .1f888ffffffffffffffff8ffffffffffffffff8ffffffffffff888f1.
        1f8888f111ff111ffff1ffff111ff11111f111fff111ff11111f8888f1
        1f8888f1ff1f1ff1ff1f1ff1fff1fff1ffff1fff1fff1f1fffff8888f1
        1f8888f1ff1f1ff1ff1f1f1ff8fff8f1f88f1ff1ff8fff1fff888888f1
        1f8888f111ff111fff1f1f1f888888f1f88f1ff1f8888f111f888888f1
        1f8888f1ffff1f1fff111f1f888888f1f88f1ff1f8888f1fff888888f1
        1f8888f1f88f1ff1ff1f1f1ff8fff8f1f88f1ff1ff8fff1f88888888f1
        1f8888f1f88f1ff1ff1f1ff1fff1f8f1f8ff1fff1fff1f1fffff8888f1
        1f8888f1f88f1fff1f1f1fff111ff8f1f8f111fff111ff11111f8888f1
        .1f888fff88fff8fffffff8fffff88fff8fffff8ffffffffffff888f1.
        .1ff88888888888888888888888888888888888888888888888888ff1.
        ..11ffffffffffffffffffffffffffffffffffffffffffffffffff11..
        ....11111111111111111111111111111111111111111111111111....
        `, SpriteKind.ui)
    practiceButton.setPosition(100, 100)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameState == "Racing" || gameState == "practicing") {
        mySprite.setVelocity(acceleration, 0)
        if (isGreenFlag == 1) {
        	
        }
    }
    if (gameState == "garage") {
        animation.stopAnimation(animation.AnimationTypes.All, playButton)
        playButton.setImage(img`
            ....1111111111111111111111111111....
            ..11ffffffffffffffffffffffffffff11..
            .1ff8888888888888888888888888888ff1.
            .1f888fffffffffff8ffffffffffff888f1.
            1f8888f111ffff1ffff111ff11111f8888f1
            1f8888f1ff1ff1f1ff1fff1f1fffff8888f1
            1f8888f1ff1ff1f1f1ff8fff1fff888888f1
            1f8888f111fff1f1f1f8888f111f888888f1
            1f8888f1f1fff111f1f8888f1fff888888f1
            1f8888f1ff1ff1f1f1ff8fff1f88888888f1
            1f8888f1ff1ff1f1ff1fff1f1fffff8888f1
            1f8888f1fff1f1f1fff111ff11111f8888f1
            .1f888fff8fffffff8ffffffffffff888f1.
            .1ff8888888888888888888888888888ff1.
            ..11ffffffffffffffffffffffffffff11..
            ....1111111111111111111111111111....
            `)
        animation.runImageAnimation(
        practiceButton,
        [img`
            .....11111111111111111111111111111111111111111111111111.....
            ...111111111111111111111111111111111111111111111111111111...
            ..111ffffffffffffffffffffffffffffffffffffffffffffffffff111..
            .11ff88888888888888888888888888888888888888888888888888ff11.
            .11f888ffffffffffffffff8ffffffffffffffff8ffffffffffff888f11.
            11f8888f111ff111ffff1ffff111ff11111f111fff111ff11111f8888f11
            11f8888f1ff1f1ff1ff1f1ff1fff1fff1ffff1fff1fff1f1fffff8888f11
            11f8888f1ff1f1ff1ff1f1f1ff8fff8f1f88f1ff1ff8fff1fff888888f11
            11f8888f111ff111fff1f1f1f888888f1f88f1ff1f8888f111f888888f11
            11f8888f1ffff1f1fff111f1f888888f1f88f1ff1f8888f1fff888888f11
            11f8888f1f88f1ff1ff1f1f1ff8fff8f1f88f1ff1ff8fff1f88888888f11
            11f8888f1f88f1ff1ff1f1ff1fff1f8f1f8ff1fff1fff1f1fffff8888f11
            11f8888f1f88f1fff1f1f1fff111ff8f1f8f111fff111ff11111f8888f11
            .11f888fff88fff8fffffff8fffff88fff8fffff8ffffffffffff888f11.
            .11ff88888888888888888888888888888888888888888888888888ff11.
            ..111ffffffffffffffffffffffffffffffffffffffffffffffffff111..
            ...111111111111111111111111111111111111111111111111111111...
            .....11111111111111111111111111111111111111111111111111.....
            `,img`
            ............................................................
            .....11111111111111111111111111111111111111111111111111.....
            ...11ffffffffffffffffffffffffffffffffffffffffffffffffff11...
            ..1ff88888888888888888888888888888888888888888888888888ff1..
            ..1f888ffffffffffffffff8ffffffffffffffff8ffffffffffff888f1..
            .1f8888f111ff111ffff1ffff111ff11111f111fff111ff11111f8888f1.
            .1f8888f1ff1f1ff1ff1f1ff1fff1fff1ffff1fff1fff1f1fffff8888f1.
            .1f8888f1ff1f1ff1ff1f1f1ff8fff8f1f88f1ff1ff8fff1fff888888f1.
            .1f8888f111ff111fff1f1f1f888888f1f88f1ff1f8888f111f888888f1.
            .1f8888f1ffff1f1fff111f1f888888f1f88f1ff1f8888f1fff888888f1.
            .1f8888f1f88f1ff1ff1f1f1ff8fff8f1f88f1ff1ff8fff1f88888888f1.
            .1f8888f1f88f1ff1ff1f1ff1fff1f8f1f8ff1fff1fff1f1fffff8888f1.
            .1f8888f1f88f1fff1f1f1fff111ff8f1f8f111fff111ff11111f8888f1.
            ..1f888fff88fff8fffffff8fffff88fff8fffff8ffffffffffff888f1..
            ..1ff88888888888888888888888888888888888888888888888888ff1..
            ...11ffffffffffffffffffffffffffffffffffffffffffffffffff11...
            .....11111111111111111111111111111111111111111111111111.....
            ............................................................
            `],
        500,
        true
        )
        mode = "practice"
    }
})
function scaleEnemy (scaledSprite: Sprite, side: string) {
    if (side == "right") {
        scaling.scaleToPixels(scaledSprite, eMinSize + scaledSprite.y / scene.screenHeight() * (eMaxSize - eMinSize), ScaleDirection.Uniformly, ScaleAnchor.Left)
    } else {
        scaling.scaleToPixels(scaledSprite, eMinSize + scaledSprite.y / scene.screenHeight() * (eMaxSize - eMinSize), ScaleDirection.Uniformly, ScaleAnchor.Right)
    }
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (gameState == "Racing" || gameState == "practicing") {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        isMoving = false
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameState == "Racing" || gameState == "practicing") {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        brakePower = 6
    }
})
sprites.onOverlap(SpriteKind.pHitBox, SpriteKind.start, function (sprite, otherSprite) {
    timer.throttle("action", 500, function () {
        if (startRace == 0) {
            isGreenFlag = 0
            startRace += 1
        } else {
            lap += 1
            countdownTracker = 1
            textSprite.setText("lap " + lap)
        }
    })
})
function startPractice () {
    music.stopAllSounds()
    scene.setBackgroundImage(img`
        88888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888
        8888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888
        8888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888
        8888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888
        888888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888
        88888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888888
        88888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888
        88888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888
        8888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888
        8888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888
        8888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888
        888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888
        888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888
        888888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888
        88888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888888
        88888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888
        88888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888
        8888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888
        8888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888
        8888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888
        888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888
        888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888
        888888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888
        88888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888888
        88888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888
        88888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888
        8888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888
        8888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888
        8888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888
        888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888
        888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888
        888888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888888
        88888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888
        88888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888
        8888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888
        8888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888
        8888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888
        888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888
        888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888
        888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888
        88888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888888
        88888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888
        88888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888
        8888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888
        8888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888
        8888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888
        888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888
        888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888
        888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888
        88888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888888
        88888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888
        88888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888
        8888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888
        8888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888
        8888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888
        888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888
        888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888
        888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888888
        88888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888
        88888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888
        88888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888
        8888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888
        8888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888
        8888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888
        888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888
        888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888
        888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888888
        88888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888
        88888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888
        88888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888
        8888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888
        8888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888888
        8888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888
        888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888
        888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888888
        888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888
        88888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888
        88888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888
        88888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888
        8888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888
        8888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888888
        8888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888
        888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888
        888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888
        88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888
        88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888
        88888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888
        8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888
        8888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888888
        8888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888
        888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888
        888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888
        888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888
        88888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888
        88888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888
        88888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888
        8888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888
        8888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888
        8888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888
        888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888
        888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888
        888888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888
        88888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888
        88888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888
        88888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888
        8888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888
        8888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888
        888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888
        888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888
        888ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88
        88dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88
        88dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88
        88ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
        8dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
        8dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8
        8ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    gameState = "practicing"
    startRace = 0
    brakePower = 3
    isGreenFlag = 1
    for (let index2 = 0; index2 <= 4; index2++) {
        line = sprites.create(img`
            . . . . . . . e 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 e . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.road)
        startFinishLine = sprites.create(img`
            ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11
            ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11
            11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff
            11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff11ff
            `, SpriteKind.start)
        line.setPosition(80, 30 * index2)
        startFinishLine.setPosition(80, 0)
    }
    mySprite = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..........2222222222..........
        ........22111222211722........
        ..25...327199799777a123...52..
        .3ff3.3299a777aa97aa7a23.3ff3.
        ..44.44297179999799999244.44..
        ..32223299333799933379232223..
        .3223234444444444444444323223.
        .3223442433333333333334443223.
        .323d665ffffcffffcffff566d323.
        .33d5565ffdddbbbddddff5655d33.
        ..33222222223666632222222233..
        ..ff33233ff33655633ff33233ff..
        ..fff333fcef222222fcef333fff..
        ..fff333fdcf3f23f3fdcf333fff..
        ..ffff......3.33.3......ffff..
        ...ff....................ff...
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Player)
    mySprite.setPosition(80, 84)
    mySprite.setStayInScreen(true)
    sprites.destroyAllSpritesOfKind(SpriteKind.ui)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y - 10 < otherSprite.y) {
        sprite.z = 0
    } else {
        sprite.z = 1
    }
})
let _321Counter: Sprite = null
let countdownTracker = 0
let lap = 0
let textSprite: TextSprite = null
let hitBox: Sprite = null
let startFinishLine: Sprite = null
let line: Sprite = null
let paradeLapSpeedMax = 0
let paradeLapSpeed = 0
let startRace = 0
let eMinSize = 0
let eMaxSize = 0
let practiceButton: Sprite = null
let brakePower = 0
let isMoving = false
let mySprite: Sprite = null
let amount = 0
let eAcceleration = 0
let acceleration = 0
let mode = ""
let gameState = ""
let playButton: Sprite = null
let isGreenFlag = 0
let playerPos = 0
playerPos = 10
let enemiesArray: any[]=[]
let carsAList: number[] = []
let carRightX = 0
let carLeftX = 0
let getIndex = null
isGreenFlag = 0
let getArray = 0
class eCar {
    speed: number;
    position: number;
    lane: number;
    sprite: Sprite;

    constructor(speed: number, position: number, ypos:number, lane: number) {
        this.speed = enemyBaseSpeed - (speed*1.5);
        this.position = position;
        this.lane = lane;

        let randSpriteNum = randint(0, 1);
        switch (randSpriteNum) {
            case 0:
                this.sprite = sprites.create(assets.image`myImage`, SpriteKind.Enemy);
                break;
            case 1:
                this.sprite = sprites.create(assets.image`myImage0`, SpriteKind.Enemy);
                break;
            case 2:
                this.sprite = sprites.create(assets.image`myImage1`, SpriteKind.Enemy);
                break;
            case 3:
                this.sprite = sprites.create(assets.image`myImage3`, SpriteKind.Enemy);
                break;
            default:
                this.sprite = sprites.create(assets.image`myImage4`, SpriteKind.Enemy);
                break;
        }
        sprites.setDataNumber(this.sprite, "maxSpeed", this.speed)
        this.sprite.y = (ypos * 12 - 13);
        this.scale();
        enemiesArray.push(this)
        }   
    scale() {
        if (this.lane == 2) {
            this.sprite.x = carRightX;
            scaleEnemy(this.sprite, "right")
        } else {
            this.sprite.x = carLeftX;
            scaleEnemy(this.sprite, "left")
        }
    }
}
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff5577777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff5555a777aaa7777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff555faaaa771111111111aa777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff55faaaaa111111111111111aaa7777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff5faaaa1111111111111111111aa7a777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff5faaaa111111111111111111111aaaaaaaa77777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff55aaaa11111111111111111111111aaaaaaaaaaaaaaaaa77777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff55aaaa1111111111111111111111111aaaaeaaaaaaaeeeeaaaaa7777777ee77777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff5aacccc111111111111111111111111aaaaaaeeeeeeeeeeeaaaaaaaaaeeeee77777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff5aacccc1111111111111111111111111aaaaaaaaaaaaeeeeeeeeeeaaaeeeeeeaaaaa777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff55ccccccc111111111111111111111111aaaaaaaaaaaaaaaaaaaaaeeeeeeccceaaaaaeeeee777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff5acccccccccc1111cc11111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeaa777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff55aaaaa11111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeaeeeeeeeeeeeeeaaa7777777777777777777eeeeeeeefffffffffffffffffffffffffffffffffffffffff
    ffffffff5aaaaaa11111111111111111111111111111acaaaaaaaaaaaaaaaaaaeeeeeecceeeeeeeeeeeecccccceeeaaaaaaaaaaa7777ccceeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff
    fffffff55aaaaaa11111111111111111111111111111ccceaaaaaaaaaaaeeeeeeccceecccccceeeeeeccccccceeeeeaaaaaaaaaaaaeeccccccccccceccccccceeeeeeeffffffffffffffffffffffffff
    fffffff5faaaaaa1111111111111111111111111111ecccccaaaaaaaaaaaaaaeeeeeeeecccccccccccccccccceeeeeaaaaaaaaeeeeeeeeeeeeeeeeccceccccccccccccee77777fffffffffffffffffff
    fffffff5aaaaaaa11111111111111111111111111eccccccceeaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeccccceeeeeeeaaaaaaaaaaaeeeeeeeeeeeeeeeeecccccccccccceeeee7777777777fffffffffff
    ffffff55aaaaaaa1111111111111111111111eeeeeeeeeeceeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeea7777777777ccccccceeee77777777777777ffff
    ffffff5faaaaaaa11111111111111111111111111111aaaccceeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7777777777777ee77777777777777777
    ffffff5aaaaaaaa11111111111111111111111111111aaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7777777777777777777777777
    ffffff5aaaaaaaa11111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaeeeecaaaaaaaaaaaaeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7777777553333
    ffffff5aacccaaa1111111111111111111111111eeeeeaaaaaaaaaaaaaaaaaeeeeecccccaaaaaaaaaaaeeeeeeeeeecaaaaaaaaaaaaaaaeecccceaaa888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa75533fff
    ffffff5acccccccc11111111111111111111111eeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaecccccaaaaaaaaaaaaaaaaaaaaaaaaa88888aaaaaaaaaaaaaaaaaaee88888aaa55333fff
    ffff5f5accccccccc1111111111111111111111eeeeeeccceeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaceaaaaaaaaba88aaaaaaaaaaaaaf88888aaaaaaaaaaeeeeeee888888aa353333fff
    ffff555aaacccccccccc1111111111111111eceecccccccceeeaaaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88aaaabba88aaaaaaaaaaaaaf88888aaaaaaaaaaaeeeece8e8f88a5553533fff
    ffff55aaaaaaaaaaa11111111111111111111cccccccccccccccaaaaaaaaaaaaaaaaaaaabbcccccaaaaaaaaaaaaaaa88888aaabbb88aa333faaaaaaffafaaaaaaaa888aaaaaaaac888ef555533333fff
    ffff55aaaaaaaaaaaa11111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaaacbbcccccccaaaaaaaaaaaaaa88888bbbbbbb8a5333fffffffafafaaaaaaaa888aaaaaaaaaaaaaf555553333fff
    ffff55aaaaaaaaaaaaa111111111111111111111aaaaaaaaaaaaaccccccccccaccccccbbbccccccccccccaaaacccccc8888bbbbbb88a5333ffffffffffffaaaaaaa888a3ff333333333555533333ffff
    ffff55aaaaaaaaaaaaaa1111111111111111111aaaaaaaaaaaaccccbbcccccccccccbbbbbccccccccccccccbbbbbbbbbbfbbbbbbbbba5333fffffffffffffff3aaa8f8fffffffffffff333333fffffff
    ffff55aaaaaaaaaaaaaaaa111111111111111aaaaaaaaaaaacccccccbbccccccccccbbbbbcccccccccccccbb333f333ffffffff333f33333fffffffffffffffffffff3ffff3fffffffffffffffffffff
    ffff55aaaaaaaaaccccaaaaa11111111111aaaaaaaaaaaacccccccccbbbbcccccccbbbbbbccccccccccccc3333ff533333ffffffffffffffffffffffffffffffffff353ff3333fffffffffffffffffff
    fff555aaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacccccccbcccbbbbbccccccccbbccccbccccccbb3555fff5335333fffffffffffffffffffffffffffffffff553ff5333fffffffffffffffffff
    fff555cccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccbbccccbbccccccccccccccccbbbbbbbb555d3ff35335fffffffffffffffffffffffffffffffffff553ff553fffffffffffffffffffff
    fff555ccccccccccccccccccccccccccccccccccccccccccccccbbcccccbccccccccccbbbbccbbbbbb555dd33ff3533333fffffffffffffffffffffffffffffffff533ff5333333fffffffffffffffff
    fff555ccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccbbbbcccccbbbbbb533d33fff553333333ffffffffffffffffffffffffffffff5533ff5333ffffffffffffffffffff
    fff555bbbbbccccccccbbcccccccccccccccccccccccccccccccbbbccccccccc555555555dddddddb353fd3ffff53333fffffffffffffffffffffffffffffffff553f3ff53ffffffffffffffffffffff
    fff555ccccbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccc333333333333ddddddd333ff3ffff533ffffffffffffffffffffffffffffffffff5533f3f553ffffffffffffffffffffff
    fff555cccccccccccccccccccccccc11111111111cccccccccccccccc555555533dddddddddddddddd33fffffff5333333fffffffffffffffffffffffffffff5533f33f5333333ffffffffffffffffff
    fff5555ccccccccccccccccc11111111111bbbcccccccccccccccbbb553333333dddddddddddddddddfffffffff53333ffffff77777ffffffffffffffffffff5333f33f53333ffffffffffffffffffff
    fff5535cccbbbbbccc11111ccccc11111bbb111ccccbbbbbbbbbbbb5533333333ddddddddddddddddd333333ff353ffffffff77777777777fffffffffffffff55fff3ff533ffffffffffffffff777777
    fff5553dddbbbccbbccc111111111111111111bbbbbbbbbbbbbbbb5533333333dddddddddddddddd3333d333ff35333333f777f3333333777fffffffffffffff5fffff533ff3ffffffffffff77777773
    fff5555ddddbbccccccccbbbbbb11111111bbbbbbbbbbbcbbbbbb5533333333dddddddddddddddd3533dd533ff35333ffffff3333ffffff999fffff4ee4fff3f5f3fff53333ffffffffffff777773335
    fff5555dddddbbbbbbbbbbbbbbbbbb1111111111111111cbbbbb553333dddddddddddddddddddd3553dd353dff35333ff333fff33ffff99999944e44dd4e4d33533fff53333fffffffff777777755555
    fff5555ddddd5555553bbbbb11111111111111111bbbbccbbb3553333dddddddddddddddddddd555ddd3353df355555533fffff33f4477799977dddddddddd33533fff5333fffffff777777777f55333
    fff5555ddddd53355555cccccc1111111111111111ccccbbbb353333dddddddddddddddddddd553dddd353ddf55333333333f44ee44e977779fdddedd7777333f53fff5333fff77f77777ff73fff53ff
    fff5555dddddd33335555ccccc11111111111111ccccbbbbb353333dddddddddddddddddddd353dddd553ddf553333333334e444e44dddddfd2fee7777773333f53fff533ff77777fff3fff3ffff55ff
    fff55555ddddd333335335ccc1111111111111ccccccbbb35553333ddddddddddddddddddd5533ddd3533ff5111111f44ee4ee4dddddddde2223277777733333f53fff553f777777fff3353333ff33ff
    ffff5555ddddd333333535ccc11111111cccccccccccbbb55333ddddddddddddddddddd335533ddd353fddf1177711144ee4eeddddddd2eeddde777777733333f53fff55f777777fff3533333ff3f3ff
    ffff5555ddddd333333533cccbb111ccccccccccccccbb5533ddddddddddddddddddd333553ddddd33fdd117777771ee4e4ddddddddd222d32277777773333333fffff557777773fff555533ffffffff
    ffff55555dddddd33333533cbbbbccccbbbbccccbbccbb5333dddddddddddddddd33333553dddfff33111177777771ee44dddddddddeeedd227777777773333337ffff5555555333ff5333333333ffff
    fffff5555ddddddddddd5555555bcccbbbbbbccbbbccc55333ddddddddddddddd33333353dddffff32111111777eeeeefddddddddd22eddde77777777777777777777f5555553333ff5333333333ffff
    fffff5555ddd55555dddddddddd5555bbbbbbcbbbbc335333dddddddddddd8dddd3333333dddffff312211cc12eefffefddddddde22ddddce7777777777777777777777773355555f35555333fffffff
    ffffff5555dd555555dd8ddddddddd555bbbbb5555553333ddddddddd88dd88dddd3333ddddffffeee111111123efffefdddddeeedddddd3277777777777777777777777777773337fffffffffffffff
    ffffff5555ddddddd5558ddddddddddddddd5553d3333333d777777778877887ddddddddddf3eeee4411111111eefffddddd2eedddddddd3277777777777777777777777777777777777ffffffffff77
    ffffff5555dddddddd55885555555555555dbb33dddddd777777777777777887ddddddddfeee33444c4dddddddddddddddd2222ddddddddde77777777777777777777777777777777777777777777777
    ffffff55557777777dd88855555ddd55555555553dddddddddd7777777777777dddddddeee3444c444dddddddddddddddd2222dddddddddde27777777777777777777777777777777777777777777777
    fffffff5555777777778887ddd5555555555555533dddddddddddd7777777777ddeee4eee4444444ddddddddddddddddd2222ddddddddddd327777777777777777777777777777777777777777777777
    fffffff5555777777777887777ddddd553555555555ddddddddddddddddddd7e4e3334444c4444ddddddddddddddddddee22dddddddddddd32e777777777777777777777777777777777777777777777
    fffffff555557777777777777777777dddd333333353ddddddddddddddddeeeee444444ccc444ddddddddddddddddddeeeeddddddddddddeccee77777777777777777777777777777777777777777777
    fffffff5555577777333333337777777dddd333333353dddddddddddddeeeeeee444444cc444ddddddddddddddddddeeeedddddddddddddeeece22777777777777777777777777777777777777777777
    ffffffff5555557733333333377777777ddd33333333555ddddddddeeeeeee44444444444ddddddddddddddddddddeeeeddddddddddddddddec332277777777777777777777777777777777777777777
    ffffffff555555773dddddddd777777887ddd3333333335dd7ee444444ee44ccc444444dddddddddddddddddddddeeeeddddddddddddddddddd2332e7777777777777777777777777777777777777777
    fffffffff55555573dddddddd3777788887dd3333333333eee3333334444cccccc4444ddddddddddddddddddddd222eddddddddddddddddddee2333ee227777777777777777777777777777777777777
    fffffffff55555573dddddddd3777788887dd3333333eee3333333344ccccccccc44dddddddddddddddddddddd2222edddddddddddddddddddeddeccc322227777777777777777777777777777777777
    ffffffffff5555553dddddddd3777788877733333eee333333334444ccccccccc4ddddddddddddddddddddddd22222ddddddddddddddddddddeedeecc3333ceee2777777777777777777777777777777
    ffffffffff55555553dddddddd77777777773ee4e333333333444444ccccccc44dddddddddddddddddddddddd2222dddddddddddddddddddddd3333333333cccc2222777777777777777777777777777
    ffffffffff5555555553dddddd37777777ee3ee444433334444444444cccc44ddddddddddddddddddddddddde222dddddddddddddddddddd333333333333333ccc333ee7777777777777777777777777
    ffffffffffff555555555dddd337777eeeeeeeeeee4444444444444444c44ddddddddddddddddddddddddddeeeeedddddddddddddddd2222222222222222223c3c333ceee77777777777777777777777
    fffffffffffff555555555533335eee5eeeeeeeeee44444444444444444ddddddddddddddddddddddddddddeeeeddddddddddddddddd22222222222222222222222c3cccceccc7777777777777777777
    ffffffffffffffff555555555ee44555eeeeeee444cc44444444444444ddddddddddddddddddddddddddddeeeedddddddddddddddd333eeeee22222222222222222222cccccce3222777777777777777
    ffffffffffffffffff555eeee333444444eee44ccccc444444444444ddddddddddddddddddddddddddddd2222edddddddee555ddddeeeeeeee22211112222221117222dddddddd332222277777777777
    ffffffffffffffffffeee3333333333334444ccccccc4444444444dddddddddddddddddddddddddddddd22222ddddddddee53333eeeeeeeeee222111122222211172222ddddddd33333322ee77777777
    fffffffffffffffeee3333333333333344cccccccccc444444444dddddddddddddddddddddddddddddd222222ddddddddeee3333e225eeeee32771999779997777a22222ddddccc3333333ceeeeee777
    ffffffffffffeee3333333333333344444ccccccccccc444444ddddddddddddddddddddddddddddddd222222ddddddddd5eee3333fff33e332999a77777aaa97aaa722223dccccc3333333cccccceeee
    fffffffffeee4433333333333334444444cccccccccc44444ddddddddddddddddddddddddddddddddd22222ddddddddddf33f3333fff33e332999a77777aaa97aaa772233dccccc3333333cccccccccc
    fffffeeeeeeee4433333333d4444444444cccccccccccc4dddddddddddddddddddddddddddddddddd222222ddddddddddffdd3333444334442977177999999799999992444eeccc3333333cccccccccc
    ffeeeeeeeeeeee4443333d444444444444cccccccccc44dddddddddddddddddddddddddddddddddd222222dddddddddddfffd3333444334442977177999999799999992444ddccc2222233cccccccccc
    eeeeeeeeeeeeeeee4434444444444444444ccccccc44dddddddddddddddddddddddddddddddddddd222222dddddddddddfdfd333333222233299933337799993333777233222233222222eeeeecccccc
    eeeeeeeeeeeeeeeee444444444444444444cccccc4ddddddddddddddddddddddddddddddddddddd222222ddddddddddddffff33332223323344444444444444444444443323322232222eeeeeeeeeccc
    eeeeeeeeeeeeee44444444444444444444444cc44dddddddddddddddddddddddddddddddddddddd222222ddddddddddddddf33333222332334444444444444444444444332332223ddddeeeeeeeeeeee
    eeeeeeeeeee444cc44444444444444444444444dddddddddddddddddddddddddddddddddddddddeeee22dddddddddddddddf33333222334442433333333333333333334444332223eeeedddddeeeeeee
    eeeeeeeee44ccccc444444444444444444444dddddddddddddddddddddddddddddddddddddddddeeeeeeddddddddddddddddf3333222334442433333333333333333334444332223dddeeeeeeddeeeee
    4eeeee444ccccccc44444444444444444444dddddddddddddddddddddddddddddddddddddddddeeeeeedddddddddddddddddfc333223dd6665ffffffcffffffcffffff5666dd3223ddddddddeeeeeeee
    44ee44ccccccccc4444444444444444444dddddddddddddddddddddddddddddddddddddddddddeeeeeedddddddddddddddddfc333223dd6665ffffffcffffffcffffff5666dd3223ddddddddddddeedd
    3444ccccccccccc44444444444444444dddddddddddddddddddddddddddddddddddddddddddddeeeeeddddddddddddddddddfcc3333d555665fffddddbbbbbdddddfff566555d333ddddddddddddddee
    34ccccccccccccc444444444444444ddddddddddddddddddddddddddddddddddddddddddddddeeeeeeddddddddddddddddddffc3c33322222222222236666663222222222222333ddddddddddddddddd
    444cccccccccccc44444444444444dddddddddddddddddddddddddddddddddddddddddddddddeeeeeedddddddddddddddddddfc3c33322222222222236666663222222222222333ddddddddddddddddd
    444cccccccccccc444444444444ddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeedddddddddddddddddddff3c33322222222222236666663222222222222333ddddddddddddddddd
    444cccccccccccc4444444444ddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeddddddddddddddddddddfffcfff3332233fff333665556333ffff322333fffddddddddddddddddd
    444cccccccccccc444444444dddddddddddddddddddddddddddddddddddddddddddddddddd22eeeeddddddddddddddddddddddffcfffff3333fcceff22222222ffceee3333fffffddddddddddddddddd
    444cccccccccccc4444444dddddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddddddddddddffffffff3333fddcff3ff233f3ffdccc3333fffffddddddddddddddddd
    444cccccccccccc44444ddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddddddddddddfcfffff3333fddcff3ff233f3ffdccc3333fffffddddddddddddddddd
    444ccccccccccccc44ddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddddddddddddfcfffff3333fddcff3ff233f3ffdccc3333fffffddddddddddddddddd
    444cccccccccccc44dddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222ddddddddddddddddddddddddfcfffffffffffffff3ff333f3fffffffffffffffffffddddddddddddd
    444cccccccccc44ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222ddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffdddddddddd
    444ccccccccc4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffdddddddd
    444ccccccc44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222ddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffddddd
    4444cccc44ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffdd
    44444c44ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffff
    444444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222222ddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
    44444ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
    444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffff
    44ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeedddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffff
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeedddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffff
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeedddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffff
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffff
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffff
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddffffffffddfffffffffffffffffffffffff
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddfffffffdddffffffffffffffffffffffff
    `)
playButton = sprites.create(img`
    ....11111111111111111111111111111111....
    ..11ffffffffffffffffffffffffffffffff11..
    .1ff88888888888888888888888888888888ff1.
    .1f8888fffffffffffffffffffffffffff888f1.
    1f8888ff1111f11111ff1ff111ff11111f8888f1
    1f8888f1fffffff1fff1f1f1ff1fff1fff8888f1
    1f8888f1ffff88f1f8f1f1f1ff1f8f1f888888f1
    1f8888ff111ff8f1f8f1f1f111ff8f1f888888f1
    1f88888ffff1f8f1f8f111f1f1ff8f1f888888f1
    1f88888888f1f8f1f8f1f1f1ff1f8f1f888888f1
    1f8888fffff1f8f1f8f1f1f1ff1fff1f888888f1
    1f8888f1111ff8f1f8f1f1f1fff1ff1f888888f1
    .1f888ffffff88fff8fffffff8ffffff88888f1.
    .1ff88888888888888888888888888888888ff1.
    ..11ffffffffffffffffffffffffffffffff11..
    ....11111111111111111111111111111111....
    `, SpriteKind.ui)
let gameName = sprites.create(img`
    ..................................................................5555....................
    ..................................................55............555555.........5555.......
    ............................55.........5.......55555...........5555555555.....5555........
    ................55.........55.........55......555555...........5555555555...555555........
    ..............555.........555........555.55555555555555.......55555555555..555555555......
    ............55555......55555...55555555555555555555555........55555555555555555555555.....
    ...........5555ffff5555555555f5555555555555555ffff55555......555ffff5555555555fff5555....5
    .........55555f1111f55555555ff55555ffff5555555f111ff555..5...55f1111f5555555ff22f5555..555
    .......5555555f11111f555555f1f5555f1111f555555f11111ff55555.555f11111f5555ff2222f555555555
    ....555555555f11fff1f555555f1f555f111111f55555f11f1111ff555555f11fff1f5555f22222f5555555..
    ....555555555f11f5f1f55555f11f555f1111111f5555f1f5ff1111f55555f11f5f1f55555ff222f5555555..
    ...555555555f11f55f1f55555f11f55f111fff11f5555f1f555ff11f5555f11f55f1f55555f222f55555555..
    ..5555555555f11ffff1f5555f111f55f11f555f1f555f11f55555fff5555f11ffff1f55555f222f5555555...
    ..555.55555f11111111f555f1111f55f11f5555f5555f111f5555555555f11111111f5555f222f5555555....
    ......55555f11111fff5555f1f1f55f111f555555555f1111ff55555555f11111fff55555f222f5555555....
    .....55555f11111f555555f1ff1f55f11f5555555555f11ff1f5555555f11111f5555555f222f555555......
    ....555555f11111f55555f11ff1f55f11f555555555f11f55ff5555555f11111f5555555f222f5555555.....
    ...555555f11fff11f5555f11f11f5f111f555555555f1f55555555555f11fff11f55555f2222f5555555.....
    ..555555f11f555f1f555f111111f5f11f555555f555f1f5555555555f11f555f1f55555f2222f555555......
    .5555555f11f555f1f55f11ff11f55f11f55555ff55f11f5555555555f11f555f1f55555f222f5555555......
    .555555f11f5555f1f55f1f55f1f55f11f5555f1f55f111f55555555f11f5555f1f55fff2222f555555.......
    .55555f11f55555f1f5f1f555f1f55f111ffff1f555f1111fffff55f11f55555f1f55f22222f555555........
    .55.55f11f55555f1f5f1f55f11f555f111111ff55f11ff11111f55f11f55555f1f55f222222f555555.......
    ...555fff555555ff5fff555fff55555ffffff5555fff55ffffff55fff5555.5ff5555fffffff555555.......
    ...5555555555555555555555555555..55555555555555555555555555....55555555555555555555.......
    ...555555555555555555555...555....55555555555555555555555....555555555555555555555........
    ........55555...55555555...5......555555555555555555555.....5555555...55555...............
    .......5555....555..............5555..5...5555555555555.....55.......5555.................
    ......5555...................555555.......55555555555................55...................
    ......55....................55.55........555555...........................................
    `, SpriteKind.ui)
playButton.setPosition(50, 100)
gameName.setPosition(107, 23)
music.play(music.createSong(hex`009b000408100500001c00010a006400f4016400000400000000000000000000000000050000049300000004000224290c00100002242918001c00022429240028000224293000340002242938003c0002252a400044000224294c00500002242958005c00022429640068000224297000740002242978007c00022227800084000224298c00900002242998009c00022429a400a800022429b000b400022429b800bc0002252ac000c400022429cc00d000022429d800dc0002242903001c0001dc00690000045e0100040000000000000000000005640001040003300000013801010538014001010640017801010578017c0101087c01800101068001b8010105b801c0010106c0010002010a05001c000f0a006400f4010a00000400000000000000000000000000000000026a0200000400010c04000800010c0c001000010c10001400010c14001800010c1c002000010c20002400010c24002800010c2c003000010c30003400010c34003800010c38003c00010d3c004000010d40004400010c44004800010c4c005000010c50005400010c54005800010c5c006000010c60006400010c64006800010c6c007000010c70007400010c74007800010c78007c0001117c008000011180008400010c84008800010c8c009000010c90009400010c94009800010c9c00a000010ca000a400010ca400a800010cac00b000010cb000b400010cb400b800010cb800bc00010dbc00c000010dc000c400010cc400c800010ccc00d000010cd000d400010cd400d800010cdc00de00010cde00e0000116e000e200011de200e4000124e400f0000129f000f4000129f400f8000129f800fc000129fc000001012900010401010c04010801010c0c011001010c10011401010c14011801010c1c012001010c20012401010c24012801010c2c013001010c30013401010c34013801010c38013c01010d3c014001010d40014401010c44014801010c4c015001010c50015401010c54015801010c5c016001010c60016401010c64016801010c6c017001010c70017401010c74017801010c78017c0101117c018001011180018401010c84018801010c8c019001010c90019401010c94019801010c9c01a001010ca001a401010ca401a801010cac01b001010cb001b401010cb401b801010cb801bc01010dbc01c001010dc001c4010111c401c8010111cc01d0010111d001d4010111d401d8010111dc01e0010111e001e4010111e401e8010111ec01f0010111f001f4010111f801fc01011106001c00010a006400f401640000040000000000000000000000000000000002300000013801011d38014001011e40017801011d78017c0101207c018001011e8001b801011db801c001011ec0010002012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800bf01e400e500021114f000f100021114fc00fd00021114000101010411140207040105010107080109010204070c010d01010710011101020207140115010107180119010204071c011d01010720012101020207240125010107280129010204072c012d01010730013101020207340135010107380139010204073c013d01010740014101020207440145010107480149010204074c014d01010750015101020207540155010107580159010204075c015d01010760016101020207640165010107680169010204076c016d01010770017101020207740175010107780179010204077c017d01010780018101020207840185010107880189010204078c018d01010790019101020207940195010107980199010204079c019d010107a001a101020207a401a5010107a801a901020407ac01ad010107b001b101020207b401b5010107b801b901020407bc01bd010107c001c1010411140207c401c5010107c801c901020407cc01cd010107d001d101020207d401d5010107d801d901020407dc01dd010107e001e1010411140207e401e5010107e801e901020407ec01ed0103111407f001f101020207f401f5010107f801f9010411140407fc01fd010107`), music.PlaybackMode.LoopingInBackground)
animation.runImageAnimation(
playButton,
[img`
    ..........................................
    .....11111111111111111111111111111111.....
    ...11ffffffffffffffffffffffffffffffff11...
    ..1ff88888888888888888888888888888888ff1..
    ..1f8888fffffffffffffffffffffffffff888f1..
    .1f8888ff1111f11111ff1ff111ff11111f8888f1.
    .1f8888f1fffffff1fff1f1f1ff1fff1fff8888f1.
    .1f8888f1ffff88f1f8f1f1f1ff1f8f1f888888f1.
    .1f8888ff111ff8f1f8f1f1f111ff8f1f888888f1.
    .1f88888ffff1f8f1f8f111f1f1ff8f1f888888f1.
    .1f88888888f1f8f1f8f1f1f1ff1f8f1f888888f1.
    .1f8888fffff1f8f1f8f1f1f1ff1fff1f888888f1.
    .1f8888f1111ff8f1f8f1f1f1fff1ff1f888888f1.
    ..1f888ffffff88fff8fffffff8ffffff88888f1..
    ..1ff88888888888888888888888888888888ff1..
    ...11ffffffffffffffffffffffffffffffff11...
    .....11111111111111111111111111111111.....
    ..........................................
    `,img`
    .....11111111111111111111111111111111.....
    ...111111111111111111111111111111111111...
    ..111ffffffffffffffffffffffffffffffff111..
    .11ff88888888888888888888888888888888ff11.
    .11f8888fffffffffffffffffffffffffff888f11.
    11f8888ff1111f11111ff1ff111ff11111f8888f11
    11f8888f1fffffff1fff1f1f1ff1fff1fff8888f11
    11f8888f1ffff88f1f8f1f1f1ff1f8f1f888888f11
    11f8888ff111ff8f1f8f1f1f111ff8f1f888888f11
    11f88888ffff1f8f1f8f111f1f1ff8f1f888888f11
    11f88888888f1f8f1f8f1f1f1ff1f8f1f888888f11
    11f8888fffff1f8f1f8f1f1f1ff1fff1f888888f11
    11f8888f1111ff8f1f8f1f1f1fff1ff1f888888f11
    .11f888ffffff88fff8fffffff8ffffff88888f11.
    .11ff88888888888888888888888888888888ff11.
    ..111ffffffffffffffffffffffffffffffff111..
    ...111111111111111111111111111111111111...
    .....11111111111111111111111111111111.....
    `],
500,
true
)
gameState = "startScreen"
mode = "play"
let item = null
let enemyBaseSpeed = 97
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (isGreenFlag == 1) {
            value.setVelocity(0, 0 - sprites.readDataNumber(value, "speed") + acceleration)
        } else {
            value.setVelocity(0, 0 - paradeLapSpeed + acceleration)
        }
        if (sprites.readDataNumber(value, "speed") < sprites.readDataNumber(value, "maxSpeed")) {
            sprites.changeDataNumberBy(value, "speed", 1)
        } else {
            sprites.changeDataNumberBy(value, "speed", -1)
        }
        if (paradeLapSpeed < paradeLapSpeedMax) {
            paradeLapSpeed += 1
        } else {
            paradeLapSpeed += -1
        }
        if (value.x < 80) {
            scaleEnemy(value, "left")
        } else {
            scaleEnemy(value, "right")
        }
        if (value.y < mySprite.y) {
            if (sprites.readDataString(value, "passed") == "false") {
                info.changeScoreBy(1)
            }
            sprites.setDataString(value, "passed", "true")
        } else {
            if (sprites.readDataString(value, "passed") == "true") {
                info.changeScoreBy(-1)
            }
            sprites.setDataString(value, "passed", "false")
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (value.x > 140 || value.x < 20) {
            acceleration = Math.max(acceleration - 6, 50)
        }
    }
    for (let value22 of sprites.allOfKind(SpriteKind.road)) {
        value22.setVelocity(0, acceleration)
        if (value22.y >= 150) {
            value22.setPosition(80, 0)
        }
        scaling.scaleToPixels(value22, value22.y / 3, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
    for (let value22 of sprites.allOfKind(SpriteKind.start)) {
        value22.setVelocity(0, acceleration)
        if (value22.y >= 150) {
            value22.setPosition(80, -4000)
        }
        scaling.scaleToPixels(value22, value22.y / 1.5 + 60, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    }
})
game.onUpdateInterval(1000, function () {
    countdownTracker += -1
    if (countdownTracker == 0) {
        _321Counter = sprites.create(img`
            ..................................................
            ..................................................
            ..................................................
            ............................ff....................
            ............................fff...................
            ............................fff...................
            ............................fff...................
            ............................ffff..................
            .............................fff..................
            .............................ff77.................
            .............................877f.................
            ............................8777f.................
            ...........................8887fff................
            ..........................88877fff................
            .........................88887.ffff...............
            .................88887...88887..fff...............
            .................888877.88887...fff...............
            ...............88888877888887...ffff..............
            ...............888888778888877...fff..............
            ...............888887788888888...fff..............
            ..............8888877888888878777ffff.............
            ..............8888778888888888887.fff.............
            ..............8887888888888888887.ffff............
            ..............88877888888888888878.fff............
            ..............8888778888888887888777ff............
            ..............8888878888888888777787f77...........
            ..............888887788888888888877777f...........
            ..............8888887888888888888877ffff..........
            .............88888887778888888888877.fff..........
            .............88888888777888888888887.fff..........
            .............88888888877788888888887.ffff.........
            ............888888888877778888888887..fff.........
            ..........88888888888887777888888878..ffff........
            .....888888888888887888777777888887....fff........
            ...888888888888888877887777..888778....fff........
            ...8888888888888888887777..............ffff.......
            ...8888888888888888888877...............fff.......
            ...8888888888887778788887...............fff.......
            ..788888888877778877888877..............ffff......
            ..7777888777788888888888877..............fff......
            .....778877..888888888888877.............ffff.....
            ......777.....88888888888887..............fff.....
            ..............88888888888887..............fff.....
            ...............8888887888887..............ffff....
            ...............8888787788888...............fff....
            ................887788788888...............ffff...
            .................77...88888.................fff...
            ............................................fff...
            ............................................ffff..
            .............................................ffff.
            `, SpriteKind.countdown)
        isGreenFlag = 1
    }
    if (countdownTracker == -1) {
        sprites.destroy(_321Counter)
    }
})
game.onUpdateInterval(100, function () {
    if (isMoving == true) {
        if (isGreenFlag == 1) {
            acceleration = Math.min(acceleration + 5, 98)
        } else {
            if (info.score() < 10) {
                acceleration = Math.min(acceleration + 5, paradeLapSpeed - 5)
            } else {
                acceleration = Math.min(acceleration + 5, 80)
            }
        }
    } else {
        acceleration = Math.max(acceleration - brakePower, 0)
    }
})
