<script setup>
import {ref} from "vue";
import {defineProps} from "vue";

const {img, title, text, color1, color2} = defineProps(['img', 'title', 'text', 'color1', 'color2']);

const background1 = '#DA8686';

// const activeColor = ref('#DA8686'); ??

</script>

<template>
    <div class="w-100 py-4 px-4" :style="{ backgroundColor: background1 }">
        <span class="fs-3 text-light ms-2">{{ title }}</span>
    </div>
</template>

<style scoped>

</style>