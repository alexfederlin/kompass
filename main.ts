input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() <= 45 || input.compassHeading() > 315) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else {
        if (input.compassHeading() > 45 && input.compassHeading() <= 135) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                . # . # .
                . . # . .
                `)
        }
        if (input.compassHeading() > 135 && input.compassHeading() <= 225) {
            basic.showLeds(`
                . . # # .
                . # . . .
                . . # . .
                . . . # .
                . # # . .
                `)
        }
        if (input.compassHeading() > 225 && input.compassHeading() <= 315) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # . # . #
                # . # . #
                # # # # #
                `)
        }
    }
})
