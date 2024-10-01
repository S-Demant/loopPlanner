<script setup>
import {defineProps} from "vue";

const {id, title, note, pickedColor} = defineProps(['id', 'title', 'note', 'pickedColor']);

</script>

<template>
    <div class="position-relative w-100 py-4 px-4" :style="{ backgroundColor: pickedColor }">
        <span class="fs-3 text-light ms-2">{{ title }}</span>
        <div class="position-absolute end-0 top-50 translate-middle-y me-3 me-md-4">
            <div class="d-flex">
                <img v-if="note.length > 0" :src="'images/note.webp'" class="me-4">
                <img :src="'images/trash.webp'" @click="myModal.show();" class="">
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    height: 1.8rem;
}
</style>