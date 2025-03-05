<template>
    <div>
        <section class="hero bg-primary text-white text-center py-5">
            <div class="container-fluid">
                <div v-if="isVisible" class="notification-banner d-flex align-items-center justify-content-between">
                    <div>
                        <span class="icon">✨</span>
                        <span class="text">Explore the Power of AI! Instantly generate customizable Illustrations. Try
                            AI Illustration Generator.</span>
                    </div>
                    <button class="close-btn" @click="closeBanner">
                        <i class="uil uil-times"></i>
                    </button>
                </div>

                <h1 class="display-4 font-weight-bold heading">Over 10.6 Million+ Design Assets</h1>
                <div class="text-white o75 mx-auto d-sm-block d-none sub-heading">Curated SVGs, Vector Icons,
                    Illustrations, 3D Graphics, and Lottie Animations.<br> Over 10,000+ new assets added every day.
                    Integrated plugins, tools, editors, and more.
                </div>
                <!-- Search Bar -->
                <div class="search-container">
                    <div class="input-group">
                        <!-- Dropdown Button -->
                        <div class="dropdown">
                            <button class="btn dropdown-btn dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                {{ selectedOption }}
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" v-for="option in assetOptions" :key="option.value"
                                    :to="generateLinkPath(option.value)" @click="selectAsset(option.label)">
                                    {{ option.label }}
                                </a>
                            </div>
                        </div>

                        <!-- Search Input -->
                        <input type="text" class="form-control search-input"
                            placeholder="Search from 10,617,785 Design Assets">

                        <!-- Search Icons -->
                        <div class="input-group-append">
                            <button class="btn icon-btn">
                                <i class="uil uil-search search-btn "></i>
                            </button>
                            <button class="btn icon-btn image-search">
                                <i class="uil uil-image-search "></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-3 trending-keyword">
                    <strong class="trending">Trending:</strong>
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a href="/all-assets/business"
                                class="text-white font-weight-semi-bold">Business</a></li>
                        <li class="list-inline-item"><a href="/all-assets/finance"
                                class="text-white font-weight-semi-bold">Finance</a></li>
                        <li class="list-inline-item"><a href="/all-assets/technology"
                                class="text-white font-weight-semi-bold">Technology</a></li>
                        <li class="list-inline-item"><a href="/all-assets/growth"
                                class="text-white font-weight-semi-bold">Growth</a></li>
                        <li class="list-inline-item"><a href="/all-assets/data"
                                class="text-white font-weight-semi-bold">Data</a></li>
                        <li class="list-inline-item"><a href="/all-assets/work"
                                class="text-white font-weight-semi-bold">Work</a></li>
                        <li class="list-inline-item"><a href="/all-assets/chart"
                                class="text-white font-weight-semi-bold">Chart</a></li>
                        <li class="list-inline-item"><a href="/all-assets/businessman"
                                class="text-white font-weight-semi-bold">Businessman</a></li>
                        <li class="list-inline-item"><a href="/all-assets/investment"
                                class="text-white font-weight-semi-bold">Investment</a></li>
                        <li class="list-inline-item"><a href="/all-assets/money"
                                class="text-white font-weight-semi-bold">Money</a></li>
                    </ul>
                </div>

            </div>
        </section>

        <!-- Asset Cards Section -->
        <section class="mt-5">
            <div class="row gap">
                <div class="col-auto">
                    <div class="card shadow" style="background-color: #DAF5EF;">
                        <div class="card-body">
                            <h5 class="card-title">3D Illustrations</h5>
                            <p>503,000+ 3D Assets with source files</p>
                        </div>
                        <img src="@/assets/images/3d-hero-card.webp" alt="hero card"
                            class="hero-card-image threed-illustration-card">
                    </div>
                </div>

                <div class="col-auto">
                    <div class="card shadow" style="background-color:#FFFDCF;">
                        <div class="card-body">
                            <h5 class="card-title">Lottie Animations</h5>
                            <p>549,000+ Free & Premium Lottie Animations</p>
                        </div>
                        <img src="@/assets/images/3d-hero-card.webp" alt="hero card"
                            class="hero-card-image lottie-card">
                    </div>
                </div>

                <div class="col-auto">
                    <div class="card shadow" style="background-color:#E9F8FE;">
                        <div class="card-body">
                            <h5 class="card-title">Illustrations</h5>
                            <p>522,000+ Vector Illustrations, Color editor</p>
                        </div>
                        <img src="@/assets/images/illustration-hero-card.webp" alt="hero card"
                            class="hero-card-image illustration-card">
                    </div>
                </div>

                <div class="col-auto">
                    <div class="card shadow" style="background-color:#FED4FF;">
                        <div class="card-body">
                            <h5 class="card-title">Vector Icons</h5>
                            <p>9 Million+ Vector Icons, Color editor</p>
                        </div>
                        <img src="@/assets/images/icons-hero-card.webp" alt="hero card"
                            class="hero-card-image icon-card">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: true,
                searchQuery: this.$route.params.slug || '',
                selectedOption: this.$route.params.asset || 'All Assets',
                slug: '',
                assetOptions: [
                    { label: 'All Assets', value: 'all-assets' },
                    { label: '3D Illustrations', value: '3d-illustrations' },
                    { label: 'Lottie Animations', value: 'lottie-animations' },
                    { label: 'Illustrations', value: 'illustrations' },
                    { label: 'Icons', value: 'icons' },
                ]
            }
        },
        methods: {
            closeBanner() {
                this.isVisible = !this.isVisible;
                // this.isVisible = false;
            },
            handleSearch() {
                if (!this.searchQuery.trim()) return
                const asset = this.toSlug(this.selectedOption)
                this.$router.push(`/${asset}/${this.searchQuery.trim()}`)
            },
            selectAsset(option) {
                this.selectedOption = option;
                const asset = this.toSlug(option);
                this.$router.push(`/${asset}`);
            },
            generateLinkPath(assetType) {
                const updatedQuery = { ...this.$route.query };
                delete updatedQuery.styles;

                const queryString = new URLSearchParams(updatedQuery).toString();
                return `/${assetType}${'/' + this.searchQuery}${queryString ? '?' + queryString : ''}`;
            },
            isActive(asset) {
                return this.$route.path.includes(this.toSlug(asset))
            },
            toSlug(text) {
                return text
                    .toLowerCase()
                    .trim()
                    .replace(/[\s\W-]+/g, '-')
                    .replace(/^-+|-+$/g, '');
            },
            updateSelectedOption(asset = this.$route.params.asset) {
                const assetMap = {
                    "3d-illustrations": "3D Illustrations",
                    "lottie-animations": "Lottie Animations",
                    "illustrations": "Illustrations",
                    "icons": "Icons",
                    "all-assets": "All Assets",
                };
                this.selectedOption = assetMap[asset] || "All Assets";
            },
        },
        watch: {
            '$route.params.asset'(newAsset) {
                this.updateSelectedOption(newAsset);
            },
            '$route.params.slug'(newSlug) {
                this.searchQuery = newSlug;
            }
        },
        created() {
            this.updateSelectedOption();
        },
    }
