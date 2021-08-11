document.addEventListener("DOMContentLoaded", () =>{

    document.addEventListener("click", e =>{
        if( e.target.matches(".menu") ){
            const $nav = document.querySelector(".nav");
            $nav.classList.toggle("nav-active");
        }
    });
});