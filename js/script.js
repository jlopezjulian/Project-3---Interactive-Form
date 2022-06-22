// //console.log("Test");

//section 3: The "Name" field 

const userName = document.querySelector('#name');
userName.focus(); //focus state is created to focus the name element 
const job_role = document.querySelector('#title');
const other_job_role = document.querySelector('#other-job-role');
other_job_role.hidden = true;
// information from mozilla web docs "Element.hidden"
job_role.addEventListener('change',(event)=>{
    if (event.target.value === 'other'){
        other_job_role.style.display = 'block'
    }else{
        other_job_role.style.display = 'none';
        }
    });

//section 5- T-shirt Info 
//variables are created to highlight the design and color of shirt selected 
const design = document.querySelector('#design');
const color = document.querySelector('#color');
const option = color.children;

color.disabled = true; //the Shirt Color element is disabled 

/*event listener is created to show certain design per theme selection
two variables were created to show value and data-theme
followed by a conditional statement that checks if variables are equal to each other 
allowing selection specific to theme */

design.addEventListener('change',(event)=>{
    color.disabled = false;
    for (let i=0; i < option.length; i++){
        const eventTarget = event.target.value;
        const dataTheme = option[i].getAttribute('data-theme');
        // console.log(eventTarget);
        console.log(dataTheme);
        if (eventTarget === dataTheme){
            option[i].hidden = false;
        }else{
            option[i].hidden = true;
        }
    }});

//section 6: Register for Activities 

    const register = document.querySelector('#activities');
    const activitiesCost = document.querySelector('#activities-cost');
    let totalCostOfActivities = 0;
   /* 
   created an event listener for activity selection that calculates the cost of the total selection
   addition and subtraction of the activity is removed or added to the total 
    form is updated by using the innerHTML property
   */
    register.addEventListener('change',(e)=>{
        const click = e.target;
        const dataCost = parseInt(click.getAttribute('data-cost'));
        if (click.checked){
            totalCostOfActivities += dataCost;
        }else{
            totalCostOfActivities -= dataCost;
        }
        activitiesCost.innerHTML = 'Total: $' + totalCostOfActivities;
        });

//section 7: Payment Info

const paymentType = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paypal.hidden = true;
bitcoin.hidden = true;

//payment variable is used to target the second child of the element 
paymentType[1].setAttribute('selected', ' ');

//created variable to make conditional if else statements depending on the payment selection clicked
paymentType.addEventListener('change',(e)=>{
    let selected = e.target.value;
    if (selected === 'paypal'){
        creditCard.style.display = 'none'
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
    }else if (selected === 'bitcoin'){
        creditCard.style.display = 'none'
        paypal.style.display = 'none';
        bitcoin.style.display = 'block';
    } else {
        creditCard.style.display = 'block'
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
});

//section 8: Form Validation
//const userName = document.querySelector('#name').focus();
//const register = document.querySelector('#activities');
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

/* 
functions are created to test each section of the form using regex expressions
conditionals are used to display hint if input is invalid 
*/

function validationPass(element){
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display = "none";
  }

  function validationFail(element){
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = "block";
  }
      
function nameValidation(){
    let nameValue = userName.value.trim();
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    if (nameIsValid === true){
        validationPass(userName);
      }else{
         validationFail(userName);
      }
    return nameIsValid;
}

//         
function emailValidation(){
    let emailValue = email.value.trim();
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    if (emailIsValid === true){
        validationPass(email);
    }else{
        validationFail(email);
    }
    return emailIsValid;
}

//stuck here--------unsure how to show the red box around the activities 
let activitiesBox = document.getElementById('activities-box')

function registerValidation(){
    let activitySectionIsValid = totalCostOfActivities > 0;
    if (activitySectionIsValid){
        validationPass(activitiesBox);
    }else{
        validationFail(activitiesBox)
    }
    return activitySectionIsValid;
}


function cardNumberValidation(){
    let cardNumberValue = cardNumber.value.trim();
    const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberValue)
    if (cardNumberIsValid){
        validationPass(cardNumber);
    }else{
        validationFail(cardNumber)
    }
    return cardNumberIsValid;
}

function zipValidation (){
    let zipValue = zip.value.trim();
    const zipIsValid = /^[0-9]{5}$/.test(zipValue)
    if (zipIsValid){
        validationPass(zip);
    }else{
        validationFail(zip)
    }
    return zipIsValid;
    }

function cvvValidation(){
    let cvvValue = cvv.value.trim();
    const cvvIsValid = /^[0-9]{3}$/.test(cvvValue);
    if (cvvIsValid){
        validationPass(cvv);
    }else{
        validationFail(cvv)
    }
    return cvvIsValid;
    }


function paymentValidation(){
    if (paymentType.value === 'credit-card'){
        if (cardNumberValidation() && cvvValidation() && zipValidation()){
            return true;
        } else {
            return false;
        }
    } else if (paymentType.value === 'paypal'){
            return true;
    } else if (paymentType.value === 'bitcoin'){
            return true;
    }
}



//when form is submitted to detect form submission 
//needs work, unable to refresh after submitting 

 form.addEventListener('submit', (e) => {
    if (!nameValidation()) {
        //console.log('Invalid name prevented submission');
        e.preventDefault();
      }
    
      if (!emailValidation()) {
        //console.log('Invalid email prevented submission');
        e.preventDefault();
      }
    
      if (!registerValidation()) {
        //console.log('Invalid language total prevented submission');
        e.preventDefault();
      }
       if (paymentType.value === 'credit-card'){
          if (!cardNumberValidation() && !zipValidation() && cvvValidation()){
            e.preventDefault();
          }
        }});




// section 9: Accessibility 
let registerBox = document.querySelectorAll('input[type = checkbox]');

for (let i = 0; i < registerBox.length; i++){
        registerBox[i].addEventListener('focus',(e)=>{
            registerBox[i].parentElement.classList.add('focus');
        });
        registerBox[i].addEventListener('blur',(e)=>{
            registerBox[i].parentElement.classList.remove('focus');
        });
    }