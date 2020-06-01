const  tagDiv = document.querySelector('.tagDiv');
const body = document.querySelector('.body');
const item1 = document.querySelector('#listItem1');
const item11 = document.querySelector('#listItem11')

let moviesLoaded = false;
let instrumentsLoaded = false;
let aboutLoaded = false;

let pTag=document.createElement('p');
    pTag.classList.add('text');
    pTag.classList.add('textStyles');

//for movies
let headerDiv1 = document.createElement('div');
    headerDiv1.classList.add('columnNested');
  let movieArr = ['box1','box2','box3','box4','box5'];
      movieArr.forEach(mountMovies);
 function mountMovies(value,index,novieArr){
        value = document.createElement('div');
        value.classList.add(`box${index + 1}`);
        headerDiv1.appendChild(value);
      }

//for instruments
let headerDiv2 = document.createElement('div');
    headerDiv2.classList.add('columnNested');

  let instrumentArr = ['box1','box2','box3','box4','box5'];
      instrumentArr.forEach(mountInstruments);
  
   function mountInstruments(value,index,boxArr){
        value = document.createElement('div');
        value.classList.add(`instrument${index+ 1}`);
        headerDiv2.appendChild(value);
      }

let headerDiv3 = document.createElement('div');
let p1 = document.createElement('h1');
p1.classList.add('text','textStyles')
p1.innerHTML = "Website";
headerDiv3.appendChild(p1);
let h2 = document.createElement('h1');
h2.classList.add('text');
h2.classList.add('textStyles');
h2.innerHTML="Home";
headerDiv3.appendChild(h2)
let h3 = document.createElement('h1');
h3.innerHTML="Contact"
h3.classList.add('text');
headerDiv3.appendChild(h3)



  
      



item1.addEventListener('click',()=>loadHome())
item11.addEventListener('click',()=>loadHome())
function loadHome(){
    
    
    console.log("working")
    let hr = document.createElement('hr');
    let pTag = document.createElement('p')
    pTag.classList.add('text');
    pTag.classList.add('textStyles')
    pTag.innerHTML="Hey its workin"
    addNew.appendChild(hr)
    location.replace(home)
    

  //   remove(item){
  //     container.removeChild(item);
  // }
}

const item2 = document.querySelector('#listItem2')
const item22 = document.querySelector('#listItem22')
item2.addEventListener('click',()=>loadMovies())
item22.addEventListener('click',()=>loadMovies())
function loadMovies(){
    
    if(moviesLoaded==false){
      if(instrumentsLoaded==true){
        body.removeChild(headerDiv2);
      instrumentsLoaded=false;
      }
      if(aboutLoaded==true){
        body.removeChild(headerDiv3);
        aboutLoaded=false;
      }
      console.log("movies loaded")
      
      pTag.innerHTML="Choose your Movie"   
      moviesLoaded=true;
      createHeaders();
      
      body.appendChild(headerDiv1);
     
      
      
      }
      else{
        
        body.removeChild(headerDiv1);
        removeHeaders();
        tagDiv.removeChild(pTag);
        moviesLoaded=false;
  
      }
}




const item3 = document.querySelector('#listItem3');
item3.addEventListener('click',()=>loadInstruments());
const item33 = document.querySelector('#listItem33');
item33.addEventListener('click',()=>loadInstruments());
function loadInstruments(){
    if(instrumentsLoaded==false){
      if(moviesLoaded==true){
        body.removeChild(headerDiv1);
      moviesLoaded=false;
      }
      if(aboutLoaded==true){
        body.removeChild(headerDiv3);
        aboutLoaded=false;
      }
    console.log("instruments working");
    pTag.innerHTML="Choose your instrument"   
    instrumentsLoaded=true;
    createHeaders();
    
    body.appendChild(headerDiv2);
   
    
    }
    else{
      body.removeChild(headerDiv2);
      removeHeaders();
      tagDiv.removeChild(pTag);
      instrumentsLoaded=false;

    }
    
    

}

const item4 = document.querySelector('#listItem4');
item4.addEventListener('click',()=>loadAbout());
const item44 = document.querySelector('#listItem44');
item44.addEventListener('click',()=>loadAbout());
function loadAbout(){
  if(aboutLoaded==false){
    if(moviesLoaded==true){
      body.removeChild(headerDiv1);
    moviesLoaded=false;
    }
    if(instrumentsLoaded==true){
      body.removeChild(headerDiv2);
      instrumentsLoaded=false;
    }
  console.log("instruments working");
  pTag.innerHTML="About"   
  aboutLoaded=true;
  createHeaders();
  
  body.appendChild(headerDiv3);
 
  
  }
  else{
    body.removeChild(headerDiv3);
    removeHeaders();
    tagDiv.removeChild(pTag);
    aboutLoaded=false;
  }
  }




let hr1 = document.createElement('hr');
 let hr2 = document.createElement('hr');

function createHeaders(){
  
    tagDiv.appendChild(hr1);
    tagDiv.appendChild(pTag);
    tagDiv.appendChild(hr2);
}


function removeHeaders(){
  tagDiv.removeChild(hr1);
  tagDiv.removeChild(hr2);
}



var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "inline") {
        content.style.display = "none";
      } else {
        content.style.display = "inline";
      }
    });
}