<script setup>
import {ref} from 'vue';
import {useRoute} from "vue-router";
import router from "@/router/index.js";
import Navbar from "@/components/Navbar.vue";

const route = useRoute(); // Gør så route benytter funktionen useRouter()
const weekId = parseInt(route.params.id); // Laver det medsendte parameter om til et tal, og sæt det i weekId
const mondayArray = ref(JSON.parse(localStorage.getItem('mondayData') ?? '[]' )); // Hvis der er en localStorage der hedder mondayData, hent den gemte fil. Hvis ikke, gør det til højre for ??
const tuesdayArray = ref(JSON.parse(localStorage.getItem('tuesdayData') ?? '[]' ));
const wednesdayArray = ref(JSON.parse(localStorage.getItem('wednesdayData') ?? '[]' ));
const thursdayArray = ref(JSON.parse(localStorage.getItem('thursdayData') ?? '[]' ));
const fridayArray = ref(JSON.parse(localStorage.getItem('fridayData') ?? '[]' ));
const saturdayArray = ref(JSON.parse(localStorage.getItem('saturdayData') ?? '[]' ));
const sundayArray = ref(JSON.parse(localStorage.getItem('sundayData') ?? '[]' ));
const selectedDay = ref('');
const selectedColor = ref('');
let addTitle = '';
let addNote = '';
let alertMessageWeek = ref('');
let alertMessageTitle = ref('');
let alertMessageColor = ref('');

function pickDay (newTitle, newNote, newColor, newDay) {
    if (selectedDay.value > 0 && addTitle.length >= 3 && addTitle.length <= 30 && selectedColor.value.includes('#')) { // Gør følgende hvis der er værdi i ugedag, titel og farve
        newDay = selectedDay
        if (newDay.value === 1) {
            addNewObjectToMonday(newTitle = addTitle, newNote = addNote, newColor = selectedColor);
        } else if (newDay.value === 2) {
            addNewObjectToTuesday(newTitle = addTitle, newNote = addNote, newColor = selectedColor);
        } else if (newDay.value === 3) {
            addNewObjectToWednesday(newTitle = addTitle, newNote = addNote, newColor = selectedColor);
        } else if (newDay.value === 4) {
            addNewObjectToThursday(newTitle = addTitle, newNote = addNote, newColor = selectedColor);
        } else if (newDay.value === 5) {
            addNewObjectToFriday(newTitle = addTitle, newNote = addNote, newColor = selectedColor);
        } else if (newDay.value === 6) {
            addNewObjectToSaturday(newTitle = addTitle, newNote = addNote, newColor = selectedColor);
        } else if (newDay.value === 7) {
            addNewObjectToSunday(newTitle = addTitle, newNote = addNote, newColor = selectedColor);
        }
        router.push('/') // Gå til start
    }

    if (selectedDay.value <= 0) {
        alertMessageWeek.value = 'Vælg en ugedag';
    } else {
        alertMessageWeek.value = '';
    }

    if (addTitle.length === 0) {
        alertMessageTitle.value = 'Giv opgaven et navn';
    } else if (addTitle.length < 3) {
        alertMessageTitle.value = 'Opgavens navn er for kort';
    } else if (addTitle.length > 30) {
        alertMessageTitle.value = 'Opgavens navn er for langt';
    } else {
        alertMessageTitle.value = '';
    }

    if (!selectedColor.value.includes('#')) {
        alertMessageColor.value = 'Vælg en farve';
    } else {
        alertMessageColor.value = '';
    }
}

if (weekId >= 0 && weekId < 8) { // Gør så der automatisk bliver valgt en ugedag, hvis der er sendt et id med
    selectedDay.value = weekId
} else {
    router.push('/') // Gå til start
}

function addNewObjectToMonday (newTitle, newNote, newColor) { // Funktion når der tilføjes til mandag
    mondayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor,
            check: 'images/check-none.webp'
        },
    )
    localStorage.setItem('mondayData', JSON.stringify(mondayArray.value)); // Her gemmes mondayData hver gang funktionen bliver kaldt
}

function addNewObjectToTuesday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    tuesdayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor,
            check: 'images/check-none.webp'
        },
    )
    localStorage.setItem('tuesdayData', JSON.stringify(tuesdayArray.value)); // Her gemmes tuesdayData hver gang funktionen bliver kaldt
}

function addNewObjectToWednesday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    wednesdayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor,
            check: 'images/check-none.webp'
        },
    )
    localStorage.setItem('wednesdayData', JSON.stringify(wednesdayArray.value)); // Her gemmes wednesdayData hver gang funktionen bliver kaldt
}

