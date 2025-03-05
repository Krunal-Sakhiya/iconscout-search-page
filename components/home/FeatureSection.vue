<template>
    <section class="text-center py-5">
        <div class="container">
            <div>
                <h2 class="h2 font-weight-bold">An integrated design ecosystem</h2>
                <p class="text-muted-paragraph text-muted">
                    IconScout comes with integrated tools that enhance and streamline your workflow. Your account is
                    packed
                    with convenient conversion tools and simplified, powerful editors.
                </p>

            </div>

            <div class="row" style="justify-content: space-between;">
                <div v-for="(feature, index) in features" :key="index"
                    class="col-lg-4 col-md-4 mt-lg-0 mt-sm-4 mt-5-5 col-sm-6">
                    <div class="feature-card">
                        <img :src="feature.image" :alt="feature.title" class="img-fluid">
                    </div>
                    <div class="feature-title">
                        <h5 class="h3">{{ feature.title }}</h5>
                        <p class="text-muted text-muted-last">{{ feature.description }}</p>
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
                features: [
                    {
                        image: "https://cdna.iconscout.com/img/3d-icon.8a5b31b.png?f=webp",
                        title: 'The most relevant assets',
                        description: 'Choose the most relevant assets from all the various styles available to complement your design.'
                    },
                    {
                        image: "https://cdna.iconscout.com/img/3d-icon.8a5b31b.png?f=webp",
                        title: 'Select and customize',
                        description: 'Use our SVG and Lottie editors to quickly tweak colors, backgrounds, apply presets and make quick edits on the go.'
                    },
                    {
                        image: "https://cdna.iconscout.com/img/3d-icon.8a5b31b.png?f=webp",
                        title: 'Implement across platforms',
                        description: 'Implement SVGs and Lottie animations in just a few clicks. They work like magic across web, iOS, Android, TV and WatchOS.'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .row {
        margin-left: -105px;
        margin-right: -105px;
    }

    .h2 {
        font-size: 38px;
        line-height: 58px;
        letter-spacing: -0.24px;
        margin-bottom: 8px;
        font-family: inherit;
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
    }

    .text-muted {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5rem;
        color: #000;
        opacity: 0.5;
    }

    .text-muted-paragraph {
        padding: 0px 200px;
    }

    .text-muted-last {
        padding: 0px 1px;
    }

    .feature-card {
        padding: 20px;
        padding-bottom: 0 !important;
        background: #fff;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
    }

    .feature-title {
        margin-top: 0 !important;
        margin: 2rem;
    }

    .feature-card img {
        object-fit: contain;
        height: 100%;
        width: 100%;
        margin-bottom: 50px;
    }

    .h3 {
        margin-bottom: 8px;
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
        font-size: 20px;
        line-height: 28px;
    }
</style>