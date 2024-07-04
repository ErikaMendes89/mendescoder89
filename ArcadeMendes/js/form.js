
    
    
    document.getElementById('contacts-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_ziqa3ze', 'template_3jozdtb',  "#contacts-form")
        .then(() => {
            console.log('SUCCESS!');
            alert("mensagem enviada");
         }, (error) => {
            console.log('FAILED...', error);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
        });
    });
