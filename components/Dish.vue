<template>
  <div class="h-64 w-64 bg-gray-100 p-2 mx-2 rounded-md cursor-pointer" @click="add" :class="{'outline-black': selected}">
    <h2 class="text-2xl font-bold">{{ dish.name }}</h2>
    <span>{{dish.price}}<span class="rotate-180 inline-block">₩</span></span>
    <p class="italic">{{ dish.description }}</p>
  </div>
</template>
<script>
const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

export default {
  props: ["dish"],
  computed: {
    selected() {
      let cart = this.$store.state.cart.list
      return cart.some(e => e.hash === cyrb53(this.dish.name))
    }
  },
  methods: {
    add() {
      this.$store.commit('cart/add',cyrb53(this.dish.name) )
    }
  }
};
</script>
