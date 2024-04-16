
let testElement = document.createElement("p")
testElement.innerText = "Hello There Friend!"

testElement.classList.add("makeRed")

document.body.appendChild(testElement);

let blueElement = document.createElement("h3")
blueElement.innerText = "I’m a blue h3!"

blueElement.classList.add("makeBlue")

document.body.appendChild(blueElement);

let divHolder = document.createElement("div")

divHolder.classList.add("designDiv")

let divHeader = document.createElement("h3")

divHeader.innerText = "I’m in a div"

divHolder.appendChild(divHeader)

let divText = document.createElement("p")

divText.innerText = "Me Too!"

divHolder.appendChild(divText)

document.body.appendChild(divHolder)

