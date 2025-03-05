<template>
    <div class="trusted-brands text-center my-5">
        <h5 class="mb-3 font-weight-bold">Trusted by 6.8 Million+ users worldwide</h5>
        <div class="container">
            <div class="row justify-content-center no-gutters">
                <!-- First row -->
                <div class="col-6 col-md-auto mb-3" v-for="(brand, index) in firstRowBrands" :key="'first-' + index">
                    <div class="logo-container">
                        <img :src="brand.logo" :alt="brand.name" class="brand-logo" loading="lazy">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center no-gutters">
                <!-- Second row -->
                <div class="col-6 col-md-auto mb-3" v-for="(brand, index) in secondRowBrands" :key="'second-' + index">
                    <div class="logo-container">
                        <img :src="brand.logo" :alt="brand.name" class="brand-logo" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstRowBrands: [
                    { name: "Google", logo: "https://cdna.iconscout.com/img/google.c0129cb.svg" },
                    { name: "Amazon", logo: "https://cdna.iconscout.com/img/amazon.90c4794.svg" },
                    { name: "Disney", logo: "https://cdna.iconscout.com/img/disney.042cf1c.svg" },
                    { name: "Duolingo", logo: "https://cdna.iconscout.com/img/duolingo.389f11b.svg" },
                    { name: "Uber", logo: "https://cdna.iconscout.com/img/uber.314ad21.svg" },
                    { name: "Instacart", logo: "https://cdna.iconscout.com/img/instacart.d64c895.svg" },
                    { name: "Grab", logo: "https://cdna.iconscout.com/img/grab.8b04447.svg" },
                    { name: "CRED", logo: "https://cdna.iconscout.com/img/cred.4c8da61.svg" }
                ],
                secondRowBrands: [
                    { name: "Netflix", logo: "https://cdna.iconscout.com/img/netflix.41650dc.svg" },
                    { name: "TikTok", logo: "https://cdna.iconscout.com/img/tiktok.1995b11.svg" },
                    { name: "Microsoft", logo: "https://cdna.iconscout.com/img/microsoft.c051f44.svg" },
                    { name: "Airbnb", logo: "https://cdna.iconscout.com/img/airbnb.69a8173.svg" },
                    { name: "Spotify", logo: "https://cdna.iconscout.com/img/spotify.f536f34.svg" }
                ]
            };
        }
    };
</script>

<style scoped>
    .trusted-brands {
        position: relative;
        top: -70px;
        background-color: #ffffff;
    }

    .no-gutters {
        margin-right: 0;
        margin-left: 0;
    }

    .no-gutters>[class*="col-"] {
        padding-right: 5px;
        padding-left: 5px;
    }

    .logo-container {
        width: 110px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .brand-logo {
        width: auto;
        height: auto;
        max-height: 35px;
        max-width: 100px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        .logo-container {
            width: 90px;
            height: 35px;
        }

        .brand-logo {
            max-height: 25px;
            max-width: 80px;
        }
    }
</style>