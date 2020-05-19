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
	top: -45px;
	display: none;
	right: -110px;
}
.walking-guy {
  position: absolute;
  top: -180px;
  width: 401px;
  height: 401px;
  background: url("../../assets/svg/walk-2.png");
  animation: walk 0.8s steps(7);
transform: scale(0.25);
}

@keyframes walk {
  0% {
    background-position: 0px;
    right: -300px;
  }
  100% {
    background-position: 2810px;
    right: -250px;
  }
}

h2 {
	font-weight: 100;
	text-align: left;
}

.question-container {
	width: 50vw;
	margin: 5vh 25vw;
	padding: 2vh 2vw;

	background-color: #d3cecb;
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
</style>