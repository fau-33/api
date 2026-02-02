document.addEventListener('DOMContentLoaded', () => {
  const messageContainer = document.getElementById('message-container');
  const loader = document.getElementById('loader');
  const messageElement = document.getElementById('daily-message');


  if (messageElement) {
    fetch('/api/mensagem')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          loader.style.display = 'none';
          messageElement.textContent = `"${data.mensagem}"`;
          messageContainer.style.display = 'block';
        }, 800);
      })
      .catch(error => {
        console.error('Erro ao buscar mensagem:', error);
        messageElement.textContent = "Não foi possível carregar a mensagem.";
        loader.style.display = 'none';
        messageContainer.style.display = 'block';
      });
  }
});
