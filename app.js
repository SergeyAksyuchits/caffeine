const reviews = [
    {
        id: 1,
        description: "Это просто потрясающий сервис! Всё работает быстро и без сбоев. Я был приятно удивлён качеством обслуживания и вниманием к деталям.",
        name: "Анна Смирнова",
        profession: "Маркетолог",
        imagePath: ""
    },
    {
        id: 2,
        description: "Отличный опыт сотрудничества. Команда всегда была на связи и помогала на каждом этапе проекта. Рекомендую!",
        name: "Иван Петров",
        profession: "Разработчик",
        imagePath: ""
    },
    {
        id: 3,
        description: "Профессиональный подход и результат, превзошедший мои ожидания. Буду обращаться снова!",
        name: "Екатерина Лебедева",
        profession: "Дизайнер",
        imagePath: ""
    },
    {
        id: 4,
        description: "Сервис действительно стоит своих денег. Всё чётко, оперативно и с отличным результатом.",
        name: "Александр Волков",
        profession: "Предприниматель",
        imagePath: ""
    },
    {
        id: 5,
        description: "Очень доволен сотрудничеством! Ребята большие молодцы, учли все пожелания и сделали всё в срок.",
        name: "Мария Кузнецова",
        profession: "Менеджер по продукту",
        imagePath: ""
    }
];

const title = document.querySelector(".feedback .conteiner .button p")
const name = document.querySelector(".feedback .conteiner .last .last_text h3")
const prof = document.querySelector(".feedback .conteiner .last .last_text p")
const btnLeft = document.querySelector(".feedback .conteiner .button .left")
const btnRight = document.querySelector(".feedback .conteiner .button .right")
const img = document.querySelector(".last_img")

let current = 0

function slider() {
    const slide = reviews[current]
    title.textContent = slide.description
    name.textContent = slide.name
    prof.textContent = slide.profession

}
slider()

btnRight.addEventListener("click", () => {
    current = (current + 1 + reviews.length) % reviews.length
    slider()
})

btnLeft.addEventListener("click", () => {
    current = (current - 1 + reviews.length) % reviews.length
    
})