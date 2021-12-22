<template>
  <div class="bg-green-500 p-3 text-white flex justify-between align-center">
    <nuxt-link to="/"><h1 class="text-3xl font-bold">Resturant Menu</h1></nuxt-link>
    <div class="flex justify-center align-center">
      <nuxt-link to="/nutrition" class="mx-2">Nutrition Facts</nuxt-link> 
      <span
        >Balance: {{ mmms }}
        <span class="rotate-180 inline-block">₩</span></span
      >
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    mmms() {
      return this.$store.state.mmms;
    },
  },
};
</script>
