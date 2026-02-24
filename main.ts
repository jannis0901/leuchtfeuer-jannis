radio.onReceivedNumber(function (receivedNumber) {
    if (Modus == 1) {
        basic.showNumber(radio.receivedPacket(receivedNumber))
        basic.pause(3000)
        basic.clearScreen()
        radio.sendNumber(receivedNumber)
    }
})
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendNumber(0 - 1)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Modus == 0) {
        Modus = 1
    } else {
        Modus = 0
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Modus == 0) {
        radio.sendNumber(3)
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.sendNumber(0 + 1)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendNumber(2)
})
let Modus = 0
Modus = 0
radio.setGroup(97)
radio.setTransmitPower(7)
basic.forever(function () {
    if (Modus == 0) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
