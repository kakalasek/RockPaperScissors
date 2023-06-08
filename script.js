let idg;

document.querySelector("#go").addEventListener("click", start);

function start(){
        let opponentsPick = gen_rn_num(3);
        if(idg == 0 && opponentsPick == 1){
            document.querySelector("#leftpick").innerHTML = "ROCK"
            document.querySelector("#rightpick").innerHTML = "PAPER"
            document.querySelector("#rightstatus").innerHTML = "WIN"
        }
        else if(idg == 1 && opponentsPick == 2){
            document.querySelector("#leftpick").innerHTML = "PAPER"
            document.querySelector("#rightpick").innerHTML = "SCISSORS"
            document.querySelector("#rightstatus").innerHTML = "WIN"
        }
        else if(idg == 2 && opponentsPick == 0){
            document.querySelector("#leftpick").innerHTML = "SCISSORS"
            document.querySelector("#rightpick").innerHTML = "ROCK"
            document.querySelector("#rightstatus").innerHTML = "WIN"
        }
        else if(idg == 0 && opponentsPick == 2){
            document.querySelector("#leftpick").innerHTML = "ROCK"
            document.querySelector("#rightpick").innerHTML = "SCISSORS"
            document.querySelector("#leftstatus").innerHTML = "WIN"
        }
        else if(idg == 1 && opponentsPick == 0){
            document.querySelector("#leftpick").innerHTML = "PAPER"
            document.querySelector("#rightpick").innerHTML = "ROCK"
            document.querySelector("#leftstatus").innerHTML = "WIN"
        }
        else if(idg == 2 && opponentsPick == 1){
            document.querySelector("#leftpick").innerHTML = "SCISSORS"
            document.querySelector("#rightpick").innerHTML = "ROCK"
            document.querySelector("#leftstatus").innerHTML = "WIN"
        }
        else if(idg == opponentsPick){
            document.querySelector("#rightstatus").innerHTML = "DRAW"
            document.querySelector("#leftstatus").innerHTML = "DRAW"
        }
}

function setId(id){
    idg = id;
}

function gen_rn_num(max){
    return Math.floor(Math.random() * max)
}