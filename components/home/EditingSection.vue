<template>
    <div class="container py-5">
        <div class="row">
            <!-- Color & Lottie Editor Card -->
            <div class="col-md-4 mb-4">
                <div class="card h-100 feature-card bg-info">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">Color & Lottie Editor</h3>
                        <p class="card-text">
                            Customize design assets to match your brand aesthetic. View all our assets in your preferred
                            color palette.
                        </p>
                        <div class="mt-auto text-center">
                            <video loading="lazy" muted="muted"
                                src="https://cdna.iconscout.com/videos/3dGltfEditorPricing.bba3d47.mp4?h=380"
                                width="380" height="191" type="video/mp4" autoplay="autoplay" loop="loop" playsinline=""
                                class="feature-image"></video>
                        </div>
                    </div>
                </div>
            </div>

            <!-- glTF 3D Editor Card -->
            <div class="col-md-4 mb-4">
                <div class="card h-100 feature-card bg-warning">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">glTF 3D Editor</h3>
                        <p class="card-text">
                            Easily edit and customize 3D icons and illustrations with our glTF 3D Editor.
                        </p>
                        <div class="mt-auto text-center">
                            <video loading="lazy" muted="muted"
                                src="https://cdna.iconscout.com/videos/3dGltfEditorPricing.bba3d47.mp4?h=380"
                                width="380" height="191" type="video/mp4" autoplay="autoplay" loop="loop" playsinline=""
                                class="feature-image"></video>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SVG to Lottie Card -->
            <div class="col-md-4 mb-4">
                <div class="card h-100 feature-card bg-purple">
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title">SVG to Lottie</h3>
                        <p class="card-text">
                            Drag and drop static assets into our SVG to Lottie converter and watch it auto-animate.
                        </p>
                        <div class="mt-auto text-center">
                            <video loading="lazy" muted="muted"
                                src="https://cdna.iconscout.com/videos/3dGltfEditorPricing.bba3d47.mp4?h=380"
                                width="380" height="191" type="video/mp4" autoplay="autoplay" loop="loop" playsinline=""
                                class="feature-image"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeatureCards'
    }
</script>

<style scoped>
    .row {
        margin-left: -105px;
        margin-right: -105px;
    }

    .feature-card {
        border: none;
        border-radius: 15px;
        overflow: hidden;
        transition: transform 0.3s ease;
        height: 100%;
    }

    .feature-card:hover {
        transform: translateY(-15px);
    }

    .feature-card .card-title {
        font-weight: bold;
        /* margin-bottom: 20px; */
        padding-left: 20px;
        padding-top: 20px;
        color: #000;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .feature-card .card-text {
        padding-left: 20px;
        color: #596080;
        margin: 0;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
        margin-bottom: 70px;
    }

    .feature-image {
        max-width: 70%;
        margin-top: 2rem;
    }

    /* Custom colors */
    .bg-purple {
        background-color: #c280ff !important;
    }

    .bg-info {
        background-color: #17c1ff !important;
    }

    .bg-warning {
        background-color: #ffd700 !important;
    }
</style>