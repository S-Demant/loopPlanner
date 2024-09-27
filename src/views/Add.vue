<script setup>
import {ref} from 'vue';

const message = ref('');

/*
const test = [{
    plan: {
        title: message,
        note: "Dette er noten"
    }
}]

function addNewObject (newObject) {
    test.push( // Med push kan man tilføje til array. Dette er datoer / ugedage
        {
            plan: {
                title: "Dette er titlen",
                note: "Dette er noten"
            }
        }
    );
    console.log(test);
}

function save() {
    localStorage.setItem('userData', JSON.stringify(test));
}
*/

let mondayArray = ref([]);
let addTitle;
let addNote;
let addColor;

function addNewObjectToMonday (newTitle, newNote, newColor) {
    mondayArray.value.push( // Med push kan man tilføje til array
        {
            id: mondayArray.value.length,
            title: newTitle,
            note: newNote,
            color: newColor
        },
    )
}

const colorRed = '#DA8686';

function saveMonday() {
    localStorage.setItem('mondayData', JSON.stringify(mondayArray.value));
}

function load() {
    return JSON.parse(localStorage.getItem('mondayData'));
}

function consoleView() {
    console.log(mondayArray.value);
}

</script>

<template>
    <div class="container">
        <form class="row g-3" method="post" @submit.prevent="formSubmit">
            <div class="col-auto">
                <label for="titleToSave" class="visually-hidden">Title</label>
                <input type="text" class="form-control" id="titleToSave" value="" v-model="addTitle">
            </div>
            <div class="col-auto">
                <select class="form-select" aria-label="Default select example" v-model="addColor">
                    <option selected>Vælg farve</option>
                    <option value="Rød">Rød</option>
                    <option value="Grøn">Grøn</option>
                    <option value="Blå">Blå</option>
                </select>
            </div>
            <div class="col-auto">
                <textarea v-model="addNote" placeholder=""></textarea>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3" @click = "addNewObjectToMonday(newTitle = addTitle, newNote = addNote, newColor = addColor); saveMonday()">Gem titel</button>
            </div>
        </form>
        <br>
        <p>Message is: {{ message }}</p>
        <br>
        <div>Selected: {{ addColor }}</div>

        <br>
        <li v-for="(plan) in mondayArray" v-if="!awesome" :style="{ color: colorRed }">
            {{ plan.id }} {{ plan.title }} {{ plan.note }} {{ plan.color }}
        </li>

        <br>
        <p class="btn btn-primary" @click = "load()">Load knap</p>
        <br>
        <p class="btn btn-primary" @click = "consoleView()">Console knap</p>
        <br>
        <p class="btn btn-primary" @click = "addNewObject(newObject = 'Nyt objekt'); save()">Tilføj test knap</p>
        <br>
        <p class="btn btn-primary" @click = "addNewObjectToMonday(newObject = 'Nyt objekt'); saveMonday()">Tilføj til mandag</p>

    </div>
</template>

<style scoped>

</style>