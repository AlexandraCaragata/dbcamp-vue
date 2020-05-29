<template>
	<div class="sql-page" v-if="haveTopicsLoaded">
		<!-- TOPIC: install relational db -->
		<TopicPage
				:topicName="topic.name"
				:topicIcon="topic.iconName"
		>
			<div class="topicText">
				<p>Before beginning to install a relational database, you need to have completed the other courses so you understand how an entity diagram works and why normalization is an important part of a relational database.</p>
				<p>After defining what the purpose of the database is, you need to gather information about the data. This information helps you to create the structure of the database and divide the data into subject-based tables. Choose a primary key for every table that uniquely identifies the rows.
					The power of relational database lies in the relationship that can be defined between tables. Read much more about this and how to create the perfect structure in the course called “Entity Relationship Diagram”.</p>
				<p>The next step is to check whether your database is structurally correct and optimal. You should look into the different normalization rules covered in the course called ”Database Normalization”, and see if you need to add more columns or if you should split a large table into smaller ones.</p>
				<p>Now you are ready to start your first database project. In this course, we will walk you through the magic of using MySQL.</p>

				<h3>MySQL</h3>
				<p>MySQL is a relational databases, because it allows tables to be joined together and also supports the concept of foreign keys.
					You need to install MySQL Database on your computer, and to do so, we recommend you to check out XAMPP. With XAMPP you install an apache server that includes PHP and MySQL. This is really smart now that you need PHP to write SQL statements.
					Go to <em><a href="https://www.apachefriends.org/" target="_blank">https://www.apachefriends.org/</a></em> an follow their esay guidance on how to install XAMPP.
				</p>
				<p>Now you can go to your XAMPP application on your computer and run the servers needed. Remember whenever we use XAMPP our webpage is being served from a folder called htdocs in the XAMPP directory. You need to write all your files inside the htdocs to use php and MySQL. </p>

				<h3>phpMyAdmin</h3>
				<p>phpMyAdmin is one of the most popular applications for MySQL database management. It is a free tool written in PHP. It gives us a user friendly interface to manipulate the data inside the database and create the structure from our entity diagram. And what is really cool about this tool, is that you can write SQL statements inside phpMyAdmin and run them right away.
					To access phpMyAdmin, go to <em>http://localhost:8080/phpmyadmin</em>.</p>
				<p>
					Now you are ready to easily create your own database and make all the tables and columns needed for you project.
				</p>
			</div>
		</TopicPage>

		<VideoTutorials :videoTutorials="videoTutorials"></VideoTutorials>

		<TakeAQuizSection :topic="topic"></TakeAQuizSection>

		<div class="forum-container">
			<ForumChatBanner></ForumChatBanner>
		</div>
	</div>
</template>

<style lang="scss">
.topicText {
	p, dt {
		line-height: 2em;
		font-size: 20px;
		font-weight: 300;
	}

	h3 {
		font-size: 20px;
	}

	.enumerationList {
		margin-left: 3vw;
	}
}
</style>

<script>
	import ForumChatBanner from "@/components/layout/ForumChatBanner";
	import TopicPage from "../../components/topics/TopicPage";
	import {mapGetters} from "vuex";
	import router from "../../router";
	import TakeAQuizSection from "../../components/layout/TakeAQuizSection";
	import VideoTutorials from "../../components/layout/VideoTutorials";
	export default {
		name: "InstallRelationalDB",
		components: {TopicPage, ForumChatBanner, TakeAQuizSection, VideoTutorials },
		data: function() {
			return {
				videoTutorials: [
					{
						tutorialId: 1,
						videoLink: "https://www.youtube.com/embed/jc0Q7OAeRu0",
						tutorialName: "First Course",
						tutorialText:
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat maiores ipsum adipisci laudantium fugit, aliquam saepe distinctio unde, reiciendis, facilis sequi neque officia iusto? Rerum repellendus accusantium tempore? Pariatur."
					},
					{
						tutorialId: 2,
						videoLink: "https://www.youtube.com/embed/jc0Q7OAeRu0",
						tutorialName: "Second Course",
						tutorialText:
							"Korem ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat maiores ipsum adipisci laudantium fugit, aliquam saepe distinctio unde, reiciendis, facilis sequi neque officia iusto? Rerum repellendus accusantium tempore? Pariatur."
					},
					{
						tutorialId: 3,
						videoLink: "https://www.youtube.com/embed/jc0Q7OAeRu0",
						tutorialName: "Third Course",
						tutorialText:
							"kldklx ipsum dolor sit, amet consectetur adipisicing elit. Natus repellat maiores ipsum adipisci laudantium fugit, aliquam saepe distinctio unde, reiciendis, facilis sequi neque officia iusto? Rerum repellendus accusantium tempore? Pariatur."
					}
				]
			};
		},
		computed: {
			...mapGetters([
				'getTopicByLink',
				'haveTopicsLoaded',
			]),
			topic() {
				if (this.haveTopicsLoaded) {
					return this.getTopicByLink(this.$route.name);
				}
			}
		},
		methods: {
			goToQuiz: function() {
				router.push({ name: 'quiz', params: { quizId: this.topic.quiz_id }});
			}
		}
	};
</script>
