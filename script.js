document.addEventListener('DOMContentLoaded', () => {
    const eventos = [
        {
            nome: "Acolhimento",
            data: "15/06/2024",
            horario: "20:00",
            descricao: "Dinâmica para mostrar o acolhimento entre alunos e professores.",
            imagens: [
                "Eventos/Acolhimento/Acolhimento_00.jpeg",
                "Eventos/Acolhimento/Acolhimento_01.jpeg",
                "Eventos/Acolhimento/Acolhimento_02.jpeg",
                "Eventos/Acolhimento/Acolhimento_03.jpeg"
            ]
        },
        {
            nome: "Agosto Lilás",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Em homenagem ao mês da conscientização pelo fim da violência contra as mulheres, tivemos apresentações e palestras.",
            imagens: [
                "Eventos/Agostolilas/Agostolilas_00.jpeg",
                "Eventos/Agostolilas/Agostolilas_01.jpeg",
                "Eventos/Agostolilas/Agostolilas_02.jpeg",
                "Eventos/Agostolilas/Agostolilas_03.jpeg"
            ]
        },
        {
            nome: "Buscaativa",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Atividade buscando auxiliar os alunos a virem para a aula.",
            imagens: [
                "Eventos/Buscaativa/Buscaativa_00.jpeg"
            ]   
        },
        {
            nome: "Cultural",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Um dia para homenagear a nossa cultura, com diversar apresentações.",
            imagens:[
                "Eventos/Cultural/Cultura_00.jpeg" ,
                "Eventos/Cultural/Cultura_01.jpeg" ,
                "Eventos/Cultural/Cultura_02.jpeg" ,
                "Eventos/Cultural/Cultura_03.jpeg" ,
                "Eventos/Cultural/Cultura_04.jpeg" ,
                "Eventos/Cultural/Cultura_05.jpeg" ,
                "Eventos/Cultural/Cultura_06.jpeg" ,
                "Eventos/Cultural/Cultura_07.jpeg" ,
                "Eventos/Cultural/Cultura_08.jpeg" ,
                "Eventos/Cultural/Cultura_09.jpeg" ,
                "Eventos/Cultural/Cultura_10.jpeg" ,
                "Eventos/Cultural/Cultura_11.jpeg" ,
                "Eventos/Cultural/Cultura_12.jpeg" ,
                "Eventos/Cultural/Cultura_13.jpeg" ,
                "Eventos/Cultural/Cultura_14.jpeg" ,
                "Eventos/Cultural/Cultura_15.jpeg" ,
                "Eventos/Cultural/Cultura_16.jpeg" ,
                "Eventos/Cultural/Cultura_17.jpeg" ,
                "Eventos/Cultural/Cultura_18.jpeg" ,
                "Eventos/Cultural/Cultura_19.jpeg" 
            ]
        },
        {
            nome: "Interclasse",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Um dia para promover a pratica de atividade física e o espírito esportivo.",
            imagens:[
                "Eventos/Interclasse/Interclasse_00.jpeg" ,
                "Eventos/Interclasse/Interclasse_01.jpeg" ,
                "Eventos/Interclasse/Interclasse_02.jpeg" ,
                "Eventos/Interclasse/Interclasse_03.jpeg" ,
                "Eventos/Interclasse/Interclasse_04.jpeg" 
            ]
        },
        {
            nome: "Participações",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Participação do CESA em outros projetos não oficiais do colégio.",
            imagens: [
                "Eventos/Participações/Participacao_00.jpeg" 
            ]
        },
        {
            nome: "Páscoa",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Dia especial em homenagem a páscoa.",
            imagens: [
                "Eventos/Páscoa/Páscoa_00.jpeg" ,
                "Eventos/Páscoa/Páscoa_01.jpeg" ,
                "Eventos/Páscoa/Páscoa_02.jpeg" ,
                "Eventos/Páscoa/Páscoa_03.jpeg" 
            ]
        },
        {
            nome: "Saeb",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Demonstração dos alunos do colégio realizando a prova SAEB.",
            imagens: [
                "Eventos/Saeb/Saeb_01.jpeg" ,
                "Eventos/Saeb/Saeb_02.jpeg"
            ]
        },
        {
            nome: "Talentos",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Atividade para os alunos apresentarem seus mais diversos talentos.",
            imagens: [
                "Eventos/Talentos/Talentos_00.jpeg" ,
                "Eventos/Talentos/Talentos_01.jpeg" ,
                "Eventos/Talentos/Talentos_02.jpeg"
            ]
        },
        {
            nome: "Voluntariado",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Ideia voluntária dos alunos do CESA para ajudar nas enchentes do Rio Grande Do Sul, obtendo doações.",
            imagens: [
                "Eventos/Voluntariado/Acaovoluntaria_00.jpeg"
            ]
        }
    ]

    const listaEventos = document.getElementById('listaEventos');

    eventos.forEach(evento => {
        const divEvento = document.createElement('div');
        divEvento.classList.add('evento');

        const imagensHTML = evento.imagens.map(imagem => 
            `<img src="${imagem}" alt="${evento.nome}" style="max-width: 100%; display: none;">`
        ).join('');

        divEvento.innerHTML = `
            <h3>${evento.nome}</h3>
            <p>${evento.descricao}</p>
            <button class="toggle-images">Ver Mais</button>
            <div class="imagens" style="display: none;">
                ${imagensHTML}
            </div>
        `;

        listaEventos.appendChild(divEvento);

        const toggleButton = divEvento.querySelector('.toggle-images');
        const imagensDiv = divEvento.querySelector('.imagens');

        toggleButton.addEventListener('click', () => {
            const imagensVisiveis = imagensDiv.style.display === 'block';
            imagensDiv.style.display = imagensVisiveis ? 'none' : 'block';
            toggleButton.textContent = imagensVisiveis ? 'Ver Mais' : 'Ver Menos';
            const imagens = imagensDiv.querySelectorAll('img');
            imagens.forEach(img => {
                img.style.display = imagensVisiveis ? 'none' : 'block';
            });
        });
    });

    document.getElementById('formContato').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada! Agradecemos o seu contato.');
        this.reset();
    });
});
