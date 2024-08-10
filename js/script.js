// Inicializa o índice atual da imagem como 0
//Criando uma variável 
let currentIndex = 0;

// Seleciona todos os itens do carrossel
const items = document.querySelectorAll('.carousel-item'); //nome dado no html - a classe do nosso carrossel
const totalItems = items.length; // Obtém o número total de itens (length-todos os elementos)

// Função para atualizar os itens visíveis no carrossel
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index >= currentIndex && index < currentIndex + 2) {
            item.classList.add('active');
        }
    });
}


//Fazer isso nas 2 setas - direita e esquerda - utilizar o evento click
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 2) % totalItems; // Incrementa o índice em 2 e faz o loop, ou seja, vai passando de 2 em 2 fotos 
    updateCarousel(); // Método criado acima para ir atualizar os itens
});


document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 2 + totalItems) % totalItems; // Decrementa o índice em 2 
    updateCarousel(); // Atualiza os itens visíveis
});

// Inicializa o carrossel mostrando as 2 fotos iniciais 
updateCarousel();




//Parte do Form
//Obrigatório o preenchimento 
//Usar o alert 


document.getElementById("contatos-form").addEventListener("submit", function(event) {
    

    // Valida se todos os campos obrigatórios estão preenchidos
    let form = document.getElementById("contatos-form");
    let isValid = form.checkValidity();

    if (isValid) {
        // Limpa o formulário
        form.reset();

        // Exibe o alerta de sucesso
        alert("Enviado com Sucesso!"); /*quandos todos os dados forem preechidos */
    } 
});


