<script setup>
import {ref} from 'vue';
import Plan from "@/components/Plan.vue";
import router from "@/router/index.js";

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
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
    localStorage.setItem('tuesdayData', JSON.stringify(tuesdayArray.value)); // Her gemmes tuesdayData hver gang funktionen bliver kaldt
}

function addNewObjectToWednesday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    wednesdayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
    localStorage.setItem('wednesdayData', JSON.stringify(wednesdayArray.value)); // Her gemmes wednesdayData hver gang funktionen bliver kaldt
}

function addNewObjectToThursday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    thursdayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
    localStorage.setItem('thursdayData', JSON.stringify(thursdayArray.value)); // Her gemmes thursdayData hver gang funktionen bliver kaldt
}

function addNewObjectToFriday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    fridayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
    localStorage.setItem('fridayData', JSON.stringify(fridayArray.value)); // Her gemmes fridayData hver gang funktionen bliver kaldt
}

function addNewObjectToSaturday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    saturdayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
    localStorage.setItem('saturdayData', JSON.stringify(saturdayArray.value)); // Her gemmes saturdayData hver gang funktionen bliver kaldt
}

function addNewObjectToSunday (newTitle, newNote, newColor) { // Funktion når der tilføjes til tirsdag
    sundayArray.value.push( // Her tilføjes der endnu et objekt til array med push()
        {
            title: newTitle,
            note: newNote,
            color: newColor
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




        <br>

        <Plan v-for="(plan, index) in mondayArray" :picked-color="plan.color" :title="plan.title" :id="plan.id" :note="plan.note" @click ="removeMondaySave(mondayArray, index)" />
        <br>
        <Plan v-for="(plan, index) in tuesdayArray" :picked-color="plan.color" :title="plan.title" :id="plan.id" :note="plan.note" @click ="removeTuesdaySave(tuesdayArray, index)" />

    </div>
</template>

<style scoped>
#color-select  {
    background-color: v-bind(selectedColor)
}
</style>