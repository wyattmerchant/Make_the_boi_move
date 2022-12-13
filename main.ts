radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.go(BBDirection.Forward, 60)
    }
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Reverse, 60)
    }
    if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Left, 60)
    }
    if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 60)
    }
    if (receivedNumber == 5) {
        bitbot.stop(BBStopMode.Brake)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
bitbot.select_model(BBModel.XL)
bitbot.ledRainbow()
bitbot.ledRotate()
