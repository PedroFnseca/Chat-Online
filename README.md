# Chat via WebSocket 💻
#### A ideia desse projeto surgiu quando eu assisti alguns documentários e séries sobre tecnologia, ao ver os personagens se comunicando através do terminal nativo do computador com outras pessoas me deixou bastante curioso sobre o funcionamento. Depois de algumas pesquisas eu descobri como fazer o meu própio e dei início ao projeto ```Nuntius WebSocket``` do latim, o mensageiro.

#### O projeto é bem simples, ele consiste em um servidor WebSocket que recebe as mensagens e as envia para todos os clientes conectados. E para conectar os clientes eu utilizei o [socket.io](https://socket.io/).

#### Esse projeto foi feito com o intuito de entender a comunicação full duplex, e criar um chat que possa ser usado em qualquer lugar, sem a necessidade de instalar nada, apenas acessar o link e começar a conversar.

<br>

# O que é WebSocket? 🤔 

#### O WebSocket é um protocolo de comunicação que funciona sobre o protocolo HTTP. Permite comunicações bidirecionais através de canais full-duplex permitindo que os dados sejam enviados e recebidos em tempo real. 

<p align="center"> 
  <img src="https://user-images.githubusercontent.com/97262778/194972842-0423acca-dd3a-47e8-8978-d3f0202053cc.png" width="60%"/> 
</p>

<br>

### Esse é somente o começo do projeto, futuramente pretendo adicionar mais funcionalidades, como:

| Funcionalidades | Status |
| --- | --- |
| Salas de conversa | ✅ |
| Salas públicas | ✅ |
| Banco de dados MongoDB | ❌ |
| upload de arquivos | ❌ |
| Emojis | ❌ |

<br>

# Os segredos do projeto 🤫

#### Um dos segredos desse projeto é que ele interpeta HTML quando você digita, ou seja, se você digitar ```<img src="link-imagem">``` ele vai renderizar a imagem no chat. Serve para qualquer tag HTML, como ```<h1>```, ```<p>``` e etc. Dá até para colocar um vídeo do YouTube, basta colocar o link do vídeo entre ```<iframe>``` e ```</iframe>```. Se divirta!
 
<br>

# Como usar? 🎮

#### Ao entrar no [chat](https://nuntius-msg.herokuapp.com/), coloque o seu username (a sala é opcional). Pronto, agora você já pode conversar com outras pessoas que estão no chat.

<p align="center">
<!-- Imagem da home aqui -->
</p>

---

#### Para enviar uma mensagem, basta digitar no campo de texto e apertar enter ou clicar no botão de enviar. Aproveite para testar as funcionalidades do chat, como enviar imagens, vídeos do YouTube e etc, tags HTML. Explore! 🌎 

<p align="center">
<!-- Imagem do chat aqui -->
</p>

<br>


# Quer testar? 🚀

#### [Clique aqui](https://nuntius-msg.herokuapp.com/) para acessar o chat.

<br>

# Sujestões e melhorias 🤝

#### Se você tiver alguma sugestão de melhoria ou correção, por favor, abra uma issue [aqui](https://github.com/pedroFnseca/Nuntius-WebSocket/issues/new/choose) 🚀


