const content = {
  pt: {
    title: "Currículo - Edervan Pereira Silva",
    resumoTitulo: "Resumo Profissional",
    competenciasTitulo: "Competências Técnicas",
    experienciaTitulo: "Experiência Profissional",
    formacaoTitulo: "Formação Acadêmica",
    certificacoesTitulo: "Licenças e Certificações",
    rodape: "© 2025 Edervan Pereira Silva. Todos os direitos reservados.",
    endereco: "Rua Jacarandá 100 – Bairro Jaraguá - Uberlândia, MG, Brasil",
    resumo: "Profissional resiliente e autodidata, com sólida capacidade de resolução de problemas e adaptação a novas tecnologias. Iniciei minha carreira na área de manutenção, onde desenvolvi forte habilidade em diagnóstico técnico e rápida assimilação de ferramentas. Em 2021, realizei uma transição de carreira para o setor administrativo, evoluindo rapidamente para a área de dados. Em cinco anos, me especializei em Power BI e Python, concluí a graduação em Ciência de Dados e alcancei o cargo de Especialista em Dados. Apaixonado por tecnologia e aprendizado contínuo, estou sempre em busca de inovação e aprimoramento.",
    competencias: [
      "Ferramentas de BI: Python, Power BI, Power Apps, Excel",
      "Análise de Dados: Monitoramento de KPIs, criação de dashboards, storytelling com dados"
    ],
    experiencia: [
      "Especialista em Dados – CMAA – Abr/2025 – Atual (8 meses)",
      "Analista de BI Sênior – CMAA – Jun/2024 – Abr/2025 (11 meses)",
      "Analista de BI – CMAA – Out/2022 – Jun/2024 (1 ano e 9 meses)",
      "Analista de PCM I – CMAA – Jul/2022 – Out/2022 (4 meses)",
      "Assistente Administrativo – CMAA – Dez/2021 – Jun/2022 (7 meses)"
    ],
    formacao: "Curso Superior de Tecnologia (CST) em Ciência de Dados – Anhanguera Educacional – Jan/2021 – Jun/2024",
    certificacoes: [
      "Green Belt – Six Sigma – RL&Associados – Jan/2018",
      "Excel Avançado – Instituto Mix – Ago/2018 – Código: 537747",
      "Microsoft Power Platform – Niteo Learning – Fev/2022"
    ]
  },
  en: {
    title: "Resume - Edervan Pereira Silva",
    resumoTitulo: "Professional Summary",
    competenciasTitulo: "Technical Skills",
    experienciaTitulo: "Professional Experience",
    formacaoTitulo: "Academic Background",
    certificacoesTitulo: "Licenses and Certifications",
    rodape: "© 2025 Edervan Pereira Silva. All rights reserved.",
    endereco: "Rua Jacarandá 100 – Jaraguá District - Uberlândia, MG, Brazil",
    resumo: "Resilient and self-taught professional with strong problem-solving skills and adaptability to new technologies. I began my career in maintenance, developing diagnostic skills and technical agility. In 2021, I transitioned to administration and quickly evolved into data analytics. Over five years, I specialized in Power BI and Python, earned a degree in Data Science, and became a Data Specialist. Passionate about technology and continuous learning, I seek innovation and improvement.",
    competencias: [
      "BI Tools: Python, Power BI, Power Apps, Excel",
      "Data Analysis: KPI monitoring, dashboard creation, data storytelling"
    ],
    experiencia: [
      "Data Specialist – CMAA – Apr/2025 – Present (8 months)",
      "Senior BI Analyst – CMAA – Jun/2024 – Apr/2025 (11 months)",
      "BI Analyst – CMAA – Oct/2022 – Jun/2024 (1 year and 9 months)",
      "PCM Analyst I – CMAA – Jul/2022 – Oct/2022 (4 months)",
      "Administrative Assistant – CMAA – Dec/2021 – Jun/2022 (7 months)"
    ],
    formacao: "Bachelor in Data Science – Anhanguera Educacional – Jan/2021 – Jun/2024",
    certificacoes: [
      "Green Belt – Six Sigma – RL&Associados – Jan/2018",
      "Advanced Excel – Instituto Mix – Aug/2018 – Code: 537747",
      "Microsoft Power Platform – Niteo Learning – Feb/2022"
    ]
  }
};

function switchLanguage(lang) {
  const data = content[lang];

  // Atualiza título da aba e da página
  document.title = data.title;
  document.getElementById("page-title").textContent = data.title;

  // Atualiza cabeçalho
  document.getElementById("nome").textContent = "Edervan Pereira Silva";
  document.getElementById("endereco").textContent = data.endereco;

  // Atualiza títulos das seções
  document.getElementById("titulo-resumo").textContent = data.resumoTitulo;
  document.getElementById("titulo-competencias").textContent = data.competenciasTitulo;
  document.getElementById("titulo-experiencia").textContent = data.experienciaTitulo;
  document.getElementById("titulo-formacao").textContent = data.formacaoTitulo;
  document.getElementById("titulo-certificacoes").textContent = data.certificacoesTitulo;

  // Atualiza conteúdo das seções
  document.getElementById("resumo").textContent = data.resumo;

  document.getElementById("competencias").innerHTML = data.competencias
    .map(item => `<li>${item}</li>`).join("");

  document.getElementById("experiencia").innerHTML = data.experiencia
    .map(item => {
      const match = item.match(/^(.*?)(\s*\((.*?)\))$/);
      if (match) {
        return `
          <li class="experiencia-item">
            <span class="cargo">${match[1].trim()}</span>
            <span class="tempo">(${match[3]})</span>
          </li>`;
      } else {
        return `<li>${item}</li>`;
      }
    }).join("");

  document.getElementById("formacao").textContent = data.formacao;

  document.getElementById("certificacoes").innerHTML = data.certificacoes
    .map(item => `<li>${item}</li>`).join("");

  // Atualiza rodapé
  document.getElementById("rodape").textContent = data.rodape;
}

// Inicializa com inglês por padrão
switchLanguage("en");
