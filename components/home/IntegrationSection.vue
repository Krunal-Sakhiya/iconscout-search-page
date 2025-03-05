<template>
    <section>
        <div class="container py-5">
            <div class="integration-section">
                <div class="align-items-center integration-text">
                    <div class="">
                        <h6 class="world-of-integration">WORLD OF INTEGRATIONS</h6>
                        <h2 class="font-weight-bold work-master-text">
                            Work faster and Save time with Apps and Plugins
                        </h2>
                        <p class="integration-p">
                            IconScout has integrations with Figma, Adobe XD, Sketch, Illustrator, GSuite, and MS Office.
                            Our plugins let you find assets without leaving the tools you’re using.
                        </p>
                    </div>
                    <div class=" text-center">
                        <img src="https://cdna.iconscout.com/img/ai-illustration-generator.647d903.png?f=webp"
                            class="img-fluid image-box-radius" alt="Integration Illustration">
                    </div>
                </div>

                <div class="mt-5">
                    <h5 class="text-center font-weight-bold">Download plugins for:</h5>
                    <div class="d-flex flex-nowrap justify-content-center mt-3 gap-item">
                        <a href="/" v-for="(app, index) in apps" :key="index" class="app-card mx-2">
                            <div class="badge" :class="{
                                'badge-update': app.badge === 'UPDATE',
                                'badge-drag-drop': app.badge === 'DRAG & DROP',
                                'badge-new': app.badge === 'NEW'
                            }" v-if="app.badge">
                                {{ app.badge }}
                            </div>
                            <div class="app-data">
                                <img :src="app.icon" :alt="app.name" class="app-icon">
                                <p class="app-name">{{ app.name }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                apps: [
                    { name: "Apple", icon: "https://cdna.iconscout.com/img/mac-app.1aa449a.svg", badge: "UPDATE" },
                    { name: "Windows", icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIj48ZyBpZD0ic3VyZmFjZTEiIGZpbGw9IiMwM0E5RjQiPjxwYXRoIGQ9Ik0yMCAyNUg2djEyLjA3NGwxNCAxLjkxOHoiLz48cGF0aCBkPSJNMjAgOS4xMDJMNiAxMS4wNjZWMjNoMTR6Ii8+PHBhdGggZD0iTTIyIDguODJWMjNoMjBWNi4wMTJ6Ii8+PHBhdGggZD0iTTIyIDI1djE0LjI3bDIwIDIuNzQyVjI1eiIvPjwvZz48bWV0YWRhdGE+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxyZGY6RGVzY3JpcHRpb24gYWJvdXQ9Imh0dHBzOi8vaWNvbnNjb3V0LmNvbS9sZWdhbCNsaWNlbnNlcyIgZGM6dGl0bGU9IndpbmRvd3MiIGRjOmRlc2NyaXB0aW9uPSJ3aW5kb3dzIiBkYzpwdWJsaXNoZXI9Ikljb25zY291dCIgZGM6ZGF0ZT0iMjAxNy0xMi0xNSIgZGM6Zm9ybWF0PSJpbWFnZS9zdmcreG1sIiBkYzpsYW5ndWFnZT0iZW4iPjxkYzpjcmVhdG9yPjxyZGY6QmFnPjxyZGY6bGk+SWNvbnM4PC9yZGY6bGk+PC9yZGY6QmFnPjwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC9tZXRhZGF0YT48L3N2Zz4=" },
                    { name: "Figma", icon: "https://cdna.iconscout.com/img/figma.24122da.svg", badge: "DRAG & DROP" },
                    { name: "Adobe XD", icon: "https://cdna.iconscout.com/img/XD.2c75a31.svg" },
                    { name: "Sketch", icon: "https://cdna.iconscout.com/img/Sketchapp.97a56a2.svg" },
                    { name: "GSuite", icon: "https://cdna.iconscout.com/img/g-suit.3cea200.svg" },
                    { name: "Office", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCAzNyA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wIDM1LjQ5NVY4Ljc0NDM4TDIzLjY2MzMgMEwzNi41MjI5IDQuMTEzNDVWNDAuMTI0MkwyMy42NjMzIDQ0LjAwMThMMCAzNS40OTVMMjMuNjYzMyAzOC4zNDI5VjcuMjAyNUw4LjIzMDQyIDEwLjgwMzdWMzEuODk1NUwwIDM1LjQ5NVoiIGZpbGw9IiNFQjNDMDAiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIzNi41MjI5IiBoZWlnaHQ9IjQ0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" },
                    { name: "Illustrator", icon: "https://cdna.iconscout.com/img/Illustrator.398333d.svg" },
                    { name: "Photoshop", icon: "https://cdna.iconscout.com/img/Photoshop.3fa4992.svg" },
                    { name: "Canva", icon: "https://cdna.iconscout.com/img/canva.65be36f.svg", badge: "NEW" },
                ],
            };
        },
    };
</script>

<style scoped>
    .container-fluid {
        padding: 10px 100px;
    }

    .integration-section {
        position: relative;
        left: -100px;
        width: 1325px;
        background: linear-gradient(180deg, #eceef5 0%, rgba(245, 246, 250, 0) 100%);
        border-radius: 20px;
    }

    .integration-text {
        padding: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 1.5rem;
    }

    .world-of-integration {
        color: #0073C2;
        font-weight: 500 !important;
        margin-bottom: 2px !important;
    }

    .work-master-text {
        letter-spacing: -0.24px;
        font-size: 48px;
        line-height: 58px;
    }

    .integration-p {
        color: #1C2033 !important;
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
        text-align: left;
        padding-right: 140px;
    }

    .app-card {
        min-width: 112px;
        height: 150px;
        background: #fff;
        border-radius: 24px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 15px;
        text-decoration: none;
        position: relative;
    }

    .app-name {
        margin-top: 24px !important;
    }

    .app-icon {
        width: 44px;
        aspect-ratio: auto 44 / 44;
        height: 44px;
    }

    .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0092e4;
        color: #fff;
        font-size: 8px;
        padding: 5px 15px;
        border-radius: 5px;
    }

    .badge-new {
        position: absolute;
        top: -5px;
        left: 28%;
    }

    .badge-drag-drop {
        position: absolute;
        top: -5px;
        left: 10px;
    }

    .badge-update {
        position: absolute;
        top: -5px;
        left: 20%;
    }

    .app-data {
        position: relative;
        top: 10px;
        gap: 5px;
    }

    .app-name {
        font-size: 14px;
        line-height: 24px;
        text-decoration: none;
        color: black;
    }

    .app-card:hover .app-name {
        color: #007bff;
    }

    .image-box-radius {
        border-radius: 18px;
    }

</style>