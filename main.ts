radio.onReceivedNumber(function (receivedNumber) {
    if (Modus == 1) {
        basic.showNumber(radio.receivedPacket(receivedNumber))
    }
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
let Modus = 0
Modus = 0
radio.setGroup(97)
radio.setTransmitPower(6)
basic.forever(function () {
    if (Modus == 0) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
