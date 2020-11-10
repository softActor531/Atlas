<template>
  <Main />
</template>

<script>
import Main from "@/components/contacts/create/Main";

export default {
  name: "Create",

  components: { Main },

  asyncData() {
    $nuxt.$store.dispatch("contact/getInitialData");
  },

  data() {
    return {
      initialData: ""
    };
  }
};
</script>
