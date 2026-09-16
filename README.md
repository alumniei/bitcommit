# BitCommit 2026 Website

Website oficial do **BitCommit 2026 — The Developer & Infrastructure Conference**, organizado em colaboração com a **AlumniEI** (Associação de Antigos Alunos de Engenharia Informática da FEUP).

Construído com [Hugo](https://gohugo.io/) e estilizado com CSS moderno (CSS Custom Properties & Hugo Pipes), seguindo fielmente o design aprovado no Figma (Screenshots 21.23.10 & 21.23.17).

---

## 📑 Estrutura da Página

O website é uma *single-page application* limpa e moderna focada na agenda e informações essenciais do evento:

1. **Hero & Barra de Navegação (Pill Nav)**:
   - Logótipo oficial com a mascote alforreca/jellyfish.
   - Data em destaque: `10 Outubro 2026`.
   - Navegação em formato *pill* com âncoras suaves:
     - `#programa` (Agenda)
     - `#patrocinadores` (Sponsors)
     - `#contactos` (Contactos)

2. **Data e Local**:
   - Cartões destacados para consulta rápida:
     - **Local:** *Founders Founders, Porto* (com ícone de localização).
     - **Hora:** *14:30* (com ícone de relógio).

3. **Sobre**:
   - Breve introdução ao propósito e ambição do BitCommit 2026.

4. **Programa (Agenda & Oradores)**:
   - Linha temporal completa das sessões (14:30 às 18:30):
     - `14:30` — Abertura (Receção dos participantes e boas-vindas)
     - `15:00` — Palestra (com oradora e fotografia integrada)
     - `15:30` — Round Table: *How AI is changing our work*
     - `17:00` — Palestra: *IA Generativa*
     - `17:45` — Palestra: *Open Source*
     - `18:30` — Encerramento (Sorteios e despedida)
   - Integração direta dos perfis dos oradores (avatar, nome e cargo) dentro de cada cartão da sessão.

5. **Parceiros (Sponsors)**:
   - Grelha hierarquizada com suporte para logótipos e cartões de placeholder:
     - **Gold:** 2 patrocinadores (cartões com contorno âmbar).
     - **Silver:** 3 patrocinadores.
     - **Bronze:** 4 patrocinadores.
   - Pode ser ocultada/apresentada através do feature toggle `enable_sponsors` em `hugo.toml`.

6. **Rodapé & Contactos**:
   - Email institucional (`geral@alumniei.pt`) e localização.
   - Nota de copyright oficial do BitCommit.

---

## 🛠️ Como Mover do Figma para o Hugo (Processo & Decisões)

1. **Tokens de Design (`assets/css/style.css`)**:
   - As cores, espaçamentos e raios de curvatura do Figma foram mapeados para variáveis CSS (`:root`).
   - Tipografia: fonte **Inter** (Google Fonts).
   - O pipeline de estilos é gerido nativamente pelo Hugo Pipes (`resources.Get`, `resources.Minify` e `resources.Fingerprint`), sem qualquer necessidade de Node.js/npm.

2. **Componentização Modular (`layouts/partials/`)**:
   - `hero.html` — Hero e barra de navegação pill.
   - `event_info.html` — Cartões de data, hora e local.
   - `about.html` — Texto descritivo.
   - `schedule.html` — Timeline com integração de oradores.
   - `sponsors.html` — Níveis de patrocinadores (Gold, Silver, Bronze).
   - `footer.html` — Contactos e rodapé.

3. **Separação de Dados (`data/`)**:
   - `data/schedule.yaml`: Sessões, horários, tipos e identificadores de oradores.
   - `data/speakers.yaml`: Dados dos oradores (nome, empresa, cargo, foto e bio).
   - `data/sponsors.yaml`: Patrocinadores categorizados por níveis.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Hugo](https://gohugo.io/installation/) instalado (versão extended).

### Iniciar o Servidor
```bash
hugo server -D
```
Abra no navegador em: `http://localhost:1313/`

### Compilar para Produção
```bash
hugo --gc --minify
```
Os ficheiros finais serão gerados na pasta `public/`.

---

## 📝 Como Atualizar Conteúdo & Ficheiros

### 1. Alterar Sessões da Agenda
Edite [data/schedule.yaml](file:///Users/pedrodias/Projects/bitcommit/data/schedule.yaml):
```yaml
- time: "15:00"
  type: "Palestra"
  title: "Nome da Palestra"
  description: "Descrição breve..."
  speaker_id: "speaker-1" # Associa ao id em data/speakers.yaml
```

### 2. Atualizar Oradores
Edite [data/speakers.yaml](file:///Users/pedrodias/Projects/bitcommit/data/speakers.yaml) e coloque novas fotografias em `static/images/speakers/`:
```yaml
- id: "speaker-1"
  name: "Nome da Oradora"
  role: "Keynote Speaker"
  company: "Empresa"
  image: "/images/speakers/speaker-1.png"
```
*(Caso não tenha imagem, deixe `image: ""` e o site usará automaticamente o avatar SVG de placeholder).*

### 3. Atualizar Patrocinadores
Coloque os logótipos SVG/PNG em `static/images/sponsors/` e configure em [data/sponsors.yaml](file:///Users/pedrodias/Projects/bitcommit/data/sponsors.yaml):
```yaml
gold:
  - name: "Nome do Patrocinador"
    logo: "/images/sponsors/gold-sponsor.svg"
    url: "https://empresa.com"
```
*(Enquanto o logótipo não for adicionado, o cartão exibe uma caixa com o nome correspondente ao Figma).*

#### Feature Toggle (Ativar / Desativar Patrocinadores)
A secção de patrocinadores e o respetivo link na barra de navegação podem ser ativados ou desativados através do parâmetro `enable_sponsors` no ficheiro [hugo.toml](file:///Users/pedrodias/Projects/bitcommit/hugo.toml):

```toml
[params]
  enable_sponsors = false # Defina como true para exibir ou false para ocultar
```
