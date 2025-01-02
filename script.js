/* jshint esversion: 6 */
let count =0;
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const h4 = document.getElementById("count");
const full = document.getElementById("full");
const registrations = document.getElementById("registrations");
const registered = document.getElementById("registered");

function updateButtonStyle()
{
    if(form.checkValidity())
    {
        submit.style.backgroundColor ="rgb(255, 255, 0)";
        submit.style.width = "100%";
        submit.style.cursor = "pointer";
    }
    else
    {
        submit.style.backgroundColor ="rgb(190, 190, 0)";
        submit.style.width = "20%";
        submit.style.cursor = "not-allowed";
    }
}
function addStudent()
{
    const name = document.getElementById("name").value;
    registrations.innerText += count + ". " + name + "\n";
}
function countStudents()
{
    if(form.checkValidity())
    {
        event.preventDefault();
        h4.innerText = "Number of students registerd: " + ++count;
        addStudent();
        alert("form submission successfull");
        form.reset();
        updateButtonStyle();
    }
    else{
        alert("Form details are invalid or incomplete!!");
    }
}
function showDetails()
{
    if(registrations.style.display == "none")
    {
        registrations.style.display = "block" ;
        registered.innerText = "Hide Details";
    }
    else
    {
        registrations.style.display = "none" ;
        registered.innerText = "Show Registered Students";
    }
}
function makeFullscreen()
{
    if(form.style.transform != "scale(1.6)")
    {
        form.style.transform = "scale(1.6)";
        full.innerText = "Window"; 
    }
    else
    {
        form.style.transform = "scale(1)";
        full.innerText = "Fullscreen"; 
    }
}
submit.onclick = countStudents;
form.addEventListener('input', updateButtonStyle);
full.onclick = makeFullscreen;
registered.onclick = showDetails;