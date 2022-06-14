// //console.log("Test");

//section 3
const Name = document.querySelector('#name').focus();
//console.log(Name);
//section 4 - Job Role 
const Job_Role = document.querySelector('#title');
//console.log(Job_Role);
let Other_Job_Role = document.querySelector("#other-job-role")
Other_Job_Role.hidden = true;
// information from mozilla web docs "Element.hidden"
Job_Role.addEventListener('change',(event)=>{
    if (event.target.value === 'other'){
        Other_Job_Role.style.display= 'inline'
    }else{
        Other_Job_Role.style.display= 'none';
        }
    });

//section 5- T-shirt Info 
const Design = document.querySelector('#design');
let Color = document.querySelector('#color');
const Option = Color.children;
// console.log(Design);
// console.log(Color);
// console.log(Option);

Color.disabled = true;

Design.addEventListener('change',(event)=>{
    Color.disabled = false;
    for (i=0; i < Option.length; i++){
        const eventTarget = event.target.value;
        const dataTheme = Option.getAttribute("data-theme");
        // console.log(eventTarget);
        // console.log(dataTheme);
        if (eventTarget === dataTheme){
            Option.setAttribute.hidden = false;
            dataTheme.removeAttribute.hidden = true;
        }else{
            Option.setAttribute.hidden = true;
            dataTheme.removeAttribute.hidden = false;
        }
    }});






