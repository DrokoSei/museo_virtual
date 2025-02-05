const obras = [
    {
        titulo: "La Mona Lisa",
        artista: "Leonardo da Vinci",
        año: 1503,
        descripcion: "Retrato enigmático de una mujer con una sonrisa misteriosa.",
        imagen: "img/monalisa.jpg",
        tecnica: "Óleo sobre tabla de álamo",
        dimensiones: "77 cm × 53 cm"
    },
    {
        titulo: "La Noche Estrellada",
        artista: "Vincent Van Gogh",
        año: 1889,
        descripcion: "Paisaje nocturno con remolinos celestiales y un pueblo.",
        imagen: "img/nocheestrellas.jpg",
        tecnica: "Óleo sobre lienzo",
        dimensiones: "73.7 cm × 92.1 cm"
    }
    // Agrega más obras
];

function generarMuseo() {
    const museoContainer = document.getElementById('museo');
    
    obras.forEach((obra, index) => {
        const obraDiv = document.createElement('div');
        obraDiv.className = 'obra';
        obraDiv.style.backgroundImage = `url(${obra.imagen})`;
        obraDiv.setAttribute('data-index', index);
        
        const detalleDiv = document.createElement('div');
        detalleDiv.className = 'detalle-obra';
        detalleDiv.innerHTML = `
            <h3>${obra.titulo}</h3>
            <p>Artista: ${obra.artista}</p>
            <p>Año: ${obra.año}</p>
        `;
        
        obraDiv.appendChild(detalleDiv);
        obraDiv.addEventListener('click', mostrarDetalleObra);
        museoContainer.appendChild(obraDiv);
    });
}

function mostrarDetalleObra(event) {
    const index = event.currentTarget.getAttribute('data-index');
    const obra = obras[index];
    
    const modal = document.getElementById('modal');
    const modalDetalle = document.getElementById('modal-detalle');
    
    modalDetalle.innerHTML = `
        <h2>${obra.titulo}</h2>
        <img src="${obra.imagen}" style="max-width:100%; height:auto;">
        <p><strong>Artista:</strong> ${obra.artista}</p>
        <p><strong>Año:</strong> ${obra.año}</p>
        <p><strong>Descripción:</strong> ${obra.descripcion}</p>
        <p><strong>Técnica:</strong> ${obra.tecnica}</p>
        <p><strong>Dimensiones:</strong> ${obra.dimensiones}</p>
    `;
    
    modal.style.display = 'block';
}

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

generarMuseo();
