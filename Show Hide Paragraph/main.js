let btn = document.getElementById("btn")
let result = document.getElementById("result")


btn.addEventListener("click", () => {
    let styleResult = getComputedStyle(result).display
    
        // The first solution
    // if(styleResult === "block") {
    //     result.style.display = "none"
    // }else {
    //     result.style.display = "block"
    // }
    
        // The second solution
    result.style.display = (styleResult == "none") ? "block" : "none"
})