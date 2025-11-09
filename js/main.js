$(function () {
  // Botón EJECUTAR: mostrar/ocultar el resultado (sin conflictos)
  $(document).on('click', '.content-card .btn.btn-primary', function () {
    const $card = $(this).closest('.content-card');
    const $res  = $card.find('.resultado').first();

    // Si esta tarjeta contiene el slider del Ejercicio 4, inicialízalo SOLO una vez
    if ($res.find('#sliderFade').length && !$res.data('fade-init')) {
      const $imgs = $res.find('#sliderFade .fade-img');
      if ($imgs.length) {
        $imgs.not(':first').hide();
        let i = 0;
        setInterval(function () {
          $imgs.eq(i).fadeOut(1000);
          i = (i + 1) % $imgs.length;
          $imgs.eq(i).fadeIn(1000);
        }, 3000);
        $res.data('fade-init', true);
      }
    }

    $res.toggleClass('d-none');
  });

  // Inicializa el carrusel de la Parte 3 si existe (Bootstrap 5 API)
  const slider = document.querySelector('#miSlider');
  if (slider && window.bootstrap && bootstrap.Carousel) {
    new bootstrap.Carousel(slider, {
      interval: 3500,
      pause: 'hover',
      touch: true,
      wrap: true
    });
  }
});