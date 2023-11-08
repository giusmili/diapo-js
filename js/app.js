document.addEventListener("DOMContentLoaded",()=>{
    let compteur = 0; //compteur for images
    let timer, elements, slides, slidewidth, speed, transitions;
 

    // slideshow

    const diapo = document.querySelector(".diapo");

    // get data speed and transition
    speed = diapo.dataset.speed;
    transitions = diapo.dataset.transition;

    elements = document.querySelector(".elements");
    slides = Array.from(elements.children) //array children elements 
    console.log(slides)

    /* get width one slide */
    slidewidth = diapo.getBoundingClientRect().width;

    /* clone first image for loop */
    let  firstImage = elements.firstElementChild.cloneNode(true);

    
    /* end slideshow firt image append last image */
    elements.appendChild(firstImage);

    
    /* get arrows */
    let next = document.querySelector("#nav-right");
    let prev = document.querySelector("#nav-left");

    

    /* click for next */
    let slideNext = ()=>{
        
        compteur++;
        elements.style.transition = `${transitions}ms linear`;

        console.log(compteur);
        let decal = -slidewidth * compteur;
        elements.style.transform = `translateX(${decal}px)`
        /* end slide */
        setTimeout(()=>{
            if(compteur >= slides.length - 1){
                compteur = 0;
                elements.style.transition = "unset";
                elements.style.transform = `translateX(0)`;
            }
        }, 2000)
        
    }
    timer = setInterval(slideNext, speed); // slideshow auto
    //event click
    next.addEventListener("click", slideNext);
/* end next*/



    /* prev */
    let slidePrev = ()=>{
        compteur--;
        console.log(compteur);
        elements.style.transition = `${transitions}ms linear`;
        console.log("ok")
        /* if first image */
        
        if(compteur < 0){
            compteur = slides.length - 1;
            let decal = -slidewidth * compteur;
            elements.style.transition = "unset";
            elements.style.transform = `translateX(${decal}px)`;
            setTimeout(slidePrev, 1);
        }
        decal = -slidewidth * compteur;
        elements.style.transform = `translateX(${decal}px)`;
    }
    prev.addEventListener("click", slidePrev);
    //end event prev
    
    //stop slideshow option
    
    let stoptimer = ()=>{
        clearInterval(timer);
        console.log("dessus")
    }
    diapo.addEventListener("mouseover", stoptimer);
    
    // start timer
  
    let startimer = ()=>{
        timer = setInterval(slideNext, speed)
            
       
    }
    diapo.addEventListener("mouseout", startimer);

})










/* window.onload = ()=>{
    console.log("loaded")
} */