/**
 * Muestra una alerta con información del usuario.
 * Esta función ya estaba referenciada en tu HTML.
 * @param {number} user_id - El ID del usuario.
 */
// --- Mostrar alerta de contacto ---
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