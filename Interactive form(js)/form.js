const checkMark = '\u2713'
const checkLowerCase = new RegExp('^(?=.*[a-z])(?=.{1,})');
const checkUpperCase = new RegExp('^(?=.*[A-Z])(?=.{1,})');
const checkContainsNumber=new RegExp('^(?=.*[0-9])(?=.{1,})');
const checkChaaracter = new RegExp('^(?=.*[!@#$%^&*])(?=.{1,})');
const checkEightCharacters = new RegExp('^(?=.{8,})');
const checknameCharacters = new RegExp('^(?=.{3,})');

const passArr=[checkUpperCase,checkLowerCase,checkEightCharacters,checkChaaracter,checkContainsNumber]

const passwordCheck=()=>{
    const userName = document.getElementById('userNameInput').value;
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;
    
    const email = document.getElementById('emailInput').value;
    const  number = document.getElementById('numberInput').value; 
    console.log(number)
    const fulfilled = [];
    const unfulfilled = [];

       
     checknameCharacters.test(userName)?
       fulfilled.push(document.getElementById('nameContainer')):
       unfulfilled.push(document.getElementById('nameContainer'));

     checkChaaracter.test(email)?
      fulfilled.push(document.getElementById('emailContainer')):
      unfulfilled.push(document.getElementById('emailContainer'));

   
     passArr.forEach(el=>{el.test(password)?
      fulfilled.push(document.getElementById('passwordContainer')):
      unfulfilled.push(document.getElementById('passwordContainer'))});

     password && password==confirmPassword?
        fulfilled.push(document.getElementById('confirmPasswordContainer')):
        unfulfilled.push(document.getElementById('confirmPasswordContainer'));

     checkEightCharacters.test(number)?
     fulfilled.push(document.getElementById('numberContainer')):
     unfulfilled.push(document.getElementById('numberContainer'));



    fulfilled.forEach(el=>{
        el.classList.remove('unfulfilled');
        el.classList.add('fulfilled')
    });

    unfulfilled.forEach(el=>{
        el.classList.remove('fulfilled');
        el.classList.add('unfulfilled')
    });
   console.log(fulfilled,unfulfilled)

   if(fulfilled.length===9)
   document.getElementById('submitButton').disabled=false;
   else
   document.getElementById('submitButton').disabled=true;


}

Array.from(document.getElementsByClassName('input-listener')).forEach(input=>{
    input.addEventListener('keyup',passwordCheck)
});

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('submitButton').addEventListener('click',saveFormData);
});

const saveFormData=(ev)=>{
    ev.preventDefault();
    let obj ={
     userName : document.getElementById('userNameInput').value,
     password : document.getElementById('passwordInput').value,
     confirmPassword : document.getElementById('confirmPasswordInput').value,
     email : document.getElementById('emailInput').value,
     number : document.getElementById('numberInput').values 
    }
    console.log(obj)
}
    