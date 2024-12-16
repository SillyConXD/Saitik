document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.querySelector('#name').value = formData.name || '';
        document.querySelector('#email').value = formData.email || '';
        document.querySelector('#phone').value = formData.phone || '';
        document.querySelector('#date').value = formData.date || '';
        document.querySelector('#comment').value = formData.comment || '';
    }

    const form = document.querySelector('#userForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const phone = document.querySelector('#phone').value.trim();
            const date = document.querySelector('#date').value.trim();
            const comment = document.querySelector('#comment').value.trim();


            if (!name || !email || !comment) {
                alert('Поля "Имя", "E-mail" и "Комментарий" должны быть заполнены!');
                return;
            }
            if (!/^\d+$/.test(phone)) {
                alert('Телефон должен содержать только цифры!');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Введите корректный E-mail!');
                return;
            }


            const formData = { name, email, phone, date, comment };

            
            localStorage.setItem('formData', JSON.stringify(formData));

            
            console.log('Данные формы успешно сохранены:');
            console.table(formData);

            alert('Форма успешно отправлена!');
        });
    }
});


function showMessage(message) {
    console.log(message);
}


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}


function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }
}


function updateH1FromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');

    if (utmTerm) {
        h1.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
}


function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}


document.addEventListener('DOMContentLoaded', () => {

    showMessage("Скрипт загружен!");
    logCurrentTime();

    resetBackgroundColor();

    changeBackgroundColor("lightblue");

    toggleVisibility('.content');

    updateH1FromURL();
});

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('h1').addEventListener('click', () => {
        alert('Вы кликнули на заголовок - так держать!')});
});

document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('p'); 
    if (paragraph) {
        paragraph.addEventListener('click', () => {
            paragraph.classList.add('animated-bg');
            setTimeout(() => {
                paragraph.classList.remove('animated-bg');
            }, 2000); 
        });
    }
});
