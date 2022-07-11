
// 1st store the input field into a variable. 
let inputTaskField = document.getElementById("todo-input");

//Store the input button into a variable. 
let inputSubmitBtn = document.getElementById("todo-submit");

//Store the Task List into a variable
let taskList = document.querySelector(".task-list");



//Grabs text from input field and reeeturns the value. 
const readInput = () => {
    //Event listener waits for a click on the inputSubmitButton
    inputSubmitBtn.addEventListener("click", () => {
        //logs to console to test if it the click functionality works
        console.log(`${inputTaskField.value}`);
        //Runs the createListElement function, passing the value of what was typed in the inputTaskField.
        createListElement(inputTaskField.value);
    })
}





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


}


//Append button 

const appendBtn = (listItem) => {
    //Creates Button
    let btn = document.createElement("input");

    //After button is created we need to add its attributes, Type="Button", id="task-submit", value="✔️"
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "task-submit");
    btn.setAttribute("value", "✔️");
    //add class  .button
    btn.classList.add("button");

    //Append Button
    listItem.appendChild(btn);
}


readInput();

/*

    <li>
       <p>Task 1</p>
           <input type="submit"   class="button" id="task-submit" value="✔️">
       </li>

*/

