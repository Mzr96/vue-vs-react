<template>
  <li :class="`${props.isDone && 'done'}`">
    <span>{{ props.title }}</span>
    <div class="item-actions">
      <button @click="() => emits('remove-item', props.id)" class="danger">
        Remove
      </button>
      <button class="info" @click="() => emits('change-state', props.id)">
        Change State!
      </button>
    </div>
  </li>
</template>
<script setup>
const props = defineProps(["title", "isDone", "id"]);
const emits = defineEmits(["change-state", "remove-item"]);
</script>
<style scoped>
li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 2rem;
  border: 1px solid #1864ab;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.done::after {
  content: "DONE!";
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* border: 0.5px solid #1864ab; */
  background-color: rgba(24, 100, 171, 0.6);
}

span {
  font-size: 1.4rem;
  font-weight: 600;
}
.item-actions {
  display: flex;
  gap: 1rem;
}
.danger {
  background-color: #c92a2a;
}

.info {
  z-index: 1000;
  width: max-content;
}
</style>
