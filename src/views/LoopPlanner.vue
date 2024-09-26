<script setup>
import Navbar from "../components/Navbar.vue";
import Plan from "@/components/Plan.vue";
import {ref} from "vue";

const savedItems = localStorage.getItem('mondayData');
const mondayArray = savedItems;

if (savedItems) { // Hvis der er gemt noget i local storage, hent det
    console.log("Gemt data er indlæst")
    console.log(mondayArray)
} else if (!savedItems) {
    console.log("Nej, gemt data er ikke indlæst")
}



</script>

<template>
    <Navbar />
    <div class="container">

        <h2 class="mb-4">Dagens plan</h2>
        <div class="bg-light w-100 shadow rounded-4 pb-4 mb-5">
            <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">I dag mandag d. 25 september</h3>
            <Plan :title="mondayArray.value" />
            <Plan :title="'Vande blomster'" />
            <Plan :title="'Græsklipning'" />
        </div>

        <h2 class="mb-4">Kommende planer</h2>
        <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
            <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">I morgen tirsdag d. 26 september</h3>
            <div class="bg-primary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Støvsugning</span>
            </div>
            <div class="bg-secondary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Vande blomster</span>
            </div>
            <div class="bg-primary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Græsklipning</span>
            </div>
        </div>

        <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
            <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">Onsdag d. 27 september</h3>
            <div class="bg-primary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Støvsugning</span>
            </div>
            <div class="bg-secondary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Vande blomster</span>
            </div>
            <div class="bg-primary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Græsklipning</span>
            </div>
        </div>

        <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
            <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">Torsdag d. 28 september</h3>
            <div class="bg-primary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Støvsugning</span>
            </div>
            <div class="bg-secondary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Vande blomster</span>
            </div>
            <div class="bg-primary w-100 py-4 px-4">
                <span class="fs-3 text-light ms-2">Græsklipning</span>
            </div>
        </div>

    </div>
</template>