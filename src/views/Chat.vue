<template>
  <div class="chat">
    <!-- INTRODUCTION SECTION -->
    <div class="chat-container">
      <div class="chat-text">
        <h1>Need help to implement my database</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident porro iure numquam tempora nam, deserunt maiores nemo illum alias accusamus voluptatibus eius dicta sit, consequatur obcaecati nostrum quibusdam delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />Eligendi numquam nisi minus eum veritatis quasi asperiores, modi sapiente. Dicta fuga magnam est maxime repudiandae explicabo vero adipisci tempora quod quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident! Voluptate, explicabo? Tempore deserunt voluptatem architecto error aperiam repellendus sit omnis.
        </p>
      </div>
    </div>

    <!--CHAT SECTIONS -->
    <div class="chat-input">
      <section id="chatInput"></section>
      <hr />
      <p>1. Answer</p>
      <section id="chatInput"></section>
    </div>

    <!--INPUT FELT -->
    <div class="input-container">
      <h2>Chat</h2>
      <input type="text" id="chat" placeholder="Type here..." />

      <button type="submit">Send</button>
    </div>
  </div>
</template>




<style lang="scss">
//Generelle
h2 {
  text-align: left;
}

// INTRODUCTION SECTION

.chat-container {
  margin: auto;
  padding: 0px 20px;
}

.intro-text {
  line-height: 1.5;
  font-weight: 100;
}
.intro-text > h1 {
  text-align: left;
}

//Chat section
.chat-input {
  margin: auto;
  padding: 0px 20px;
}
#chatInput {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 2px outset #959595;
  margin-bottom: 5px;
}

//Input

.input-container {
  margin-top: 5%;
  padding: 0px 20px;
}

#chat {
  width: 100%;
  height: 100px;
}

button {
  width: 300px;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #354865;
  color: white;
  font-size: 16px;
}


@media screen and (min-width: 970px) {

.chat-container {
  margin: auto;
  padding: 0px 120px;
}
//Chat section
.chat-input {
  margin: auto;
  padding: 0px 120px;
}
#chatInput {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 2px outset #959595;
  margin-bottom: 5px;
}

//Input

.input-container {
  margin-top: 5%;
  padding: 0px 120px;
}

#chat {
  width: 100%;
  height: 100px;
}
}
</style>

<script>
</script>
