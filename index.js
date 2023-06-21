window.addEventListener('keydown', function(e){
const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
const key  = document.querySelector(`.key[data-key='${e.keyCode}']`);
if(!audio) return
audio.currentTime = 0
audio.play()
key.classList.add('playing')
console.log(key)
});

function removeTransition(e){
    if(e.propertyName != 'transform') return
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))




//For the mobile version

    let click1 = document.getElementById('1')
    click1.addEventListener('click', function(){
        let S1 = document.getElementById('snare')
        S1.currentTime = 0
        S1.play()
    })
   
    let click2 = document.getElementById('2')
    click2.addEventListener('click', function(){
        let S2 = document.getElementById('kick')
        S2.currentTime = 0
        S2.play()
    })

    let click3 = document.getElementById('3')
    click3.addEventListener('click', function(){
        let S3 = document.getElementById('hihat')
        S3.currentTime = 0
        S3.play()
    })

    let click4 = document.getElementById('4')
    click4.addEventListener('click', function(){
        let S4 = document.getElementById('bass')
        S4.currentTime = 0
        S4.play()
    })

 














