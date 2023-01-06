var y=[], x=[]
var idk=0

for(let ix = 0; ix < 120; ix++)
    {
        document.getElementsByTagName("body")[0].innerHTML+=`<div class="bogar"></div>`
        y.push(500)
        x.push(500) 
    }     
    
setInterval(() => {
    for(let ix = 0; ix < 120; ix++){
        //console.log((parseInt(document.getElementsByClassName("yeah")[ix].style.top)+ Math.random() * 10 -5)+"px")
        //console.log(x[ix])
        x[ix]+= Math.random() * 10 -5
        y[ix]+= Math.random() * 10 -5
        document.getElementsByClassName("bogar")[ix].style.top=x[ix]+"px"
        document.getElementsByClassName("bogar")[ix].style.left=y[ix]+"px"
        //document.getElementsByClassName("yeah")[0].style.transform=`translate(${x}px, ${y}px)`
    }
}, 50);
function villany(){
    document.getElementsByTagName("body")[0].classList.add("sotet")
}

function le(nth){
    if("rgb(255, 255, 0)"==window.getComputedStyle(
        document.getElementsByClassName("room")[nth] ,null).getPropertyValue('background-color'))
        {
            document.getElementsByClassName("room")[nth].style.backgroundColor="black"
            document.getElementsByTagName("li")[idk++].style.visibility="visible"
        }
}
