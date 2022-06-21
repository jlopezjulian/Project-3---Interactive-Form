// //console.log("Test");

//section 3
const userName = document.querySelector('#name');
userName.focus();
//console.log(Name);
//section 4 - Job Role 
const job_role = document.querySelector('#title');
//console.log(Job_Role);
const other_job_role = document.querySelector('#other-job-role');
other_job_role.hidden = true;
// information from mozilla web docs "Element.hidden"
job_role.addEventListener('change',(event)=>{
    if (event.target.value === 'other'){
        other_job_role.style.display = 'inline'
    }else{
        other_job_role.style.display = 'none';
        }
    });

//section 5- T-shirt Info 
const design = document.querySelector('#design');
const color = document.querySelector('#color');
const option = color.children;
// console.log(Design);
// console.log(Color);
// console.log(Option);

color.disabled = true;

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
    // console.log(register);
    // console.log(activitiesCost);
    let totalCostOfActivities = 0;
   
    register.addEventListener('change',(event)=>{
        const click = event.target;
        const dataCost = parseInt(click.getAttribute('data-cost'));
//adding or subtracting the cost based on the selection or click 
        if (click.checked){
            totalCostOfActivities += dataCost;
            console.log(totalCostOfActivities);
        }else{
            totalCostOfActivities -= dataCost;
            console.log(totalCostOfActivities);
        }
        activitiesCost.innerHTML = 'Total: $' + totalCostOfActivities;
        });

//section 7: Payment Info
const paymentType = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

//console.log(creditCard);
// console.log(paypal);
// console.log(bitcoin);

paypal.hidden = true;
bitcoin.hidden = true;

paymentType[1].setAttribute('selected', ' ');

paymentType.addEventListener('change',(event)=>{
    let selected = event.target.value;
    if (selected === 'paypal'){
        creditCard.style.display = 'none'
        paypal.style.display = 'inline';
        bitcoin.style.display = 'none';
    }else if (selected === 'bitcoin'){
        creditCard.style.display = 'none'
        paypal.style.display = 'none';
        bitcoin.style.display = 'inline';
    } else {
        creditCard.style.display = 'inline'
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
});

//section 8: Form Validation
//const userName = document.querySelector('#name').focus();
const email = document.getElementById('email');
// console.log(email);
const cardNumber = document.getElementById('cc-num');
// console.log(cardNumber);
//const register = document.querySelector('#activities');
const zip = document.getElementById('zip');
// console.log(zip);
const cvv = document.getElementById('cvv');
// // console.log(cvv);
const form = document.querySelector('form');
// // console.log(form);

function nameValidation(){
    let nameValue = userName.value.trim();
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    //console.log(nameIsValid);
    if (nameIsValid === true){
        userName.parentNode.className = 'valid';
        userName.parentNode.lastElementChild.style.display = 'none';
    }else{
        userName.parentNode.className = 'invalid';
        userName.parentNode.lastElementChild.style.display = 'block';
        userName.parentNode.lastElementChild.textContent = 'Please enter your name';
        return nameIsValid;
    }
}
//         
function emailValidation(){
    let emailValue = email.value.trim();
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    if (emailIsValid === true){
        email.parentNode.className = 'valid';
        email.parentNode.lastElementChild.style.display = 'none';
    }else{
        email.parentNode.className = 'invalid';
        email.parentNode.lastElementChild.style.display = 'block';
        email.parentNode.lastElementChild.textContent = 'Please enter a valid email.';
    return emailIsValid;
}
}

let registerBox = document.querySelectorAll('[type= "checkbox"]:checked')
function registerValidation(){
    // let registerBox = document.querySelectorAll('[type= "checkbox"]:checked');
    let activitiesBox = document.getElementById('activities-box')
    if (registerBox.length > 0){
        activitiesBox.parentNode.classList= 'valid';
        activitiesBox.parentNode.lastElementChild.style.display = 'none';
        return true
    }else{
        activitiesBox.parentNode.className = 'invalid';
        activitiesBox.lastElementChild.style.display = 'block';
        activitiesBox.parentNode.lastElementChild.textContent = 'Please register for an activity.';
        return false;
    }
}

function cardNumberValidation(){
    let cardNumberValue = cardNumber.value.trim();
    const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberValue)
    if (cardNumberIsValid === true){
        cardNumber.parentNode.className = 'valid';
        cardNumber.parentNode.lastElementChild.style.display = 'none';
    }else{
        cardNumber.parentNode.className = 'invalid';
        cardNumber.parentNode.lastElementChild.style.display = 'block';
        cardNumber.parentNode.lastElementChild.textContent = 'Please enter a valid card number.';
    return cardNumberIsValid;
    }
}

function zipValidation (){
    let zipValue = zip.value.trim();
    const zipIsValid = /^[0-9]{5}$/.test(zipValue)
    if (zipIsValid === true){
        zip.parentNode.className = 'valid';
        zip.parentNode.lastElementChild.style.display = 'none';
    }else{
        zip.parentNode.className = 'invalid';
        zip.parentNode.lastElementChild.style.display = 'block';
        zip.parentNode.lastElementChild.textContent = 'Please enter a valid zip code.'
    return zipIsValid;
    }
}

function cvvValidation(){
    let cvvValue = cvv.value.trim();
    const cvvIsValid = /^d{3}$/.test(cvvValue);
    if (cvvIsValid === true){
        cvv.parentNode.className = 'valid';
        cvv.parentNode.lastElementChild.style.display = 'none';
    }else{
        cvv.parentNode.className = 'invalid';
        cvv.parentNode.lastElementChild.style.display = 'block';
        cvv.parentNode.lastElementChild.textContent = 'Please enter a valid cvv';
        return cvvIsValid;
    return cvvIsValid;
    }
}

function paymentValidation(){
    if (paymentType.value === 'credit-card'){
        if (cardNumberValidation()&& cvvValidation() && zipValidation()){
        return true;
        } else {
            return false;
        }
    } else if (paymentType.value === 'paypal'){
            return true
    } else if (paymentType.value === 'bitcoin'){
            return true
    }
}



//when form is submitted to detect form submission 
 form.addEventListener('submit', (e) => {
     if (nameValidation() && emailValidation() && registerValidation() && paymentValidation()) {
        } else {
           e.preventDefault();
           nameValidation();
           emailValidation();
           paymentValidation();
           registerValidation();
           cvvValidation();
           zipValidation();
        }});
   
// section 9: Accessibility 

for (let i = 0; i < registerBox.length; i++){
        registerBox[i].addEventListener('focus',(e)=>{
            registerBox[i].parentElement.classList.add('focus');
        });
        registerBox[i].addEventListener('blur',(e)=>{
            registerBox[i].parentElement.classList.remove('focus');
        });
    }