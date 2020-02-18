<h1 align="center">
    <img alt="DaleggDocs" title="#delicinhas" src=".github/docs-logo.png" width="200px" />
</h1>

<h4 align="center">
  🚀 Dale.gg 📕
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jlenon7/dale.gg-omni">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jlenon7/dale.gg-omni">
  
  <a href="https://github.com/jlenon7/dale.gg-omni/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jlenon7/dale.gg-omni">
  </a>

  <a href="https://github.com/jlenon7/dale.gg-omni/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jlenon7/dale.gg-omni">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-requisitos-regras">🖋 Requisitos e Regras</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagramas">📊 Diagramas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-mer">🎲 MER</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">🤔 Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">:memo: Licença</a>
</p>

<br>

## 🖋 Requisitos e Regras

#### Requisitos funcionais

| Requisitos funcionais | Descrição |
| --- | --- |
| RF-1 | O sistema deve permitir o cadastro de usuários. |
| RF-2 | O sistema deve permitir que um usuário já cadastrado faça o login na plataforma. |
| RF-3 | O sistema deve permitir que um usuário recupere sua senha. |
| RF-4 | O sistema deve permitir a visualização e a alteração do perfil. |
| RF-5 | O sistema deve permitir que um usuário pesquise por Invocadores dentro da aplicação. |
| RF-6 | O sistema deve permitir a visualização do histórico de partidas assim como todas as informações de cada uma. |
| RF-7 | O sistema deve permitir a visualização do histórico de um jogador em relação as partidas jogadas: total de partidas, total vitórias, total derrotas, etc. |
| RF-8 | O sistema deve permitir a visualização do histórico de um jogador em relação aos campeões jogados: campeão mais jogado, campeão menos jogado, campeão com melhor índice de vitória, etc. |
| RF-9 | O sistema deve permitir que um usuário acesse o módulo "Duozada" para encontrar outros usuários. |
| RF-10 | O sistema deve permitir que um usuário cadastre suas melhores Jogadas em seu perfil . |
| RF-11 | O sistema deve permitir que um usuário possa encontrar e detalhar o perfil de outros jogadores. |
| RF-12 | O sistema deve permitir que um usuário possa dar um Like no perfil de outros jogadores. |
| RF-13 | O sistema deve permitir que aconteça um match entre dois usuários. |
| RF-14 | O sistema deve permitir que aconteça um match perfeito entre dois usuários. |
| RF-15 | O sistema deve permitir que os usuários conversem via Chat após ocorrer um match. |

#### Regras de negócio

| Regras de Negócio | Descrição |
| --- | --- |
| RN-1 | O usuário deverá fazer um primeiro cadastro fornecendo informações básicas, e algumas informações do jogo como, 3 CAMPEÕES que mais joga e 2 ROTAS que mais joga. |
| RN-2 | O usuário só podera fazer edições no seu perfil caso esteja autenticado. |
| RN-3 | O usuário podera recuperar sua senha e confirmar sua conta via token no email. |
| RN-4 | O usuário podera fazer requisições a API da Riot sem estar autenticado. |
| RN-5 | O usuário deve fazer as requisições a API da Riot pelo nome de algum Invocador apenas. |
| RN-6 | O usuário podera atualizar o perfil de algum Invocador, para refazer a requisição a API da Riot. |
| RN-7 | O usuário deverá estar logado na aplicação para utilizar os recursos do Duozada. |
| RN-8 | O sistema deve fornecer para o usuário a opção de cadastrar suas melhores Jogadas quando acessar o Duozada, ou pular a opção. |
| RN-9 | O usuário podera listar e detalhar o perfil de outros jogadores na plataforma, assim como suas Jogadas. |
| RN-10 | O usuário podera dar um Like no perfil de outros jogadores, caso o outro jogador tambem de um like no perfil do mesmo, ira ocorrer um Match. |
| RN-11 | Quando ocorrer um Match entre usuários, o sistema devera validar se, se trata de um Match comum (RN 10) ou um Match Perfeito (RN 12). |
| RN-12 | Após um Match, o sistema deverá validar caso haja a opção de ocorrer um Match perfeito, baseando-se pelas rotas de cada jogador e campeões jogados. |
| RN-13 | Apenas após um Match, os usuários teram a opção de conversarem via Chat dentro da aplicação. |

#### Requisitos funcionais não tecnologicos

---

## 📊 Diagramas

---

## 🎲 MER

---

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 🖤 por [jlenon7](https://github.com/jlenon7) & [Adryell](https://github.com/adryell):wave:
