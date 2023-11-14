<template>
  <div>
    <TheLoader v-if="isFetching"/>
    <p v-else>{{ uselessFact }}</p>
    <button @click="getAndSetNewFact">{{ isFetching? "... Fetching":"New Fact" }}</button>
  </div>
</template>

<script setup>
import TheLoader from './TheLoader.vue';

import { ref,onMounted } from 'vue'
import ApiService from '../core/services/ApiService'
async function getAndSetNewFact(){
  try {
    isFetching.value = true
    const response = await ApiService.get("https://uselessfacts.jsph.pl/api/v2/facts/random")
    isFetching.value = false
    uselessFact.value = response.data.text
  } catch (error) {
    isFetching.value = false
    alert("Failed to get new fact!!!")
  }
}
onMounted(()=>getAndSetNewFact())

const uselessFact = ref("")
const isFetching = ref(false)
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button{
  margin-top: 2rem;
}
</style>
