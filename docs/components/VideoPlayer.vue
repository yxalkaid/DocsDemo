<template>
  <div class="video-player">
    <video :width="width" :height="height" :loop="loop" :autoplay="autoplay" :controls="controls">
      <source :src="src" :type="type"/>

      <slot>
        <img v-if="fallbackImage" :src="fallbackImage" :alt="fallbackAlt"/>
        <p v-else>{{ fallbackAlt }}</p>
      </slot>
    </video>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {type: String, required: true},
  type: {type: String, default: "video/mp4"},
  width: {type: [String, Number], default: "100%"},
  height: {type: [String, Number], default: "100%"},
  loop: {type: Boolean, default: true},
  autoplay: {type: Boolean, default: false},
  controls: {type: Boolean, default: true},
  fallbackImage: {type: String, default: ""},
  fallbackAlt: {type: String, default: "目前无法显示此Video"}
})
</script>

<style scoped>
.video-player {
  width: 100%;
  height: 100%;
}
</style>