document.getElementById('signup').addEventListener('click', function() {
    var message = document.querySelector('.message');
    message.style.transform = 'translateX(100%)';
    
    if (message.classList.contains('login')) {
      message.classList.remove('login');
    }
    
    message.classList.add('signup');
  });
  
  document.getElementById('login').addEventListener('click', function() {
    var message = document.querySelector('.message');
    message.style.transform = 'translateX(0)';
    
    if (message.classList.contains('signup')) {
      message.classList.remove('signup');
    }
    
    message.classList.add('login');
  });
  