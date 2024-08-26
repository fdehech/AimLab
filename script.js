let X,Y;
const body = document.body
const shot = new Audio('shot.mp3');
const load = new Audio('load.mp3');

var Diff=700;
var Score = 0;

var ScoreBoard=Object.assign(document.createElement("span"),{
    className:"Score",
    innerText:Score
});
let count = Object.assign(document.createElement('p'),{
    className:'Countdown'
});

const cls = () => {
    while(body.querySelector(".Landing")){
        body.querySelector(".Landing").remove();
    }
}

const random = (min,max) =>  {
    return (Math.floor((Math.random())*(max-min+1))+min);
}

let start = () => {
    load.play();
    cls();
    countdown(3,starting = () =>{
        body.append(ScoreBoard);
        Bullseye();
    });
}

let startbtn = Object.assign(document.createElement("span"),{
    onclick:start,
    className: "Start Landing",
    innerText:"Start"
});
body.append(startbtn);

let Increment = () => {
    shot.play();
    Score++;
    ScoreBoard.innerText=Score;
    ball.remove();
    switch (Score) {
        case 10:
            Diff = 600;
            ball.style.width = '60px';
            ball.style.height = '60px';
            break;
        case 20:
            Diff = 580;
            ball.style.width = '55px';
            ball.style.height = '55px';
            break;
        case 30:
            Diff = 540;
            ball.style.width = '50px';
            ball.style.height = '50px';
            break;
        case 40:
            ball.style.width = '45px';
            ball.style.height = '45px';
            break;
        case 50:
            Diff = 520;
            ball.style.width = '40px';
            ball.style.height = '40px';
            break;
        case 60:
            Diff = 510;
            ball.style.width = '35px';
            ball.style.height = '35px';
            break;
        case 70:
            Diff = 500;
            ball.style.width = '30px';
            ball.style.height = '30px';
            break;
        case 80:
            Diff = 500;
            ball.style.width = '20px';
            ball.style
    
    }
}


let ball = Object.assign(document.createElement("span"),{
    className:"Bullseye",
});
Object.assign(ball.style, {
    width: '75px',
    height: '75px'
});
ball.addEventListener("mouseover",Increment);
body.append(ball);


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


