/**
 * Muestra una alerta con información del usuario.
 * Esta función ya estaba referenciada en tu HTML.
 * @param {number} user_id - El ID del usuario.
 */
// --- Mostrar alerta de contacto ---

let projects = [
    {
        title: "Aplicación en Python: Gestor de tareas",
        date: "2025",
        details: `<p>He desarrollado una aplicación en Python que opera como un administrador de tareas en entorno de consola. Esta herramienta permite al usuario crear, visualizar y gestionar múltiples tareas de manera eficiente desde la línea de comandos. Para asegurar la persistencia de la información, cada tarea registrada se almacena en un archivo con formato JSON, lo que facilita el acceso externo a los datos, su organización estructurada y su posible integración con otros sistemas. Esta implementación no solo simplifica la gestión personal de actividades, sino que también demuestra una aplicación práctica de manejo de datos en Python mediante estructuras dinámicas y almacenamiento no relacional.</p>`,
        links: [
            {
                url: "https://github.com/darksea48/python-funciones/tree/master/M3-Evaluacion%20Modulo",
                text: "Repositorio en GitHub"
            }
        ]
    },
    {
        title: "Sitio Web de Enseñanza sobre Ciberseguridad",
        date: "2025",
        details: `<p>Desarrollé un sitio web educativo sobre ciberseguridad, utilizando HTML, CSS y JavaScript. El sitio incluye recursos interactivos y guías para mejorar la seguridad en línea. El objetivo esencial del sitio es proprocionar a los visitantes información valiosa sobre los conceptos y consejos prácticos sobre Ciberseguridad. Presenta contenido claro y accesible para principiantes, abordando temas esenciales como buenas prácticas de navegación, protección de contraseñas y detección de amenazas comunes. La estructura del sitio está pensada para guiar al visitante de forma sencilla, con secciones bien definidas y lenguaje comprensible. Además de cumplir con los objetivos educativos del módulo, el proyecto sirve como evidencia del aprendizaje adquirido en diseño web, organización de contenidos y comunicación de información técnica de manera pedagógica.</p>`,
        links: [
            {
                url: `https://github.com/darksea48/M2-Evaluacion-Modulo.git`,
                text: `Repositorio en GitHub`
            },
            {
                url: `https://m2-evaluacion-modulo.vercel.app/`,
                text: `Sitio Web`
            }
        ]
    },
    {
        title: "Photobook Personal Mis Gatos",
        date: "2025",
        details: `Sitio web desarrollado como parte de un proyecto personal, diseñado para servir como vitrina digital de las imágenes almacenadas para este photobook. Incluye una galería de imágenes personales de mis gatos, cuidadosamente seleccionadas y organizadas, que permite a los visitantes explorar diferentes fotografías o ilustraciones de forma sencilla y atractiva. El diseño busca ser limpio y funcional, destacando los elementos visuales sin distracciones innecesarias. Además, el proyecto refleja interés por experimentar con tecnologías web modernas, buenas prácticas de maquetación y una experiencia de usuario fluida, convirtiéndose en una muestra del estilo y las habilidades del creador.`,
        links: [
            {
                url: `https://github.com/darksea48/my-first-photobook.git`,
                text: `Repositorio en GitHub`
            },
            {
                url: `https://my-first-photobook.vercel.app/`,
                text: `Sitio Web`
            }
        ]
    },
    {
        title: `Landing Page Restobar Itaka <span class="fsi-italic">(en desarrollo)</span>`,
        date: `<span class="fst-italic">En desarrollo</span>`,
        details: `La propuesta consiste en el desarrollo de una landing page de alto impacto visual orientada a la promoción del restaurante Itaka. Esta página web estará diseñada con un enfoque en la conversión, utilizando una estructura responsive y elementos UI/UX optimizados para atraer y retener la atención del usuario. Incluirá una presentación destacada del concepto gastronómico del restaurante, su identidad visual (logo, paleta de colores, tipografías) y una llamada a la acción clara para reservas o contacto. El objetivo principal será ofrecer una experiencia de navegación fluida que transmita la esencia de Itaka y motive al visitante a visitar el local o realizar una reserva.`,
        links: []
    }
];
let works = [
    {
        title: "Programador de Encuestas",
        place: "CADEM",
        date_start: "Ago 2020",
        date_end: "Actualidad",
        details: `Desarrollo y programación de encuestas online en Limesurvey, asegurando calidad, experiencia de usuario y correcto formato de datos, utilizando JavaScript, jQuery y HTML/CSS. Gestión de panelistas y envío de correos masivos con Sendgrid. Además, edición de imágenes y videos para encuestas con Adobe Photoshop y Premiere, entre otros.`
    },
    {
        title: "Técnico en Soporte",
        place: "Facultad de Veterinaria - Universidad de Chile",
        date_start: "May 2018",
        date_end: "Jun 2020",
        details: `Gestión técnica y soporte computacional en la Facultad de Ciencias Veterinarias y Pecuarias de la Universidad de Chile. Mantención de software y hardware, instalación de cámaras de vigilancia y puntos de red, manejo de servidores Windows y bases de datos SQL/MySQL. Desarrollo web en PHP, HTML, CSS y JavaScript, además de configuración de correos electrónicos y gestión de infraestructura tecnológica.`
    },
    {
        title: "Técnico Encargado de Laboratorio de Computación",
        place: "Departamento de Ingeniería en Obras Civiles - Universidad de Santiago",
        date_start: "Abr 2016",
        date_end: "May 2018",
        details: `Gestión administrativa y técnica en el Laboratorio de Computación, incluyendo supervisión de servidores, equipos y redes. Soporte técnico y desarrollo web en HTML, CSS, PHP, WordPress y MySQL. Además, diseño gráfico con la Suite Adobe, abarcando Photoshop, InDesign, Illustrator y Premiere.`
    }
];
let educations = [
    {
        title: "Bootcamp Desarrollo de Aplicaciones Web Full Stack Python Trainee",
        place: "Skillnest by Coding Dojo Latam",
        date_start: "May 2025",
        date_end: "Nov 2025",
        details: `Aprendizaje en Front-end (HTML/CSS/JavaScript) y Back-end (Python, Django, SQL)`
    },
    {
        title: "Técnico en Programación Computacional",
        place: "Instituto Profesional AIEP",
        date_start: "2014",
        date_end: "2016",
        details: `Título de Educación Superior, en las cuales se adquirieron competencias en HTML, CSS, JavaScript, PHP, SQL (MS Server y MySQL), asp.net, entre otros.`
    }
];

