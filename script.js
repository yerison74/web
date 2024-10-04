document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // WhatsApp number
    const whatsappNumber = "+18091234567"; // Replace with your actual WhatsApp number

    // Function to open WhatsApp chat
    function openWhatsAppChat(service = "") {
        let message = "Hola, me gustaría reservar";
        if (service) {
            message += ` un servicio de ${service}`;
        }
        message += " en Beauty Center.";
        
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // Main WhatsApp button
    document.getElementById('whatsapp-main').addEventListener('click', () => openWhatsAppChat());

    // Service-specific WhatsApp buttons
    document.querySelectorAll('.btn-whatsapp').forEach(button => {
        button.addEventListener('click', (e) => {
            const service = e.target.closest('.service-card').querySelector('h3').textContent;
            openWhatsAppChat(service);
        });
    });

    // Form submission
    document.getElementById('consultation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send this data to your server
        // For this example, we'll just log it to the console
        const formData = new FormData(this);
        console.log("Form submitted with the following data:");
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }

        // Clear the form
        this.reset();

        // Show a success message (in a real app, you'd do this after successful server response)
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    });
});
