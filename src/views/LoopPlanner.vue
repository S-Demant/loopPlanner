<script setup>
import Navbar from "../components/Navbar.vue";
import Plan from "@/components/Plan.vue";
import {ref} from "vue";

const mondayArray = ref(JSON.parse(localStorage.getItem('mondayData') ?? '[]' )); // Hvis der er en localStorage der hedder mondayData, hent den gemte fil. Hvis ikke, gør det til højre for ??
const tuesdayArray = ref(JSON.parse(localStorage.getItem('tuesdayData') ?? '[]' ));

const date = new Date(); // Hent aktuel dato
const optionsFirst = { weekday: 'long' }; // Set indstillingerne for visning af ugedag
const optionsSecond = { day: 'numeric', month: 'long' }; // Set indstillingerne for visning af dato og måned
const nextDate = new Date(date.getTime() + 86400000); // Tilføj en ekstra dag på date med ms.

function UpperCase(string){ // Funktion for at først bogstav er med stort
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(UpperCase(date.toLocaleDateString('da-DA', optionsFirst)));
console.log(date.toLocaleDateString('da-DA', optionsSecond));

</script>

<template>
    <Navbar />
    <div class="container">

        <h2 class="mb-4">Dagens plan</h2>
        <div class="bg-light w-100 shadow rounded-4 pb-4 mb-5">
            <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">I dag {{ UpperCase(date.toLocaleDateString('da-DA', optionsFirst)) }} d. {{ date.toLocaleDateString('da-DA', optionsSecond) }}</h3>
            <Plan v-for="(plan) in mondayArray" :picked-color="plan.color" :title="UpperCase(plan.title)" />
        </div>

        <h2 class="mb-4">De kommende dages planer</h2>
        <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
            <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">I morgen {{ UpperCase(nextDate.toLocaleDateString('da-DA', optionsFirst)) }} d. {{ nextDate.toLocaleDateString('da-DA', optionsSecond) }}</h3>
            <Plan v-for="(plan) in tuesdayArray" :picked-color="plan.color" :title="UpperCase(plan.title)" />
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