alert('Bem-vindo(a)!!!')


const setaVoltar = document.querySelector('.seta-voltar');
const setaAvancar = document.querySelector('.seta-avancar');
const slides = document.querySelectorAll('.slide');

let slideAtual = 0;

function mostrarSlide(indice) {
    slides.forEach(slide => slide.classList.remove('mostrar'));
    slides[indice].classList.add('mostrar');
}

setaAvancar.addEventListener('click', () => {
    if (slideAtual === slides.length - 1) return;
    slideAtual++;
    mostrarSlide(slideAtual);
    setaVoltar.classList.toggle('opacidade', slideAtual === 0);
    setaAvancar.classList.toggle('opacidade', slideAtual === slides.length - 1);
});

setaVoltar.addEventListener('click', () => {
    if (slideAtual === 0) return;
    slideAtual--;
    mostrarSlide(slideAtual);
    setaVoltar.classList.toggle('opacidade', slideAtual === 0);
    setaAvancar.classList.toggle('opacidade', slideAtual === slides.length - 1);
});