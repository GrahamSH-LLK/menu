<template>
  <div class="bg-green-500 p-3 text-white flex justify-between">
    <h1 class="text-3xl font-bold">Resturant Menu</h1>
    <div class="flex align-center">
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
