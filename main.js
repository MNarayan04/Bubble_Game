var timer = 60;
var score = 0;
var rn = 0;

function makebub(){
    var clut = "";
for(var i=1;i<=207;i++)
{
    var r = Math.floor(Math.random()*10);
    clut+=`<div class="bubble">${r}</div>`;
}
document.querySelector("#bpanel").innerHTML=clut;
}


function runtimer(){
   var tt =  setInterval(function(){
        if(timer > 0)
        {
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            document.querySelector("#bpanel").innerHTML=`<h1>Game Over </h1>`;
            clearInterval(tt);
        }
    },1000);
}

function getnewhit()
{
     rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}  

document.querySelector("#bpanel").addEventListener("click",function(dets){
                            //give string
    // console.log(dets.target.textContent);
    // console.log(Number(dets.target.textContent));

    var clickednum = Number(dets.target.textContent);
    if(clickednum == rn)
    {
        increasescore();
        makebub();
        getnewhit();
    }
})

getnewhit();
runtimer();
makebub();