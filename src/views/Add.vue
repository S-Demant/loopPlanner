<script setup>
import {ref} from 'vue';
import Plan from "@/components/Plan.vue";
import router from "@/router/index.js";

const mondayArray = ref(JSON.parse(localStorage.getItem('mondayData') ?? '[]' )); // Hvis der er en localStorage der hedder mondayData, hent den gemte fil. Hvis ikke, gør det til højre for ??
const tuesdayArray = ref(JSON.parse(localStorage.getItem('tuesdayData') ?? '[]' ));
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
        }
        router.push('/') // Gå til start
    }

    if (selectedDay.value <= 0) {
        alertMessageWeek.value = 'Vælg en ugedag';
    } else {
        alertMessageWeek.value = '';
    }

    if (addTitle.length < 3) {
        alertMessageTitle.value = 'Titel er for kort';
    } else if (addTitle.length > 30) {
        alertMessageTitle.value = 'Titel er for lang';
    } else {
        alertMessageTitle.value = '';
    }

    if (!selectedColor.value.includes('#')) {
        alertMessageColor.value = 'Vælg en farve';
    } else {
        alertMessageColor.value = '';
    }
}

function addNewObjectToMonday (newTitle, newNote, newColor) { // Funktion når der tilføjes til mandag
    mondayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            id: mondayArray.value.length,
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
    localStorage.setItem('mondayData', JSON.stringify(mondayArray.value)); // Her gemmes mondayData hver gang funktionen bliver kaldt
}

function addNewObjectToTuesday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    tuesdayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            id: tuesdayArray.value.length,
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
    localStorage.setItem('tuesdayData', JSON.stringify(tuesdayArray.value)); // Her gemmes tuesdayData hver gang funktionen bliver kaldt
}

let days = [
    {
        id: 1,
        name: "Mandag"
    },
    {
        id: 2,
        name: "Tirsdag"
    }
]

let colors = [
    {
        id: 1,
        name: "Rød",
        colorCode: "#DA8686"
    },
    {
        id: 2,
        name: "Orange",
        colorCode: "#DABD86"
    },
    {
        id: 3,
        name: "Gul",
        colorCode: "#DADA86"
    },
    {
        id: 4,
        name: "Grøn",
        colorCode: "#86DA89"
    },
    {
        id: 5,
        name: "Mint",
        colorCode: "#86DAB0"
    },
    {
        id: 6,
        name: "Lyseblå",
        colorCode: "#86D7DA"
    },
    {
        id: 7,
        name: "Blå",
        colorCode: "#86BEDA"
    },
    {
        id: 8,
        name: "Lilla",
        colorCode: "#869EDA"
    },
    {
        id: 9,
        name: "Pink",
        colorCode: "#D686DA"
    }
]

</script>

<template>
    <div class="container">
        <form class="row g-3">
            <div class="col-auto">
                <label for="daySelect" class="form-label">Vælg en ugedag *</label>
                <select class="form-select" aria-label="daySelect" v-model="selectedDay">
                    <option v-for="(day) in days" :value="day.id">{{ day.name }}</option>
                </select>
                <p class="position-absolute text-danger">{{ alertMessageWeek }}</p>
            </div>
            <div class="col-auto">
                <label for="titleToSave" class="form-label">Skriv din opgave *</label>
                <input type="text" class="form-control" aria-label="titleToSave" value="" v-model="addTitle">
                <p class="position-absolute text-danger">{{ alertMessageTitle }}</p>
            </div>
            <div class="col-auto">
                <label for="colorSelect" class="form-label">Vælg en farve *</label>
                <select class="form-select text-light" aria-label="colorSelect" id="color-select" v-model="selectedColor">
                    <option :value="color.colorCode" :style="{ backgroundColor: color.colorCode}" v-for="(color) in colors">{{ color.name }}
                    </option>
                </select>
                <p class="position-absolute text-danger">{{ alertMessageColor }}</p>
            </div>
            <div class="col-auto">
                <label for="noteToSave" class="form-label">Skriv evt. en note</label>
                <br>
                <textarea class="form-control" v-model="addNote" aria-label="noteToSave"></textarea>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-primary mb-3" @click ="pickDay();">Opret opgave</button>
            </div>
        </form>
        <br>

        <li v-for="(plan) in mondayArray" :style="{ color: plan.color }">
            {{ plan.id }} {{ plan.title }} {{ plan.note }} {{ plan.color }}
        </li>

        <br>
        <br>

        <li v-for="(plan) in tuesdayArray" :style="{ color: plan.color }">
            {{ plan.id }} {{ plan.title }} {{ plan.note }} {{ plan.color }}
        </li>

        <br>

        <Plan v-for="(plan) in mondayArray" :picked-color="plan.color" :title="plan.title" />
        <br>
        <Plan v-for="(plan) in tuesdayArray" :picked-color="plan.color" :title="plan.title" />

    </div>
</template>

<style scoped>
#color-select  {
    background-color: v-bind(selectedColor)
}
</style>