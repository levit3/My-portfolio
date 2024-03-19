function userName(callback) {
    let user = prompt("Please enter your name")
    callback(user)
}

function greetings(user) {
    document.getElementById("welcome").textContent = `Hello ${user}, welcome to my portfolio!`
}
userName(greetings)

function redirect() {
    window.location.replace("./my_portfolio.html")
}