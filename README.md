# Trabalho de Conclusão - Programação para Automação de Testes

## 📋 Descrição do Projeto

Este repositório contém o trabalho de conclusão da disciplina de **Programação para Automação de Testes** + **Integração Contínua para Automação de Testes**.

O projeto implementa uma suíte de testes automatizados utilizando boas práticas de desenvolvimento, integração contínua com GitHub Actions e geração de relatórios de execução.

---

## 🎯 Objetivo

Demonstrar conhecimentos em:

* Automação de testes
* Testes unitários
* Integração Contínua (CI)
* GitHub Actions
* Boas práticas de desenvolvimento
* Geração e publicação de relatórios de testes

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia         | Versão  | Propósito                    |
| ------------------ | ------- | ---------------------------- |
| **Node.js**        | 24.x    | Runtime JavaScript           |
| **Mocha**          | ^11.7.6 | Framework de testes          |
| **Mochawesome**    | ^7.1.3  | Relatórios visuais de testes |
| **GitHub Actions** | Latest  | Integração Contínua (CI)     |

---

## 📦 Instalação

### Pré-requisitos

* Node.js latest instalado
* npm instalado

---

### Passos para instalação

1. Clone o repositório:

```bash
git clone https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1.git
cd trabalho-conclusao-programacao-part1
```

2. Instale as dependências:

```bash
npm ci
```

3. Caso necessário, instale o Mocha manualmente:

```bash
npm i mocha
```

---

## 🧪 Executando os Testes

### Executar testes localmente

```bash
npm test
```

A execução dos testes irá:

* Executar os testes unitários
* Gerar os relatórios de execução
* Produzir evidências para análise dos resultados

---

## 📊 Relatórios de Testes

Os relatórios de execução são gerados automaticamente durante a pipeline de CI.

### Arquivos gerados

* `test-results.xml`
* Relatório HTML do Mochawesome

---

## 🔄 Pipeline de Integração Contínua

O projeto utiliza uma pipeline de Integração Contínua configurada no GitHub Actions.

### Nome da Pipeline

```yaml
Integração-Contínua
```

---

## ⚙️ Triggers da Pipeline

A pipeline é executada automaticamente nos seguintes cenários:

### 1. Execução Manual

Permite iniciar a execução manualmente pela interface do GitHub Actions.

```yaml
workflow_dispatch
```

### 2. Execução por Push

Executa automaticamente quando alterações são enviadas para a branch principal.

```yaml
push:
  branches:
    - main
```

### 3. Execução Agendada

Executa automaticamente a cada 5 minutos utilizando expressão Cron.

```yaml
schedule:
  - cron: '*/5 * * * *'
```

---

## ⚙️ Fluxo da Pipeline

A pipeline executa as seguintes etapas:

1. Clonagem do repositório
2. Configuração do ambiente Node.js
3. Instalação das dependências
4. Execução dos testes automatizados
5. Publicação dos resultados dos testes
6. Geração e armazenamento dos artefatos

---

## 📁 Estrutura do Workflow

```text
.github/
└── workflows/
    └── integracao-continua.yml
```

---

## 📄 Pipeline Configurada

```yaml
name: 'Integração-Contínua'

on:
  workflow_dispatch:

  push:
    branches:
      - main

  schedule:
    - cron: '*/5 * * * *'

jobs:
  testes-unitarios:

    runs-on: ubuntu-latest

    steps:

      - name: Clonando o projeto
        uses: actions/checkout@v4

      - name: Instalando Node
        uses: actions/setup-node@v4
        with:
          node-version: latest

      - name: Instalando Dependencias
        run: npm ci

      - name: Executando testes unitarios
        run: npm test

      - name: Test Reporter
        uses: dorny/test-reporter@v1
        if: ${{ always() }}
        with:
          name: Testes
          path: test-results.xml
          reporter: java-junit

      - name: Salvando relatorio de execucao
        uses: actions/upload-artifact@v4
        if: ${{ always() }}
        with:
          path: ./test-results.xml
          name: Relatório-Testes
```

---

## 📦 Artefatos Gerados

Ao final da execução da pipeline, o GitHub Actions disponibiliza o seguinte artefato para download:

```text
Relatório-Testes
```

O artefato contém:

* Resultado da execução dos testes
* Arquivo XML de testes
* Evidências para análise

---

## 📥 Como acessar os relatórios

1. Acesse a aba **Actions** do repositório
2. Selecione uma execução da pipeline
3. Localize o artefato **Relatório-Testes**
4. Faça o download do arquivo
5. Abra os relatórios gerados

---

## 📝 Scripts Disponíveis

```bash
# Executar testes
npm test

# Instalar dependências
npm ci

# Instalar Mocha manualmente
npm i mocha
```

---

## 💡 Conceitos Aplicados

### Integração Contínua (CI)

Execução automática de validações sempre que alterações são realizadas no projeto.

### GitHub Actions

Ferramenta utilizada para automatizar processos de build, testes e validações.

### Testes Automatizados

Execução automática da suíte de testes para garantir qualidade e estabilidade da aplicação.

### Relatórios de Teste

Geração automática de relatórios contendo os resultados detalhados das execuções.

### Artefatos (Artifacts)

Arquivos gerados durante a execução da pipeline e armazenados pelo GitHub para download posterior.

---

## 📄 Licença

Este projeto está licenciado sob a licença **ISC**.

---

## 🔗 Links Úteis

* GitHub Repository: https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1
* GitHub Actions: https://github.com/pcristinapds-pixel/trabalho-conclusao-programacao-part1/actions
* Documentação Mocha: https://mochajs.org/
* Documentação Mochawesome: https://github.com/adamgruber/mochawesome
* GitHub Actions: https://docs.github.com/actions
* Test Reporter Action: https://github.com/dorny/test-reporter
