<script setup>
import {defineProps} from "vue";

const {img, title, text, pickedColor} = defineProps(['img', 'title', 'text', 'pickedColor']);

</script>

<template>
    <div class="w-100 py-4 px-4" :style="{ backgroundColor: pickedColor }">
        <span class="fs-3 text-light ms-2">{{ title }}</span>
    </div>
</template>

<style scoped>

</style>