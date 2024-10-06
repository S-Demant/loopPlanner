<script setup>
import {defineProps} from "vue";

const {id, index, theArray, nameData, title, note, pickedColor} = defineProps(['id', 'index', 'theArray', 'nameData', 'title', 'note', 'pickedColor']);

function deleteArray () {
    if (confirm('Vil du slette opgaven: ' + title + '?')) {
        theArray.splice(index, 1) // Med splice udvælges der en enhed, den aktuelle 1 linje, og sletter den
        localStorage.setItem(nameData, JSON.stringify(theArray));
    }
}

function moveUp (index) {
    const indexOfArray = theArray[index] // Her vælges og gemmes det aktuelle index nr.
    theArray.splice(index, 1) // Med splice udvælges der en enhed, den aktuelle 1 linje, og sletter den
    theArray.splice(index - 1, 0, indexOfArray) // Her vælges index der er 1 mindre end den aktuelle, vælger ingen linje, men indsætter den før slettede indexOfArray på den nye placering
    localStorage.setItem(nameData, JSON.stringify(theArray)); // Her gemmes theArray hver gang funktionen bliver kaldt.
}

function moveDown (index) {
    const indexOfArray = theArray[index] // Her vælges og gemmes det aktuelle index nr.
    theArray.splice(index, 1) // Med splice udvælges der en enhed, den aktuelle 1 linje, og sletter den
    theArray.splice(index + 1, 0, indexOfArray) // Her vælges index der er 1 mindre end den aktuelle, vælger ingen linje, men indsætter den før slettede indexOfArray på den nye placering
    localStorage.setItem(nameData, JSON.stringify(theArray)); // Her gemmes theArray hver gang funktionen bliver kaldt.
}

</script>

<template>
    <div class="position-relative w-100 py-4 px-4 bg-gradient" :style="{ backgroundColor: pickedColor }">
        <span class="fs-3 text-light ms-2">{{ title }}</span>
        <div class="position-absolute end-0 top-50 translate-middle-y me-3 me-md-4">
            <div class="d-flex">
                <img v-if="index > 0" :src="'images/up.webp'" @click="moveUp(index)" class="pointer me-4">
                <img v-if="index < theArray.length -1" :src="'images/down.webp'" @click="moveDown(index)" class="pointer me-4">
                <img :src="'images/trash.webp'" @click="deleteArray()" class="pointer">
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    height: 1.8rem;
}
</style>