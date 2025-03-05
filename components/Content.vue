<template>
    <div :class="{ 'scrolled': isScrolled }" class="bg-light content-layout container-fluid">
        <!-- Header Section -->
        <div class="row">
            <div class="col-12 text-start mt-4 px-5">
                <h2 class="fw-bold fs-4">237 Limit 3D Illustrations</h2>
                <p class="text-muted">248 3Ds exclusively selected by our designer community.</p>
            </div>
        </div>

        <div class="scrollbar-header-content">
            <!-- Filter Controls -->
            <div class="d-flex align-items-center justify-content-left filter-header">
                <div class="d-flex align-items-center gap-8">
                    <i class="uil uil-sliders-v-alt big-icon"></i>
                    <h6 class="filters mb-0" @click="toggleSidebar">Filters</h6>
                </div>
                <i v-if="!sidebarHidden" class="uil uil-times close-btn" @click="toggleSidebar"></i>
            </div>

            <!-- Navigation Links -->
            <nav class="nav justify-content-start navigation-link" :class="{ 'sidebar-open': sidebarHidden }">
                <NuxtLink v-for="link in links" :key="link.asset" class="nav-link" :to="generateLinkPath(link.asset)"
                    :class="{ 'nav-link-active': isActive(link.asset) }">
                    {{ link.label }}
                </NuxtLink>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sidebarHidden: false,
                isScrolled: false,
                asset: '',
                slug: '',
                links: [
                    { label: "All Assets", asset: "all-assets" },
                    { label: "3D Illustrations", asset: "3d-illustrations" },
                    { label: "Lottie Animations", asset: "lottie-animations" },
                    { label: "Illustrations", asset: "illustrations" },
                    { label: "Icons", asset: "icons" }
                ]
            };
        },
        methods: {
            handleScroll() {
                const scrollbarHeaderContent = document.querySelector(".scrollbar-header-content");
                if (!scrollbarHeaderContent) return;

                const contentRect = scrollbarHeaderContent.getBoundingClientRect();
                this.isScrolled = window.scrollY > contentRect.top;

                this.checkFooterVisibility();
            },
            checkFooterVisibility() {
                const footer = document.querySelector("footer");
                const filterHeader = document.querySelector(".filter-header");
                const navigationLink = document.querySelector(".navigation-link");
                const scrolled = document.querySelector(".scrolled");

                if (!scrolled) {
                    if (filterHeader) filterHeader.style.position = "";
                    if (navigationLink) navigationLink.style.position = "";
                    return;
                }

                if (!footer || !filterHeader || !navigationLink) return;

                const rect = footer.getBoundingClientRect();
                const isFooterVisible = rect.top < window.innerHeight;

                if (isFooterVisible) {
                    filterHeader.style.position = "relative";
                    navigationLink.style.position = "relative";
                } else {
                    filterHeader.style.position = "fixed";
                    navigationLink.style.position = "fixed";
                }
            },
            isActive(assetType) {
                return this.asset === assetType;
            },
            generateLinkPath(assetType) {
                const updatedQuery = { ...this.$route.query };
                delete updatedQuery.styles;
                delete updatedQuery.page;

                const queryString = Object.keys(updatedQuery).length
                    ? '?' + new URLSearchParams(updatedQuery).toString()
                    : '';

                return `/${assetType}${this.slug ? '/' + this.slug : ''}${queryString}`;
            },
            toggleSidebar() {
                this.sidebarHidden = !this.sidebarHidden;
                this.$nextTick(() => {
                    this.applySidebarStyles();
                });
            },
            applySidebarStyles() {
                this.$nextTick(() => {
                    const sidebar = document.querySelector(".filter-sidebar");
                    if (sidebar) {
                        sidebar.style.display = this.sidebarHidden ? "none" : "block";
                    }

                    const containerFluidAll = document.querySelectorAll(".search-page .container-fluid");
                    containerFluidAll.forEach(container => {
                        container.style.width = this.sidebarHidden ? "100%" : "calc(100% - 260px)";
                        container.style.marginLeft = this.sidebarHidden ? "0" : "260px";
                        // container.style.marginLeft = this.sidebarHidden ? "0" : "260px";
                        // containerFluid.style.overflow = 'hidden';
                    });

                    const textSetAll = document.querySelectorAll('.text-set');
                    textSetAll.forEach(textSet => {
                        textSet.style.left = this.sidebarHidden ? "24px" : "305px";
                    });

                    const horizontalScrollContainer = document.querySelector('.horizontal-scroll-container');
                    if (horizontalScrollContainer) {
                        horizontalScrollContainer.style.left = this.sidebarHidden ? "0" : "290px";
                        horizontalScrollContainer.style.width = this.sidebarHidden ? "100%" : "calc(100% - 290px)";
                    }

                    const closeBtn = document.querySelector('.close-btn');
                    if (closeBtn) {
                        closeBtn.style.display = this.sidebarHidden ? "none" : "block";
                    }
                });
            },
            updateRouteParams() {
                this.asset = this.$route.params.asset || "all-assets";
                this.slug = this.$route.params.slug || "";
            }
        },
        watch: {
            '$route.params': {
                handler() {
                    this.updateRouteParams();
                },
                deep: true,
                immediate: true
            }
        },
        created() {
            this.updateRouteParams();
        },
        mounted() {
            setTimeout(() => {
                this.applySidebarStyles();
            }, 100);
            window.addEventListener("scroll", this.handleScroll);
            this.checkFooterVisibility();
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    };
</script>

<style scoped>
    .content-layout {
        height: 174px;
        border-bottom: 1px solid #b4bad6;
        overflow: hidden;
        margin-top: 24px;
    }

    .nav-link {
        color: rgba(47, 114, 188, 1);
        font-size: 16px;
        font-weight: 500;
        transition: color 0.3s;
    }

    .nav-link-active {
        color: #000;
        border-bottom: 2px solid #000;
        padding-bottom: 4px;
    }

    .navigation-link {
        position: relative;
        left: 290px;
        top: -37.5px;
    }

    .sidebar-open {
        position: relative;
        left: 120px;
        top: -33.5px;
    }

    .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 220px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 17.3px;
        text-align: left;
        padding: 20px 0px 12px 10px;
        position: relative;
        top: 7px;
        gap: 8px;
    }

    .gap-8 {
        gap: 8px;
    }

    .big-icon {
        font-size: 24px;
    }

    .filters {
        font-size: 16px;
        font-weight: 600;
    }

    .close-btn {
        font-size: 28px;
        cursor: pointer;
        color: #2f2f3b;
    }

    .close-btn:hover {
        color: #000;
    }

    @media (max-width: 991.98px) {
        .content-layout {
            display: none;
        }
    }

    .scrolled .filter-header {
        position: fixed;
        top: 86px;
        left: 0;
        width: 290px;
        height: 50px;
        background: rgba(250, 250, 252, 1);
        z-index: 1050;
        padding: 20px 24px;
        border-bottom: 1px solid #b4bad6;
    }

    .scrolled .sidebar-open {
        position: relative;
        left: 120px !important;
        top: -37.5px;
    }

    .scrolled .close-btn {
        position: relative;
        left: -35px;
    }

    .scrolled .navigation-link {
        position: fixed;
        top: 86px;
        left: 290px;
        width: calc(100% - 290px);
        height: 50px;
        background: rgba(250, 250, 252, 1);
        z-index: 1050;
        padding: 10px 10px;
        border-bottom: 1px solid #b4bad6;
    }

    body {
        margin: 0;
        padding: 0;
    }

</style>
