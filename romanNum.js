function romanNum(num) {
    let left = num
    let roman = ""

    while (left !== 0) {
        if (left - 1000 > -1) {
            left -= 1000
            roman += "M"
        } else if (left - 500 >= 0) {
            left -= 500
            roman += "D"
        } else if (left - 100 >= 0) {
            left -= 100
            roman += "C"
        } else if (left - 50 >= 0) {
            left -= 50
            roman += "L"
        } else if (left - 10 >= 0) {
            left -= 10
            roman += "X"
        } else if (left - 5 >= 0) {
            left -= 5
            roman += "V"
        } else if (left - 1 >= 0) {
            left -= 1
            roman += "I"
        }
    }
    console.log(roman)
}

romanNum(99)

romanNum(5)

romanNum(100)

romanNum(5321)