<template>
    <div class="app-wrapper">
        <Navbar />
        <main class="main-content">
            <Nuxt />
        </main>
        <Footerbar />
    </div>
</template>

<style scoped>
    .app-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-top: 63px;
    }
</style>