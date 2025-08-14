let font = document.getElementById("font")
let result = document.getElementById("result")
font.addEventListener("change", () => {
    result.classList = `result ${font.value}`
})