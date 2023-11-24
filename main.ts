let LEDy = 0
let LEDx = 0
for (let index = 0; index < 10; index++) {
    LEDx = Math.map(randint(-1023, 1023), -1023, 1023, -1023, 1023)
    LEDy = Math.map(randint(-1023, 1023), -1023, 1023, -1023, 1023)
    if (5 > LEDx && 5 > LEDy) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            # # # # #
            `)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # # # #
            # . . . #
            `)
        basic.setLedColor(0xff0000)
    }
    basic.pause(1000)
    basic.setLedColor(0x999999)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
	
})
