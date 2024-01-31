const noBtn = document.querySelector('#no');
noBtn.addEventListener("click", myFunction);

function myFunction(){
    let x = Math.floor(Math.random() * 1700);
    let y = Math.floor(Math.random() * 900);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}