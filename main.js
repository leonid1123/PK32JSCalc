let result = document.getElementById("res");
function num(_button) {
    result.innerHTML += _button.innerHTML
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