<script setup>
import {defineProps} from "vue";

const {id, index, theArray, nameData, title, note, pickedColor} = defineProps(['id', 'index', 'theArray', 'nameData', 'title', 'note', 'pickedColor']);

function readNote (note) {
    alert('Din note til opgaven:\n' + note)
}

function deleteArray (index, theArray, nameData, title) {
    console.log(index)
    if (confirm('Vil du slette opgaven: ' + title + '?')) {
        theArray.splice(index, 1)
        localStorage.setItem(nameData, JSON.stringify(theArray));
        console.log('Thing was saved to the database.');
    } else {
        console.log('Thing was not saved to the database.');
    }
}


if (theArray[index].check === 'images/check-on.webp') { // Hvis check er blevet markeret tidligere, laver den det til unchecked
    theArray[index].check = 'images/check-none.webp'
    localStorage.setItem(nameData, JSON.stringify(theArray)); // Her gemmes theArray hver gang funktionen bliver kaldt
}

</script>

<template>
    <div class="position-relative w-100 py-4 px-4" :style="{ backgroundColor: pickedColor }">
        <span class="fs-3 text-light ms-2">{{ title }}</span>
        <div class="position-absolute end-0 top-50 translate-middle-y me-3 me-md-4">
            <div class="d-flex">
                <img v-if="note.length > 0" :src="'images/note.webp'" @click="readNote(note)" class="me-4">
                <img :src="'images/trash.webp'" @click="deleteArray(index, theArray, nameData, title)">
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    height: 1.8rem;
}
</style>