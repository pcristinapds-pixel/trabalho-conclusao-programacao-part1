# Trabalho de Conclusão - Programação para Automação de Testes

## 📋 Descrição do Projeto

Este repositório contém o trabalho de conclusão da disciplina de **Programação para Automação de Testes**. O projeto implementa uma suite de testes unitários utilizando as melhores práticas de automação e integração contínua.

## 🎯 Objetivo

Demonstrar conhecimentos em:
- Automação de testes
- Testes unitários
- Integração Contínua (CI)
- Boas práticas de desenvolvimento
- Documentação e relatórios de testes

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **Node.js** | 24.x | Runtime JavaScript |
| **Mocha** | ^11.7.6 | Framework de testes |
| **Mochawesome** | ^7.1.3 | Relatório visual de testes |

## 📦 Instalação

### Pré-requisitos
- Node.js 24.x instalado
- npm (geralmente vem com Node.js)

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1.git
cd trabalho-conclusao-programacao-part1
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Instale o Mocha (se necessário):**
```bash
npm i mocha
```

## 🧪 Executando os Testes

### Executar testes localmente
```bash
npm test
```

Este comando executará todos os testes localizados em `test/**/*.test.js` e gerará um relatório visual.

### Relatório de Testes
Após executar os testes, um relatório detalhado será gerado em:
```
./mochawesome-report/report.html
```

Abra este arquivo no navegador para visualizar os resultados dos testes com gráficos e estatísticas.

## 🔄 Pipeline CI/CD - Execução Agendada

### Configuração da Pipeline

Este projeto possui uma pipeline de integração contínua configurada para **execução automática agendada**.

**Arquivo de configuração:** `.github/workflows/02-schendule.exec.yaml`

### Detalhes da Execução Agendada

| Aspecto | Detalhes |
|--------|----------|
| **Nome da Pipeline** | N2 - Execução Agendada |
| **Trigger** | Agendado (Cron) |
| **Horário de Execução** | Todo sábado às 14:00 UTC |
| **Padrão Cron** | `0 14 * * 6` |
| **Máquina** | Ubuntu Latest |

### Etapas da Pipeline

A pipeline executa os seguintes passos automaticamente:

1. **Clonagem do Projeto**
   - Faz o checkout do código-fonte

2. **Instalação do Node.js**
   - Configura a versão 24.x do Node.js

3. **Instalação de Dependências**
   - Executa `npm install` para instalar todas as dependências

4. **Instalação do Mocha**
   - Instala o framework de testes

5. **Execução de Testes Unitários**
   - Executa a suite completa de testes
   - Executa: `npm test`

6. **Geração de Relatório**
   - Cria relatório Mochawesome
   - Salva os artefatos da execução
   - Disponível como download nas Actions

### Acessar Relatórios da Pipeline

1. Acesse a aba **Actions** do repositório
2. Selecione a execução desejada
3. Procure por "Relatório-Mochawesome" nos artefatos
4. Faça download do relatório para análise detalhada

## 📊 Estrutura do Projeto

```
trabalho-conclusao-programacao-part1/
├── .github/
│   └── workflows/
│       └── 02-schendule.exec.yaml    # Pipeline CI/CD
├── test/
│   └── *.test.js                     # Testes unitários
├── mochawesome-report/               # Relatórios gerados
├── package.json                      # Dependências do projeto
├── package-lock.json                 # Lock de versões
└── README.md                         # Documentação
```

## 📝 Scripts Disponíveis

```bash
# Executar testes
npm test

# Instalar dependências
npm install

# Instalar Mocha
npm i mocha
```

## 🚀 Como Contribuir

1. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
2. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
3. Push para a branch (`git push origin feature/MinhaFeature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo `package.json` para mais detalhes.

## 🔗 Links Úteis

- [GitHub Repository](https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1)
- [Issues](https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1/issues)
- [Actions/Workflows](https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1/actions)
- [Documentação Mocha](https://mochajs.org/)
- [Documentação Mochawesome](https://github.com/adamgruber/mochawesome)

## 📧 Autor

**Projeto de Conclusão - Programação para Automação de Testes**

---

**Última atualização:** 2026-06-20
