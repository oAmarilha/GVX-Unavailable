 // Defina a data alvo para o countdown (ano, mês, dia, hora, minuto, segundo)
 var targetDate = new Date('2023-11-26T23:59:59');

 // Função para calcular e exibir o countdown
 function updateCountdown() {
     var currentDate = new Date();
     var timeDifference = targetDate - currentDate;

     // Calcule os componentes de tempo
     var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     // Atualize o elemento HTML com o countdown
     document.getElementById('countdown').innerHTML =
         days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
 }

 // Atualize o countdown a cada segundo
 setInterval(updateCountdown, 1000);

 // Chame a função inicialmente para exibir o countdown imediatamente
 updateCountdown();