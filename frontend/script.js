document.addEventListener('DOMContentLoaded', function() {
    const Button1 = document.getElementById('signin-btn-google');
    Button1.addEventListener('click', function() {
      window.location.href = 'https://localhost:5000/auth/google';
    });
    const Button2 = document.getElementById('signin-btn-ms');
    Button2.addEventListener('click', function() {
      window.location.href = 'https://https://localhost:5000/outlook/signin';});
});