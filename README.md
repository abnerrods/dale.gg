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
  <a href="#-escopo-e-metodologias">📰 Escopo e Metodologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requisitos-e-regras">🖋 Requisitos e Regras</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagramas">📊 Diagramas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-mer">🎲 MER</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">🤔 Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">:memo: Licença</a>
</p>

<br>

## 📰 Escopo e Metodologias

### Escopo

Durante os passos iniciais, startups estão inseridas em um ambiente de total incerteza e todos os esforços são no sentido de encontrar um modelo de negócio. Após a definição do modelo e com o surgimento e crescimento das receitas inicias ,novos investimentos serão necessários para tornar o negócio repetível e escalável a ponto de se tornar uma empresa altamente rentável. Possuímos hoje, apenas uma ideia do que o Dale.gg pode ser tornar no futuro, uma empresa altamente rentável. Para isso se faz necessário um gerenciamento constante do projeto em todos os seus níveis de gerenciamento. O cenário do e-sports, vem na ultima década passando por um crescimento exponencial, visto que sempre foi uma modalidade que dava indícios de sucesso provável, por acompanhar as novas tendências comportamentais das gerações que cresceram com acesso à internet. O maior destaque desse mercado, e que aliás é o game mais jogado do mundo, é o League of Legends, que segundo o último levantamento feito pela empresa criadora do jogo (Riot Games) reúne hoje cerca de 100 milhões de jogadores pelo mundo todo. Sendo assim o Dale.gg surgiu como uma opção para os jogadores da região Brasileira poderem conferir tudo o que acontece no seu perfil do League of Legends e nas suas partidas, dando a eles a opção de conferir como estão se saindo em cada um dos seus jogos. Ou seja, o jogador vai poder ver quais são seus pontos fortes e seus pontos fracos, fazendo com que ele possa sempre melhorar no game e chegar a um nível PRO. Além disso o Dale.gg surge com uma opção um tanto quanto inusitada, um módulo chamado "Duozada" onde os jogadores vão poder encontrar seu par perfeito dentro do game, essas pesquisas terão filtros para que os jogadores possam encontrar alguém que possa preencher os seus  pontos fracos, sendo assim, seus indíces de vítoria e etc iriam aumentar exponencialmente dentro do game!

### Metodologias

O projeto se iniciará com a discussão dos requisitos do projeto e da implementação dos diagramas de UML utilizando a ferramenta StarUML, que ajudarão durante todo o processo de planejamento e, posteriormente, no desenvolvimento da aplicação. O desenvolvimento da aplicação começa com uma criação de conta no portal de desenvolvedores do jogo League of Legends, onde poderemos gerar uma chave de acesso a API da Riot Games. Com esse acesso, poderemos acessar uma API totalmente RESTful e fazer requisições de variados tipos, a fim de obter os dados dos jogadores. Com este acesso, partirmos para o desenvolvimento de uma API Web Service usando o AdonisJS, onde faremos a requisição a qualquer link da API da Riot Games, tendo um retorno de um arquivo “JSON” com dados encapsulados. A chave para API da Riot Games possui um limite de requisições por segundo e por minuto, onde será necessário a implementação de um banco de dados relacional utilizando o PostgreSQL para não excedermos o limite de requisições.Tendo os dados dos jogadores, iniciamos um CRUD de Usuário com autenticação e envio de TOKEN no e-mail para confirmação de cadastro e restauração de senha, sendo assim, já possuímos informações o suficiente para inicialização dos testes unitários com o TDD e testar qualquer funcionalidade futura da aplicação. É seguido um padrão que, após cada funcionalidade implementada via teste unitário seja finalizada, é passado para um segundo tipo de teste utilizando o “Insomnia” para fazer requisições a nossa API Web Service. Digamos que estamos em um ambiente de desenvolvimento e talvez já tenhamos muitas funcionalidades implementadas, nesse caso, utilizamos o padrão Git Flow para desenvolver cada “feature” do nosso projeto e armazenar no repositório do GitHub, além do uso de uma tática de desenvolvimento ágil chamada “Scrum”. Sendo assim, teremos “sprints” de uma semana cada, onde será implementado pelo menos cinco “features” ou mais a cada semana. Ainda na questão GIT, iremos realizar um deploy automatizado da “branch master” na Digital Ocean (VPS), ou seja, a cada “merge” das “pull request” ou “push” na “master”, nossa VPS na Digital Ocean irá se atualizar com os dados recebidos na “branch” do Git Hub. Para o módulo “duozada”, iremos precisar ir um pouco mais a fundo nas tecnologias, sendo necessário o uso de “socket.io” para ocorrer o “match” entre usuários e possibilitar também o uso do chat entre os dois, ambos em tempo real. Inicialmente, o objetivo é finalizar uma API Web Service cem por cento RESTful, que irá servir o nosso próximo projeto em React Native. Porém, gostaríamos de implementar, também, algumas simples telas usando ReactJS para demonstrar os retornos da API da Riot Games.

## 🖋 Requisitos e Regras

#### Requisitos funcionais

