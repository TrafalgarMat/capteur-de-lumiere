input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
