<script setup lang="ts">
import {ref } from 'vue'

 let A = ref("");
let B = ref("");
let C = ref("");
let D = ref("");
let suaasha = ref("");
let jawaabta = ref("");
let tuurid1 = ref("");
let tuurid2 = ref("");


function add() {
  quations.push({
    quation: suaasha.value,
    answers: { a: A.value, b: B.value, c: C.value, d: D.value },
    corectAnswer: jawaabta.value,
    removeAnswer: ref([tuurid1.value, tuurid2.value]),
  });
  console.log(quations);
}
</script>

<template>
      <input
        v-model="suaasha"
        class="outline-none rounded-lg px-4 py-1 shadow-md"
        placeholder=" Su'aasha"
        type="text"
      />
      <input
        v-model="A"
        class="outline-none rounded-lg px-4 py-1 shadow-md"
        placeholder=" Jawabta A"
        type="text"
      />
      <input
        v-model="B"
        class="outline-none rounded-lg px-4 py-1 shadow-md"
        placeholder=" Jawabta B"
        type="text"
      />
      <input
        v-model="C"
        class="outline-none rounded-lg px-4 py-1 shadow-md"
        placeholder=" Jawabta C"
        type="text"
      />
      <input
        v-model="D"
        class="outline-none rounded-lg px-4 py-1 shadow-md"
        placeholder=" Jawabta D"
        type="text"
      />
      <input
        v-model="jawaabta"
        class="outline-none rounded-lg px-4 py-1 shadow-md"
        placeholder=" Jawaabta Saxda ah"
        type="text"
      />
      <input
        v-model="tuurid1"
        class="outline-none rounded-lg px-4 py-1 shadow-md"
        placeholder=" Jawabta la tuurayo 1"
        type="text"
      />
      <input
        v-model="tuurid2"
        class="outline-none rounded-lg px-4 py-1 shadow-md"
        placeholder=" Jawabta la tuurayo 2"
        type="text"
      />
      <button @click="add">add</button>
</template>