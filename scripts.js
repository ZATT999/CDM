window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("header-an", window.scrollY > 0);
})

const links = document.querySelectorAll('.opt_header');

function activateLink(link) {
    links.forEach(link => {
        link.classList.remove('active');
        link.classList.remove('borde-rojo');
    });
    link.classList.add('active');
    link.classList.add('borde-rojo');
}

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        activateLink(link);
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('active');
    });

    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado de navegación
        const sectionId = link.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' }); // Desplazamiento suave a la sección
            activateLink(link); // Activa el enlace del menú después del desplazamiento
        }
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    links.forEach(link => {
        const sectionId = link.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activateLink(link);
            }
        }
    });
});

