<script setup>
import {ref} from 'vue';
import Plan from "@/components/Plan.vue";

const mondayArray = ref(JSON.parse(localStorage.getItem('mondayData') ?? '[]' )); // Hvis der er en localStorage der hedder mondayData, hent den gemte fil. Hvis ikke, gør det til højre for ??
const selectedColor = ref();
let addTitle;
let addNote;

function addNewObjectToMonday (newTitle, newNote, newColor) {
    mondayArray.value.push( // Med push kan man tilføje til array
        {
            id: mondayArray.value.length,
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
    console.log(selectedColor)
}

function saveMonday() {
    localStorage.setItem('mondayData', JSON.stringify(mondayArray.value));
}

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
        <form class="row g-3" method="post" @submit.prevent="formSubmit">
            <div class="col-auto">
                <label for="titleToSave" class="visually-hidden">Title</label>
                <input type="text" class="form-control" id="titleToSave" value="" v-model="addTitle">
            </div>
            <div class="col-auto">
                <select class="form-select" aria-label="Default select example" v-model="selectedColor">
                    <option class="text-light" :value="color.colorCode" :style="{ backgroundColor: color.colorCode}" v-for="(color) in colors">{{ color.name }}
                    </option>
                </select>
            </div>
            <div class="col-auto">
                <textarea v-model="addNote" placeholder=""></textarea>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3" @click = "addNewObjectToMonday(newTitle = addTitle, newNote = addNote, newColor = selectedColor); saveMonday()">Gem titel</button>
            </div>
        </form>

        <br>

        <li v-for="(plan) in mondayArray" :style="{ color: plan.color }">
            {{ plan.id }} {{ plan.title }} {{ plan.note }} {{ plan.color }}
        </li>

        <br>

        <Plan v-for="(plan) in mondayArray" :picked-color="plan.color" :title="plan.title" />

    </div>
</template>

<style scoped>
.form-select {
    background-color: v-bind(selectedColor)
}
</style>