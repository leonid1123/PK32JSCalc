let result = document.getElementById("res")
let pervoe
let vtoroe
let znak
let plusFlag = 0
let plusCount = 0
let deystvie = ""
function num(_button) {
    if (plusFlag == 1) {
        result.innerHTML = ""
        plusFlag = 0
    }
    let kolichestvo = result.innerHTML.length
    if (kolichestvo < 15) {
        result.innerHTML += _button.innerHTML
        if (result.innerHTML[1] != "," && result.innerHTML[0] == "0") {
            let newStr = result.innerHTML.slice(1, 2)
            result.innerHTML = newStr
        }
    }

}
function zapyataya() {
    let str = result.innerHTML
    if (str.indexOf(",") == -1) {
        result.innerHTML += ","
    }
}
function ClearAll() {
    result.innerText = "0"
}
function DeleteAll() {
    pervoe = 0
    vtoroe = 0
    ClearAll()
}
function Del() {
    let str = result.innerHTML
    if (str.length > 1) {
        let newStr = str.slice(0, str.length - 1)
        result.innerHTML = newStr
    } else {
        result.innerHTML = "0"
    }
}
function Obratnoe() {
    result.innerHTML = 1 / result.innerHTML
}
function Kvadrat() {
    result.innerHTML = result.innerHTML * result.innerHTML
}
function Koren() {
    result.innerHTML = Math.sqrt(result.innerHTML)
}
function Zamena() {
    result.innerHTML = -1 * result.innerHTML
}
function Plus(_deystvie) {
    plusFlag = 1
    plusCount += 1
    if (plusCount == 1) {
        pervoe = parseFloat(result.innerHTML.replace(",", "."))
        deystvie = _deystvie
    } else {
        vtoroe = parseFloat(result.innerHTML.replace(",", "."))
        switch (deystvie) {
            case 1:
                result.innerHTML = (pervoe + vtoroe).toString().replace(".", ",")
                break;
            case 2:
                result.innerHTML = (pervoe - vtoroe).toString().replace(".", ",")
                break;
            case 3:
                result.innerHTML = (pervoe * vtoroe).toString().replace(".", ",")
                break;
            case 4:
                result.innerHTML = (pervoe / vtoroe).toString().replace(".", ",")
                break;
            default:
                break;
        }
        pervoe = parseFloat(result.innerHTML.replace(",", "."))
        deystvie=_deystvie
    }
}
function Ravno() {
    plusCount = 0
    vtoroe = parseFloat(result.innerHTML.replace(",", "."))
    result.innerHTML = (pervoe + vtoroe).toString().replace(".", ",")
    plusFlag = 1
}