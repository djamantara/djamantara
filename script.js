const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    switch (button.textContent.toLowerCase()) {
      case 'whatsapp':
        window.open('https://wa.me/message/GT2454RVP7HGK1', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/agusjunaidi.agusjunaidi?mibextid=ZbWKwL', '_blank');
        break;
      case 'blogger':
        window.open('http://djamantara87.blogspot.com/', '_blank');
        break;
      case 'read more':
        window.open('https://youtube.com/@djamantara', '_blank'); 
        break; 
    }
  });
});