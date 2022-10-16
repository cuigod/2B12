input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (y % 2 == 0) {
                basic.clearScreen()
                led.plot(x, y)
                basic.pause(100)
            } else {
                basic.clearScreen()
                led.plot(4 - x, y)
                basic.pause(100)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (y % 2 == 0) {
                basic.clearScreen()
                led.plot(y, x)
                basic.pause(100)
            } else {
                basic.clearScreen()
                led.plot(y, 4 - x)
                basic.pause(100)
            }
        }
    }
})