function addNewObjectToThursday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    thursdayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor,
            check: 'images/check-none.webp'
        },
    )
    localStorage.setItem('thursdayData', JSON.stringify(thursdayArray.value)); // Her gemmes thursdayData hver gang funktionen bliver kaldt
}

function addNewObjectToFriday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    fridayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor,
            check: 'images/check-none.webp'
        },
    )
    localStorage.setItem('fridayData', JSON.stringify(fridayArray.value)); // Her gemmes fridayData hver gang funktionen bliver kaldt
}

function addNewObjectToSaturday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    saturdayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor,
            check: 'images/check-none.webp'
        },
    )
    localStorage.setItem('saturdayData', JSON.stringify(saturdayArray.value)); // Her gemmes saturdayData hver gang funktionen bliver kaldt
}

function addNewObjectToSunday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    sundayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor,
            check: 'images/check-none.webp'
        },
    )
    localStorage.setItem('sundayData', JSON.stringify(sundayArray.value)); // Her gemmes sundayData hver gang funktionen bliver kaldt
}

let days = [
    {
        id: 1,
        name: "Mandag"
    },
    {
        id: 2,
        name: "Tirsdag"
    },
    {
        id: 3,
        name: "Onsdag"
    },
    {
        id: 4,
        name: "Torsdag"
    },
    {
        id: 5,
        name: "Fredag"
    },
    {
        id: 6,
        name: "Lørdag"
    },
    {
        id: 7,
        name: "Søndag"
    }
]

let colors = [
    {
        id: 1,
        colorCode: "#9AD9E6"
    },
    {
        id: 2,
        colorCode: "#89C1CC"
    },
    {
        id: 3,
        colorCode: "#78A9B3"
    },
    {
        id: 4,
        colorCode: "#679199"
    },
    {
        id: 5,
        colorCode: "#597D85"
    },
    {
        id: 6,
        colorCode: "#9AE6D0"
    },
    {
        id: 7,
        colorCode: "#89CCB9"
    },
    {
        id: 8,
        colorCode: "#78B3A2"
    },
    {
        id: 9,
        colorCode: "#67998B"
    },
    {
        id: 10,
        colorCode: "#5B877B"
    },
    {
        id: 11,
        colorCode: "#FFDC97"
    },
    {
        id: 12,
        colorCode: "#F7CB92"
    },
    {
        id: 13,
        colorCode: "#F2BE8A"
    },
    {
        id: 14,
        colorCode: "#EDAF85"
    },
    {
        id: 15,
        colorCode: "#E69F7E"
    }
]

</script>

<template>
    <Navbar />
    <div class="container">
        <h2 class="mb-4">Tilføj en ny opgave til din plan</h2>
        <form class="row gy-4 gx-5">
            <div class="col-12">
                <label for="titleToSave" class="form-label">Opgavens navn *</label>
                <input type="text" class="form-control" aria-label="titleToSave" value="" v-model="addTitle">
                <p class="position-absolute text-danger">{{ alertMessageTitle }}</p>
            </div>
            <div class="col-6">
                <label for="daySelect" class="form-label">Ugedag *</label>
                <select class="form-select" aria-label="daySelect" v-model="selectedDay">
                    <option v-for="(day) in days" :value="day.id">{{ day.name }}</option>
                </select>
                <p class="position-absolute text-danger">{{ alertMessageWeek }}</p>
            </div>
            <div class="col-6">
                <label for="colorSelect" class="form-label">Farve *</label>
                <select class="form-select" aria-label="colorSelect" id="color-select" v-model="selectedColor">
                    <option :value="color.colorCode" :style="{ backgroundColor: color.colorCode}" v-for="(color) in colors"></option>
                </select>
                <p class="position-absolute text-danger">{{ alertMessageColor }}</p>
            </div>
            <div class="col-12">
                <label for="noteToSave" class="form-label">Evt. beskrivelse af opgaven *</label>
                <br>
                <textarea rows="5" class="form-control" v-model="addNote" aria-label="noteToSave"></textarea>
            </div>
            <div class="col-12">
                <button type="button" data-bs-dismiss="offcanvas" class="btn btn-primary text-light fw-medium mb-3 py-2 px-5" @click ="pickDay();">Tilføj</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.form-control, .form-select {
    background-color: transparent;
}

#color-select  {
    background-color: v-bind(selectedColor)
}
</style>