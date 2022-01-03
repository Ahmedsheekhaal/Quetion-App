<script setup lang="ts">
import { ref } from "vue";

let selectAnswer = ref("");
let index = ref(0);
let r = ref(false);
let show = ref(false);

const quations = [
  {
    quation: "Caasimada Somaliland waa ?",
    answers: {
      a: "A:   Buro",
      b: "B:  Muqdisho",
      c: "C:  Hargeisa",
      d: "D:  Barbara",
    },
    corectAnswer: "c",
    removeAnswer: ref(["a", "d"]),
  },
  {
    quation: " Sheekhaal waa ?",
    answers: {
      a: "A:   axmed",
      b: "B:  cali",
      c: "C:  maxamed",
      d: "D:  xuseen",
    },
    corectAnswer: "a",
    removeAnswer: ref(["b", "d"]),
  },
];

function target(event: Event) {
  selectAnswer.value = event.target.value;
  console.log(selectAnswer.value);
}
function done() {
  r.value = true;
  console.log(r);
}
function next() {
  index.value++;
  console.log(index);
  selectAnswer.value = "";
  r.value = false;
  console.log(selectAnswer.value);
}
function showhide() {
  show.value = !show.value;
}
</script>

<template>
  <button @click="showhide" class="mx-32 mb-10">
    <samp v-if="show == false">show</samp>
    <samp v-if="show == true">hide</samp>
  </button>

  <div class="flex">
   
    <div
      class="
        flex-1
        max-w-2xl
        p-10
        bg-white
        mx-96
        rounded-lg
        shadow-xl shadow-pink-600/30
        font-semibold font-mono
      "
    >
      <h1
        class="
          first-letter:text-4xl
          text-gray-700
          first-letter:text-black
          text-2xl
        "
      >
        {{ quations[index]["quation"] }}
      </h1>
      <button
        @click="done"
        :disabled="selectAnswer !== ''"
        class="
          font-mono font-semibold
          text-pink-400
          underline underline-offset-2
          text-md
          p-1
          rounded-lg
          float-right
        "
      >
        Laba tuur
      </button>

      <div class="grid grid-cols-2 gap-x-10 clear-right">
        <button
          :value="key"
          @click="target"
          class="
            block
            border border-pink-600
            py-3
            px-6
            text-left text-lg
            shadow-md shadow-pink-600/30
            rounded-full
            mt-5
          "
          v-for="(answer, key) in quations[index]['answers']"
          :disabled="selectAnswer !== ''"
          :class="
            { 'opacity-0 ' : key === quations[index].removeAnswer.value[0] && r },
            { 'opacity-0' : key === quations[index].removeAnswer.value[1] && r },
            { 'bg-red-400 font-bold': selectAnswer == key },
            {
              'bg-green-400 font-bold':
                key == quations[index]['corectAnswer'] && selectAnswer != '',
            }
          "
        >
          {{ answer }}
        </button>
      </div>
      <button
        v-if="selectAnswer !== ''"
        @click="next"
        class="uppercase float-right"
      >
        next
      </button>
    </div>
  </div>
</template>
