// //console.log("Test");

//section 3
const name = document.querySelector('#name').focus();
//console.log(Name);
//section 4 - Job Role 
const job_role = document.querySelector('#title');
//console.log(Job_Role);
let other_job_role = document.querySelector('#other-job-role');
other_job_role.hidden = true;
// information from mozilla web docs "Element.hidden"
job_role.addEventListener('change',(event)=>{
    if (event.target.value === 'other'){
        other_job_role.style.display= 'inline'
    }else{
        other_job_role.style.display= 'none';
        }
    });

//section 5- T-shirt Info 
const design = document.querySelector('#design');
let color = document.querySelector('#color');
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
let paymentType = document.getElementById('payment');
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
//const name = document.querySelector('#name').focus();
const email = document.getElementById('email');
// console.log(email);
const cardNumber = document.getElementById('cc-num');
//console.log(cardNumber);
//const register = document.querySelector('#activities');
const zip = document.getElementById('zip');
console.log(zip);
const cvv = document.getElementById('cvv');
// console.log(cvv);
const form = document.querySelector('form');
console.log(form);

function validName(){
    const regexName = /^([a-zA-Z ]){2,30}$/.test(name.value)
}

form.addEventListener('submit', (event)=>{
    const userName = name.event.value 
}



















