const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const tarjeta = document.getElementById('tarjeta');
const fraseDinamica = document.getElementById('frase-dinamica');
const fondo = document.getElementById('fondo-principal');
const fotoSnoopy = document.getElementById('foto-snoopy');

let tamañoSi = 1;

const frases = [
    "seguraaaaa",
    "muy seguraaa",
    "estas marcando no checa eso",
    "pero por que sigues apretando no",
    "me estas cogiendo de recocha",
    "bluey es mi perra favorita",
    ":C",
    "no se que mas decirte ",
    "solo aprieta que si",
    "ya esta el boton muy grande solo di que si y ya",
    "porfavor di que si",
    "dale si"
];

// Aquí agregué todas las fotos que tienes en tu carpeta de imágenes
const fotosTriste = [
    "img/eldedo.avif", 
    "img/fuc.jpg", 
    "img/hmm.jpg", 
    "img/ush.jpg"
]; 
const fotoFelizRuta = "img/Snoppy1.jpg"; // Ruta de la foto feliz

function moverBotonNo() {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    btnNo.style.position = 'fixed';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
}

// Esta función creará muchas fotos de Snoopy feliz en lugares aleatorios
function aparecerFotosFelices() {
    for (let i = 0; i < 15; i++) {
        const img = document.createElement('img');
        img.src = fotoFelizRuta;
        img.style.position = "fixed";
        img.style.width = "120px";
        // Posiciones aleatorias en toda la pantalla
        img.style.left = Math.random() * (window.innerWidth - 120) + "px";
        img.style.top = Math.random() * (window.innerHeight - 120) + "px";
        img.style.zIndex = "1"; // Debajo del texto principal
        img.style.borderRadius = "15px";
        img.style.transform = `rotate(${Math.random() * 40 - 20}deg)`; // Un toque de rotación para que se vea mejor
        document.body.appendChild(img);
    }
}

btnNo.addEventListener('click', () => {
    moverBotonNo();

    fondo.style.backgroundImage = "none";
    fondo.style.backgroundColor = "#d1d1d1"; // Fondo gris triste

    tamañoSi += 0.6;
    btnSi.style.transform = `scale(${tamañoSi})`;

    const fraseAzar = frases[Math.floor(Math.random() * frases.length)];
    fraseDinamica.innerText = fraseAzar;

    // Cambia la imagen de la tarjeta por una de las tristes que pediste
    fotoSnoopy.style.display = "block";
    fotoSnoopy.src = fotosTriste[Math.floor(Math.random() * fotosTriste.length)];
});

btnSi.addEventListener('click', () => {
    fondo.style.backgroundImage = "none";
    fondo.style.backgroundColor = "#ffc1e3"; // Fondo rosado

    // Llamamos a la función para llenar la pantalla de Snoopy1
    aparecerFotosFelices();

    // Mensaje final exacto
    tarjeta.innerHTML = `
        <h1 style="color: #ff4d6d; position: relative; z-index: 10;">Sabia que dirias que si TQM  somos ellos</h1>
        <img src="${fotoFelizRuta}" style="width: 180px; border-radius: 20px; position: relative; z-index: 10;">
    `;
});