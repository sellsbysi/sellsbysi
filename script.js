// Función para mostrar el contenido principal después de la animación
window.onload = function() {
    init3DPlanet();
    setTimeout(function() {
        document.getElementById('intro-animation').classList.add('fade-out');
        setTimeout(function() {
            document.getElementById('intro-animation').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 3000); // Tiempo de la animación de desaparición progresiva
    }, 5000); // Cambia este valor para ajustar la duración de la animación
};

function openPaymentModal(price) {
    document.getElementById('payment-modal').style.display = 'block';
    document.getElementById('payment-form').dataset.price = price;
}

function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function openContactModal() {
    document.getElementById('contact-modal').style.display = 'block';
}

function closeContactModal() {
    document.getElementById('contact-modal').style.display = 'none';
}

function processPayment() {
    const form = document.getElementById('payment-form');
    const price = form.dataset.price;
    const fullname = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const nationality = document.getElementById('nationality').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Aquí puedes integrar con la API de PayPal, Stripe, etc.
    // Para PayPal, puedes usar su SDK de JavaScript: https://developer.paypal.com/docs/business/checkout/
    // Ejemplo de integración con PayPal:
    if (paymentMethod === 'paypal') {
        window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=@IsidroMP10&item_name=Producto&amount=${price}&currency_code=USD`;
    } else {
        alert(`Procesando pago de $${price} con ${paymentMethod}`);
    }

    // Aquí puedes enviar los detalles del pago a tu servidor para procesar el pago con otros métodos.
    closePaymentModal();
}

function init3DPlanet() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('planet-container').appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const texture = new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        planet.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();
}
