//call all the text to animate with the scroll
let sp1 = document.getElementById("sp1");
let sp2 = document.getElementById("sp2");
let sp3 = document.getElementById("sp3");
let sp4 = document.getElementById("sp4");
// scrollbar event
window.addEventListener('scroll',()=>{
     const scroll_value = window.scrollY/window.innerHeight;
     console.log(scroll_value);
     if(scroll_value > .50 && scroll_value < .64){
          sp1.style.color = "white";
          sp1.style.opacity = "1";
     }else if(scroll_value > .65 && scroll_value < .80){
          sp2.style.color = "white";
          sp2.style.opacity = "1";

     }else if(scroll_value > .86 && scroll_value < .94){
          sp3.style.color = "white";
          sp3.style.opacity = "1";

          
     }else if(scroll_value > .95 && scroll_value < 2){
          sp4.style.color = "white";
          sp4.style.opacity = "1";
     }
     else{
          sp1.style.color = "rgba(0,0,0,.5)";
          sp2.style.color = "rgba(0,0,0,.5)";
          sp3.style.color = "rgba(0,0,0,.5)";
          sp4.style.color = "rgba(0,0,0,.5)";
          sp1.style.opacity = "0";
          sp2.style.opacity = "0";
          sp3.style.opacity = "0";
          sp4.style.opacity = "0";
     }    
});