| Requisitos funcionais | Descrição |
| --- | --- |
| RF 1 | O sistema deve permitir o cadastro de usuários. |
| RF 2 | O sistema deve permitir que um usuário já cadastrado faça o login na plataforma. |
| RF 3 | O sistema deve permitir que um usuário recupere sua senha. |
| RF 4 | O sistema deve permitir a visualização e a alteração do perfil. |
| RF 5 | O sistema deve permitir que um usuário pesquise por Invocadores dentro da aplicação. |
| RF 6 | O sistema deve permitir a visualização do histórico de partidas assim como todas as informações de cada uma. |
| RF 7 | O sistema deve permitir a visualização do histórico de um jogador em relação as partidas jogadas: total de partidas, total vitórias, total derrotas, etc. |
| RF 8 | O sistema deve permitir a visualização do histórico de um jogador em relação aos campeões jogados: campeão mais jogado, campeão menos jogado, campeão com melhor índice de vitória, etc. |
| RF 9 | O sistema deve permitir que um usuário acesse o módulo "Duozada" para encontrar outros usuários. |
| RF 10 | O sistema deve permitir que um usuário cadastre suas melhores Jogadas em seu perfil . |
| RF 11 | O sistema deve permitir que um usuário possa encontrar e detalhar o perfil de outros jogadores. |
| RF 12 | O sistema deve permitir que um usuário possa dar um Like no perfil de outros jogadores. |
| RF 13 | O sistema deve permitir que aconteça um match entre dois usuários. |
| RF 14 | O sistema deve permitir que aconteça um match perfeito entre dois usuários. |
| RF 15 | O sistema deve permitir que os usuários conversem via Chat após ocorrer um match. |

#### Regras de negócio

| Regras de Negócio | Descrição |
| --- | --- |
| RN 1 | O usuário deverá fazer um primeiro cadastro fornecendo informações básicas, e algumas informações do jogo como, 3 CAMPEÕES que mais joga e 2 ROTAS que mais joga. |
| RN 2 | O usuário só podera fazer edições no seu perfil caso esteja autenticado. |
| RN 3 | O usuário podera recuperar sua senha e confirmar sua conta via token no email. |
| RN 4 | O usuário podera fazer requisições a API da Riot sem estar autenticado. |
| RN 5 | O usuário deve fazer as requisições a API da Riot pelo nome de algum Invocador apenas. |
| RN 6 | O usuário podera atualizar o perfil de algum Invocador, para refazer a requisição a API da Riot. |
| RN 7 | O usuário deverá estar logado na aplicação para utilizar os recursos do Duozada. |
| RN 8 | O sistema deve fornecer para o usuário a opção de cadastrar suas melhores Jogadas quando acessar o Duozada, ou pular a opção. |
| RN 9 | O usuário podera listar e detalhar o perfil de outros jogadores na plataforma, assim como suas Jogadas. |
| RN 10 | O usuário podera dar um Like no perfil de outros jogadores, caso o outro jogador tambem de um like no perfil do mesmo, ira ocorrer um Match. |
| RN 11 | Quando ocorrer um Match entre usuários, o sistema devera validar se, se trata de um Match comum (RN 10) ou um Match Perfeito (RN 12). |
| RN 12 | Após um Match, o sistema deverá validar caso haja a opção de ocorrer um Match perfeito, baseando-se pelas rotas de cada jogador e campeões jogados. |
| RN 13 | Apenas após um Match, os usuários teram a opção de conversarem via Chat dentro da aplicação. |
| RN 14 | Um User que estiver com seu status setado como false, não poderá acessar a aplicação |

#### Requisitos não funcionais tecnologicos

| Requisitos funcionais não tecnologicos | Descrição |
| --- | --- |
| RNFT 1 | O cadastro de um Usuário deve conter: id, name, email, bio, avatar, likes, dislikes, route1, route2, champKey1, champKey2, champKey3, status, deleted, created_at, updated_at, deleted_at. |
| RNFT 2 | O cadastro dos Tokens de um Usuário deve conter: id, userId, type, token, isRevoked, created_at. |
| RNFT 3 | O sistema deve ter um cadastro pré feito de Campeão, Campeão deve conter: id, champName, key, title, bio, imageSplash, imageIcon. |
| RNFT 4 | O sistema deve fazer uso da API da Riot Games para buscar as informações dos Invocadores. |
| RNFT 5 | O sistema deve armazenar as informações vindas da API da Riot dentro do banco de dados local (PostgreSQL). |
| RNFT 6 | O cadastro de um Invocador deve conter: id, accountId, summonerId, puuid, summonerName, revisionDate. |
| RNFT 7 | O cadastro de um Tier deve conter: id, summonerId, leagueId, inactive, queueType, veteran, hotStreak, freshBlood, rank, tier, pdl, winrate, victorys, looses, season. |
| RNFT 8 | O cadastro de SummonerMatchlist deve conter: id, lane, gameId, championId, platformId, queue, role, season. |
| RNFT 9 | O cadastro de MatchDto deve conter: id, seasonId, queueId, gameId, gameVersion, platformId, gameMode, mapId, gameType, team. |
| RNFT 10 | O cadastro de ParticipantsDto deve conter: id, accountId, summonerId, gameId, teamId, spell1Id, spell2Id, highestArchievedSeasonTier. |
| RNFT 11 | O cadastro de ParticipantsStatsDto deve conter: id, participantId, perk0, perk1, perk2, perk3, perk4, perk5, item0, item1, item2, item3, item4, item5, item6, kills, deaths, assists, win, doubleKills, tripleKills, quadraKills, pentaKills, champLevel. |
| RNFT 12 | Like e Dislike serão apenas funcionalidades usando o método Store para armazenar essas informações em um Usuário. |
| RNFT 13 | Cada usuário tera duas rotas e três campeões que jogam, essas informações seram usadas para o sistema decidir entre o Match ou o Match perfeito. |
| RNFT 14 | O chat de texto pós match sera implementado usando socket.io. |

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
