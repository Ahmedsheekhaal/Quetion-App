<script setup lang="ts">
import { ref } from "vue";

let selectAnswer = ref("");
let index = ref(0);
let r = ref(false);
let qustion = ref(true);
let addQuations = ref(false);
let a = ref(true)

function raply(){
  index.value = 0;
  selectAnswer.value = "";
  r.value = false
  corectAnswers.value =0
  a.value = true;
}
function showQuations() {
  qustion.value = true;
  addQuations.value = false;
}
function showAddQuations() {
  addQuations.value = true;
  qustion.value = false;
}

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
    quation: " Cai waa ?",
    answers: {
      a: "A:   engineer",
      b: "B:  arday",
      c: "C:  macalin",
      d: "D:  ganac sade",
    },
    corectAnswer: "a",
    removeAnswer: ref(["b", "d"]),
  },
];
let totalQuations = ref(quations.length);
let corectAnswers = ref(0);

function target(event: Event) {
  selectAnswer.value = event.target.value;
  if(selectAnswer.value === quations[index.value]['corectAnswer']){
  a.value = false
}
console.log(a.value)
  if (selectAnswer.value === quations[index.value]["corectAnswer"]) {
    corectAnswers.value++;
  }
  console.log(selectAnswer.value);
}
function done() {
  r.value = true;
  console.log(r);
}
function next() {
  // if(index.value === quations.length) return;
  index.value++;
  selectAnswer.value = "";
  r.value = false;
  a.value = true;
  console.log(index.value);
  console.log(selectAnswer.value);
}
let A = ref("A :  ");
let B = ref("B :  ");
let C = ref("C :  ");
let D = ref("D :  ");
let suaasha = ref("");
let jawaabta = ref("");
let tuurid1 = ref("");
let tuurid2 = ref("");

function add() {
  if (
    A.value === "" ||
    B.value === "" ||
    C.value === "" ||
    D.value === "" ||
    suaasha.value === "" ||
    jawaabta.value === ""
  ) {
    alert("buuxi");
    return;
  }
  quations.push({
    quation: suaasha.value,
    answers: { a: A.value, b: B.value, c: C.value, d: D.value },
    corectAnswer: jawaabta.value,
    removeAnswer: ref([tuurid1.value, tuurid2.value]),
  });
  console.log(quations);
  A.value = "A :  ";
  B.value = "B :  ";
  C.value = "C :  ";
  D.value = "D :  ";
  suaasha.value = "";
  jawaabta.value = "";
  tuurid1.value = "";
  tuurid2.value = "";
  totalQuations.value = quations.length;
}

console.log(quations);
</script>

