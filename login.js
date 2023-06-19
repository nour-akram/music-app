// for loader
const overlay = document.getElementById("overlay")
window.addEventListener("load", () => {
  overlay.style.display = "none"
})

var form =document.getElementById('form');
form.addEventListener("submit",(e)=>{
    let userValid=false;
    let emailValid=false;
    let passValid=false;
    if( userValid=false || emailValid==false ||  passValid==false ){
     e.preventDefault();
    }
    var username= document.getElementById('username').value.trim();
    var password= document.getElementById('password').value.trim();
    var email= document.getElementById('email').value.trim();
    var pattern=/^([a-zA-Z0-9\.]+@+[A-Za-z]+(\.)+[a-zA-Z]{2,3})?$/;
    var errorText= document.getElementById('errorText');
    var errorEmail= document.getElementById('errorEmail');
    if(username==''){
      errorText.innerHTML="Username is required";
    }
    else if(username.length <= 5 || username.length >= 15 ){
      errorText.innerHTML="must be min 5 and max 15";
    }
    else  { 
      errorText.innerHTML="";
      userValid=true;
    }
    
    if(password==''){
      errorPass.innerHTML="password is required";
    }
    else if(password.length <= 8 || password.length >= 25 ){
      errorPass.innerHTML="must be min 8 and max 25";
    }
    else  { 
      errorPass.innerHTML="";
      passValid=true;
    }
    
    
    if(email.length == 0){
      errorEmail.innerHTML="plz enter ur email";
    }
    else if(pattern.test(email)){
      errorEmail.innerHTML="";
      emailValid=true;
    }
    else errorEmail.innerHTML="plz enter a valid email";
    
  
    var username=document.getElementById('username');
    usernameVal=username.value; 
    localStorage.setItem('profile-name',usernameVal)
    
    if(userValid=true && emailValid==true &&  passValid==true ){
          window.location.assign('./Home.html')
    }
})
  



let upload_img=document.getElementById('upload_img');
upload_img.addEventListener('change',function(){
    let reader= new FileReader();
    reader.readAsDataURL(upload_img.files[0]);
    reader.addEventListener('load',()=>{
      if(reader.result){
      localStorage.setItem('profile-image',reader.result);
      }
      else{
        localStorage.setItem('profile-image',null);
      }
    })
})


// localStorage.clear()

let light2=localStorage.getItem('light_mood');
let moon =document.getElementById('moon')
let sun =document.getElementById('sun')

const EnableLightMood =()=>{
  document.body.classList.toggle('light_mood');
  localStorage.setItem('light_mood','enable')
}
const DisableLightMood =()=>{
  document.body.classList.toggle('light_mood');
  localStorage.setItem('light_mood', null)
}

moon.addEventListener('click',(e)=>{
      EnableLightMood();
      sun.style.cssText=`display:block`
      moon.style.cssText=`display:none`
      
})
sun.addEventListener('click',(e)=>{
  DisableLightMood()
      moon.style.cssText=`display:block;`
      sun.style.cssText=`display:none;`
})
 if(light2=="enable"){
   EnableLightMood();
 }



let username=document.getElementById('username');
let lbl1=document.getElementById('lbl1');
username.addEventListener('focus',()=>{
  lbl1.classList.add('active');
})

  username.addEventListener('blur',()=>{
    if(username.value.length == 0){
      lbl1.classList.remove('active');
      lbl1.classList.add('notActive');
    }
  })



let password=document.getElementById('password');
let lbl2=document.getElementById('lbl2');
password.addEventListener('focus',()=>{
  lbl2.classList.add('active');
})
password.addEventListener('blur',()=>{
  if(password.value.length == 0){
    lbl2.classList.remove('active');
    lbl2.classList.add('notActive');
  }
})

let email=document.getElementById('email');
let lbl3=document.getElementById('lbl3');
email.addEventListener('focus',()=>{
  lbl3.classList.add('active');
})
email.addEventListener('blur',()=>{
  if(email.value.length == 0){
    lbl3.classList.remove('active');
    lbl3.classList.add('notActive');
  
  }
})


