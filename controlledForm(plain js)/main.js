const outerContainer = document.querySelector('.outerContainer');
const outputTag = document.querySelector('.outputContainer');

//function buildForm(){
let innerContainer = document.createElement('div');
    innerContainer.classList.add('innerContainer');
    outerContainer.appendChild(innerContainer);

let form = document.createElement('form');
    form.classList.add('formClass');  
    form.id="controlForm"  
    innerContainer.appendChild(form);

let firstName =  document.createElement('input');
    firstName.classList.add('input');
    firstName.type="text";
    firstName.placeholder="First Name"; 
    firstName.name="firstName";
    firstName.required=true;
    form.appendChild(firstName);  
let lastName =  document.createElement('input');
    lastName.classList.add('inputR');
    lastName.type="text";
    lastName.placeholder="Last Name";
    lastName.name="lastName"  
    form.appendChild(lastName);
let gender =  document.createElement('select');
    gender.classList.add('input');
    gender.name="gender";  
    form.appendChild(gender);

    let opt1 = document.createElement("option");
        opt1.setAttribute("value","Male")
        opt1.innerHTML="Male"
        gender.appendChild(opt1);

    let opt2 = document.createElement("option");
        opt2.setAttribute("value","Female")
        opt2.innerHTML="Female"
        gender.appendChild(opt2);

    let opt3 = document.createElement("option");
        opt3.setAttribute("value","Transgender")
        opt3.innerHTML="Transgender"
        gender.appendChild(opt3);


let age =  document.createElement('input');
    age.classList.add('inputR');
    age.type="text";
    age.placeholder="Age";
    age.name="age";  
    form.appendChild(age);
let mobileNumber =  document.createElement('input');
    mobileNumber.classList.add('input');
    mobileNumber.type="number";
    mobileNumber.placeholder="Mobile number";
    mobileNumber.name="mobileNumber"  
    form.appendChild(mobileNumber);
let  email=  document.createElement('input');
    email.classList.add('inputR');
    email.type="email";
    email.placeholder="Email";  
    form.appendChild(email);
    email.name="email"
let address =  document.createElement('input');
    address.classList.add('input');
    address.type="text";
    address.placeholder="address"; 
    address.name="address"; 
    form.appendChild(address);
let country =  document.createElement('select');
    country.classList.add('inputR');
    country.name="country" 
    form.appendChild(country); 



let status = document.createElement('p');
    status.classList.add('maritalStatus')
    status.innerHTML="Select your Marital status:"
    form.appendChild(status);

    
   let maritalStatus;
   let p1 = document.createElement('p');
   p1.classList.add('p1')
    p1.innerHTML="Married:"
    form.appendChild(p1)
    let maritalStatus1= document.createElement('input')
      maritalStatus1.value="Married";
      maritalStatus1.type="radio"
      maritalStatus1.name = "maritalStatus"
      p1.appendChild(maritalStatus1);  
      maritalStatus1.onclick=()=>(maritalStatus=maritalStatus1.value);

      let p2 = document.createElement('p');
   p2.classList.add('p1')
    p2.innerHTML="unmarried:"
    form.appendChild(p2)
    let maritalStatus2= document.createElement('input')
      maritalStatus2.value="Unmarried";
      maritalStatus2.type="radio"
      maritalStatus2.name = "maritalStatus"
      p2.appendChild(maritalStatus2);
      maritalStatus2.onclick=()=>(maritalStatus=maritalStatus2.value);

      let p3 = document.createElement('p');
   p3.classList.add('p1')
    p3.innerHTML="Divorced:"
    form.appendChild(p3)
    let maritalStatus3= document.createElement('input')
      maritalStatus3.value="Divorced";
      maritalStatus3.type="radio"
      maritalStatus3.name = "maritalStatus"
      p3.appendChild(maritalStatus3);
      maritalStatus3.onclick=()=>(maritalStatus=maritalStatus3.value);
      
      var checkboxValue = true;
      let graduationP = document.createElement("p");
      graduationP.classList.add("graduation");
      graduationP.innerHTML="Graduation Completed:"
      form.appendChild(graduationP);
      let graduation=document.createElement('input')
      graduation.type="checkbox";
      graduation.checked=true
      graduationP.appendChild(graduation);
      graduation.onclick=()=>(checkBoxHandler());
      

    
     

let submitButton = document.createElement('button');
   submitButton.classList.add('submitButton');
   submitButton.innerHTML="Submit";
   submitButton.type="submit";
   submitButton.value="Submit";
   submitButton.addEventListener('click',saveForm);
   form.appendChild(submitButton);
   


function saveForm(e){
    e.preventDefault();
   let obj = {
       firstName:firstName.value,
       lastName:lastName.value,
       gender:gender.value,
       age:age.value,
       mobileNumber:mobileNumber.value,
       email:email.value,
       address:address.value,
       country:country.value,
       maritalStatus:maritalStatus,
       graduation:checkboxValue?"Completed":"not Completed"
   }
   document.getElementById("controlForm").reset();
   let pTag1 = document.createElement('p'); 
   pTag1.innerHTML=`Name: ${obj.firstName} ${obj.lastName}`;
   let pTag2 = document.createElement('p');
   pTag2.innerHTML="Gender:" + obj.gender+"   "   +"Age:"+obj.age;
   let pTag4 = document.createElement('p');
   pTag4.innerHTML="Mobile Number:" +obj.mobileNumber+"   "+" "+" "   +  "Email:$"+obj.email;
   let pTag5 = document.createElement('p');
   pTag5.innerHTML="Adrress:" +obj.address +"   " + "Country:" +obj.country;
   let pTag6 = document.createElement('p');
   pTag6.innerHTML=`Marital Status:  ${obj.maritalStatus}`;
   let pTag7 = document.createElement('p');
   pTag7.innerHTML=`Graduation:  ${obj.graduation}`;
 let  ptags = [pTag1,pTag2,pTag4,pTag5,pTag6,pTag7];
 ptags.forEach(renderPTags);
  function renderPTags(value,index,ptags){
      value.classList.add('outputPTag');
       outputTag.appendChild(value)
  }
   
}


var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
country_list.forEach(createOptions);
     function  createOptions(value,index,country_list){
        let opt= document.createElement('option')
        opt.value=value;
        opt.innerHTML=value;
        country.appendChild(opt);
     };

var checkBoxHandler=()=>{
    checkboxValue=!checkboxValue;
    console.log(checkboxValue);
}