<template>
  <div>
    <!-- TEXT SECTION -->
    <div class="text-section">
      <div class="headingOne-wrapper">
        <h1>{{topicName}}</h1>
        <img :src="require(`../../assets/icons/${topicIcon}`)" alt="sql" />
      </div>

      <div class="text-container"><slot></slot></div>
    </div>
  </div>
</template>

<style lang="scss">
// TEXT SECTION
.text-section {
  padding: 50px 80px;
}
.headingOne-wrapper {
  display: flex;
}
.headingOne-wrapper > img {
  margin-left: -20px;
  height: 100%;
  max-height: 80px;
  margin-top: -10px;
}
.headingOne-wrapper > h1 {
  font-weight: 400;
  margin-bottom: 0;
}
p {
  font-weight: 100;
}
.text-container {
  width: 90%;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: "TopicPage",
  props: {
    topicName: String,
    topicIcon: String,
  }
};
</script>
