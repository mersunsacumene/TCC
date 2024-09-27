const cardsAgenda = document.getElementById("cards")
listaCards.forEach(item => {
    const div = document.createElement("div")
    div.classList.add("proced")
    div.innerHTML = `
        <h2>${item.events}</h2>
        <h3>${item.remedy}</h3>
        <h3>${item.date}</h3>
        <h3>${item.hours}</h3>
        <p>${item.description}</p>
        <iframe src=${item.maps}></iframe>
        <div class="button-container">
        <button>Reagendar horário</button>
        <button>Cancelar Agendamento</button>
        </div>
    `

    cardsAgenda.appendChild(div);
    


});
