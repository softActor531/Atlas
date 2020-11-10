<template>
  <div class="error-page">
    <h1>You don't have the required permissions to access this page!</h1>
    <p>
      Back
      <a href="/">home</a>!
    </p>
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
