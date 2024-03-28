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
        event.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            activateLink(link); 
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

document.querySelectorAll('.act').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const targetModal = document.getElementById(targetId);
      targetModal.parentElement.classList.add('visible');
      targetModal.classList.add('visible');
    });
  });
  
  document.querySelectorAll('.cerrar').forEach(cerrarButton => {
    cerrarButton.addEventListener('click', () => {
      cerrarButton.closest('.content-wd').classList.remove('visible');
      cerrarButton.parentElement.classList.remove('visible');
    });
  });
//   https://www.strerr.com/index_es.html

  var videosList = [
    {
        title: "JQ - Los Gambino (ARABOTH:RP)",
        thumbnail: "https://img.youtube.com/vi/JWeWVS8mOAM/sd1.jpg",
        videoUrl:"https://youtu.be/JWeWVS8mOAM?si=U1otUwDWkxN0T4Z9",
    },

];

function createVideoArticle(video) {
    let article = document.createElement("article");
    article.className = "card-video";

    let img = document.createElement("img");
    img.src = video.thumbnail;
    img.className = "img-video";
    img.alt = "Thumbnail del video";

    let title = document.createElement("p");
    title.className = "title-videos";
    title.textContent = video.title;
    
    let link = document.createElement("a")
    link.href = video.videoUrl;
    link.alt = "link-video-youtube";
    
    article.appendChild(img);
    link.appendChild(img)
    article.appendChild(link);
    article.appendChild(title);
    
    return article;
}

var videosContainer = document.getElementById("content-videos");
let videosmodal = document.querySelector(".content-modal")

videosList.forEach(function(video) {
    var article = createVideoArticle(video);
    videosContainer.appendChild(article);
});

