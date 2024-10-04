<script setup>
import {defineProps} from "vue";

const {id, index, theArray, nameData, title, note, pickedColor, checkmark} = defineProps(['id', 'index', 'theArray', 'nameData', 'title', 'note', 'pickedColor', 'checkmark']);

function readNote (note) {
    alert('Opgavens beskrivelse:\n' + note)
}

function deleteArray () {
    console.log(index)
    if (confirm('Vil du slette opgaven: ' + title + '?')) {
        theArray.splice(index, 1)
        localStorage.setItem(nameData, JSON.stringify(theArray));
        console.log('Thing was saved to the database.');
    }
}

function changeCheckmark () { // Ændrer checkmark når der trykkes
    if (theArray[index].check === 'images/check-none.webp') {
        theArray[index].check = 'images/check-on.webp'
    } else {
        theArray[index].check = 'images/check-none.webp'
    }
    localStorage.setItem(nameData, JSON.stringify(theArray)); // Her gemmes theArray hver gang funktionen bliver kaldt
}

</script>

<template>
    <div class="position-relative w-100 py-4 px-4 bg-gradient" :style="{ backgroundColor: pickedColor }">
        <span @click="changeCheckmark()" class="fs-3 text-light pointer ms-2"><img :src="checkmark" class="pe-2"> {{ title }}</span>
        <div class="position-absolute end-0 top-50 translate-middle-y me-3 me-md-4">
            <div class="d-flex">
                <img v-if="note.length > 0" :src="'images/note.webp'" @click="readNote(note)" class="pointer me-4">
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