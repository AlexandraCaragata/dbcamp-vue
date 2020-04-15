<template>
	<div class="question-container">
		<div>Question {{this.position}} of {{this.total}}</div>
		<h2>{{this.question.text}}</h2>
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
					this.score += 1;
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