function raining() {
    let clouds = document.querySelector('.clouds');
    let r = document.createElement('div');
    let left=Math.floor(Math.random()*240);
    let width=Math.floor(Math.random()*2);
    let height=Math.floor(Math.random()*40);
    let duration= Math.random()*0.5;
    r.classList.add('drops');
    clouds.appendChild(r);
    r.style.left=left+'px';
    r.style.width=0.5+width+'px';
    r.style.height=0.5+height+'px';
    r.style.animationDuration=1+duration+'s';
    setTimeout(function () {
        clouds.removeChild(r);
    }, 2000);
}
setInterval(function () {
    raining()
}, 40);