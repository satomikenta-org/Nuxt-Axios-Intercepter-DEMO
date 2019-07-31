<template>
  <div class="container">
    <h2 class="header-title">@nuxt/axios Intercepter Demo</h2>
    <button @click="handleGoPrivate" class="btn">Request to be failed with 401</button>
    <button @click="handleSomeRequest" class="btn">Request to be failed with 500</button>
  </div>
</template>

<script>

export default {
  methods: {
    async handleGoPrivate() {
      try {
        await this.$axios.$get('/private');
      } catch (ex) {}
    },
    async handleSomeRequest() {
      try {
        await this.$axios.$get('/some');
      } catch (ex) {}
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.header-title {
  margin-top: 15vh;
}

.btn {
  margin: 30px;
  width: 400px;
  height: 40px;
  background-color: cadetblue;
  border-radius: 10px;
  font-size: 1em;
}

</style>
