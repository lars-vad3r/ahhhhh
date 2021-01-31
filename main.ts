controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (aktuellerSpieler > 0) {
        aktuellerSpieler += -1
    }
    scene.setBackgroundImage(SpielerAuswahl[aktuellerSpieler])
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (aktuellerSpieler < 2) {
        aktuellerSpieler += 1
    }
    scene.setBackgroundImage(SpielerAuswahl[aktuellerSpieler])
})
let SpielerAuswahl: Image[] = []
let aktuellerSpieler = 0
aktuellerSpieler = 0
SpielerAuswahl = [assets.image`Flippo`, assets.image`Pupsi`, assets.image`Hasi`]
scene.setBackgroundImage(SpielerAuswahl[aktuellerSpieler])
