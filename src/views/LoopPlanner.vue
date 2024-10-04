<script setup>
import Navbar from "../components/Navbar.vue";
import Plan from "@/components/Plan.vue";
import PlanOnDay from "@/components/PlanOnDay.vue";
import {ref} from "vue";

import {defineProps} from "vue"; // Her defineres der props fra vue

const {quiz} = defineProps(['quiz']);

const mondayArray = ref(JSON.parse(localStorage.getItem('mondayData') ?? '[]' )); // Hvis der er en localStorage der hedder mondayData, hent den gemte fil. Hvis ikke, gør det til højre for ??
const tuesdayArray = ref(JSON.parse(localStorage.getItem('tuesdayData') ?? '[]' ));
const wednesdayArray = ref(JSON.parse(localStorage.getItem('wednesdayData') ?? '[]' ));
const thursdayArray = ref(JSON.parse(localStorage.getItem('thursdayData') ?? '[]' ));
const fridayArray = ref(JSON.parse(localStorage.getItem('fridayData') ?? '[]' ));
const saturdayArray = ref(JSON.parse(localStorage.getItem('saturdayData') ?? '[]' ));
const sundayArray = ref(JSON.parse(localStorage.getItem('sundayData') ?? '[]' ));

const date = new Date(); // Hent aktuel dato
const optionsFirst = { weekday: 'long' }; // Set indstillingerne for visning af ugedag
const optionsSecond = { day: 'numeric', month: 'long' }; // Set indstillingerne for visning af dato og måned
const nextDate = new Date(date.getTime() + 86400000); // Tilføj en ekstra dag på date med ms.
const day3 = new Date(nextDate.getTime() + 86400000); // Tilføj en ekstra dag på nextDate med ms.
const day4 = new Date(day3.getTime() + 86400000); // Tilføj en ekstra dag på day3 med ms.
const day5 = new Date(day4.getTime() + 86400000); // Tilføj en ekstra dag på day4 med ms.
const day6 = new Date(day5.getTime() + 86400000); // Tilføj en ekstra dag på day5 med ms.
const day7 = new Date(day6.getTime() + 86400000); // Tilføj en ekstra dag på day6 med ms.

function UpperCase(string){ // Funktion for at først bogstav er med stort
    return string[0].toUpperCase() + string.slice(1).toLowerCase(); // Første i string er stort bogstav, og nummer to og frem i string er lille
}
</script>

