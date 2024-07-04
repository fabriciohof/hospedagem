var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 500)
  })

  // whatsapp api
  function redirectToWhatsApp() {
    const phoneNumber = '+5521994832732'; // numero ficticio
    const message = 'Olá, gostaria de mais informações.'; 
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = url;
}


// email api 

function sendEmail() {
  const email = 'fabriciopython@gmail.com'; // email ficticio
  const subject = 'Assunto '; 
  const body = 'Olá, gostaria de mais informações.';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

// tel api

function callPhone() {
  const phoneNumber = '+552140028922'; // numero ficticio
  const telLink = `tel:${phoneNumber}`;
  window.location.href = telLink;
}


// form

function redirectToForm() {
  window.location.href = 'form.html';
}