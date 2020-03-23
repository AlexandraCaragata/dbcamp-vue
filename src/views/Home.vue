<template>
  <div class="home">
    {{this.apiMessage}}
  </div>
</template>

<script>
  export default {
  name: 'Home',
  data: function () {
    return {
      apiMessage: '',
    }
  },
  components: {
  },
  created: function () {
    this.getMessageFromApi();
  },
  methods: {
    getMessageFromApi: async function () {
      const connection = await fetch('http://localhost/db-camp/api-test.php');
      this.apiMessage = await connection.json();
    }
  }
}
</script>
