<template>
	<div class="tutorial-wrapper">
		<div
				class="video-tutorial"
				v-for="tutorial in videoTutorials"
				v-bind:key="tutorial.tutorialId">
			<iframe
					:src="tutorial.videoLink"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
			></iframe>
			<h2>{{tutorial.tutorialName}}</h2>
			<p>{{tutorial.tutorialText}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "VideoTutorials",
		props: {
			videoTutorials: Array,
		},
		mounted() {
			console.log(this.videoTutorials);
		}
	}
</script>

<style lang="scss">
// VIDEO TUTORIAL
.tutorial-wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 0 50px;
}
.video-tutorial {
	width: 400px;
	margin: auto;
}
.video-tutorial > h2 {
	text-align: left;
	margin-bottom: 0;
}
.video-tutorial > p {
	margin-top: 0;
}

iframe {
	border-radius: 5px;
	width: 100%;
	height: 315px;
}
</style>
