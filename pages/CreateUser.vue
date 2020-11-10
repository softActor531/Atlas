<template>
  <div>
    <h1>Graduation Candidate | Set-Up</h1>
    <Sign />
  </div>
</template>

<script>
import Sign from "../components/Sign";

export default {
  name: "CreateUser",
  components: {
    Sign
  }
};
</script>

<style scoped>
h1 {
  font-size: 22px;
  padding: 22px 0 20px;
  text-transform: uppercase;
}
h2 {
  font-size: 20px;
  text-transform: uppercase;
}
</style>
