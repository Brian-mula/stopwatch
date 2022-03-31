window.onload=function(){
    const time_el=document.querySelector('.time')
    const starBtn=document.getElementById('start')
    const stopBtn=document.getElementById('stop')
    const restartBtn=document.getElementById('restart')

// constants
    let seconds=0
    let interval=null


starBtn.addEventListener('click',startTimer)
stopBtn.addEventListener('click',stopTimer)
restartBtn.addEventListener('click',resetTimer)

// ?set timer function
    function timer(){
    seconds++
    let hrs=Math.floor(seconds/3600)
    let mins=Math.floor((seconds -(hrs * 3600 ))/60)
    let sec=seconds%60;

    if(sec<10)sec='0'+sec
    if(mins<10)mins='0'+mins
    if(hrs<10)hrs='0'+hrs
    
    

    time_el.innerText=`${hrs} : ${mins} : ${sec}`

}
timer()

// start function
function startTimer(){
    if(interval){
        return
    }
    interval=setInterval(timer,1000)
}
// stop function
function stopTimer(){
    clearInterval(interval);
    interval=null
}
function resetTimer(){
    stopTimer()
    seconds=0
    time_el.innerText='00 : 00 : 00'
}
}