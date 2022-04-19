input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    input.lightLevel(),
    led.brightness()
    )
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
