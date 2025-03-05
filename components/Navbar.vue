<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">

        <!-- Mobile Menu -->
        <div class="mobile-menu collapse navbar-collapse" id="mobileMenu">
            <div class="navbar-nav">
                <div class="mobile-section">
                    <NuxtLink v-for="option in assetOptions" :key="option.value" class="mobile-nav-link"
                        :to="generateLinkPath(option.value)" :class="{ 'active': isActive(option.value) }">
                        {{ option.label }}
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="container-fluid nav-class">
            <!-- Logo and Search Section -->
            <div class="d-flex align-items-center nav-left">
                <!-- Logo -->
                <nuxt-link class="navbar-brand mr-3" to="/">
                    <img src="@/assets/images/IconScout - Colour Logo.png" alt="IconScout Logo" class="brand-logo">
                </nuxt-link>

                <!-- Mobile Header -->
                <div class="d-flex align-items-center d-lg-none">
                    <img src="@/assets/svg/account.svg" alt="Account Logo" class="account-logo mr-2" />
                </div>

                <!-- Search Bar with Dropdown -->
                <div class="search-wrapper d-none d-lg-flex align-items-center">
                    <div class="dropdown mr-2">
                        <button class="btn dropdown-toggle asset-btn" type="button" data-toggle="dropdown">
                            {{ selectedOption }}
                        </button>
                        <div class="dropdown-menu">
                            <NuxtLink v-for="option in assetOptions" :key="option.value" class="dropdown-item"
                                :to="generateLinkPath(option.value)" @click.prevent="selectAsset(option.label)">
                                {{ option.label }}
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="vertical mx-2"></div>
                    <div class="search-bar d-flex align-items-center">
                        <button @click="handleSearch" class="additional-icon-btn">
                            <i class="uil uil-search search-btn "></i>
                        </button>
                        <input type="search" class="form-control" placeholder="Search from 8 Million+ assets"
                            v-model="searchQuery" @keyup.enter="handleSearch">
                        <img src="@/assets/images/Reverse image search icon.png" alt="Reverse search"
                            class="reverse-image-icon" />
                    </div>
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="nav-center d-none d-lg-flex">
                <!-- Explore Dropdown -->
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                        Explore
                    </a>
                    <div class="dropdown-menu">
                        <nuxt-link class="dropdown-item" to="/features">Features</nuxt-link>
                        <nuxt-link class="dropdown-item" to="/categories">Categories</nuxt-link>
                    </div>
                </div>

                <!-- Tools Dropdown -->
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                        Tools
                    </a>
                    <div class="dropdown-menu">
                        <nuxt-link class="dropdown-item" to="/design-tools">Design Tools</nuxt-link>
                        <nuxt-link class="dropdown-item" to="/developer-tools">Developer Tools</nuxt-link>
                    </div>
                </div>

                <div class="nav-item">
                    <nuxt-link class="nav-link" to="/features">All Features</nuxt-link>
                </div>

                <div class="nav-item">
                    <nuxt-link class="nav-link d-flex align-items-center" to="/free-assets">
                        <img src="@/assets/images/gift.png" alt="Gift" class="gift-icon mr-1">
                        Free Asset
                    </nuxt-link>
                </div>

                <!-- Learn Dropdown -->
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                        Learn
                    </a>
                    <div class="dropdown-menu">
                        <nuxt-link class="dropdown-item" to="/tutorials">Tutorials</nuxt-link>
                        <nuxt-link class="dropdown-item" to="/docs">Documentation</nuxt-link>
                    </div>
                </div>
            </div>

            <!-- Auth Buttons -->
            <div class="nav-right d-none d-lg-flex">
                <nuxt-link to="/login" class="btn btn-login mr-2">Login</nuxt-link>
                <nuxt-link to="/signup" class="btn btn-signup">Signup</nuxt-link>
            </div>

            <!-- Mobile Menu Button -->
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#mobileMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
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
            }
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
    .nav-class {
        padding: 12px 24px;
    }

    .navbar {
        padding: 8px 16px;
        border-bottom: 1px solid #eaeaea;
    }

    .nav-left {
        flex: 0 0 auto;
    }

    .nav-center {
        display: flex;
        align-items: center;
        margin: 0 2rem;
    }

    .account-logo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: fixed;
        right: 20px;
    }

    .nav-right {
        margin-left: auto;
    }

    .brand-logo {
        width: 170px;
        height: 32.88px;
    }

    .search-wrapper {
        background-color: #f8f9fa;
        width: 460px;
        height: 46px;
        padding-top: 8px;
        padding-right: 10px;
        padding-bottom: 8px;
        padding-left: 10px;
        gap: 8px;
        border-radius: 8px;
    }

    .asset-btn {
        color: #666;
        font-size: 0.9rem;
        padding: 0.375rem 0.75rem;
        background: transparent;
        border: none;
    }

    .search-bar {
        position: relative;
        width: 300px;
        left: -5px;
        height: 46px;
    }

    .search-bar .form-control {
        padding-right: 2rem;
        border: none;
        background: transparent;
    }

    .vertical {
        width: 1px;
        height: 28px;
        background-color: #d1d5db;
        position: relative;
        left: -13px;
    }

    .search-icon {
        position: relative;
        left: -12px;
        top: 13px;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

    .additional-icon-btn {
        border: none;
        background: transparent;
    }

    .reverse-image-icon {
        position: relative;
        left: 8px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .nav-link {
        color: #444;
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        white-space: nowrap;
    }

    .gift-icon {
        width: 16px;
        height: 16px;
    }

    .btn-login {
        color: #666;
        background: transparent;
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 0.375rem 1rem;
    }

    .btn-signup {
        color: white;
        background: #0092e4;
        border: none;
        border-radius: 20px;
        padding: 0.375rem 1rem;
    }

    /* Mobile Menu Styles */
    .mobile-menu {
        display: none;
    }

    .mobile-section {
        padding: 1rem;
        border-bottom: 1px solid #eaeaea;
    }

    .mobile-section:last-child {
        border-bottom: none;
    }

    .mobile-nav-link {
        display: block;
        color: #444;
        font-size: 1rem;
        padding: 0.5rem 0;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .mobile-nav-link:hover,
    .mobile-nav-link.active {
        color: #0092e4;
    }

    @media (max-width: 991.98px) {
        .mobile-menu {
            display: block;
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: white;
            overflow-y: auto;
            z-index: 1030;
            transition: all 0.3s ease;
        }

        .mobile-menu.collapse:not(.show) {
            display: none;
        }

        .mobile-menu.show {
            display: block;
        }

        .d-lg-none .account-logo {
            margin-left: auto;
            display: flex;
            align-items: center;
        }

        .search-wrapper {
            width: 100%;
            margin: 1rem 0;
        }

        .navbar-toggler {
            margin-left: 0;
            display: flex;
            align-items: center;
            order: 2;
            position: fixed;
            left: 20px;
        }

        .search-bar {
            width: 100%;
        }

        .brand-logo {
            position: relative;
            left: 45px;
        }
    }

    /* Explicitly hide on larger screens */
    @media (min-width: 992px) {

        .mobile-menu,
        .mobile-menu.show,
        .mobile-menu.collapsing {
            display: none !important;
        }
    }
</style>