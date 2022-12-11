const swiper = new Swiper('.swiper', {
   
    direction: 'horizontal',
    effect: "card",
    loop: true,  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay:{
      delay: 2000,

    },
});



anime({
    targets: '.animation_title',
    translateY: 25,
    /*fontSize: 20,*/
    delay: 10,
    loop: true,
});

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})()


$(document).ready(function() {
  $(".more").on("click", function() {
    $(".nos_complete").toggle();

    // cambiar el texto del boton dependiendo del texto actual
    if ($(this).text() == "Leer menos...") {
      $(this).text("Leer mas...");
    } else {
      $(this).text("Leer menos...");
    }
  });
});