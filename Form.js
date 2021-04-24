class Form
{
    constructor()
    {

    }

    display()
    {
var title = createElement("h2")
title.html("CAR RACING GAME")
title.position(520,90)

var input=createInput("NAME")
input.position(540,200)

var button = createButton("PLAY")
button.position(600,220)

var Greeting = createElement("h3")

button.mousePressed(function()
{
    input.hide()
    button.hide()
    var name = input.value()
    playerCount = playerCount+1
    player.update(name)
    player.updateCount(playerCount)
    Greeting.html("Hello "+name)
    Greeting.position(580,200)
})
    }
   
}