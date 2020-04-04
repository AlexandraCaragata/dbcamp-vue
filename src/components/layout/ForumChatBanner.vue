<template>
  <!-- FORUM SECTION -->
  <div class="forum-container">
    <img src="../../assets/icons/chat-icon-hi.png" style="
    margin-left: 70px" alt="icon" />
    <div class="forum-txt">
      <h1>Do you need help?</h1>
      <h2>Chat with the experts</h2>
      <button class="btn-goToForum" v-on:click="goToForum">Go to the forum</button>
    </div>
    <img src="../../assets/icons/chat-icon-what.png" alt="icon" />
  </div>
</template>

<style lang="scss">
// FORUM
.forum-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 250px;
}
.forum-txt {
  text-align: center;
  margin: auto;
}
.forum-txt > h1 {
  font-weight: bold;
  margin: 0;
  text-align: center;
}
.forum-txt > h2 {
  font-weight: 400;
  margin: 0;
}
.btn-goToForum {
  background-color: #354865;
  width: 180px;
  height: 50px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: #354865;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px 0;
}
.forum-container > img {
  height: 100%;
  align-content: right;
}
</style>

<script>
export default {
  name: "ForumChatBanner.vue",
  methods: {
    goToForum: function() {
      location.href = "/forum";
    }
  }
};
</script>