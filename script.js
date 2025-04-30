const modal = document.getElementById('modal-two');
  const closeBtn = document.getElementById('closeModal');

  function showModal() {
    modal.classList.add('active');
  }

  function hideModal() {
    modal.classList.remove('active');
  }

  closeBtn.addEventListener('click', hideModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  // Show every 30 seconds
  setInterval(showModal, 30000);

  // Optional: show first time after 5s
  setTimeout(showModal, 5000);

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".contact-form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let formData = new FormData(this);
            
            // Показываем модальное окно перед отправкой
            modal.style.display = "block";
            modalMessage.innerText = "Sending...";

            fetch(this.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            }).then(response => {
                if (response.ok) {
                    modalMessage.innerText = "✅ PERFECT! We've received your details. Our Portfolio Manager will get in touch with you shortly!";
                    this.reset(); // Очищаем форму
                } else {
                    modalMessage.innerText = "❌ Error sending message. Please try again.";
                }
            }).catch(error => {
                modalMessage.innerText = "⚠️ Network error. Please check your connection.";
            });
        });
    });

    // Закрытие модального окна
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});


// Анимация появления блоков при скролле
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-visible');
      entry.target.classList.remove('.scroll-hidden');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
})


document.querySelectorAll('.scroll-hidden').forEach(el => observer.observe(el));


function scrollToSection() {
    document.querySelector(".custom-body").scrollIntoView({ behavior: "smooth" });
}

// Добавляем обработчик события на обе кнопки
document.getElementById("scrollToForm1").addEventListener("click", scrollToSection);
document.getElementById("scrollToForm2").addEventListener("click", scrollToSection);



document.querySelector('.language-switcher').addEventListener('click', (e) => {
    e.preventDefault();
    
    // 1. Анимация исчезновения текущей страницы
    gsap.to("body", {
      opacity: 0,
      duration: 0.5,
 onComplete: () => {
        // 2. Переход на новую страницу
        window.location.href = "ge.html"; // Ваша немецкая версия
      }
    });
  });


  function switchToGerman() {
    // Плавное затемнение
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0";
    
    setTimeout(() => {
      // Меняем контент (пример для одного блока)
      document.querySelector('#hero').innerHTML = `
        <h2>SUNSET BAY 2 VON IMTIAZ DEVELOPMENT</h2>
        <!-- Остальной немецкий контент -->
      `;
      
      // Плавное появление
      document.body.style.opacity = "1";
    }, 500);
  }


  document.querySelector('.language-switcher').addEventListener('click', function (e) {
    e.preventDefault();
  
    const currentLang = document.documentElement.lang || 'en'; // если lang не указан — по умолчанию английский
    const targetLang = currentLang === 'en' ? 'de' : 'en'; // определяем куда переключаться
    const targetPage = this.getAttribute(`data-${targetLang}`); // получаем нужную страницу из data-атрибута
  
    // Анимация исчезновения всей страницы
    gsap.to("body", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Переход на нужную страницу
        window.location.href = targetPage;
      }
    });
  });
  
  
