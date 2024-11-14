const data = [
    {
        title: "Однокомнатная квартира",
        description: "СДАМ 1- ую квартиру улучшенной планировки с лоджией, есть всё необходимое спальные места кровать 2...",
        price: "1 200 ₽",
        location: "Березники, ул. Юбилейная 108",
        imgUrl: "https://www.figma.com/file/ucanxlgETlzp0DQImdNkrp/image/72b0862cf64931fca31aa59e1666fd6febdd164c?fuid=1260987993100801360"
    },
    {
        title: "Однокомнатная квартира",
        description: "СДАМ 1 КВАРТИРУ есть все необходимое для проживания холодильник, мик.печь,ст. машина выписываем...",
        price: "1 000 ₽",
        location: "Березники, ул. Юбилейная 108",
        imgUrl: "https://www.figma.com/file/ucanxlgETlzp0DQImdNkrp/image/9b1519c2d76e25c8eb8deeb30514e17f94b887ae"
    },
    {
        title: "Однокомнатная квартира",
        description: "Сдам 1ую квартиру ул. пл. с балконом есть всё необходимое для проживания Выписываем документы строгой...",
        price: "1 000 ₽",
        location: "Березники, ул. Юбилейная 108",
        imgUrl: "https://www.figma.com/file/ucanxlgETlzp0DQImdNkrp/image/015e7d437a54c658080357a09acff9d98a628ba8"
    },
    {
        title: "Однокомнатная квартира",
        description: "Сдам 1- квартиру с балконом есть всё необходимое для проживания выписываю ДОКУМЕНТЫ ЧЕК ОНЛАЙН 25+звонить...",
        price: "1 200 ₽",
        location: "Березники, ул. Юбилейная 108",
        imgUrl: "https://www.figma.com/file/ucanxlgETlzp0DQImdNkrp/image/12a9c7bce9b9b0194a889b36a9f896e51978f7f2"
    },
    {
        title: "Двухкомнатная квартира",
        description: "СДАМ 2 КОМНАТНУЮ КВАРТИРУ есть балкон всё необходимое для комфортного проживания, холодильник, мик.печь...",
        price: "1 500 ₽",
        location: "Березники, ул. Красноборова, 11",
        imgUrl: "https://www.figma.com/file/ucanxlgETlzp0DQImdNkrp/image/7e0a842c61e9237c8b251320a2bf9a7d8d1f2e16"
    },
    {
        title: "Трёхкомнатная квартира",
        description: "СДАМ 3 КОМНАТНУЮ КВАРТИРУ гостям города , бригаде , есть всё необходимое для проживания до 7 ми спальных мест...",
        price: "1 800 ₽",
        location: "Березники, ул. Свердлова, 134",
        imgUrl: "https://www.figma.com/file/ucanxlgETlzp0DQImdNkrp/image/cfb76506120d1e6582d6ce7f4717f764335cc78d"
    },
    {
        title: "Трёхкомнатная квартира",
        description: "СДАМ. 3 КОМНАТНУЮ КВАРТИРУ, для гостей города. в квартире имеется все необходимое для проживания на сутки...",
        price: "1 800 ₽",
        location: "Березники, ул. Мира, 112",
        imgUrl: "https://www.figma.com/file/ucanxlgETlzp0DQImdNkrp/image/a2dd96aee6d6aa573366491aeefd438aa4c5573f"
    }
];

const headCards = document.querySelector(".head-cards");

data.map((item, index) => {

    const card = document.createElement("div");
    card.classList.add("h-card");
    card.classList.add(`hc-${index+1}`)

    card.innerHTML = `
        <img class="card-img" src="${item.imgUrl}" alt="">
        <div class="min-cont">
            <p>${item.title}</p>
            <p>${item.description}</p>
            <p><span>${item.price}</span> за сутки</p>
            <div style="display: flex;">
                <img style="margin-right: 0.4vw; margin-left: 0.2vw;" src="./img/Location.png" alt="">
                <p>${item.location}</p>
            </div>
            <button>Подробнее</button>
        </div>
    `;

    headCards.appendChild(card);
});

