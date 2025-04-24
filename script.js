let sections = document.querySelectorAll('.shatls-block, .souvenirs-block, .room-block, .delivery-block')
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
                    c.classList.remove('selected-card');
                })
                card.classList.add('selected-card');
                selectedCards[sectionClass] = card;
            })
        })
})
//array and object

byeBtn.addEventListener("click",() => {
modal.querySelector('.shatl-name').innerHTML = ("Шатл:&nbsp;&nbsp;&nbsp;" + selectedCards["shatls-block"].querySelector("span").innerHTML)
modal.querySelector('.room-name').innerHTML = ("Каюта:&nbsp;&nbsp;&nbsp;" + selectedCards["room-block"].querySelector("span").innerHTML)
modal.querySelector('.delivery-name').innerHTML = ("Доставка:&nbsp;&nbsp;&nbsp;" + selectedCards["delivery-block"].querySelector("span").innerHTML)
modal.querySelector('.souvenirs-name').innerHTML = ("Сувенір:&nbsp;&nbsp;&nbsp;" + selectedCards["souvenirs-block"].querySelector("span").innerHTML)
    
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
