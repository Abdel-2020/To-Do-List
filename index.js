//Read input function
//Grabs text from input field and returns the value.  
const readInput = () => {
    // 1st store the input field into a variable. 
    let inputTaskField = document.getElementById("todo-input");
    //Store the input button into a variable. 
    let inputSubmitBtn = document.getElementById("todo-submit");



    // Execute a function when the user presses a key on the keyboard
    inputTaskField.addEventListener("keypress", (event) => {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            inputSubmitBtn.click();
        }
    });



    //Event listener waits for a click on the inputSubmitButton
    inputSubmitBtn.addEventListener("click", () => {
        //logs to console to test if it the click functionality works
        console.log(`${inputTaskField.value}`);

        //Validation to check if a value has been entered. 
        if (inputTaskField.value === "") {
            alert(`Please enter a task.`);
        } else {
            //Runs the createListElement function, passing the value of what was typed in the inputTaskField.
            createListElement(inputTaskField.value);
            inputTaskField.value = "";
        }
    })
}
//End of Read input function

//Create List Element function
//Creates List Element, nest P element and add the input text
const createListElement = (inputTaskFieldValue) => {
    //Selects the UL element 
    let taskList = document.querySelector(".task-list");
    //Creates the li element. 
    const li = document.createElement("li");
    li.setAttribute = ("class", "task");
    //Creates the p element.
    const p = document.createElement("p");



    //Stores the value passed from readInput() inside the p element. 
    p.innerHTML = inputTaskFieldValue;
    //Nests the p element inside the li element.
    li.appendChild(p);

    //Calls the appendBtn() function to nest a button element into the li Element.
    appendBtn(li);

    //Appends the list item to the UL parent element. 
    taskList.appendChild(li);

    //After the list is built, the taskCompleted function waits to be used when someone ticks off  a task.
    taskCompleted();
}
//End of Create List Element function





//Append button  Function
const appendBtn = (listItem) => {
    //Creates Button
    let btn = document.createElement("button");

    //After button is created we need to add its attributes, Type="Button", id="task-submit", value="??????"
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "task-submit");
    btn.innerHTML = "??????";
    //add class  .button
    btn.classList.add("button");

    //Append Button
    listItem.appendChild(btn);
}
//End of Append button  Function




/*Task Submit function
MAIN GOAL Read if the tick button has been pressed. 
First group all buttons in an array
Iterate though the array to check which button has been clicked.
Remove the list item
*/
const taskCompleted = () => {

    let buttonList = document.querySelectorAll(".button");

    for (let i = 0; i < buttonList.length; i++) {

        buttonList[i].addEventListener("click", () => {
            buttonList[i].parentElement.style.display = "none";
        });
    }

}



readInput();