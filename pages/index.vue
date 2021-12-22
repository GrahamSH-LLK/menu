<template>
  <div class="m-2 p-2">
    <Course course="Appetizers" :dishes="appetizers"></Course>
    <Course course="Main Course" :dishes="mainCourse"></Course>
    <Course course="Dessert" :dishes="dessert"></Course>

    <h1 class="font-bold text-4xl">Cart</h1>
    <li v-for="item of cart" :key="item.hash">
      {{ findItem(item.hash).name }}
    </li>
    <span class="font-bold text-2xl"
      >Total price: {{ totalCost
      }}<span class="rotate-180 inline-block">₩</span></span
    >
    <button @click="buy">Buy</button>
  </div>
</template>

<script>
const cyrb53 = function (str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export default {
  data() {
    return {
      appetizers: [
        {
          name: "Trial By Jury: Chili",
          description: `In the court of public opinion, this delicious chili has been found guilty- of being the best chili around. It's filled with delicious black beans, our best beef, and lots of corn.`,
          price: 10,
        },
        {
          name: "Civic Participation: Chips and Salsa",
          description:
            "Each part of the dish participates in this super spicy community, from the fresh tomatoes to the jalapeño peppers—even the homemade chips with a hint of lime “chip” in.",
          price: 7,
        },
        {
          name: "Voting Rights: Build-your-own Appetizer",
          description:
            "Not sure if you'll like something? Want just a little of an appetizer? Vote amongst yourselves to pick up to 5 of our apps.",
          price: 14,
        },
      ],
      mainCourse: [
        {
          name: "Representative Government: Chef’s Choice",
          description:
            "Let the chef pick what he thinks you’ll want! It’ll be a mystery as to what shows up on your plate. Just tell us what you don’t want.",
          price: 20,
        },
        {
          name: "Common Good: Make Your Own Sushi",
          description:
            "Know you’re eating the freshest sushi- because you get to make it! Everyone pitches in to make the best raw fish, rice, and seaweed you’ll ever eat.",
          price: 23,
        },
        {
          name: "Separation of Powers: 3 Sliders",
          description:
            "Get three different sliders, each working together to make a delicious meal. The first is a veggie burger, the second is a turkey burger, and the third is a hamburger.",
          price: 15,
        },

      ],
      dessert: [
        {
          name: "Habeas Corpus: Brownie with Ice Cream",
          description:
            "This brownie with vanilla ice cream has gone before a judge- and was sentenced to be served. We knew that our brownie filled with chocolate chips would win.",
          price: 12,
        },
        {
          name: "Self Government: Ice Cream Sundae",
          description:
            "This brownie with vanilla ice cream has gone before the best judge- and was sentenced to be served. We knew that our brownie filled with chocolate chips would win them over.",
          price: 14,
        },
        {
          name: "Rule of Law: No Dessert",
          description:
            "Everyone agrees to follow one law: no dessert in January. Just imagine you're eating another of our delicious desserts and you'll be all set- and thinner for it!",
          price: 0,
        },


      ],
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart.list;
    },
    totalCost() {
      if (this.$store.state.cart.list.length > 0) {
        const mapper = (value) => {
          return this.findItem(value.hash).price;
        };
        const reducer = (previousValue, currentValue) => {
          return previousValue + currentValue;
        };

        return this.$store.state.cart.list.map(mapper).reduce(reducer);
      }
      return 0;
    },
  },
  methods: {
    buy(e) {
      let res = this.$store.dispatch("buy", this.totalCost);
      if (!res.error) this.$store.commit("cart/clear");
    },
    findItem(hash) {
      const allMeals = this.appetizers.concat(this.mainCourse, this.dessert);
      return allMeals.find((i) => {
        return cyrb53(i.name) === hash;
      });
    },
  },
};
</script>
