input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("A+B")
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("B")
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("SHAKE")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    mode = 1
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(1000)
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    255
    )
    while (false) {
    	
    }
})
let reading = 0
let mode = 0
basic.showIcon(IconNames.Yes)
music.setVolume(127)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
	
})
