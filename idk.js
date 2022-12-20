var y=[], x=[]
    for(let ix = 0; ix < 120; ix++)
        {
            document.getElementsByTagName("body")[0].innerHTML+=`<div class="yeah"></div>`
            y.push(500)
            x.push(500) 
        }     
        
    setInterval(() => {
        for(let ix = 0; ix < 120; ix++){
            //console.log((parseInt(document.getElementsByClassName("yeah")[ix].style.top)+ Math.random() * 10 -5)+"px")
            //console.log(x[ix])
            x[ix]+= Math.random() * 10 -5
            y[ix]+= Math.random() * 10 -5
            document.getElementsByClassName("yeah")[ix].style.top=x[ix]+"px"
            document.getElementsByClassName("yeah")[ix].style.left=y[ix]+"px"
            //document.getElementsByClassName("yeah")[0].style.transform=`translate(${x}px, ${y}px)`
        }
    }, 50);
    function villany(){
        document.getElementsByTagName("body")[0].classList.add("sotet")
    }