function printProject(project) {
  const contenedor = document.querySelector("#proyectos")
  contenedor.innerHTML = ""

  project.forEach(({ title, date, details, links }) => {
    const card = document.createElement("div")
    card.className = "box-section-item"

    // Generar HTML para los links si existen
    let linksHtml = '';
    if (links && links.length > 0) {
        linksHtml = `
            <div class="project-links">
                <p class="fw-medium mb-1">Links del proyecto:</p>
                <ul>
                    ${links.map(link => `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a></li>`).join('')}
                </ul>
            </div>
        `;
    }
    card.innerHTML = `
            <p class="fw-bold box-section-degree">${title}</p>
            <p class="text-muted box-section-date">${date}</p>
            <p class="box-section-details">${details}</p>
            ${linksHtml}
        `
    contenedor.appendChild(card)
  })
}

function printWorkEducation(dicc, container) {
  const contenedor = document.querySelector(`#${container}`)
  contenedor.innerHTML = ""

  dicc.forEach(({ title, place, date_start, date_end, details }) => {
    const card = document.createElement("div")
    card.className = "box-section-item"

    card.innerHTML = `
            <p class="fw-bold box-section-degree"><span class="fst-italic">${place}</span> - ${title}</p>
            <p class="text-muted box-section-date">${date_start} - ${date_end}</p>
            <p class="box-section-details">${details}</p>
        `
    contenedor.appendChild(card)
  })
}

printProject(projects)
printWorkEducation(works, "experiencia")
printWorkEducation(educations, "educacion")




