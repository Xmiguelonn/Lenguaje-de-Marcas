const botonAMD = document.getElementById('botonAMD');
const botonINTEL = document.getElementById('botonINTEL');
const AMDextra = document.getElementById('AMDextra');
const INTELextra = document.getElementById('INTELextra');

botonAMD.addEventListener('click', () => {
    AMDextra.style.display = 'none';
    INTELextra.style.display = 'block';
});

botonINTEL.addEventListener('click', () => {
    AMDextra.style.display = 'block';
    INTELextra.style.display = 'none';
});