let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let player1 = Math.floor(Math.random() * 17)
    let player2 = Math.floor(Math.random() * 17)
    stageEl.textContent = `${fighters[player1]} vs ${fighters[player2]}`
})
