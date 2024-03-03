function showInfo(category) {
    const contentDiv = document.getElementById('popup-content');
    let info = '';

    switch (category) {
        case 'Resumo':
            info = `
                <h1>Resumo de Qualificação</h1>
                <p>Profissional em fase de transição de carreira da área de Suporte- HelpDesk para a área de Desenvolvimento Web. Experiência em contribuir no desenvolvimento de projetos, garantindo o alinhamento com as últimas tendências e ferramentas do setor, tais como aplicações de tecnologias. Vivência na utilização de linguagens de programação como HTML, CSS e JavaScript, promovendo o desenvolvimento de projetos, aplicativos, sistemas web e softwares personalizados atuando como Back end e Front end. Habilidades em compreender as necessidades dos usuários e clientes, aplicando soluções eficientes.</p>
            `;
            break;
        case 'Experiencias':
            info = `
                <h1>Experiência Profissional</h1>

                <h3>Grupo Telemed. – 11/2023 a atual.</h3>
                <h4>Cargo: Analista de suporte TI.</h4>
                <p>Função Exercida: Experiencia em ajuste no site da empresa, Integração novo produtos por API, Busca de novas tecnologias, criação do contrato online com interação com Gov, utilizando as tecnologias HTML, CSS e JavaScript.</p>
               

                <!------------------------------------------------ -->
                
                <h3>Açai e Cia. – 09/2023 a 11/2023.</h3>
                <h4>Consultor de gerenciamento de TI</h4>
                <p>Experiencia em manutenção e atualização do parque tecnológico, implementação de novas soluções e softwares, gestão de equipamentos e rede, controle interno, gerenciamento de projetos (estoque, caixa, financeiro, custos, compras e vendas).</p>
              
                <!------------------------------------------------ -->
                
                <h3>Caranguejo do Assis. – 07/2022 a 11/2023.</h3>
                <h4>Consultor de gerenciamento de TI</h4>
                <p>Experiencia em manutenção e atualização do parque tecnológico, implementação de novas soluções e softwares para o restaurante, gestão de equipamentos e rede, treinamento de funcionários em novas funções do sistema, controle interno, gerenciamento de projetos (estoque, caixa, financeiro, custos, compras e vendas).</p>
            
                <!------------------------------------------------ -->
                
                <h3>AMZ Soluções. – 04/2022 a 07/2022.</h3>
                <h4>Analista de Sistema sênior</h4>
                <p>Experiencia em instalação do Software da Empresa, Software de venda comercial e de administração financeira! Montagem e manutenção de computadores e Redes (Treinamento funcional do sistema financeiro e venda (entrada e saída de notas fiscais e financeiro contas a pagar e receber)), instalação de impressoras fiscais ECF e não fiscais, HelpDesk, Conhecimentos Sintegra e Sped Fiscal, NFCe e XML - VMW – VMW – Vmware Coordenação e acompanhamento das implantações do sistema em território nacional. Treinamento de novos colaboradores. Cadastro e acompanhamento sistema Scrum. Atendimento sobre aviso 24hs.</p>

                <!------------------------------------------------ -->
                
                <h3>TronSoft Soluções. – 12/2010 a 03/2022.</h3>
                <h4>Analista de Sistema Sênior – Coordenador de implantação e Suporte.</h4>
                <p>Experiencia em instalação do Software da Empresa, Software de venda comercial e de administração financeira! Montagem e manutenção de computadores e Redes (Treinamento funcional do sistema financeiro e venda (entrada e saída de notas fiscais)), instalação de impressoras fiscais ECF e não fiscais, HelpDesk, Conhecimentos Sintegra e Sped Fiscal, NFCe e XML, VMW – Vmware; Coordenação e acompanhamento das implantações do sistema TronSolution em território nacional. Treinamento de novos colaboradores. Atendimento sobre aviso 24hs.</p>
                
                <!------------------------------------------------ -->
                
                <h3>ECS Empresa Capichaba de Serviços LTDA. –  03/2008 a 05/2010.</h3>
                <h4>Auxiliar Administrativo -- Tecnico em informatica.</h4>
                <p>Experiencia em digitação de Planilha, Gráficos, Compras, Participação em licitação, contratação, elaboração de relatórios e técnico em informática ( manutenção do parque de computadores).</p>
          
                <!------------------------------------------------ -->
                
                <h3>Brasilcenter Comunicações LTDA. – 03/2007 a 11/2007.</h3>
                <h4>Televendas -- TeleAtendimento.</h4>
                <p>Experiencia em telemarketing / Televendas e Atendimento ao cliente, venda de planos da empresa, entre outros.</p>
                
                <!------------------------------------------------ -->
                
                <h3>Escola Conexão. – 05/2006 a 03/2007.</h3>
                <h4>Analista de Tecnologia da Informação.</h4>
                <p>Experiencia como professor de informática infantil/Técnico em informática Manutenção em hardware, servidor de domínio e Internet, monitoramento do laboratório de informática, consultoria em compra de equipamentos, entre outras.</p>
                
                <!------------------------------------------------ -->
                             
                <h3>Bergazi Construtora. – 07/2005 a 02/2006.</h3>
                <h4>Auxiliar Administrativo -- Tecnico em informatica.</h4>
                <p>Experiencia em digitação de Planilha, Gráficos, Compras, Participação em licitação, contratação, elaboração de relatórios e técnico em informática ( manutenção do parque de computadores).</p>
              
                <!------------------------------------------------ -->
                             
                <h3>Escola Contec. – 09/2004 a 04/2005.</h3>
                <h4>Analista de Tecnologia da Informação.</h4>
                <p>Experiencia em digitação de Planilha, Gráficos, Compras, Participação em licitação, contratação, elaboração de relatórios e técnico em informática ( manutenção do parque de computadores).</p>
                
                <!------------------------------------------------ -->
                             
                <h3>Prefeitura municipal de Vila Velha. – 06/2003 a 06/.</h3>
                <h4>Auxiliar Administrativo -- Tecnico em informatica.</h4>
                <p>Experiencia em digitação de Planilha, Gráficos, Compras, Participação em licitação, contratação, elaboração de relatórios e técnico em informática ( manutenção do parque de computadores).</p>
                `;
            break;
        case 'Formacao':
            info = `
                <h1>Formação Acadêmica</h1>
                <p>Programação em Desenvolvimento Web pela DevClub, 2022/23.</p>
                <p>Médio Técnico em Informática – Concluído.</p>
                <p>Engenharia da Computação – Início 03/2022 - Cursando</p>
            `;
            break;
        case 'Cursos':
            info = `
                <h1>Cursos</h1>
                <p>Fundamentos de TI - Hardware e Software - Escola Contec.</p>
                <p>Fundamentos de ITIL Adm. – Fundação Bradesco.</p>
                <p>Inovando com CSS – Fundação Bradesco.</p>
                <p>Ética no Desenvolvimento de Sistemas – Fundação Bradesco.</p>
                <p>Fundamentos Básicos SAP, Power BI e Excel Avançado – Fundação Bradesco.</p>
                <p>Máquina Virtual (VM), VMware, Virtual PC, Virtual Server – Fundação Bradesco.</p>
                <p>Implementação de Banco de Dados – Fundação Bradesco.</p>
                <p>Lei Geral de Proteção de Dados (LGPD) – Fundação Bradesco.</p>
                <p>Programação: HTML, CSS, JavaScript - Visual Studio – DevClub</p>
                <!-- Adicionar mais cursos aqui -->
            `;
            break;
        case 'Conhecimentos':
            info = `
                <h1>Conhecimentos e Habilidades</h1>
                <p>Banco de Dados: MySQL e Firebird</p>
                <p>Sistemas Operacionais: Windows e Linux</p>
                <p>Metodologias Ágeis: SCRUM</p>
                <!-- Adicionar mais conhecimentos aqui -->
            `;
            break;
            case 'Portfolio':
                info = `
                    <h1>Portfolio</h1>
                    <p><a class="protifolio" href="https://dynasbrother.netlify.app/">Familia Mario</a>
                    <a class="protifolio" href="https://dynasbrother.netlify.app/mario">Jogo do Mario 2.0</a>
                    <a class="protifolio" href="https://jogo-mario-pula-cano.netlify.app/">Mario pula cano</a>
                    <a class="protifolio" href="https://mulambosdoasfalto.netlify.app/">Site de videos</a>
                    <a class="protifolio" href="https://dev-sorteio-dyna.netlify.app/">Site de sorteio</a></p>
                    
                    <p><a class="protifolio2" href="https://missao-instragram.netlify.app/">Instagra (copia)</a>
                    <a class="protifolio2" href="https://currency-converter-dyna.netlify.app/">Conversor de moedas</a>
                    <a class="protifolio2" href="https://climatempodyna.netlify.app/">Site do tempo</a>
                    <a class="protifolio2" href="https://projetocss2.netlify.app/">Easy Shopping</a>
                    <a class="protifolio2" href="https://desafio-css1.netlify.app/">Wide Coverange</a></p>
                `;
                break;
        
        default:
            info = '<p>Nenhuma informação disponível.</p>';
    }

    contentDiv.innerHTML = info;
    document.querySelector('.popup').style.display = 'block';

    setTimeout(function () {
        contentDiv.classList.add('show');
    }, 500);

}

document.querySelector('.popup').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

function startShake() {
    document.querySelector('.link-whatsapp').classList.add('shake');
}

function stopShake() {
    document.querySelector('.link-whatsapp').classList.remove('shake');
}

/* ---------------------------------- */

const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    header.style.visibility = "hidden"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

