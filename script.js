document.addEventListener('DOMContentLoaded', function() {
    // Implementação da Geolocalização
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            // Faça algo com a localização aqui
        });
    } else {
        console.log("Geolocalização não está disponível");
    }

    // Implementação da Notificação
    if ("Notification" in window) {
        let ask = Notification.requestPermission();
        ask.then(permission => {
            if (permission === "granted") {
                let msg = new Notification("Olá!", {
                    body: "Notificações foram habilitadas!",
                    // Você pode adicionar mais opções aqui
                });
            }
        });
    }

    // Implementação do Drag & Drop
    // Você deve adicionar os eventos de drag & drop nos elementos específicos
    // Esta é apenas uma estrutura básica
    let dropArea = document.getElementById('Tabela_01'); // Mudar para o elemento correto

    dropArea.addEventListener('dragover', function(e) {
        e.preventDefault(); // Necessário para permitir o drop
    });

    dropArea.addEventListener('drop', function(e) {
        e.preventDefault(); // Evita comportamento padrão
        console.log('Elemento solto na área');
        // Implemente a lógica de manipulação dos dados soltos aqui
    });
});
