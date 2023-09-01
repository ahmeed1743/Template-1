let nav = document.getElementById("nav");
window.addEventListener('scroll', ()=>{
    if(scrollY >= 200){
        nav.style.background = "linear-gradient(to right,white,#10cab7)";
    }
    else{
        nav.style.background = "transparent"
    }
})

let arrow = document.getElementById("arrow");
window.addEventListener('scroll' , ()=>{
    if(scrollY >= 1170){
        arrow.style.display = "block"
    }
    else{
        arrow.style.display = "none"
    }
})


