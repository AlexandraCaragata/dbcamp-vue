<template>
  <div class="forum">
    <!-- INTRODUCTION SECTION -->
    <div class="intro-container">
      <div class="intro-text">
        <h1>Forum</h1>
        <p>
          Our forum is a good place where you can go ahead and ask questions if you get stuck on something so you can get help from other users
          <br />If you see an issue you know the answer to go ahead and help a fellow student in need!
        </p>
      </div>
    </div>

    <!-- FAQ -->
    <div class="faq-container">
      <h2>Posts</h2>
      <ul>
        <li v-for="forumPost in forumPosts">
          <label>
            <h3>{{forumPost.subject}}</h3>
          </label>

          <input type="checkbox" checked />

          <div>
            <p>{{forumPost.text}}</p>
            <div class="comments">
              <h3 class="comments-headline">Comments</h3>

              <div class="comment" v-for="comment in forumPost.comments">
                <p>{{comment.text}}</p>
              </div>
              <form class="add-comment-form">
                <p>Add comment</p>
                <textarea cols="100" rows="5" placeholder="Comment" v-model="commentText"></textarea>
                <button type="submit" class="button" @click="addComment(forumPosts._id.$oid)">Add comment</button>
              </form>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!--INPUT CONTAINER -->
    <div class="input-container">
      <h2>Add new forum post</h2>
      <div class="error" v-if="showError">Please fill in all the fields</div>

      <form @submit.prevent="addNewForumPost" @input="showError = false">
        <input type="text" id="subject" placeholder="Subject" v-model="subject" />
        <input type="text" id="chat" placeholder="Type here..." v-model="text" />

        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
// INTRODUCTION SECTION

.intro-container {
  margin: auto;
  padding: 0 20px;
}

.intro-text {
  line-height: 1.5;
  font-weight: 100;

  p {
    margin: 0 auto;
  }
}
.intro-text > h1 {
  text-align: left;
}

// FAQ
.faq-container {
  margin-top: 5%;
  padding: 0px 20px;

  .comments {
    margin-left: 3vw;
    .comments-headline {
      border-bottom: 1px lightgray dotted;
    }

    .comment,
    .add-comment-form {
      margin-left: 3vw;
    }

    .comment {
      border-bottom: 1px lightgray dotted;
    }
  }
}

p,
ul li i:before,
ul li i:after {
  transition: all 0.25s ease-in-out;
}

h2 {
  text-align: left;
}
h3 {
  color: black;
  text-align: left;
  font-size: 18px;
  line-height: 34px;
  font-weight: 300;
  letter-spacing: 1px;
  display: block;
  margin: 0;
  cursor: pointer;
}

p {
  color: black;
  text-align: left;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  max-height: 800px;
  opacity: 1;
  transform: translate(0, 0);
  margin-top: 14px;
  z-index: 2;
}

ul {
  list-style: none;
  perspective: 900;
  padding: 0;
  margin: 0;
}
ul li {
  position: relative;
  padding: 0;
  margin: 0;
  padding-bottom: 4px;
  padding-top: 18px;
  border-top: 1px dotted #EBE5E1;
}

ul li input[type="checkbox"] {
  cursor: pointer;
}
ul li input[type="checkbox"]:checked ~ div {
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  transform: translate(0, 50%);
}
ul li input[type="checkbox"]:checked ~ i:before {
  transform: translate(2px, 0) rotate(45deg);
}
ul li input[type="checkbox"]:checked ~ i:after {
  transform: translate(-2px, 0) rotate(-45deg);
}

label {
  display: inline-block;
}
//INPUT FELT
.input-container {
  margin: 3vh auto;
  padding: 0 2vw;
}

#subject {
  width: 90%;
}

#chat {
  width: 90%;
  height: 100px;
}

button {
  width: 300px;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #354865;
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
}

@media screen and (min-width: 970px) {
  // INTRODUCTION SECTION

  .intro-container {
    margin: auto;
    padding: 0px 120px;
  }

  // FAQ
  .faq-container {
    margin-top: 5%;
    padding: 0px 120px;
  }
  //INPUT FELT
  .input-container {
    margin-top: 5%;
    padding: 0px 120px;
  }

  #subject {
    width: 100%;
  }

  #chat {
    width: 100%;
    height: 100px;
  }
}
</style>

<script>
import router from "../router";
import { mapGetters } from "vuex";
import formDataGenerator from "../services/formDataGenerator";

export default {
  name: "Forum",
  data: function() {
    return {
      text: '',
      subject: '',
      commentText: '',
      showError: false,
      forumPosts: []
    };
  },
  mounted() {
    if (!this.getUser) {
      router.push({ name: "Home" });
    }

    this.getAllForumPosts();
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    validateForm: function() {
      if (!this.text.length || !this.subject.length) {
        this.showError = true;
      }
    },
    addNewForumPost: async function() {
      this.validateForm();

      if (this.showError) {
        return;
      }

      await fetch(
        `${process.env.VUE_APP_API_URL}/mongoDBConnections/insert-forum-posts.php`,
        {
          method: "POST",
          body: formDataGenerator.generate({
            text: this.text,
            subject: this.subject,
            userId: this.getUser.id
          })
        }
      );

      this.subject = "";
      this.text = "";

      this.getAllForumPosts();
    },

    getAllForumPosts: function() {
      fetch(
        `${process.env.VUE_APP_API_URL}/mongoDBConnections/get-all-forum-posts.php`
      )
        .then(response => response.json())
        .then(data => {
          this.forumPosts = data;

          data.forEach((forumPost) => {
            fetch(
                `${process.env.VUE_APP_API_URL}/mongoDBConnections/get-all-comments-for-post.php?forumPostId=${forumPost._id.$oid}`
            )
              .then(response => response.json())
              .then(data => {
                this.forumPosts[this.forumPosts.indexOf(forumPost)].comments = data;
              });
          });
        });
    },

    addComment: async function (forumPostId) {
      await fetch(
        `${process.env.VUE_APP_API_URL}/mongoDBConnections/insert-forum-comment.php`,
        {
          method: "POST",
          body: formDataGenerator.generate({
            text: this.commentText,
            userId: this.getUser.id,
            postId: forumPostId,
          })
        }
      );

      this.commentText = "";

      this.getAllForumPosts();
    }
  }
};
</script>
