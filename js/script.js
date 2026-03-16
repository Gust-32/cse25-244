// Custom JavaScript for Pixel Brew

// Form validation styling
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Simple lightbox for gallery
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const src = this.src;
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = 0;
            modal.style.left = 0;
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = 1050;
            modal.innerHTML = `<img src="${src}" style="max-width:90%; max-height:90%; border:3px solid #ff44cc;">`;
            modal.addEventListener('click', () => document.body.removeChild(modal));
            document.body.appendChild(modal);
        });
    });
});