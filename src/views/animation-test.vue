<template>
    <div class="test">
        {{apiMessage}}
        
       <div class="walking-guy"></div>
          <div class="contatiner">
            <div class="quiz">
            <p>Here is a question</p>
            <button v-on:click="correct" >Answer 1</button>
            <button v-on:click="wrong">Answer 2</button>
            </div>
            <div class="mood">
              <img src="../assets/svg/happy.svg" alt="" id="happy">
              <img src="../assets/svg/angry.svg" alt="" id="angry">
            </div>
          </div>
    </div>
</template>

<style lang="scss">
.contatiner{
  width: 500px;
  margin: auto;
  display: flex;
}

.mood{
  width: 100px;
  height: auto;
  position: relative;

}
.mood > img {
  width: 100%;
  position: absolute;
  display: none;
}

.walking-guy{
  width: 400.75px;
  height: 401px;
  background: url("../assets/svg/run.png");
  animation: walk 1s steps(4)  infinite , forward 5s linear  infinite ;

}

@keyframes walk{
  0%{
    background-position: 0px;
  } 100%{
    background-position: 1603px;
  }
}

@keyframes forward {
  0%{
    transform: translateX(1200px);
  } 100% {
    transform: translateX(-100px);
  }
}
</style>

<script>
export default {
  name: "test",
  data: function() {
    return {
      apiMessage: ""
    };
  },
  methods: {
    correct: function (){
      document.getElementById("happy").style.display="block";
      document.getElementById("angry").style.display="none";
    },
    wrong: function (){
      document.getElementById("angry").style.display="block";
      document.getElementById("happy").style.display="none";
    }

  }
};
</script>