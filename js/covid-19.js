//start scroll to top
let button = document.getElementById("scroll-top");

window.onscroll=function(){ 'use strict';

    console.log(this.scrollY);

    if(this.scrollY >= 800){
        button.classList.add("show");
    }else{
        button.classList.remove("show");
    }
};
console.log(button);
button.onclick=function(){ 'use strict';
    window.scrollTo({

        top:0,
        behavior:"smooth"
    });
}
    //loading screen
    setTimeout( ()=>{
        let loader = document.getElementById("loads");
        loads.classList.remove("loading");
        document.body.style.overflow = "auto";
    } ,2000);
    
    setTimeout( ()=>{
    loads.classList.add("heddin");
    },2000);
    //start section header
