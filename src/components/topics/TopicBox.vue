<template>
	<div class="course">
		<img :src="require(`../../assets/icons/${course.courseIcon}`)" alt="icon" />
		<h3>Course</h3>
		<h2>{{course.courseTitle}}</h2>
		<p>{{course.courseTxt}}</p>
		<div class="progress-container">
			<div class="quiz-progress" v-if="course.quizProgress">
				<p>Quiz score</p>
				<div class="progress-circle">{{course.quizProgress}}%</div>
			</div>

			<div class="video-progress" v-if="course.videoProgress">
				<p>Course</p>
				<div class="progress-circle">{{course.videoProgress}}%</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TopicBox",
		props: {
			course: Object,
		}
	}
</script>

<style lang="scss">
.course {
	border: 2px solid #d3cecb;
	padding: 10px;
	margin: 25px 50px 25px 0px;
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
	font-size: 14px;
}

.course > h2,
h3 {
	margin: 0;
	text-align: left;
}
.course > img {
	position: absolute;
	margin-top: -3.5vw;
	margin-left: 16vw;
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
}

</style>