<script setup>

function clearAllData () {
    if (confirm('Du er ved at nulstille hele din plan.\nEr du sikker?')) {
        localStorage.clear();
        location.reload(); // Genindlæs den aktuelle side
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-light shadow-sm">
        <div class="container">
            <RouterLink class="navbar-brand text-primary fw-semibold ms-3 ms-md-0" to="/">Loop Planner</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header px-4 pt-4">
                    <h5 class="offcanvas-title text-primary fw-semibold" id="offcanvasNavbarLabel">Loop Planner</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body py-0 px-4">
                    <ul class="navbar-nav justify-content-end flex-grow-1">
                        <li class="nav-item">
                            <RouterLink class="nav-link me-lg-2" to="/add">Tilføj opgave +</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link mx-lg-2" to="/">Information</RouterLink>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link ms-lg-2 pointer" @click="clearAllData()">Nulstil plan</span>
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
    min-height: 70px;
}

.top-bottom {
    margin-bottom: 105px;
}

.pointer:hover {
    cursor: pointer;
}
</style>