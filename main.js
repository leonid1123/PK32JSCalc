let result = document.getElementById("res");
function num(_button) {
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
function Del() {

    let str = result.innerHTML
    if (str.length > 1) {
        let newStr = str.slice(0, str.length - 1)
        result.innerHTML = newStr
    } else {
        result.innerHTML = "0"
    }
}