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
        window.open('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN0aJ2o2YaWPMYxf6EEuL9B6CqqQIaacTBvILH38XbD57PpHEKhx_fJwEX9WoujytrQlslAkLXViinAkBDWFkmOH3Appbs6gEw6nP4RR6UugH_r_i9TB4d1v-tWqiwutkZiVch4Txm4ZbV-Syii4Llpq99GkV2J8Lj0xCVY9yy9E-exPA/s220/1732785649732.png', '_blank'); 
        break; 
    }
  });
});