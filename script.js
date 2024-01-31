const noBtn = document.querySelector('#no');
noBtn.addEventListener("click", moveNo);

function moveNo(){
    addImg();    
    setTimeout(() => {
        const find = document.querySelector('.gif');
        find.remove();
        clearTimeout;
    }, 750);
    let x = Math.floor(Math.random() * 1700);
    let y = Math.floor(Math.random() * 850);
    noBtn.style.duration = '0s';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.transition=" all 0s"

}

function addImg(){
    const container = document.getElementsByClassName('btn');
    let img = document.createElement('img');
    img.className = 'gif';
    img.src = 'images/explosion.gif';
    let rect = document.getElementById('no').getBoundingClientRect();
    img.style.position = 'absolute';
    img.style.top = rect.top - 250 +'px';
    img.style.left = rect.left - 30 +'px';
    img.style.scale = '1.5';
    document.getElementById('root').appendChild(img);
    container.innerHTML = "Image Element Added";
}

