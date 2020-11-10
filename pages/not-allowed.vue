<template>
  <div class="error-page">
    <h1>Tenants are not allowed to edit students!</h1>
    <p>Back <a href="/">Home</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
