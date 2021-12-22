<template>
  <div class="m-2 p-1">
    <ul class="flex flex-row flex-wrap">
      <li
        v-for="dish of dishes"
        :key="dish.name"
        class="p-2 border-black border my-2 w-3/12 mx-8"
      >
        <h1 class="text-5xl font-bold">Nutrition Facts</h1>
        <h1 class="text-3xl font-bold">{{ dish.name }}</h1>
        <p class="text-2xl">{{ dish.explanation }}</p>
        <p class="text-2xl">
          <span class="font-bold text-2xl">US</span>: {{ dish.us }}
        </p>
        <p class="text-2xl">
          <span class="font-bold text-2xl">Influence</span>:
          {{ dish.influence }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishes: [
        {
          name: "Trial By Jury: Chili",
          explanation:
            "A system in which a group of randomly selected people decides a court case.",
          us: "12 citizens over 18 serve for one trial. They must come to the trial.",
          influence:
            "Limitless male jurors that serve for a year. They come to a simple majority.",
        },
        {
          name: "Civic Participation: Chips and Salsa",
          explanation:
            "Being involved in political or non-political ways in your community.",
          us: "In the US, Civic Participation is encouraged. Not everyone has to participate (e.g. voting), but it is encouraged.",
          influence:
            "Civic participation was forced. Everyone had to vote and participate.",
        },
        {
          name: "Voting Rights: Build-your-own Appetizer",
          explanation: "The ability people have to vote in an election.",
          us: "All citizens over the age of 18 can vote.",
          influence: "Free male citizens over the age of 18 could vote.",
        },
        {
          name: "Representative Government: Chef’s Choice",
          explanation:
            "A government where a group of people is legally represented by someone you appoint.",
          us: "Representatives in Congress",
          influence:
            "Representatives controlled the government until Caesar took control.",
        },
        {
          name: "Common Good: Make Your Own Sushi",
          explanation:
            "Being involved in political or non-political ways in your community.",
          us: "Yes.",
          influence: "Yes.",
        },
        {
          name: "Separation of Powers: 3 Sliders",
          explanation:
            "When governing powers are separated across the government.",
          us: "Three branches, the Legislative Branch, the Judicial Branch, and the Executive Branch.",
          influence: "Three branches, the Assembly, Consul, and Senate.",
        },

        {
          name: "Habeas Corpus: Brownie with Ice Cream",
          explanation:
            "A legal term where you have the right to a trial before you are arrested.",
          us: "Yes.",
          influence: "Yes.",
        },
        {
          name: "Self Government: Ice Cream Sundae",
          explanation:
            "Government of a country by its own people",
          us: "Yes.",
          influence:
            "Yes.",
        },
        {
          name: "Rule of Law: Brownie with Ice Cream",
          explanation:
            "A society in which everyone has agreed to follow a set of rules.",
          us: "Yes.",
          influence:
            "Yes in Mayflower Compact.",
        },
      ],
    };
  },
};
</script>
