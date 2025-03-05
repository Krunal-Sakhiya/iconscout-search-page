<template>
    <section>
        <div class="container">
            <div class="row align-items-center hero-section">
                <!-- Left Content -->
                <div class="col-md-6 text-content">
                    <h2 class="title">
                        Access the world's largest <br />
                        <strong>Design Ecosystem:</strong> Assets, Integrations, and Motion.
                    </h2>
                    <button class="btn btn-primary mt-3 btn-md">Get Unlimited Downloads</button>
                </div>

                <!-- Right Content -->
                <div class="col-md-6 position-relative">
                    <div class="hero-image-container">
                        <img src="https://cdna.iconscout.com/img/get-started.cc24d32.png" class="main-image"
                            alt="Design Ecosystem" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .row {
        margin-left: -105px;
        margin-right: -105px;
    }

    .hero-section {
        background-color: #E9F8FE;
        z-index: 3;
        padding: 60px 0;
        padding-left: 2rem !important;
        border-radius: 20px;
        overflow: hidden;
        background-size: cover;
        position: relative;
    }

    .text-content .title {
        font-size: 48px;
        line-height: 58px;
        letter-spacing: -0.72px;
        font-weight: 700;
        margin-bottom: 32px !important;
    }

    .hero-image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        /* width: 100%; */
    }

    .main-image {
        max-width: 600px;
        height: auto;
        object-fit: contain;
        position: relative;
        left: 135px;
    }

    .btn-md {
        padding: .563rem 1.188rem;
        font-size: 1rem;
        line-height: 1.5rem;
        border-radius: 8px;
        font-weight: 500;
    }

    .btn-primary {
        color: #fff;
        background-color: #0092e4;
        border-color: #0092e4;
        box-shadow: none;
    }
</style>