//Store the Task List into a variable
let taskList = document.querySelector(".task-list");


//Read input function----------------------------------------------------------------------------------------------------------------------------------------------------------
//Grabs text from input field and returns the value.  
const readInput = () => {
    // 1st store the input field into a variable. 
    let inputTaskField = document.getElementById("todo-input");
    //Store the input button into a variable. 
    let inputSubmitBtn = document.getElementById("todo-submit");

    //Event listener waits for a click on the inputSubmitButton
    inputSubmitBtn.addEventListener("click", () => {
        //logs to console to test if it the click functionality works
        console.log(`${inputTaskField.value}`);

        //Validation to check if a value has been entered. 
        if (inputTaskField.value === "") {
            alert("Please enter a task.");
        } else {
            //Runs the createListElement function, passing the value of what was typed in the inputTaskField.
            createListElement(inputTaskField.value);

        }
    })
}
//End of Read input function----------------------------------------------------------------------------------------------------------------------------------------------------------


readInput();

//Create List Element function//Read input function----------------------------------------------------------------------------------------------------------------------------------
//Creates List Element, nest P element and add the input text
const createListElement = (inputTaskFieldValue) => {

    //Creates the li element. 
    const li = document.createElement("li");
    //Creates the p element.
    const p = document.createElement("p");
    //Stores the value passed from readInput() inside the p element. 
    p.innerHTML = inputTaskFieldValue;
    //Nests the p element inside the li element.
    li.appendChild(p);

    //Calls the appendBtn() function to nest a button element into the li Element.
    appendBtn(li);
    taskList.appendChild(li);

    createListArray();


}
//End of Create List Element function//Read input function------------------------------------------------------------------------------------------------------------------------

//Append button  Function----------------------------------------------------------------------------------------------------------------------------------------------------------
const appendBtn = (listItem) => {
    //Creates Button
    let btn = document.createElement("button");

    //After button is created we need to add its attributes, Type="Button", id="task-submit", value="✔️"
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "task-submit");
    btn.innerHTML = "✔️";
    //add class  .button
    btn.classList.add("button");

    //Append Button
    listItem.appendChild(btn);


}
//End of Append button  Function----------------------------------------------------------------------------------------------------------------------------------------------------------


//Task Submit function-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



// MAIN GOAL Read if the tick button has been pressed. 
//Obtain an array of all items withn the <ul>List 
//Iterate though the array to check which button has been clicked.
//Remove the list item in question,.
const createListArray = () => {

    //Obtain a list of all the items in the UL. 
    return taskList.children;
 
}


const  checkTickClick  =  (listArray) => {

    for (let i = 1; i <listArray.length; i++){
        console.log("HELLO " + listArray[i]);
    }

}


checkTickClick(createListArray);


/*


    


/*

    <li>
       <p>Task 1</p>
           <input type="submit"   class="button" id="task-submit" value="✔️">
       </li>

*/


