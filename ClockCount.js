let secondEle= document.getElementById('second')
let tensEle= document.getElementById('tens')
let second= 0
let tens= 0
let temp
function mainStart() {
    tens++
    if(tens<=9){
        tensEle.innerHTML= '0' +tens
    }
    if(tens>9) {
        tensEle.innerHTML= tens
    }
    if(tens >99) {
        tens=0
        second++
    }
    if(second<=9) {
        secondEle.innerHTML= '0' + second
    }
    if(second>9) {
        secondEle.innerHTML= second
    }
}

function start() {
    clearInterval(temp)
    temp = setInterval(mainStart, 10)
}

function stop() {
    clearInterval(temp)
}

function reset() {
    clearInterval(temp)
    second= 0
    tens=0 
    secondEle.innerHTML= '0'+second
    tensEle.innerHTML= '0' +tens
}