</script>

<style scoped>
    html body {
        font-family: inherit;
        overflow-x: hidden;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
        max-width: 100%;
    }

    .container-fluid {
        padding: 10px 100px;
        max-width: 100%;
        overflow-x: hidden;
    }

    .search-container {
        margin: 0 auto;
        max-width: 871px;
        width: 100%;
        position: relative;
        z-index: 0;
    }

    .notification-banner {
        background-color: #1e88e5;
        color: white;
        font-size: 14px;
        padding: 10px 20px;
        border-radius: 12px;
        display: flex;
        max-width: 100%;
        width: 873px;
        margin: 10px auto;
        color: #F5F6FA;
    }

    .icon {
        margin-right: 10px;
    }

    .heading {
        color: #fff !important;
        font-size: 3rem;
        line-height: 3.625rem;
        letter-spacing: -0.015em;
        margin-bottom: .5rem;
        font-weight: 700;
    }

    .sub-heading {
        opacity: 0.75;
        color: #fff !important;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        padding-bottom: 2rem !important;
    }

    .close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }

    .input-group {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .input-group-prepend .dropdown-btn,
    .input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),
    .input-group-append .image-search,
    .input-group-append .btn {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }

    .input-group>.input-group-append>.btn {
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }

    .dropdown-btn {
        background-color: #f1f3f9;
        color: black;
        font-weight: bold;
        margin: 5px;
        border-radius: 30px;
        padding: 10px 20px;
        border: none;
    }

    .dropdown-menu {
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .search-input {
        border: none;
        font-size: 16px;
        padding-left: 15px;
    }

    .icon-btn {
        border: none;
        border-radius: 30px;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
    }

    .icon-btn i {
        font-size: 18px;
        color: black;
    }

    .image-search {
        background-color: #f1f3f9;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-btn:hover {
        background-color: #f1f3f9;
        border-radius: 30px;
    }

    .hero {
        background: linear-gradient(45deg, #0073c2, #0056b3);
        min-height: 620px;
        z-index: 0;
    }

    .row {
        flex-wrap: wrap;
        justify-content: center;
    }

    .card {
        border-radius: 10px;
        position: relative;
        top: -200px;
        left: auto;
        margin: auto;
        height: 100%;
        width: 100%;
        max-width: 300px;
    }

    .card-body .card-title {
        font-weight: 700;
        color: #000;
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    .card-body p {
        font-size: .875rem;
        line-height: 1.5rem;
        color: #596080;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .hero-card-image {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .threed-illustration-card {
        position: relative;
        bottom: -24.2px;
    }

    .lottie-card,
    .icon-card {
        position: relative;
        bottom: -18.5px;
    }

    .illustration-card {
        position: relative;
        bottom: -24.5px;
    }

    .trending-keyword {
        color: #fff !important;
        font-size: .875rem;
        line-height: 1.5rem;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .trending {
        opacity: 0.6;
        margin-right: 8px;
    }

    .trending-keyword ul {
        padding-left: 0;
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .trending-keyword ul li {
        list-style: none;
    }

    .trending-keyword li:not(:last-child)::after {
        content: ',';
    }
</style>