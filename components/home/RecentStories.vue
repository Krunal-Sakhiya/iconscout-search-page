<template>
    <div class="bg-color">
        <div class="container my-5">
            <!-- Hero Section -->
            <section class="d-flex flex-column flex-md-row align-items-center integrate-section">
                <div class="text-content col-md-6">
                    <h2 class="font-weight-bold">Integrate millions of design assets into your app</h2>
                    <p class="text-muted">
                        Get millions of 3Ds, Icons, Illustrations, Lottie animations, and best-in-class search tools for
                        your website,
                        mobile app, or project with the IconScout API.
                    </p>
                    <a href="#" class="explore-api">Explore IconScout API <i class="uil uil-arrow-up-right"></i></a>
                </div>
                <div class="col-md-6 text-center">
                    <img src="https://cdna.iconscout.com/img/developer-api.fbe6702.png?f=webp" alt="API Preview"
                        class="img-fluid rounded">
                </div>
            </section>

            <!-- Recent Stories Section -->
            <section class="my-5 recent-section">
                <div class="d-flex justify-content-between align-items-center">
                    <h2 class="font-weight-bold recent-stories">Recent Stories</h2>
                    <button class="btn btn-outline-dark ">View all</button>
                </div>

                <div class="row mt-4">
                    <div class="col" v-for="(story, index) in stories" :key="index">
                        <div class="card border-0">
                            <div>
                                <img :src="story.image" class="card-img-top" alt="Story Image">
                            </div>
                            <div class="card-body">
                                <small class="text-uppercase capital">{{ story.category }}</small>
                                <h5 class="mt-2 title">{{ story.title }}</h5>
                                <p class="text-muted name">by {{ story.author }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stories: [
                    {
                        image: "https://cdn.iconscout.com/wordpress/2024/12/How-to-Use-Reverse-Text-in-Creative-Designs_Cover.png?f=webp&h=500",
                        category: "Design Insights",
                        title: "Use of Reverse Text in Creative Designs",
                        author: "Hina Ikram"
                    },
                    {
                        image: "https://cdn.iconscout.com/wordpress/2024/12/Reinforcing-Omnichannel-Icons_-How-To-Rescale--Reuse-and-Refresh-Your-Icon-Design-For-Cross-Channel-Success_cover.png?f=webp&h=500",
                        category: "Design Inspiration",
                        title: "Reinforcing Omnichannel Icons...",
                        author: "Rebecca Barnatt-Smith"
                    },
                    {
                        image: "https://cdn.iconscout.com/wordpress/2025/01/UX-Designers_Cover.png?f=webp&h=500",
                        category: "Resources",
                        title: "25 Best Chrome Extensions for UI/UX Designers",
                        author: "Jasmine Andria"
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .bg-color {
        transform: translateY(-25%);
        min-height: 730px;
        background: linear-gradient(180deg, #eceef5 0%, rgba(245, 246, 250, 0) 100%);
        position: relative;
        background-size: cover;
    }

    .integrate-section {
        padding-top: 100px;
        position: relative;
        top: 200px;
    }

    .recent-section {
        position: relative;
        top: 250px;
        margin-left: -105px;
        margin-right: -105px;
    }

    .text-content {
        padding-right: 32px !important;
    }

    .text-content h2 {
        font-size: 36px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: -0.24px;
        color: #000;
        margin-bottom: 12px !important;
    }

    .text-content p {
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
        text-align: left;
        color: #000;
        margin-bottom: 24px !important;
        opacity: 60%;
    }

    .row {
        gap: 24px;
    }

    .row .col {
        width: 312px;
    }

    .card {
        border-radius: 15px;
        background: transparent;
    }

    .card-img-top {
        border-radius: 15px;
        display: block;
        object-fit: cover;
        object-position: center;
        transition: all 0.5s ease-out;
        border-radius: 12px;
        width: 100%;
        height: 250px;
    }

    .capital {
        margin-top: 32px !important;
        margin-bottom: 12px !important;
        color: #0073c2;
        font-size: 11px;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: 0.8px;
    }

    .title {
        margin-bottom: 32px !important;
        font-size: 24px;
        line-height: 32px;
        font-weight: 700;
        color: black;
    }

    .name {
        color: #596080;
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 32px !important;
    }

    .recent-stories {
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -0.24px;
        margin-bottom: 8px;
        font-weight: 700;
        color: inherit;
    }

    .btn-outline-dark {
        color: #000;
        background-color: #fff;
        border-color: #D8DBEB;
        box-shadow: none;
    }

    .btn {
        display: inline-block;
        font-weight: 500;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 9px 19px;
        font-size: 16px;
        line-height: 24px;
        border-radius: 8px;
        transition: all 0.15s ease-in-out;
    }

    .explore-api {
        color: #0092e4;
        text-decoration: none;
        font-weight: 500 !important;
        font-size: 18px;
        line-height: 28px;
        text-align: left;
    }
</style>