function showAlert(user_id) {
    let users = {
        1: {
            title: "Valeria Jara",
            html: `<p>Lorem Ipsum - <span class="fst-italic">Lorem Ipsum</span></p>
            <p class="fw-medium mb-1 text-decoration-underline">Datos de contacto:</p>
            <p class="mb-0">Teléfono: <a href='tel:+56912345678'>+56 9 1234 5678</a></p>
            <p class="mb-0">Correo: <a href='#'>jane@doe.com</a></p>
            <p class="mb-0">LinkedIn: <a href='https://www.linkedin.com/in/valeria-jara-bugue%C3%B1o-364591268/' target='_blank'>Valeria Jara Bugueño</a></p>`
        },
        2: {
            title: "Cristian Astudillo",
            html: `<p>Lorem Ipsum - <span class="fst-italic">Lorem Ipsum</span></p>
            <p class="fw-medium mb-1 text-decoration-underline">Datos de contacto:</p>
            <p class="mb-0">Teléfono: <a href='tel:+56987654321'>+56 9 8765 4321</a></p>
            <p class="mb-0">Correo: <a href='#'>john@doe.com</a></p>
            <p class="mb-0">LinkedIn: <a href='https://www.linkedin.com/in/crastudillo/' target='_blank'>Cristian Astudillo B.</a></p>`
        },
        3: {
            title: "Gerard Bourguett",
            html: `<p>Lorem Ipsum - <span class="fst-italic">Lorem Ipsum</span></p>
            <p class="fw-medium mb-1 text-decoration-underline">Datos de contacto:</p>
            <p class="mb-0">Teléfono: <a href='tel:+56911223344'>+56 9 1122 3344</a></p>
            <p class="mb-0">Correo: <a href='#'>john@doe.com</a></p>
            <p class="mb-0">LinkedIn: <a href='https://www.linkedin.com/in/gerard-bourguett/' target='_blank'>Gerard Bourguett</a></p>`
        },
        4: {
            title: "Emilio Villegas",
            html: `<p>Jefe de Procesamiento de Datos - <span class="fst-italic">Cadem</span></p>
            <p class="fw-medium mb-1 text-decoration-underline">Datos de contacto:</p>
            <p class="mb-0">Teléfono: <a href='tel:+56948519911'>+56 9 4851 9911</a></p>
            <p class="mb-0">Correo: <a href='mailto:emilio.villegas@cadem.cl'>emilio.villegas@cadem.cl</a></p>
            <p class="mb-0">LinkedIn: <a href='https://www.linkedin.com/in/emilio-villegas-755251a5/' target='_blank'>Emilio Villegas</a></p>`
        },
        5: {
            title: "Sergio Poblete",
            html: `<p>Jefe de Personal - <span class="fst-italic">Facultad de Ciencias Veterinarias y Pecuarias Universidad de Chile</span></p>
            <p class="fw-medium mb-1 text-decoration-underline">Datos de contacto:</p>
            <p class="mb-0">Teléfono: <a href='tel:+56979839392'>+56 9 7983 9392</a></p>`
        },
        6: {
            title: "Luis Vega",
            html: `<p>Supervisor de URP - <span class="fst-italic">Banco de Chile</span></p>
            <p class="fw-medium mb-1 text-decoration-underline">Datos de contacto:</p>
            <p class="mb-0">Teléfono: <a href='tel:+56930221394'>+56 9 3022 1394</a></p>
            <p class="mb-0">Correo: <a href='mailto:levega@bancochile.cl'>levega@bancochile.cl</a></p>`
        },
        7: {
            title: "Joaquín Gonzalez",
            html: `<p>Programador Web de Encuestas - <span class="fst-italic">Cadem</span></p>
            <p class="fw-medium mb-1 text-decoration-underline">Datos de contacto:</p>
            <p class="mb-0">Teléfono: <a href='tel:+56930221394'>+56 9 3022 1394</a></p>
            <p class="mb-0">Correo: <a href='mailto:joaquin.gonzalez@cadem.cl'>joaquin.gonzalez@cadem.cl</a></p>`
        }
    };
    const user = users[user_id];
    if (user) {
        Swal.fire({
            title: user.title,
            html: user.html,
            confirmButtonText: 'Cerrar'
        });
    }
}

// --- Lógica de solicitudes y conexiones con jQuery ---
$(document).ready(function() {
    const $requestsCount = $('#n-requests');
    const $connectionsCount = $('#n-conns');
    const $connectionRequests = $('.sidebar-card').first();
    const $connectionsList = $('.your-connections-list');

    function decreaseRequests() {
        let current = parseInt($requestsCount.text());
        $requestsCount.text(current - 1);
    }
    function increaseConnections() {
        let current = parseInt($connectionsCount.text());
        $connectionsCount.text(current + 1);
    }

    $connectionRequests.on('click', '.accept-button, .decline-button', function(e) {
        const $btn = $(this);
        const $item = $btn.closest('.connection-request-item');
        if ($btn.hasClass('accept-button')) {
            decreaseRequests();
            increaseConnections();
            // Obtener datos
            const $img = $item.find('img').clone();
            const name = $item.find('span').text();
            const userIndex = $connectionsList.children('a').length + 1;
            // Crear nuevo contacto
            const $a = $(`<a href=\"#\" onclick=\"showAlert(${userIndex});\" class=\"list-group-item list-group-item-action d-flex align-items-center\"></a>`);
            $a.append($img.addClass('rounded-circle border me-2'));
            $a.append($('<span>').text(name));
            $a.on('click', function(ev) { ev.preventDefault(); showAlert(userIndex); });
            $connectionsList.append($a);
            $item.remove();
        } else if ($btn.hasClass('decline-button')) {
            decreaseRequests();
            $item.remove();
        }
    });

    // Delegación para los contactos existentes
    $connectionsList.on('click', 'a', function(e) {
        e.preventDefault();
        // Obtener índice del contacto según el orden (1-indexed)
        const idx = $(this).index() + 1;
        showAlert(idx);
    });
});