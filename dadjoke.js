let jokeDiv = document.getElementById("joke");
let GenerateBtn = document.getElementById("btn");

jokeDiv.innerHTML = getjokes();
GenerateBtn.addEventListener("click", getjokes);

async function getjokes(){

const constrain = {
    headers : {
        Accept : 'application/json',
    },
}

const res = await fetch('https://icanhazdadjoke.com', constrain);
const data = await res.json();
jokeDiv.innerHTML = data.joke;

}