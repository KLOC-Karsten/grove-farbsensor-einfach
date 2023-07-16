let Rot = 0
let Gruen = 0
let Blau = 0
let Max_Wert = 0
function lese_sensor () {
    Rot = TCS34725.readRed()
    Gruen = TCS34725.readGreen()
    Blau = TCS34725.readBlue()
}
function skaliere_werte () {
    Max_Wert = Math.max(Rot, Math.max(Gruen, Blau))
    Rot = Math.floor(Rot * 255 / Max_Wert)
    Gruen = Math.floor(Gruen * 255 / Max_Wert)
    Blau = Math.floor(Blau * 255 / Max_Wert)
}
basic.forever(function () {
    lese_sensor()
    skaliere_werte()
    basic.setLedColor(basic.rgb(Rot, Gruen, Blau))
    basic.pause(100)
})
