<template>
	<section>
		<h1>
			Welcome <strong>{{userName}}</strong>
		</h1>

		<!-- COURSES/TOPICS SECTION -->
		<div class="takenCourses">
			<TopicBox
					v-for="course in courses"
					:course="course"
					:key="course.courseId">
			</TopicBox>
		</div>

		<!-- FORUM SECTION -->
		<ForumChatBanner></ForumChatBanner>
	</section>
</template>

<script>
	import ForumChatBanner from "@/components/layout/ForumChatBanner";
	import TopicBox from "../components/topics/TopicBox";

	export default {
		name: "MyAccount.vue",
		components: {TopicBox, ForumChatBanner },
		data: function() {
			return {
				userName: "Amanda",
				courses: [
					{
						courseId: 1,
						courseTitle: "SQL",
						courseTxt:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
						courseIcon: "pink.png",
						courseLink: "/learn-sql",
						quizProgress: 50,
						videoProgress: 50,
					},
					{
						courseId: 2,
						courseTitle: "Rational Database",
						courseTxt:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
						courseIcon: "purple.png",
						courseLink: "/learn-sql",
						quizProgress: 50,
						videoProgress: 50,
					},
					{
						courseId: 3,
						courseTitle: "Database Normalisation",
						courseTxt:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
						courseIcon: "dark-blue.png",
						courseLink: "/learn-sql",
						quizProgress: 50,
						videoProgress: 50,
					},
					{
						courseId: 4,
						courseTitle: "Entity Diagram",
						courseTxt:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
						courseIcon: "skin-color.png",
						courseLink: "/learn-sql",
						quizProgress: 50,
						videoProgress: 50,
					},
					{
						courseId: 5,
						courseTitle: "Web Front End",
						courseTxt:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
						courseIcon: "salmon.png",
						courseLink: "/learn-sql",
						quizProgress: 50,
						videoProgress: 50,
					},
					{
						courseId: 6,
						courseTitle: "Web Front End",
						courseTxt:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati possimus laboriosam similique.",
						courseIcon: "yellow.png",
						courseLink: "/learn-sql",
						quizProgress: 50,
						videoProgress: 50,
					}
				]
			};
		}
	}
</script>

<style lang="scss">
section {
	margin: 0 13vw;
}

h1 {
	font-weight: 100;
	text-align: left;
}

// TAKEN COURSES
.takenCourses {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}
</style>