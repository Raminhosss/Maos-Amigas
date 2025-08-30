// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicialização global do Swiper (fora do modal)
const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function openModal(produto) {
    document.getElementById('produto-modal-bg').style.display = "block";
    document.getElementById('produto-modal').style.display = "block";
    document.body.classList.add('modal-aberto');

    switch (produto) {
        case 'canon-sx540hs':
            document.getElementById('produto-titulo').innerText = 'Canon SX540HS';
            document.getElementById('produto-descricao').innerText =
                'A minha companheira de confiança para capturar cada detalhe.\nCom um poderoso zoom ótico de 50x, esta câmara permite-me fotografar desde planos próximos até paisagens distantes com nitidez impressionante.\nGrava em Full HD, tem Wi-Fi integrado para partilha rápida e é super confortável de usar — mesmo em dias de trabalho intensos.';
            document.getElementById('produto-link').href = '[Link de Afiliado Produto 1]';
            break;
        case 'produto2':
            document.getElementById('produto-titulo').innerText = '[Nome do Produto 2]';
            document.getElementById('produto-descricao').innerText = '[Breve descrição do Produto 2]';
            document.getElementById('produto-link').href = '[Link de Afiliado Produto 2]';
            break;
        default:
            document.getElementById('produto-titulo').innerText = 'Produto não encontrado';
            document.getElementById('produto-descricao').innerText = 'Descrição não disponível.';
            document.getElementById('produto-link').href = '#';
            break;
    }

    // Inicializar o Swiper dentro do modal
    new Swiper(".swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

// Abrir modal ao clicar no botão
document.querySelectorAll('.saiba-mais-btn').forEach(button => {
    button.addEventListener('click', function () {
        const produto = this.getAttribute('data-produto');
        openModal(produto);
    });
});

// Fechar modal
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('produto-modal').style.display = "none";
    document.getElementById('produto-modal-bg').style.display = "none";
    document.body.classList.remove('modal-aberto');
});

// Fechar ao clicar fora
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('produto-modal-bg')) {
        document.getElementById('produto-modal').style.display = "none";
        document.getElementById('produto-modal-bg').style.display = "none";
        document.body.classList.remove('modal-aberto');
    }
});
