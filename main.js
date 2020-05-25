/*Create a variable, named dieRolls, and define it as an empty array (which later you will use as a list of each die that has been rolled). (1 point)

Add a click event listener for your "Roll!" button. (1 point)

On click, you need to get the value from the text input box, so that you know how many dice to roll. Assign this to a variable within your event listener. (1 point)

Then you need to roll the dice. It is time to write a loop. Use Math.random() to simulate rolling a single six-sided die X number of times, where X is the number from the text input box. X is also the number of times you will loop. (4 points)

Push the result of each roll onto your dieRolls array. (2 points)

Sum all your dice rolls and display the result in the Total area on the page using innerHTML. (2 point)*/
const dieRolls = [];
let numberOfRolls = document.querySelector("#number_of_rolls");
let rollButton = document.querySelector("#roll_button");
let showRolls = document.querySelector("#show_rolls");

rollButton.addEventListener("click", function () {
    console.log("button clicked");
    let numberOfRollsValue = Number(numberOfRolls.value)
    console.log("number of rolls ", numberOfRollsValue);
    for (let i = 0; i < numberOfRollsValue; i++) {
        let randomNumber = Math.ceil(Math.random() * 6);
        console.log(randomNumber);
        dieRolls.push(randomNumber);
        console.log(dieRolls);

    }
    let total = 0;
    for (let i = 0; i < dieRolls.length; i++) {
        total += dieRolls[i];
    } return totalArea = document.querySelector("#total_area").innerHTML = "The Total is:" + total;
})
let list = " ";

showRolls.addEventListener("click", function () {
    console.log("you called?");
    for (var i = 0; i < dieRolls.length; i++) {
        console.log("condition passed and running");
        console.log(dieRolls[i]);
        list += "<li>" + dieRolls[i] + "</li>";
    } return document.querySelector("allrolls").innerHTML = list;

})

