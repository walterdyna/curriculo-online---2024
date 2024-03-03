function showInfo(category) {
    const contentDiv = document.getElementById('popup-content');
    let info = '';

    switch (category) {
        case 'Resumo':
            info = `
                <h2>Resumo de Qualificação</h2>
                <p>Profissional em fase de transição de carreira da área de Suporte- HelpDesk para a área de Desenvolvimento Web. Experiência em contribuir no desenvolvimento de projetos, garantindo o alinhamento com as últimas tendências e ferramentas do setor, tais como aplicações de tecnologias. Vivência na utilização de linguagens de programação como HTML, CSS e JavaScript, promovendo o desenvolvimento de projetos, aplicativos, sistemas web e softwares personalizados atuando como Back end e Front end. Habilidades em compreender as necessidades dos usuários e clientes, aplicando soluções eficientes.</p>
            `;
            break;
        case 'Experiencias':
            info = `
                <h2>Experiência Profissional</h2>
                <p>Grupo Telemed. – 11/2023 a atual</p>
                <p>Cargo: Analista de suporte TI.</p>
                <p>Função Exercida: Experiencia em ajuste no site da empresa, Integração novo produtos por API, Busca de novas tecnologias, criação do contrato online com interação com Gov, utilizando as tecnologias HTML, CSS e JavaScript.</p>
                <!-- Adicionar mais experiências aqui -->
            `;
            break;
        case 'Formacao':
            info = `
                <h2>Formação Acadêmica</h2>
                <p>Programação em Desenvolvimento Web pela DevClub, 2022/23.</p>
                <p>Médio Técnico em Informática – Concluído.</p>
                <p>Engenharia da Computação – Início 03/2022 - Cursando</p>
            `;
            break;
        case 'Cursos':
            info = `
                <h2>Cursos</h2>
                <p>Fundamentos de TI - Hardware e Software - Escola Contec.</p>
                <p>Fundamentos de ITIL Adm. – Fundação Bradesco.</p>
                <p>Inovando com CSS – Fundação Bradesco.</p>
                <!-- Adicionar mais cursos aqui -->
            `;
            break;
        case 'Conhecimentos':
            info = `
                <h2>Conhecimentos e Habilidades</h2>
                <p>Banco de Dados: MySQL e Firebird</p>
                <p>Sistemas Operacionais: Windows e Linux</p>
                <p>Metodologias Ágeis: SCRUM</p>
                <!-- Adicionar mais conhecimentos aqui -->
            `;
            break;
        default:
            info = '<p>Nenhuma informação disponível.</p>';
    }

    contentDiv.innerHTML = info;
    document.querySelector('.popup').style.display = 'block';
}

document.querySelector('.popup').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
