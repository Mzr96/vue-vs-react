<template>
  <TheHeader msg="Vite + Vue" />
  <TheForm @new-item="onNewItemAdded" />
  <TheList
    @remove-item="removeItemHandler"
    @change-state="changeStateHandler"
    :listItems="listItems"
  />
</template>

<script setup>
// For declaring states
import { reactive } from "vue";
import TheForm from "./components/TheForm.vue";
import TheList from "./components/TheList.vue";
import TheHeader from "./components/TheHeader.vue";

let listItems = reactive([
  { title: "Code Review!", id: 1, isDone: false },
  { title: "Assign backlogs !", id: 2, isDone: true },
]);

function onNewItemAdded(newItem) {
  listItems.push({ ...newItem });
}
function changeStateHandler(itemId) {
  const listItemIndex = listItems.findIndex((item) => item.id === itemId);
  listItems[listItemIndex].isDone = !listItems[listItemIndex].isDone;
}
function removeItemHandler(itemId) {
  const listItemIndex = listItems.findIndex((item) => item.id === itemId);
  listItems.splice(listItemIndex, 1);
}
</script>
