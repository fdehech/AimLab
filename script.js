const body = document.body

let start = () => {
    load.play();
    cls();
    countdown(3,GAMEON);
}

let startbtn = Object.assign(document.createElement("span"),{onclick:start});
startbtn.innerText="Start";
startbtn.classList.add("Start");
startbtn.classList.add("Landing");
body.append(startbtn);



let ball = document.createElement("span");
ball.classList.add("Bullseye")
ball.style.width='75px';
ball.style.height='75px';
ball.setAttribute("onmouseenter","Increment()");
body.append(ball);


let Diff=700;
let Score = 0;
let ScoreBoard=document.createElement("span");
ScoreBoard.classList.add("Score");
ScoreBoard.innerText=Score;
let count = document.createElement('p');
count.classList.add("Countdown");

let shot = new Audio('shot.mp3');
let load = new Audio('load.mp3');


let X,Y;
let cls = () => {
    while(body.querySelector(".Landing")){
        body.querySelector(".Landing").remove();
    }

}

let random = (min,max) =>  {
    return (Math.floor((Math.random())*(max-min+1))+min);
}

let countdown = (time,callback) => {

    count.innerText=time;
    body.append(count);
    if(time==0){
        count.remove();
        callback();
        return 0;
    }
    
    setTimeout(() => {
        countdown(time - 1,callback);
    }, 1000); 
}



let GAMEON = () => {
    body.append(ScoreBoard);
    Bullseye();
}

let Bullseye = () => {

    X=random(0,1400);
    Y=random(0,680);
    ball.remove();
    ball.style.visibility='visible';
    ball.style.left= String(X) + "px";
    ball.style.top= String(Y) + "px";
    body.append(ball);
    setTimeout(() => {
        ball.remove();
        setTimeout(()=>{
            Bullseye();
        },350);
    },Diff);

}
let Increment = () => {
    shot.play();
    Score++;
    ScoreBoard.innerText=Score;
    ball.remove();
    if (Score == 10){
        Diff=600;
        ball.style.width='60px';
        ball.style.height='60px';
    }
    else if (Score == 20){
        Diff=580;
        ball.style.width='55px';
        ball.style.height='55px';
    }
    else if (Score == 30){
        Diff=540;
        ball.style.width='50px';
        ball.style.height='50px';
    }
    else if (Score == 40){
        ball.style.width='45px';
        ball.style.height='45px';
    }
    else if (Score == 50){
        Diff=520;
        ball.style.width='40px';
        ball.style.height='40px';
    }
    else if (Score == 60){
        Diff=510;
        ball.style.width='35px';
        ball.style.height='35px';
    }
    else if (Score == 70){
        Diff=500;
        ball.style.width='30px';
        ball.style.height='30px';
    }
    else if (Score == 80){
        Diff=500;
        ball.style.width='20px';
        ball.style.height='20px';
    }else if (Score == 100){
        Diff=480;
        ball.style.width='15px';
        ball.style.height='15px';
    }
}
