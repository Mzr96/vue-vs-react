<template>
  <form @submit.prevent="submitHandler">
    <div class="form-control">
      <input placeholder="Enter Title" type="text" v-model="newItem.title" />
    </div>
    <select v-model="newItem.isDone">
      <option :value="true">Finished</option>
      <option :value="false">In Progress</option>
    </select>
    <button>Add</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const emits = defineEmits(["new-item"]);
const newItem = reactive({ title: "", isDone: false, id: "" });
function submitHandler() {
  newItem.id = Date.now();
  emits("new-item", newItem);
}
</script>

<style scoped>
form {
  display: flex;
  border-radius: 6px;
  width: max-content;
  margin: 0 auto;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 10px rgba(170, 170, 170, 0.325);
  padding: 1rem 2rem;
  width: 80%;
  justify-content: space-between;
}

input,
select {
  /* height: 2rem; */
  font-size: 1.2rem;
  border-radius: 6px;
  border: none;
  background-color: #1864ab61;
  padding: 0.6rem 1.2rem;
  color: #888;
  font-weight: 700;
  outline: #1864ab61;
}

input::placeholder {
  color: #999;
  font-weight: 600;
}
</style>
