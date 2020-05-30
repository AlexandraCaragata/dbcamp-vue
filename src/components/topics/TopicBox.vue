<template>
	<div class="course">
		<img :src="require(`../../assets/icons/${topic.iconName}`)" alt="icon" />
		<h3>Course</h3>
		<h2>{{topic.name}}</h2>
		<p>{{topic.description}}</p>
		<div class="progress-container">
			<div class="quiz-progress" v-if="topic.quizScore">
				<p>Quiz score</p>
				<div class="progress-circle">
					<p>{{topic.quizScore}}%</p>
					</div>
			</div>

			<div class="video-progress" v-if="topic.videoProgress">
				<p>Course</p>
				<div class="progress-circle">
					<p>{{topic.videoProgress}}%</p>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TopicBox",
		props: {
			topic: Object,
		},
	}
</script>

<style lang="scss">
.course {
	border: 2px solid #EBE5E1;
	padding: 10px;
	margin-bottom: 18px;
	border-radius: 5px;
	cursor: pointer;
}
.course > p {
	font-weight: 100;
}
.course > h2 {
	font-weight: 400;
}
.course > h3 {
	font-weight: 600;
	font-size: 12px;
}

.course > h2,
h3 {
	margin: 0;
	text-align: left;
}
.course > img {
position: absolute;
    margin-top: -7vw;
    margin-left: 73vw;
    max-width: 57px
}

.progress-container {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}

.quiz-progress, .video-progress {
	display: flex;
	flex-direction: column;
	margin-right: 2vw;
}

.progress-circle {
	border: 3px solid darkgrey;
	border-radius: 50%;
	height: 40px;
	width: 40px;
	margin: auto;
}
.progress-circle > p {
    margin: 8px auto;
    text-align: center;
}
@media screen and (min-width: 360px) {
.course > img {
position: absolute;
    max-width: 70px
}

}
@media screen and (min-width: 450px) {
	.course {
	padding: 10px;
}
	.course > img {
	position: absolute;
	margin-top: -5vw;
	margin-left: 33vw;
	max-width: 100px;
}

}

@media screen and (min-width: 1100px) {
.course {
	padding: 10px;
	margin: 25px 50px 25px 0px;
}
.course > img {
	position: absolute;
	margin-top: -3.5vw;
	margin-left: 14vw;
	max-width: 150px;
}
}
</style>