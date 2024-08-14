
 AOS.init({
  duration: 1200,
})


document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){ 
        everyitem.addEventListener('click', function(e){
            let el_link = this.querySelector('a[data-bs-toggle]');
            if(el_link != null){
                location.href = el_link.href;
            }

        });
    });

   // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });






