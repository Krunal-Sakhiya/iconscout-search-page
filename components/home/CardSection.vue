<template>
    <div class="container my-5 box-padding">
        <div class="row align-items-center mb-5">
            <div class="col-md-6">
                <h2 class="font-weight-bold">Generate Customizable Illustrations with AI <span
                        class="badge badge-primary">BETA</span></h2>
                <p>Instantly generate custom illustrations by simply describing your idea. Choose your preferred style,
                    and let our AI Illustration Generator bring your concepts to life. Try it out now and elevate your
                    design projects.</p>
                <a href="#" class="try-now">Try AI Now
                    <i class="uil uil-arrow-up-right"></i>
                </a>
            </div>
            <div class="col-md-6 text-center">
                <div class="image-box">
                    <img src="https://cdna.iconscout.com/img/ai-illustration-generator.647d903.png?f=webp"
                        class="img-fluid image-box-radius" alt="Illustration">
                </div>
            </div>
        </div>

        <div class="row align-items-center">
            <div class="col-md-6 order-md-2">
                <h2 class="font-weight-bold">Customize design assets using our Color Palette</h2>
                <p>Instantly customize all types of design assets to match your preferences or brand aesthetic with our
                    Color Palette. Try it on 3D illustrations with our glTF 3D Editor.</p>
                <a href="#" class="try-now">Try 3D Editor Now <i class="uil uil-arrow-up-right"></i></a>
            </div>
            <div class="col-md-6 text-center order-md-1">
                <div class="image-box p-3">
                    <img src="https://cdna.iconscout.com/img/templates.e00e5e6.png?f=webp"
                        class="img-fluid image-box-radius" alt="Illustration">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .box-padding {
        padding: 20px;
    }

    .image-box {
        position: relative;
        display: inline-block;
        border-radius: 18px;
    }

    .image-box-radius {
        border-radius: 18px;
    }

    .try-now {
        color: #0092e4;
        font-weight: 500 !important;
    }

    .try-now:hover {
        text-decoration: none;
    }

    .overlay-box {
        position: absolute;
        bottom: 10px;
        left: 10px;
        background: rgba(255, 255, 255, 0.9);
        padding: 5px 10px;
        border-radius: 5px;
    }
</style>