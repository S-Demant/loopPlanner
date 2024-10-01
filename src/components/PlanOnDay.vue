<script setup>
import {defineProps} from "vue";

const {id, title, note, pickedColor} = defineProps(['id', 'title', 'note', 'pickedColor']);

</script>

<template>
    <div class="w-100 py-4 px-4" :style="{ backgroundColor: pickedColor }">
        <span class="fs-3 text-light ms-2">{{ title }}</span>
    </div>
</template>

<style scoped>

</style>