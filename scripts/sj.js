if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    document.body.classList.add("dark");
else
    document.body.classList.add("light");
function katt(nth){
    
    for(let ix=0; ix<2;ix++)
        document.getElementsByClassName("card")[ix].classList.remove("megjelen")
    document.getElementsByClassName("card")[nth].classList.add("megjelen")
}

function mozog(nth){
    var hossz = document.getElementsByClassName("card")[nth].clientWidth; 
    var magas = document.getElementsByClassName("card")[nth].clientHeight; 
    document.body.style.setProperty('--egerX', ((document.getElementsByClassName("card")[nth].offsetLeft+hossz/2)-event.clientX)/(hossz/2)*20+"deg");
    document.body.style.setProperty('--egerY', ((document.getElementsByClassName("card")[nth].offsetTop+magas/2)-event.clientY)/(magas/2)*-20+"deg");
}