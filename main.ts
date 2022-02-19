bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
keyboard.startKeyboardService()
music.setBuiltInSpeakerEnabled(true)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        keyboard.sendString(keyboard.keys(keyboard._Key.tab))
        keyboard.releaseKeys()
        basic.showArrow(ArrowNames.East)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.clearScreen()
        basic.pause(200)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        keyboard.sendString(keyboard.keys(keyboard._Key.enter))
        keyboard.releaseKeys()
        basic.showArrow(ArrowNames.West)
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.clearScreen()
        basic.pause(200)
    }
})
