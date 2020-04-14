<template>
  <div class="forum">
    <!-- INTRODUCTION SECTION -->
    <div class="intro-container">
      <div class="intro-text">
        <h1>Forum & Chat</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident porro iure numquam tempora nam, deserunt maiores nemo illum alias accusamus voluptatibus eius dicta sit, consequatur obcaecati nostrum quibusdam delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />Eligendi numquam nisi minus eum veritatis quasi asperiores, modi sapiente. Dicta fuga magnam est maxime repudiandae explicabo vero adipisci tempora quod quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident! Voluptate, explicabo? Tempore deserunt voluptatem architecto error aperiam repellendus sit omnis.
        </p>
      </div>
    </div>

    <!-- FAQ -->
    <div class="faq-container">
      <h2>Forums</h2>
      <ul>
        <!-- No. 1 -->
        <li>
          <input type="checkbox" checked />
          <i></i>
          <h3>Languages Used</h3>
          <p>This page was written in HTML and CSS. The CSS was compiled from SASS. I used Normalize as my CSS reset and -prefix-free to save myself some headaches. I haven't quite gotten the hang of Slim for compiling into HTML, but someday I'll use it since its syntax compliments that of SASS. Regardless, this could all be done in plain HTML and CSS.</p>
        </li>
        <!-- No. 2 -->
        <li>
          <input type="checkbox" checked />
          <i></i>
          <h3>Languages Used</h3>
          <p>Using the sibling and checked selectors, we can determine the styling of sibling elements based on the checked state of the checkbox input element. One use, as demonstrated here, is an entirely CSS and HTML accordion element. Media queries are used to make the element responsive to different screen sizes.</p>
        </li>
        <!-- No. 3 -->
        <li>
          <input type="checkbox" checked />
          <i></i>
          <h3>Languages Used</h3>
          <p>By making the open state default for when :checked isn't detected, we can make this system accessable for browsers that don't recognize :checked. The fallback is simply an open accordion. The accordion can be manipulated with Javascript (if needed) by changing the "checked" property of the input element.</p>
        </li>

        <!-- No. 4 -->
        <li>
          <input type="checkbox" checked />
          <i></i>
          <h3>Languages Used</h3>
          <p>By making the open state default for when :checked isn't detected, we can make this system accessable for browsers that don't recognize :checked. The fallback is simply an open accordion. The accordion can be manipulated with Javascript (if needed) by changing the "checked" property of the input element.</p>
        </li>
      </ul>
    </div>

    <!--INPUT FELT -->
    <div class="input-container">
      <h2>Chat</h2>

      <input type="text" id="subject" placeholder="Subject" />

      <input type="text" id="chat" placeholder="Type here..." />

      <button type="submit">Send</button>
    </div>
  </div>
</template>




<style lang="scss">
// INTRODUCTION SECTION

.intro-container {
  margin: auto;
  padding: 0px 120px;
}

.intro-text {
  line-height: 1.5;
  font-weight: 100;
}
.intro-text > h1 {
  text-align: left;
}

// FAQ
.faq-container {
  margin-top: 5%;
  padding: 0px 120px;
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
  border-top: 1px dotted #dce7eb;
}

ul li i {
  position: absolute;
  transform: translate(-6px, 0);
  margin-top: 16px;
  right: 0;
}
ul li i:before,
ul li i:after {
  content: "";
  position: absolute;
  background-color: #354865;
  width: 3px;
  height: 9px;
}
ul li i:before {
  transform: translate(-2px, 0) rotate(45deg);
}
ul li i:after {
  transform: translate(2px, 0) rotate(-45deg);
}
ul li input[type="checkbox"] {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}
ul li input[type="checkbox"]:checked ~ p {
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

button {
  width: 300px;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #354865;
  color: white;
  font-size: 16px;
}
</style>

<script>
</script>
