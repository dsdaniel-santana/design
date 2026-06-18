document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTO 1: SISTEMA DO ACCORDION (Executa apenas se existir na página) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const currentItem = this.parentElement;
                const content = this.nextElementSibling;

                // Fecha outros itens ativos
                document.querySelectorAll('.accordion-item').forEach(item => {
                    if (item !== currentItem && item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });

                // Abre/Fecha o item atual
                currentItem.classList.toggle('active');

                if (currentItem.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = null;
                }
            });
        });
    }

    // --- ELEMENTO 2: SISTEMA DO SLIDER (Executa apenas se o elemento existir) ---
    const sliderElement = document.getElementById('pdf-slider');
    if (sliderElement) {
        new Splide('#pdf-slider', {
            type       : 'slide',
            perPage    : 1,
            pagination : true,
            arrows     : true,
        }).mount();
    }

    // --- ELEMENTO 3: TRAVAS DE PROTEÇÃO GLOBAL ---
    
    // Bloqueia clique com botão direito
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Impede o arrasto de qualquer imagem
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });

    // Bloqueia atalhos de teclado (Salvar, Imprimir, Código Fonte e DevTools)
    document.addEventListener('keydown', (e) => {
        if (
            (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u' || e.key === 'c')) || 
            e.key === 'F12'
        ) {
            e.preventDefault();
        }
    });
});