<template>
    <Navbar />
    <div class="container">
        <h2 class="ms-1 mb-4">Dagens opgaver</h2>
        <div class="bg-light w-100 shadow rounded-4 pb-4 mb-5">
            <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">I dag {{ date.toLocaleDateString('da-DA', optionsFirst) }} d. {{ date.toLocaleDateString('da-DA', optionsSecond) }}</h3>
            <PlanOnDay v-if="date.toLocaleDateString('da-DA', optionsFirst) === 'mandag'" v-for="(plan, index) in mondayArray" :index="index" :theArray="mondayArray" :nameData="'mondayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
            <PlanOnDay v-else-if="date.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag'" v-for="(plan, index) in tuesdayArray" :index="index" :theArray="tuesdayArray" :nameData="'tuesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
            <PlanOnDay v-else-if="date.toLocaleDateString('da-DA', optionsFirst) === 'onsdag'" v-for="(plan, index) in wednesdayArray" :index="index" :theArray="wednesdayArray" :nameData="'wednesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
            <PlanOnDay v-else-if="date.toLocaleDateString('da-DA', optionsFirst) === 'torsdag'" v-for="(plan, index) in thursdayArray" :index="index" :theArray="thursdayArray" :nameData="'thursdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
            <PlanOnDay v-else-if="date.toLocaleDateString('da-DA', optionsFirst) === 'fredag'" v-for="(plan, index) in fridayArray" :index="index" :theArray="fridayArray" :nameData="'fridayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
            <PlanOnDay v-else-if="date.toLocaleDateString('da-DA', optionsFirst) === 'lørdag'" v-for="(plan, index) in saturdayArray" :index="index" :theArray="saturdayArray" :nameData="'saturdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
            <PlanOnDay v-else-if="date.toLocaleDateString('da-DA', optionsFirst) === 'søndag'" v-for="(plan, index) in sundayArray" :index="index" :theArray="sundayArray" :nameData="'sundayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />

            <div v-if="date.toLocaleDateString('da-DA', optionsFirst) === 'mandag' && !mondayArray.length" class="mt-0 ms-2 ps-4">
                <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i dag</p>
                <RouterLink :to="'/add/' + 1" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
            </div>
            <div v-if="date.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag' && !tuesdayArray.length" class="mt-0 ms-2 ps-4">
                <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i dag</p>
                <RouterLink :to="'/add/' + 2" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
            </div>
            <div v-if="date.toLocaleDateString('da-DA', optionsFirst) === 'onsdag' && !wednesdayArray.length" class="mt-0 ms-2 ps-4">
                <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i dag</p>
                <RouterLink :to="'/add/' + 3" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
            </div>
            <div v-if="date.toLocaleDateString('da-DA', optionsFirst) === 'torsdag' && !thursdayArray.length" class="mt-0 ms-2 ps-4">
                <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i dag</p>
                <RouterLink :to="'/add/' + 4" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
            </div>
            <div v-if="date.toLocaleDateString('da-DA', optionsFirst) === 'fredag' && !fridayArray.length" class="mt-0 ms-2 ps-4">
                <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i dag</p>
                <RouterLink :to="'/add/' + 5" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
            </div>
            <div v-if="date.toLocaleDateString('da-DA', optionsFirst) === 'lørdag' && !saturdayArray.length" class="mt-0 ms-2 ps-4">
                <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i dag</p>
                <RouterLink :to="'/add/' + 6" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
            </div>
            <div v-if="date.toLocaleDateString('da-DA', optionsFirst) === 'søndag' && !sundayArray.length" class="mt-0 ms-2 ps-4">
                <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i dag</p>
                <RouterLink :to="'/add/' + 7" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-secondary pt-4 pb-5">
        <div class="container">
            <h2 class="ms-1 mt-2 mb-4">De kommende dages opgaver</h2>
            <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
                <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">I morgen {{ nextDate.toLocaleDateString('da-DA', optionsFirst) }} d. {{ nextDate.toLocaleDateString('da-DA', optionsSecond) }}</h3>
                <Plan v-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'mandag'" v-for="(plan, index) in mondayArray" :index="index" :theArray="mondayArray" :nameData="'mondayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag'" v-for="(plan, index) in tuesdayArray" :index="index" :theArray="tuesdayArray" :nameData="'tuesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'onsdag'" v-for="(plan, index) in wednesdayArray" :index="index" :theArray="wednesdayArray" :nameData="'wednesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'torsdag'" v-for="(plan, index) in thursdayArray" :index="index" :theArray="thursdayArray" :nameData="'thursdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'fredag'" v-for="(plan, index) in fridayArray" :index="index" :theArray="fridayArray" :nameData="'fridayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'lørdag'" v-for="(plan, index) in saturdayArray" :index="index" :theArray="saturdayArray" :nameData="'saturdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'søndag'" v-for="(plan, index) in sundayArray" :index="index" :theArray="sundayArray" :nameData="'sundayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />

                <div v-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'mandag' && !mondayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i morgen</p>
                    <RouterLink :to="'/add/' + 1" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag' && !tuesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i morgen</p>
                    <RouterLink :to="'/add/' + 2" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'onsdag' && !wednesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i morgen</p>
                    <RouterLink :to="'/add/' + 3" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'torsdag' && !thursdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i morgen</p>
                    <RouterLink :to="'/add/' + 4" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'fredag' && !fridayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i morgen</p>
                    <RouterLink :to="'/add/' + 5" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'lørdag' && !saturdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i morgen</p>
                    <RouterLink :to="'/add/' + 6" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="nextDate.toLocaleDateString('da-DA', optionsFirst) === 'søndag' && !sundayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver i morgen</p>
                    <RouterLink :to="'/add/' + 7" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
            </div>

            <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
                <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">{{ UpperCase(day3.toLocaleDateString('da-DA', optionsFirst)) }} d. {{ day3.toLocaleDateString('da-DA', optionsSecond) }}</h3>
                <Plan v-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'mandag'" v-for="(plan, index) in mondayArray" :index="index" :theArray="mondayArray" :nameData="'mondayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag'" v-for="(plan, index) in tuesdayArray" :index="index" :theArray="tuesdayArray" :nameData="'tuesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'onsdag'" v-for="(plan, index) in wednesdayArray" :index="index" :theArray="wednesdayArray" :nameData="'wednesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'torsdag'" v-for="(plan, index) in thursdayArray" :index="index" :theArray="thursdayArray" :nameData="'thursdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'fredag'" v-for="(plan, index) in fridayArray" :index="index" :theArray="fridayArray" :nameData="'fridayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'lørdag'" v-for="(plan, index) in saturdayArray" :index="index" :theArray="saturdayArray" :nameData="'saturdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'søndag'" v-for="(plan, index) in sundayArray" :index="index" :theArray="sundayArray" :nameData="'sundayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />

                <div v-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'mandag' && !mondayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day3.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 1" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag' && !tuesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day3.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 2" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'onsdag' && !wednesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day3.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 3"" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'torsdag' && !thursdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day3.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 4" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'fredag' && !fridayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day3.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 5" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'lørdag' && !saturdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day3.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 6" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day3.toLocaleDateString('da-DA', optionsFirst) === 'søndag' && !sundayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day3.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 7" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
            </div>

            <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
                <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">{{ UpperCase(day4.toLocaleDateString('da-DA', optionsFirst)) }} d. {{ day4.toLocaleDateString('da-DA', optionsSecond) }}</h3>
                <Plan v-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'mandag'" v-for="(plan, index) in mondayArray" :index="index" :theArray="mondayArray" :nameData="'mondayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag'" v-for="(plan, index) in tuesdayArray" :index="index" :theArray="tuesdayArray" :nameData="'tuesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'onsdag'" v-for="(plan, index) in wednesdayArray" :index="index" :theArray="wednesdayArray" :nameData="'wednesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'torsdag'" v-for="(plan, index) in thursdayArray" :index="index" :theArray="thursdayArray" :nameData="'thursdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'fredag'" v-for="(plan, index) in fridayArray" :index="index" :theArray="fridayArray" :nameData="'fridayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'lørdag'" v-for="(plan, index) in saturdayArray" :index="index" :theArray="saturdayArray" :nameData="'saturdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'søndag'" v-for="(plan, index) in sundayArray" :index="index" :theArray="sundayArray" :nameData="'sundayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />

                <div v-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'mandag' && !mondayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day4.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 1" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag' && !tuesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day4.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 2" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'onsdag' && !wednesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day4.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 3" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'torsdag' && !thursdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day4.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 4" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'fredag' && !fridayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day4.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 5" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'lørdag' && !saturdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day4.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 6" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day4.toLocaleDateString('da-DA', optionsFirst) === 'søndag' && !sundayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day4.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 7" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
            </div>

            <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
                <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">{{ UpperCase(day5.toLocaleDateString('da-DA', optionsFirst)) }} d. {{ day5.toLocaleDateString('da-DA', optionsSecond) }}</h3>
                <Plan v-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'mandag'" v-for="(plan, index) in mondayArray" :index="index" :theArray="mondayArray" :nameData="'mondayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag'" v-for="(plan, index) in tuesdayArray" :index="index" :theArray="tuesdayArray" :nameData="'tuesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'onsdag'" v-for="(plan, index) in wednesdayArray" :index="index" :theArray="wednesdayArray" :nameData="'wednesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'torsdag'" v-for="(plan, index) in thursdayArray" :index="index" :theArray="thursdayArray" :nameData="'thursdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'fredag'" v-for="(plan, index) in fridayArray" :index="index" :theArray="fridayArray" :nameData="'fridayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'lørdag'" v-for="(plan, index) in saturdayArray" :index="index" :theArray="saturdayArray" :nameData="'saturdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'søndag'" v-for="(plan, index) in sundayArray" :index="index" :theArray="sundayArray" :nameData="'sundayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />

                <div v-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'mandag' && !mondayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day5.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 1" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag' && !tuesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day5.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 2" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'onsdag' && !wednesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day5.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 3" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'torsdag' && !thursdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day5.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 4" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'fredag' && !fridayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day5.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 5" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'lørdag' && !saturdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day5.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 6" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day5.toLocaleDateString('da-DA', optionsFirst) === 'søndag' && !sundayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day5.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 7" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
            </div>

            <div class="bg-light w-100 shadow rounded-4 pb-4 mb-4">
                <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">{{ UpperCase(day6.toLocaleDateString('da-DA', optionsFirst)) }} d. {{ day6.toLocaleDateString('da-DA', optionsSecond) }}</h3>
                <Plan v-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'mandag'" v-for="(plan, index) in mondayArray" :index="index" :theArray="mondayArray" :nameData="'mondayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag'" v-for="(plan, index) in tuesdayArray" :index="index" :theArray="tuesdayArray" :nameData="'tuesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'onsdag'" v-for="(plan, index) in wednesdayArray" :index="index" :theArray="wednesdayArray" :nameData="'wednesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'torsdag'" v-for="(plan, index) in thursdayArray" :index="index" :theArray="thursdayArray" :nameData="'thursdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'fredag'" v-for="(plan, index) in fridayArray" :index="index" :theArray="fridayArray" :nameData="'fridayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'lørdag'" v-for="(plan, index) in saturdayArray" :index="index" :theArray="saturdayArray" :nameData="'saturdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'søndag'" v-for="(plan, index) in sundayArray" :index="index" :theArray="sundayArray" :nameData="'sundayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />

                <div v-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'mandag' && !mondayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day6.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 1" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag' && !tuesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day6.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 2" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'onsdag' && !wednesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day6.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 3" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'torsdag' && !thursdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day6.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 4" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'fredag' && !fridayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day6.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 5" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'lørdag' && !saturdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day6.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 6" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day6.toLocaleDateString('da-DA', optionsFirst) === 'søndag' && !sundayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day6.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 7" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
            </div>

            <div class="bg-light w-100 shadow rounded-4 pb-4 mb-5">
                <h3 class="text-dark px-4 py-4 ms-2 mt-2 mb-0">{{ UpperCase(day7.toLocaleDateString('da-DA', optionsFirst)) }} d. {{ day7.toLocaleDateString('da-DA', optionsSecond) }}</h3>
                <Plan v-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'mandag'" v-for="(plan, index) in mondayArray" :index="index" :theArray="mondayArray" :nameData="'mondayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag'" v-for="(plan, index) in tuesdayArray" :index="index" :theArray="tuesdayArray" :nameData="'tuesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'onsdag'" v-for="(plan, index) in wednesdayArray" :index="index" :theArray="wednesdayArray" :nameData="'wednesdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'torsdag'" v-for="(plan, index) in thursdayArray" :index="index" :theArray="thursdayArray" :nameData="'thursdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'fredag'" v-for="(plan, index) in fridayArray" :index="index" :theArray="fridayArray" :nameData="'fridayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'lørdag'" v-for="(plan, index) in saturdayArray" :index="index" :theArray="saturdayArray" :nameData="'saturdayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />
                <Plan v-else-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'søndag'" v-for="(plan, index) in sundayArray" :index="index" :theArray="sundayArray" :nameData="'sundayData'" :title="UpperCase(plan.title)" :note="plan.note" :pickedColor="plan.color" :checkmark="plan.check" />

                <div v-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'mandag' && !mondayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day7.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 1" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'tirsdag' && !tuesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day7.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 2" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'onsdag' && !wednesdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day7.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 3" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'torsdag' && !thursdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day7.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 4" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'fredag' && !fridayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day7.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 5" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'lørdag' && !saturdayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day7.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 6" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
                <div v-if="day7.toLocaleDateString('da-DA', optionsFirst) === 'søndag' && !sundayArray.length" class="mt-0 ms-2 ps-4">
                    <p class="text-dark text-opacity-50 mb-2">Du har ingen opgaver om {{ day7.toLocaleDateString('da-DA', optionsFirst) }}en</p>
                    <RouterLink :to="'/add/' + 7" class="btn btn-primary text-light fw-medium py-2 px-3">Tilføj opgave +</RouterLink>
                </div>
            </div>
        </div>
    </div>

    <div class="bottom-nav fixed-bottom bg-light shadow">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center">
                <p class="fs-3 fw-medium text-dark pt-1 mt-4">Tilføj opgave</p>
            </div>
        </div>
    </div>

    <div class="fixed-bottom">
        <div class="position-absolute translate-middle start-50 bottom-0">
            <RouterLink to="/add/0" class="btn-add d-flex justify-content-center align-items-center bg-light shadow">
                <p class="fs-1 fw-medium text-dark mb-0">+</p>
            </RouterLink>
        </div>
    </div>
</template>