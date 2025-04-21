let sections = document.querySelectorAll('.shatls-block, .souvenirs-block, .room-block, .delivery-block')
// Отримуємо елементи
let byeBtn = document.querySelector(".buy-btn");  // Кнопка відкриття
let modal = document.getElementById("myModal");       // Модальне вікно
let overlay = document.getElementById("overlay");     // Затемнений фон
let closeBtn = document.querySelector(".close");      // Кнопка закриття


let selectedCards = {
    'shatls-block': null,
    'souvenirs-block': null,
    'room-block': null,
    'delivery-block': null
};

sections.forEach((section) => {
    const sectionClass = section.classList[0];
    let cards = section.querySelectorAll('.card')
        cards.forEach((card)=> {
            card.addEventListener('click', () => {
                cards.forEach((c) => {
                    c.style.border = ""
                })
                card.style.border = "1px solid green"
                selectedCards[sectionClass] = card;
            })
        })
})
//array and object

byeBtn.addEventListener("click",() => {
    console.log(selectedCards["delivery-block"].querySelector('.text').innerHTML)
    
})




// Відкриття модального вікна
byeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
    overlay.style.display = "block";
});

// Закриття при натисканні на "X"
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});

// Закриття при кліку на затемнений фон
overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});
