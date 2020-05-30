<template>
	<div class="question-container">
		<div>Question {{this.position}} of {{this.total}}</div>
		<div class="animation">
			<h2>{{this.question.text}}</h2>
			
			<div class="mood">
			<div class="walking-guy"></div>
              <img src="../../assets/svg/happy.svg" alt="" id="happy">
              <img src="../../assets/svg/angry.svg" alt="" id="angry">
            </div>
		</div>
		<label class="answer-label">
			<input type="radio" :value="question.answer_1" v-model="picked">
			{{this.question.answer_1}}
		</label>
		<label class="answer-label">
			<input type="radio" :value="question.answer_2" v-model="picked">
			{{this.question.answer_2}}
		</label>
		<label class="answer-label">
			<input type="radio" :value="question.answer_3" v-model="picked">
			{{this.question.answer_3}}
		</label>
		<button class="button" @click="submitAnswer()">{{this.position === this.total ? 'Finish quiz' : 'Submit answer'}}</button>
	</div>
</template>

<script>
	import {mapMutations} from "vuex";

	export default {
		name: "QuestionContainer",
		data: function() {
			return {
				picked: null,
				score: 0,
			}
		},
		props: {
			question: Object,
			position: Number,
			total: Number,
		},
		methods: {
			submitAnswer: function () {
				if (this.picked === this.question.correct_answer) {
					document.getElementById("happy").style.display="block";
					  document.getElementById("angry").style.display="none";
					  document.querySelector(".walking-guy").style.display="none";
					this.score += 1;
				}

				if (this.picked !== this.question.correct_answer) {
					document.getElementById("angry").style.display="block";
					  document.getElementById("happy").style.display="none";
					  document.querySelector(".walking-guy").style.display="none";

				}

				this.$emit('markQuestionAnswered');
				this.picked = null;

				if (this.position === this.total) {
					this.$emit('registerScore', this.score);
				}
			}
		}
	}
</script>

<style lang="scss">
.mood{
display: none;

}
.mood > img {
display: none;
}
.walking-guy {
display: none;
}
h2 {
	font-weight: 100;
	text-align: left;
}
button {
    width: 50%;
    height: 2.5em;
}

.question-container {
	margin: 10px;
	padding: 2vh 2vw;

	background-color: #EBE5E1;
	border-radius: 5px;
	border-top: 2px solid dimgray;
}

.answer-label {
	background-color: white;
	border-radius: 5px;
	border: 1px solid dimgray;

	display: block;
	padding: 2vh 2vw;
	margin-bottom: 1vh;
}

input[type=radio] {
	float: left;
	width: fit-content;
	margin-right: 1vw;
}

@media screen and (min-width: 1000px) {

	.animation{
	display: grid;
	grid-template-columns: 3fr 1fr;
}
.mood{
  width: 100px;
  height: auto;
  position: relative;
  display: grid;

}
.mood > img {
  width: 100%;
  position: absolute;
	top: -5vw;
	display: none;
	right: -13vw;
}
.walking-guy {
  position: absolute;
  top: -20vw;
  width: 401px; /* The full length of the sprite sheet divided by the amount of steps (2810/7) */
  height: 401px;
  background: url("../../assets/svg/walk-2.png");
  animation: walk 0.8s steps(7);
transform: scale(0.16);
right: -29vw;
  display: grid;
}

@keyframes walk {
  0% {
    background-position: 0px;
    right: -31vw;
  }
  100% {
    background-position: 2810px;
    right: -29vw;
  }
}

.question-container {
	margin: 5vw;
	padding: 2vh 2vw;
}
}

@media screen and (min-width: 1100px) {
	button {
    width: 30%;
    height: 3em;
}
	.animation{
	display: grid;
	grid-template-columns: 3fr 1fr;
}
.mood{
  width: 150px;
  height: auto;
  position: relative;

}
.mood > img {
  width: 100%;
  position: absolute;
	top: -3vw;
	display: none;
	right: -5vw;
}
.walking-guy {
  position: absolute;
  top: -20vh;
  width: 401px; /* The full length of the sprite sheet divided by the amount of steps (2810/7) */
  height: 401px;
  background: url("../../assets/svg/walk-2.png");
  animation: walk 0.8s steps(7);
transform: scale(0.25);
right: -14vw;
}

@keyframes walk {
  0% {
    background-position: 0px;
    right: -16vw;
  }
  100% {
    background-position: 2810px;
    right: -14vw;
  }
}

.question-container {
	width: 50vw;
	margin: 5vh 25vw;
	padding: 2vh 2vw;
}
}
</style>