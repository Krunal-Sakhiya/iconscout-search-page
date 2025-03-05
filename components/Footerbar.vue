<template>
    <footer class="footer bg-light">
        <div class="container footer-layout">
            <!-- IconScout Bar -->
            <div class="row align-items-center py-4">
                <div class="col-12 col-lg-8">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/images/IconScout - Colour Logo.png" alt="IconScout" class="logo img-fluid" />
                        <span class="text-muted font-size-graphic-resources ml-2">Design Resource Marketplace</span>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="resources-count">
                        <span class="text-primary font-size-graphic-resources">5,663,871</span>
                        <span class="text-muted font-size-graphic-resources ml-2">graphic resources & counting</span>
                    </div>
                </div>
            </div>

            <hr class="w-100" />

            <div class="row py-4">
                <!-- Company Details -->
                <div v-for="(section, index) in sections" :key="index" class="col-6 col-md-3 col-lg-2 mb-4">
                    <h6 class="font-size font-weight-bold">
                        {{ section.title }}
                    </h6>
                    <ul class="list-unstyled font-size">
                        <li v-for="(item, idx) in section.items" :key="idx" class="mb-2">
                            <a href="#" class="text-muted company-details-link">{{ item }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Right Side Content -->
                <div class="col-12 col-lg-4 right-content">
                    <!-- Desktop Apps -->
                    <div class="mb-4">
                        <h6 class="font-size font-weight-bold">
                            Get IconScout for Desktop
                        </h6>
                        <div class="d-flex desktop-buttons">
                            <a href="#" class="social-box social-box-start"><i class="uil uil-apple"></i></a>
                            <a href="#" class="social-box social-box-end"><i class="uil uil-windows"></i></a>
                        </div>
                    </div>

                    <!-- Mobile Apps -->
                    <div class="mb-4">
                        <h6 class="font-size font-weight-bold">
                            Get LottieFiles Mobile App
                        </h6>
                        <div class="d-flex store-buttons">
                            <img src="@/assets/images/App Store Button.png" alt="App Store" class="app-btn" />
                            <img src="@/assets/images/Play Store Button.png" alt="Play Store" class="app-btn ml-2" />
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div>
                        <h6 class="font-size font-weight-bold">Follow Us</h6>
                        <div class="d-flex social-buttons">
                            <a href="#" class="social-box social-box-start"><i class="uil uil-facebook"></i></a>
                            <a href="#" class="social-box social-box-start"><i class="uil uil-instagram"></i></a>
                            <a href="#" class="social-box social-box-start"><i class="uil uil-twitter"></i></a>
                            <a href="#" class="social-box social-box-start"><i class="uil uil-linkedin"></i></a>
                            <a href="#" class="social-box social-box-end"><i class="uil uil-dribbble"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer End -->
        <div class="footer-end">
            <div class="container footer-layout">
                <div class="row align-items-center py-4">
                    <div class="col-12 col-lg-6">
                        <p class="text-muted mb-0">
                            <i class="uil uil-copyright" style="width: 16px;height: 14px;"></i> 2021 Design Barn Inc.
                            Made with <i class="uil uil-heart" style="width: 16px;height: 14px;"></i> in {{
                                currentCountry }}
                        </p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="secure-payment">
                            <i class="uil uil-lock" style="width: 24px;height: 24px;"></i>
                            <span class="text-muted mx-2">Secure Payments</span>
                            <img src="@/assets/svg/stripe.svg" alt="stripe" class="stripe-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                sections: [
                    {
                        title: "Graphic Resources",
                        items: [
                            "Free Icons",
                            "Free Emoji Icons",
                            "Free Logo Icons",
                            "iOS Icons",
                            "Sticker Icons",
                            "Gradient Icons",
                            "Curated Bundle",
                            "Calendar of Festival",
                            "Free Assets of the day",
                            "Explore Design Assets",
                        ],
                    },
                    {
                        title: "Products",
                        items: [
                            "Unicon Icon Font",
                            "Color editor",
                            "Apps & Plugins",
                            "Hire designers",
                            "IconScout API",
                            "Top Illustrations",
                            "Top 3D Assets",
                            "Reverse Image Search",
                            "Unicon Plugin for Figma",
                        ],
                    },
                    {
                        title: "Company",
                        items: [
                            "Blog",
                            "About",
                            "Access features",
                            "Sell on IconScout",
                            "Startup program",
                            "We're hiring",
                        ],
                    },
                    {
                        title: "Legal",
                        items: [
                            "Terms of use",
                            "Privacy policy",
                            "License agreement",
                            "Contributor terms",
                            "Support center",
                            "Join discord community",
                        ],
                    },
                ],
                countries: [
                    "India",
                    "USA",
                    "UK",
                    "Canada",
                    "Germany",
                    "Australia",
                    "France",
                    "Japan",
                ],
                currentCountry: "India",
                intervalId: null,
            };
        },
        mounted() {
            this.intervalId = setInterval(this.changeCountry, 2000);
        },
        methods: {
            changeCountry() {
                this.currentCountry =
                    this.countries[Math.floor(Math.random() * this.countries.length)];
            },
        },
        beforeUnmount() {
            clearInterval(this.intervalId);
        },
    };
</script>

<style scoped>
    .footer {
        width: 100%;
        background: #fff;
        border-top: 1px solid #eee;
    }

    .footer-end {
        background-color: #dfe3ee;
    }

    .logo {
        max-width: 185px;
        height: auto;
    }

    .resources-count {
        display: flex;
        justify-content: flex-end;
        gap: 5px;
    }

    .right-content {
        position: relative;
        left: 70px;
    }

    .desktop-buttons,
    .store-buttons,
    .social-buttons {
        display: flex;
    }

    .app-btn {
        width: 130px;
        height: 40px;
    }

    .social-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        color: #3b4252;
        background-color: #f8f9fa;
        transition: 0.3s;
    }

    .social-box-start {
        border-top: 1px solid #cfd3dc;
        border-bottom: 1px solid #cfd3dc;
        border-left: 1px solid #cfd3dc;
    }

    .social-box-end {
        border: 1px solid #cfd3dc;
    }

    .social-box:hover {
        background-color: #e2e6ea;
    }

    .stripe-logo {
        width: 80px;
        height: auto;
    }

    .secure-payment {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .font-size-graphic-resources {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: -0.02em;
    }

    .font-size {
        font-size: 14px;
        line-height: 24px;
    }

    .company-details-link:hover {
        text-decoration: none;
    }

    @media (max-width: 991px) {

        .resources-count,
        .secure-payment {
            justify-content: center;
            margin-top: 1rem;
        }

        .right-content {
            margin-left: 0;
            text-align: center;
        }

        .desktop-buttons,
        .store-buttons,
        .social-buttons {
            justify-content: center;
        }

        .footer-end p {
            text-align: center;
        }
    }

    @media (max-width: 576px) {
        .app-btn {
            width: 120px;
        }

        .social-box {
            width: 35px;
            height: 35px;
        }
    }
</style>
