input.onPinPressed(TouchPin.P0, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.tab))
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onPinPressed(TouchPin.P1, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
