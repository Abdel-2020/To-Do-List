// Get input from input field
// 1st store the input field into a variable. 
//Store the input button into a variable. 
//Store the Task List into a variable

let inputTaskField = document.getElementById("todo-input");
let inputSubmitBtn = document.getElementById("todo-submit");
let taskList = document.querySelector(".task-list");



//Grabs text from input field and returns the value. 
const readInput = () => {
    inputSubmitBtn.addEventListener("click", () => {

        console.log(`${inputTaskField.value}`);
        createListElement(inputTaskField.value);
    })
    return inputTaskField.value;
}





//Create List Element 

const createListElement = (inputTaskFieldValue) => {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.innerHTML= inputTaskFieldValue;
    li.appendChild(p);

    appendBtn(li);
    taskList.appendChild(li);


}


//Append button 

const appendBtn = (listItem) => {
    //Creates Button
    let btn = document.createElement("button");
    btn.innerHTML = "✔️";
    btn.classList.add("button");


    //Append Button
    listItem.appendChild(btn);
}


readInput();