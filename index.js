let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

function randomBackground() {
    let imgNum = Math.floor((Math.random() * 4) + 1)
    const background = document.getElementById("background")
    background.style.backgroundImage = `url("img/0${imgNum}.jpg")`
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
    background.style.backgroundPosition = "center"
    background.style.backgroundAttachment = "fixed"
}

fightButton.addEventListener("click", function() {
    let player1 = Math.floor(Math.random() * 17)
    let player2 = Math.floor(Math.random() * 17)
    stageEl.textContent = `${fighters[player1]} vs ${fighters[player2]}`
})

randomBackground()