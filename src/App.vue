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
import { reactive, onMounted } from "vue";
import TheForm from "./components/TheForm.vue";
import TheList from "./components/TheList.vue";
import TheHeader from "./components/TheHeader.vue";
import ApiService from "./core/services/ApiService";
// State declaration
let listItems = reactive([]);
// Component Life cycle
onMounted(async () => {
  try {
    const response = await ApiService.get("todos");
    listItems.push(...response.data);
  } catch (error) {
    alert("Faild to fetch!");
    console.error(error);
  }
});
// Methods
async function onNewItemAdded(newItem) {
  try {
    await ApiService.post("todos", newItem);
    listItems.push({ ...newItem });
  } catch (error) {
    alert("Faild To Add!");
    console.error(error);
  }
}
async function removeItemHandler(itemId) {
  try {
    await ApiService.delete(`todos/${itemId}`);
    const listItemIndex = listItems.findIndex((item) => item.id === itemId);
    listItems.splice(listItemIndex, 1);
  } catch (error) {
    alert("Faild To Delete!");
    console.error(error);
  }
}
async function changeStateHandler(itemId) {
  try {
    const listItemIndex = listItems.findIndex((item) => item.id === itemId);
    await ApiService.update("todos", itemId, {
      isDone: !listItems[listItemIndex].isDone,
    });
    listItems[listItemIndex].isDone = !listItems[listItemIndex].isDone;
  } catch (error) {
    alert("Failed to Change the Status!");
    console.error(error);
  }
}
</script>
