<template>
  <div class="content-card">
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  fontFamily: {
    type: String,
    default: 'Times New Roman, 楷体, serif'
  }
});
</script>


<style scoped>
.content-card {
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 16px 0;
  transition: box-shadow 0.3s ease;
}

.content-card:hover {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
}

.card-content {
  font-size: 16px;
  line-height: 1.6;
  font-family: v-bind(fontFamily);
  white-space: pre-line;
}
</style>