<template>
  <div
    class="
      bg-white
      shadow-lg
      h-20
      flex
      items-center
      px-28
      overflow-hidden
      space-x-6
    "
  >
    <button
      @click="showQuations"
      :class="{ 'border-b-4 border-sky-700': qustion }"
      class="font-semibold text-sky-600 text-xl hover:bg-sky-100 px-1 py-6"
    >
      Quations
    </button>
    <button
      @click="showAddQuations"
      :class="{ 'border-b-4 border-sky-700': addQuations }"
      class="font-semibold px-1 text-sky-600 text-xl hover:bg-sky-100 py-6"
    >
      Add Quation
    </button>
  </div>
  <div
    v-if="addQuations"
    class="
      max-w-4xl
      bg-white
      mx-auto
      rounded-lg
      shadow-lg
      mt-20
      px-10
      py-10
      flex flex-col
      items-center
    "
  >
    <h1 class="text-center text-3xl text-gray-600 font-semibold py-5">
      Add New Quation
    </h1>
    <div class="grid grid-cols-2 gap-5">
      <input
        v-model="suaasha"
        class="
          outline-none
          col-span-2
          rounded-lg
          px-4
          py-2
          border-2 border-sky-800
          text-lg
        "
        placeholder="Su'aasha"
        type="text"
      />
      <input
        v-model="A"
        class="
          outline-none
          rounded-lg
          px-4
          py-2
          border-2 border-sky-800
          text-lg
        "
        type="text"
      />
      <input
        v-model="B"
        class="
          outline-none
          rounded-lg
          px-4
          py-2
          border-2 border-sky-800
          text-lg
        "
        type="text"
      />
      <input
        v-model="C"
        class="
          outline-none
          rounded-lg
          px-4
          py-2
          border-2 border-sky-800
          text-lg
        "
        type="text"
      />
      <input
        v-model="D"
        class="
          outline-none
          rounded-lg
          px-4
          py-2
          border-2 border-sky-800
          text-lg
        "
        type="text"
      />
      <div>
        <p class="text-lg px-2 text-gray-800 pb-2">Jawaabta la tuuraayo 1</p>
        <select
          v-model="tuurid1"
          class="
            outline-none
            rounded-lg
            px-4
            py-2
            w-full
            border-2 border-sky-800
            text-lg
          "
        >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
      </div>
      <div>
        <p class="text-lg px-2 text-gray-800 pb-2">Jawaabta la tuuraayo 2</p>
        <select
          v-model="tuurid2"
          class="
            outline-none
            rounded-lg
            w-full
            px-4
            py-2
            border-2 border-sky-800
            text-lg
          "
        >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
      </div>
      <div class="col-span-2">
        <p class="text-lg px-4 text-gray-800 pb-2">Jawaabta Saxda ah</p>
        <select
          v-model="jawaabta"
          class="
            outline-none
            rounded-lg
            px-4
            py-2
            w-full
            border-2 border-sky-800
            text-lg
          "
        >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
      </div>
    </div>
    <button
      @click="add"
      class="
        text-xl
        mt-5
        bg-green-400
        py-2
        px-6
        rounded-lg
        text-white
        font-semibold
        shadow-lg
        mx-auto
      "
    >
      add
    </button>
  </div>
  <div
    v-if="qustion"
    class="px-10 bg-white py-20 mt-32 max-w-7xl mx-auto rounded-lg shadow-lg"
  >
    <h1
      class="
        first-letter:text-4xl first-letter:font-light
        text-gray-700
        first-letter:text-gray-800
        tracking-wider
        text-2xl
      "
    >
      {{ quations[index]["quation"] }}
    </h1>
    <button
      @click="done"
      :disabled="selectAnswer !== ''"
      class="
        font-semibold
        bg-green-500
        py-2
        px-3
        text-white
        tracking-wider
        text-md
        p-1
        rounded-lg
        float-right
        shadow-md
      "
    >
      Tuur Laba
    </button>

    <div class="grid grid-cols-2 gap-x-10 clear-right">
      <button
        :value="key"
        @click="target"
        class="
          block
          border border-sky-600
          py-3
          px-6
          text-left text-lg
          rounded-full
          tracking-widest
          mt-5
        "
        v-for="(answer, key) in quations[index]['answers']"
        :disabled="selectAnswer !== ''"
        :class="
          { 'opacity-0 cursor-default ': key == quations[index].removeAnswer.value[0] && r },
          { 'opacity-0 cursor-default': key == quations[index].removeAnswer.value[1] && r },
          { 'bg-red-400 ': selectAnswer == key && a },
          { 'bg-green-400 ': key == quations[index]['corectAnswer'] && selectAnswer != ''}
        "
      >
        {{ answer }}
      </button>
    </div>
    <button
      v-if="selectAnswer !== '' && index < quations.length - 1"
      @click="next"
      class="uppercase float-right mt-5"
    >
      next
    </button>
    <button
      v-if="index === quations.length - 1 && selectAnswer !== ''"
      class="uppercase tracking-wider float-right mt-5"
      @click="raply"
    >
      Agian
    </button>
    <div class="flex pt-5 px-3 space-x-1">
      <p>{{ corectAnswers }} /</p>
      <p>{{ totalQuations }}</p>
    </div>
  </div>
</template>
