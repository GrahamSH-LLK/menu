<template>
  <div>
    <h1 class="text-3xl font-bold">{{ course }}</h1>
    <div class="flex p-2">
    <Dish v-for="dish of dishes" :key="dish.id" :dish="dish"></Dish>
    </div>
  </div>
</template>
<script>
export default {
  props: ["dishes", "course"],
};
</script>
