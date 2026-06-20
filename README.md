# Trabalho de Conclusão - Programação para Automação de Testes

## 📋 Descrição do Projeto

Este repositório contém o trabalho de conclusão da disciplina de **Programação para Automação de Testes** + **Integração Contínua para Automação de Testes**. O projeto implementa uma suíte de testes unitários utilizando boas práticas de automação, geração de relatórios e integração contínua com GitHub Actions.

## 🎯 Objetivo

Demonstrar conhecimentos em:

- Automação de testes
- Testes unitários
- Integração Contínua (CI)
- GitHub Actions
- Boas práticas de desenvolvimento
- Documentação e relatórios de testes

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|---------|------------|
| **Node.js** | 24.x | Runtime JavaScript |
| **Mocha** | ^11.7.6 | Framework de testes |
| **Mochawesome** | ^7.1.3 | Geração de relatórios visuais |

## 📦 Instalação

### Pré-requisitos

- Node.js 24.x instalado
- npm (geralmente acompanha a instalação do Node.js)

### Passos para Instalação

1. Clone o repositório:

```bash
git clone https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1.git
cd trabalho-conclusao-programacao-part1
```

2. Instale as dependências:

```bash
npm install
```

3. Instale o Mocha (caso necessário):

```bash
npm i mocha
```

## 🧪 Executando os Testes

### Executar testes localmente

```bash
npm test
```

Este comando executará todos os testes localizados na pasta `test` e gerará um relatório visual utilizando o Mochawesome.

### Relatório de Testes

Após a execução dos testes, um relatório detalhado será gerado em:

```text
./mochawesome-report/report.html
```

Abra este arquivo no navegador para visualizar os resultados dos testes, estatísticas e informações detalhadas sobre cada execução.

---

## 🔄 Pipelines de Integração Contínua

Este projeto utiliza GitHub Actions para automatizar a execução dos testes em diferentes cenários. Foram configuradas três pipelines independentes, cada uma com um objetivo específico.

### 1. Execução Manual

Permite que os testes sejam executados sob demanda através da interface do GitHub Actions.

**Trigger:** `workflow_dispatch`

**Quando utilizar:**

- Validação pontual de alterações
- Execução sob solicitação do time
- Testes antes de demonstrações ou entregas

### 2. Execução Agendada

Executa automaticamente a suíte de testes em horários pré-definidos utilizando expressões Cron.

**Trigger:** `schedule`

**Objetivo:**

- Garantir verificações periódicas do projeto
- Identificar possíveis problemas de ambiente ou dependências
- Monitorar continuamente a estabilidade da aplicação

### 3. Execução por Push

Executa automaticamente os testes sempre que uma alteração é enviada para o repositório.

**Trigger:** `push`

**Objetivo:**

- Validar rapidamente novas alterações
- Evitar que código com falhas seja integrado ao projeto
- Fornecer feedback imediato ao desenvolvedor

### Requisitos Atendidos

A pipeline criada para este projeto atende aos seguintes requisitos:

- Execução automática por push
- Geração de relatório de testes utilizando Mochawesome
- Armazenamento do relatório como artefato da execução
- Disponibilização do relatório para download através do GitHub Actions

---

## ⚙️ Fluxo de Execução

Independentemente da forma de acionamento, as pipelines seguem o mesmo fluxo principal:

1. Checkout do código-fonte
2. Configuração do ambiente Node.js
3. Instalação das dependências do projeto
4. Instalação das ferramentas de teste
5. Execução dos testes unitários com Mocha
6. Geração do relatório utilizando Mochawesome
7. Armazenamento do relatório como artefato da execução

---

## 📁 Estrutura dos Workflows

```text
.github/
└── workflows/
    ├── 01-manual.exec.yaml
    ├── 02-schedule.exec.yaml
    └── 03-push.exec.yaml
```

---

## 📊 Relatórios de Teste

Os relatórios são gerados automaticamente pelo Mochawesome e armazenados como artefatos do GitHub Actions.

### Como acessar os relatórios

1. Acesse a aba **Actions** do repositório
2. Selecione a execução desejada
3. Localize o artefato **Relatorio-Mochawesome**
4. Faça o download do relatório
5. Abra o arquivo HTML para visualizar os resultados detalhados

---

## 📝 Scripts Disponíveis

```bash
# Executar testes
npm test

# Instalar dependências
npm install

# Instalar Mocha
npm i mocha
```

---

## 💡 Conceitos Aplicados

### Integração Contínua (CI)

Prática que consiste em validar automaticamente alterações realizadas no código, garantindo maior qualidade e confiabilidade durante o desenvolvimento.

### GitHub Actions

Ferramenta de automação integrada ao GitHub utilizada para executar workflows de build, testes e validações.

### Testes Automatizados

Execução automática da suíte de testes para validar o comportamento esperado da aplicação.

### Relatórios de Execução

Documentação gerada após a execução dos testes contendo estatísticas, evidências e resultados detalhados.

### Artefatos (Artifacts)

Arquivos gerados durante a execução da pipeline e armazenados pelo GitHub para consulta ou download posterior.

---

## 📄 Licença

Este projeto está licenciado sob a licença **ISC**. Consulte o arquivo `package.json` para mais informações.

---

## 🔗 Links Úteis

- GitHub Repository: https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1
- Actions/Workflows: https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1/actions
- Documentação Mocha: https://mochajs.org/
- Documentação Mochawesome: https://github.com/adamgruber/mochawesome