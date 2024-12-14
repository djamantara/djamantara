const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  const buttonText = event.target.textContent;

  switch (buttonText) {
    case 'WhatsApp':
      window.location.href = 'https://wa.me/message/GT2454RVP7HGK1';
      break;
    case 'Facebook':
      window.location.href = 'https://www.facebook.com/agusjunaidi.agusjunaidi?mibextid=ZbWKwL';
      break;
    case 'Blogger':
      window.location.href = 'http://djamantara87.blogspot.com/';
      break;
    case 'Read More':
      window.location.href = 'https://www.youtube.com/@DJAMANTARA';
      break;
  }
}