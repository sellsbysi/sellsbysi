function openPaymentModal() {
    document.getElementById('payment-modal').style.display = 'block';
}

function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function processPayment() {
    const selectedPaymentMethod = document.querySelector('input[name="payment"]:checked').value;
    alert('Procesando pago con ' + selectedPaymentMethod);

    // Aquí puedes integrar con la API de PayPal, Stripe, etc.
    // Para PayPal, puedes usar su SDK de JavaScript: https://developer.paypal.com/docs/business/checkout/
    // Para Stripe, puedes usar su API de JavaScript: https://stripe.com/docs/js

    // Ejemplo de integración con PayPal:
    if (selectedPaymentMethod === 'paypal') {
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=@IsidroMP10&item_name=Producto&amount=249.00&currency_code=USD';
    }

    // Cierra el modal después de procesar el pago
    closePaymentModal();
}
