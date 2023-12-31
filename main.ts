input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Schwierigkeit < 5) {
        Schwierigkeit += 1
        led.toggle(2, 5 - Schwierigkeit)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Schwierigkeit > 1) {
        Schwierigkeit += -1
        led.toggle(2, 4 - Schwierigkeit)
    }
})
let LEDy = 0
let LEDx = 0
let Schwierigkeit = 0
let Losecount = 0
Schwierigkeit = 1
let Spielstart = false
led.plot(2, 4)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
        Spielstart = true
        music.playMelody("C D E F G A B C5 ", 250)
        basic.pause(100)
    }
    if (Spielstart == true) {
        led.unplot(LEDx, LEDy)
        LEDx = Math.map(input.acceleration(Dimension.X) * Schwierigkeit, -1023, 1023, 0, 4)
        LEDy = Math.map(input.acceleration(Dimension.Y) * 0, -1023, 1023, 0, 4)
        led.toggle(LEDx, LEDy)
        if (LEDy < 0 || LEDy > 4 || LEDx > 4 || LEDx < 0) {
            Losecount += 1
            basic.setLedColor(basic.rgb(200, 25, 25))
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                # # # # #
                # . . . #
                `)
            basic.pause(1000)
            basic.clearScreen()
            if (Schwierigkeit == 5) {
                if (Losecount == 10) {
                    basic.clearScreen()
                    Spielstart = false
                }
            }
        } else {
            basic.setLedColor(basic.rgb(200, 255, 55))
        }
    }
})
