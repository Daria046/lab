const l = document.querySelector('.Nexe');
const p = document.querySelector('.bax');
const lol = document.querySelector('.slad_kine');
let cot = 0;
l.addEventListener('click', () => {
    
    cot += 100;
    if (cot > 100) {
        cot = 0;
    }
    
    lol.style.left = -cot + "%";
})
p.addEventListener('click', () => {
    
    cot -= 100;
    if (cot < 0) {
        cot = 100;
    }
    
    lol.style.left = -cot + "%";
})
setInterval(() => {
    cot += 100;
    if (cot > 100) {
        cot = 0;
    }
    
    lol.style.left = -cot + "%";
}, 4000);