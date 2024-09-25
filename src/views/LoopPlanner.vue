<script setup>
import Navbar from "../components/Navbar.vue";
import Card from "@/components/Card.vue";
</script>

<template>
    <Navbar />
    <div class="container">
        <h1>Hej</h1>
        <div class="row row-cols-md-3 my-5">
            <Card :img="'/images/vue.png'" :title="'Lorem ipsum'" :text="'Lorem ipsum...'"/>
            <Card :img="'/images/vue.png'" :title="'Lorem ipsum'" :text="'Lorem ipsum...'"/>
            <Card :img="'/images/vue.png'" :title="'Lorem ipsum'" :text="'Lorem ipsum...'"/>
        </div>
    </div>
</template>