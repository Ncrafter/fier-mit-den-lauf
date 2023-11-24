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
let Schwierigkeit = 0
Schwierigkeit = 1
let Spielstart = false
led.plot(2, 4)
basic.forever(function () {
	
})
