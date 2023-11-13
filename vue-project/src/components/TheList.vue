<template>
  <ul class="list">
    <h2>ToDos</h2>
    <ListItem
      v-for="(item, index) in props.listItems"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-done="item.isDone"
      @change-state="(itemId) => emits('change-state', itemId)"
      @remove-item="(itemId) => emits('remove-item', itemId)"
    />
  </ul>
</template>
<script setup>
import ListItem from "./ListItem.vue";
const props = defineProps(["listItems"]);
const emits = defineEmits(["change-state", "remove-item"]);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  margin-top: 3rem;
  /* border: 1px solid #000; */
  box-shadow: 0 10px 10px rgba(170, 170, 170, 0.325);
  padding: 1rem;
  border-radius: 6px;
  width: 90%;
}
</style>
