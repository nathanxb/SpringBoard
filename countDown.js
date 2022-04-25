//countdown function
function countDown(seconds) {
//conditional with anonymous function
    let timer = setInterval(function(){
        seconds--; //subtract by 1 per interval
        if(seconds <= 0){
            clearInterval(timer); //stop interval once hitting zero
            console.log("DONE!"); //must say done at 0
        } else
            console.log(seconds)
    }, 1000) //time interval (1000ms = 1second)
}

//randomGame Function
function randomGame() {
//random number between 0 and 1 every 1000ms (milliseconds)
    let num; //to recall later to equate conditional of being greater than .75
    let counter = 0 //counter
    let numSelector = setInterval(function(){
        num = Math.random(); //number 0-1
        console.log(num);
//each random number needs to add 1 to counter
        counter++ //keeps track of each execution
        if(num > .75){
            clearInterval(numSelector);
           if(counter === 1){
                console.log(`It only took ${counter} try to  get > .75!`)
            } else {
 //if number is greater than .75 stop timer and console.log number of tries to get above .75
            console.log(`It took ${counter} tries to get > .75`) 
        }
    }, 1000)
}
