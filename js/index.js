const html = document.querySelector('html');
html.style.fontSize = window.getComputedStyle(html).fontSize;

const media_querie = () => {
    if (screen.width < 768) {
        html.classList.remove('tablet', 'desktop');
        html.classList.add('mobile');
    } else if (screen.height >= 768 && screen.width < 1024) {
        html.classList.remove('mobile', 'desktop');
        html.classList.add('tablet');
    } else {
        html.classList.remove('mobile', 'tablet');
        html.classList.add('desktop');
    }
}

media_querie();
window.addEventListener('resize', media_querie);