const formValues = document.getElementById('formValues')
let contador = 0
const box = document.querySelector(".carrosel")
const img = document.querySelector(".slides img")
let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.carousel img').length;
  const carousel = document.querySelector('.carousel');
let cont = 0;

function objetoJson(){

    const objeto = {
        nome: formValues.nome.value,
        sobrenome : Number(formValues.sobrenome.value),
        email: email(formValues.email.value)
    }

    console.log(objeto)
    const objetoJson = JSON.stringify(objeto)
    contador++
    localStorage.setItem('pessoa' + contador, objetoJson)

    function realizarLogin() {
       
        const pessoaArmazenada = JSON.parse(localStorage.getItem('pessoa'));
    
        
        const inputUsuario = document.getElementById('usuario').value;
        const inputSenha = document.getElementById('senha').value;
    
       
        if (pessoaArmazenada && inputUsuario === pessoaArmazenada.usuario && inputSenha === pessoaArmazenada.senha) {
            // Autorizando o login
            alert('Login autorizado!');
           
        } else {
           
            alert('Credenciais incorretas. Tente novamente.');
        }
    }
    
}

function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const newTransformValue = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${newTransformValue})`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto play
  setInterval(nextSlide, 3000);



