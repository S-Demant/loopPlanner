<script setup>

function clearAllData () {
    if (confirm('Du er ved at nulstille hele din plan.\nEr du sikker?')) {
        localStorage.clear();
        location.reload(); // Genindlæs den aktuelle side
    }
}

</script>

<template>
    <nav class="navbar fixed-top bg-light shadow-sm">
        <div class="container">
            <RouterLink class="navbar-brand text-primary fw-semibold ms-3 ms-md-0" to="/"><img :src="'/images/logo.webp'" class="logo-icon me-3">Loop Planner</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header px-4 pt-4">
                    <RouterLink to="/"><img :src="'/images/logo.webp'" class="logo-icon"></RouterLink>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body py-0 px-4">
                    <ul class="navbar-nav justify-content-end flex-grow-1">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/">Min plan</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/add/0">Tilføj opgave +</RouterLink>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link pointer" @click="clearAllData()">Nulstil plan</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="top-bottom"></div>
</template>

<style scoped>
.navbar {
    height: 70px;
}

.top-bottom {
    margin-bottom: 105px;
}

.logo-icon {
    max-height: 2.5rem;
}
</style>