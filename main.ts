input.onButtonPressed(Button.A, function () {
    bin_num = bin_num * 2
    bin_num += 0
})
input.onButtonPressed(Button.AB, function () {
    bin_num = 0
})
input.onButtonPressed(Button.B, function () {
    bin_num = bin_num * 2
    bin_num += 1
})
input.onGesture(Gesture.Shake, function () {
    bin_num = 0
})
let bin_num = 0
bin_num = 0
basic.forever(function () {
    basic.showNumber(bin_num)
})
