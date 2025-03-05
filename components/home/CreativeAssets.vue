<template>
    <div class="container my-5">
        <!-- Top row of asset cards -->
        <a href="#" class="all-asset-card text-decoration-none">
            <div v-for="(asset, index) in topAssets" :key="index" class="mb-4">
                <div class="card">
                    <img :src="asset.image" class="card-img-top" alt="Asset Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ asset.title }}</h5>
                        <p class="card-text">{{ asset.description }}</p>
                    </div>
                </div>
            </div>
        </a>

        <!-- Featured section in the middle - Horizontal layout -->
        <div class="featured-section mb-4">
            <div class="all-asset-card align-items-center ">
                <!-- Left card -->
                <a href="#" class="left-card text-decoration-none">
                    <div class="card">
                        <img src="https://cdni.iconscout.com/illustration-pack/preview-file/people-illustration-pack-download-in-svg-png-gif-file-formats--character-female-student-girl-business-school-illustrations-212754@0.png?f=webp&w=312&modified_at=1710747160"
                            class="card-img-top" alt="Asset Image">
                        <div class="card-body">
                            <h5 class="card-title">People Illustration Pack</h5>
                            <p class="card-text">7 Illustrations</p>
                        </div>
                    </div>
                </a>

                <!-- Middle content -->
                <div class="text-center middle-content ">
                    <h2 class="font-weight-bold">Discover millions of Creative Assets </h2>
                    <p>Explore our featured assets and meet the amazingly talented artists behind these creations.</p>
                    <button class="btn btn-primary my-3">Discover Featured Assets <i
                            class="uil uil-arrow-right right-arrow"></i></button>
                </div>

                <!-- Right card -->
                <a href="#" class="right-card text-decoration-none">
                    <div class="card">
                        <img src="https://cdn3d.iconscout.com/3d-pack/preview/camping-3d-icon-pack-download-in-png-blend-fbx-gltf-file-formats--travel-adventure-hiking-camp-mountain-outdoor-holidays-icons-322692.png?f=webp&w=312&modified_at=1740632588"
                            class="card-img-top" alt="Asset Image">
                        <div class="card-body">
                            <h5 class="card-title">3D Printing Animated Icon</h5>
                            <p class="card-text">30 Animated Icons</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <!-- Bottom row of asset cards -->
        <a href="#" class="all-asset-card text-decoration-none">
            <div v-for="(asset, index) in bottomAssets" :key="index" class="mb-4">
                <div class="card">
                    <img :src="asset.image" class="card-img-top" alt="Asset Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ asset.title }}</h5>
                        <p class="card-text">{{ asset.description }}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                topAssets: [
                    {
                        image: 'https://cdni.iconscout.com/illustration-pack/preview-file/people-illustration-pack-download-in-svg-png-gif-file-formats--character-female-student-girl-business-school-illustrations-212754@0.png?f=webp&w=312&modified_at=1710747160',
                        title: 'People Illustration Pack',
                        description: '7 Illustrations'
                    },
                    {
                        image: 'https://cdni.iconscout.com/illustration-pack/preview/healthcare-illustration-pack-download-in-svg-png-gif-file-formats--doctor-medical-health-hospital-stethoscope-man-illustrations-290216.png?f=webp&w=312&modified_at=1725534719',
                        title: 'Healthcare Illustration Pack',
                        description: '5 Illustrations'
                    },
                    {
                        image: 'https://cdn3d.iconscout.com/3d-pack/preview/camping-3d-icon-pack-download-in-png-blend-fbx-gltf-file-formats--travel-adventure-hiking-camp-mountain-outdoor-holidays-icons-322692.png?f=webp&w=312&modified_at=1740632588',
                        title: 'Camping 3D Icon Pack',
                        description: '25 3D Icons'
                    },
                    {
                        image: 'https://cdn3d.iconscout.com/3d-pack/preview/artificial-intelligence-3d-icon-pack-download-in-png-blend-fbx-gltf-file-formats--interface-innovation-communication-app-business-data-application-science-technology-icons-322494.jpg?f=webp&w=312&modified_at=1740571071',
                        title: 'Artificial Intelligence 3D Icon Pack',
                        description: '20 3D Icons'
                    }
                ],
                bottomAssets: [
                    {
                        image: 'https://cdn.iconscout.com/icon-pack/preview-mockup/communication-icon-pack-download-in-svg-png-gif-file-formats--message-chat-mail-phone-conversation-call-network-icons-322569.png?f=webp&w=312&modified_at=1740572972',
                        title: 'Communication Icon Pack',
                        description: '100 Icons'
                    },
                    {
                        image: 'https://cdn.iconscout.com/icon-pack/preview-mockup/arrows-icon-pack-download-in-svg-png-gif-file-formats--direction-navigation-right-arrow-directional-arrowhead-sign-symbols-icons-322567.png?f=webp&w=312&modified_at=1740572651',
                        title: 'Arrows Icon Pack',
                        description: '30 Icons'
                    },
                    {
                        image: 'https://cdn.iconscout.com/icon-pack/preview-mockup/accounting-and-passive-income-icon-pack-download-in-svg-png-gif-file-formats--finance-business-investment-money-dollar-icons-322500.png?f=webp&w=312&modified_at=1740571696',
                        title: 'Accounting And Passive Income...',
                        description: '30 Icons'
                    },
                    {
                        image: 'https://cdn.iconscout.com/icon-pack/preview-mockup/entertainment-icon-pack-download-in-svg-png-gif-file-formats--game-sports-music-activity-recreation-icons-322499.png?f=webp&w=312&modified_at=1740571816',
                        title: 'Entertainment Icon Pack',
                        description: '100 Icons'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .all-asset-card {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 1.5rem;
    }

    .card:hover .card-title {
        text-decoration: none !important;
        color: #0092e4 !important;
    }

    .left-card {
        position: relative;
        left: -105px;
    }

    .right-card {
        position: relative;
        right: -105px;
    }

    .bottom-side {
        margin-top: -20px !important;
    }

    .card-title {
        color: #000000;
        font-family: inherit;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5rem;
        margin-bottom: 0px !important;
    }

    .card-text {
        color: #596080 !important;
        font-size: .875rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    .card {
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
        overflow: hidden;
        width: 312px;
        /* width: 280px; */
        height: auto;
        /* height: 400px; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-img-top {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .card-body {
        height: 80px;
        width: 100%;
        flex-grow: 1;
        padding-bottom: 0px !important;
    }

    .btn {
        font-weight: 500;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        border: 1px solid transparent;
        font-size: 1rem;
        line-height: 1.5rem;
        border-radius: 8px;
        transition: all 0.15sease-in-out;
        padding: 10px 20px;
    }

    .btn-primary {
        background-color: #0092e4;
        border-color: #0092e4;
    }

    .right-arrow {
        height: 150px;
        width: 150px;
    }

    .middle-content h2 {
        font-size: 48px;
        line-height: 58px;
        letter-spacing: -0.24px;
    }

    .middle-content p {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5rem;
        color: #596080 !important;
    }

    .my-5 {
        margin-top: 0 !important;
    }
</style>