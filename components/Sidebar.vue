<template>
    <div :class="{ 'scrolled': isScrolled }" class="filter-sidebar-main">
        <div class="filter-sidebar">
            <!-- Toggle Button -->
            <div class="toggle-container">
                <span class="toggle-label">Iconscout Exclusive</span>
                <button class="toggle-btn" @click="isActive = !isActive">
                    <div :class="['toggle-icon', { active: isActive }]"></div>
                </button>
            </div>
            <div class="divider"></div>

            <!-- Dynamic Filters -->
            <div v-for="(filter, key) in visibleFilters" :key="key" class="filter-section">
                <div class="filter">
                    <div class="filter-header" @click="toggleDropdown(key)">
                        <span class="filter-title">{{ filter.label }}</span>
                        <img src="@/assets/images/Down arrow.png" alt="arrow" class="arrow"
                            :class="{ 'rotate-up': filter.isOpen }" />
                    </div>

                    <b-collapse :visible="filter.isOpen">
                        <b-form-group>
                            <b-form-checkbox-group v-if="filter.label === 'Style'" v-model="filter.selected"
                                :options="filter.options" name="checkbox-group[]" stacked class="radio-spacing"
                                @change="value => handleFilterChange(key, value)" />

                            <b-form-radio-group v-else v-model="filter.selected" :options="filter.options"
                                :name="`radio-group-${key}`" stacked class="radio-spacing"
                                @change="value => handleFilterChange(key, value)" />
                        </b-form-group>
                    </b-collapse>
                </div>
                <div class="divider"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const assetMap = {
                "3d-illustrations": "3d",
                "lottie-animations": "lottie",
                "illustrations": "illustration",
                "icons": "icon",
                "all-assets": "all",
            };

            const asset = assetMap[this.$route.params.asset] || "all";
            return {
                isActive: false,
                isScrolled: false,
                isFooterVisible: false,
                filters: {
                    asset: {
                        label: "Asset",
                        isOpen: true,
                        selected: asset,
                        options: [
                            { text: "All asset", value: "all" },
                            { text: "3D Illustrations", value: "3d" },
                            { text: "Lottie Animations", value: "lottie" },
                            { text: "Illustrations", value: "illustration" },
                            { text: "Icons", value: "icon" },
                        ],
                    },
                    price: {
                        label: "Price",
                        isOpen: true,
                        selected: this.$route.query.price || "all",
                        options: [
                            { text: "Free", value: "free" },
                            { text: "Premium", value: "premium" },
                            { text: "All", value: "all" },
                        ],
                    },
                    styles: {
                        label: "Style",
                        isOpen: true,
                        selected: this.$route.query.styles,
                        options: [
                            { text: "Flat", value: "flat" },
                            { text: "Line", value: "line" },
                            { text: "Sticker", value: "sticker" },
                            { text: "Colored-outline", value: "colored-outline" },
                            { text: "Glyph", value: "glyph" },
                            { text: "Isometric", value: "isometric" },
                            { text: "Doodle", value: "doodle" },
                            { text: "Gradient", value: "gradient" },
                            { text: "Dualtone", value: "dualtone" },
                            { text: "Rounded", value: "rounded" },
                        ],
                    },
                    view: {
                        label: "View",
                        isOpen: true,
                        selected: this.$route.query.view || "pack",
                        options: [
                            { text: "Pack", value: "pack" },
                            { text: "Individual", value: "individual" },
                        ],
                    },
                    sort: {
                        label: "Sort By",
                        isOpen: true,
                        selected: this.$route.query.sort || "relevant",
                        options: [
                            { text: "Popular", value: "popular" },
                            { text: "Latest", value: "latest" },
                            { text: "Color", value: "color" },
                            { text: "Relevant", value: "relevant" },
                            { text: "All", value: "all" },
                        ],
                    },
                    category: {
                        label: "Category",
                        isOpen: true,
                        selected: this.$route.query.asset || "popular",
                        options: [
                            { text: "Popular", value: "popular" },
                            { text: "Latest", value: "latest" },
                            { text: "Featured", value: "featured" },
                        ],
                    },
                },
            };
        },

        computed: {
            isIconCategory() {
                return this.$route.params.asset === 'icons';
            },
            visibleFilters() {
                const result = {};
                for (const [key, filter] of Object.entries(this.filters)) {
                    if (
                        (key !== 'styles' || this.isIconCategory)
                        && (key !== 'view' && key !== 'sort' || !this.isIconCategory)
                    ) {
                        result[key] = filter;
                    }
                }
                return result;
            },
            sidebarClasses() {
                return {
                    'scrolled': this.isScrolled && !this.isFooterVisible
                };
            }
        },
        methods: {
            toggleDropdown(key) {
                this.$set(this.filters[key], "isOpen", !this.filters[key].isOpen);
            },
            handleFilterChange(key, selectedValue) {
                const assetTypeMap = {
                    "all": "all-assets",
                    "3d": "3d-illustrations",
                    "lottie": "lottie-animations",
                    "illustration": "illustrations",
                    "icon": "icons",
                };

                const assetRoute = key === 'asset'
                    ? assetTypeMap[selectedValue] || 'all-assets'
                    : this.$route.params.asset || 'all-assets';

                const slug = this.$route.params.slug || '';
                const updatedQuery = { ...this.$route.query };
                if (key === 'asset') {
                    delete updatedQuery.styles;
                }

                if (key === 'styles') {
                    updatedQuery[key] = Array.isArray(selectedValue) ? selectedValue : [selectedValue];
                } else if (key !== 'asset') {
                    updatedQuery[key] = selectedValue;
                }

                this.$router.push({
                    path: `/${assetRoute}/${slug}`,
                    query: updatedQuery
                });
            },
            handleScroll() {
                const filterSidebar = document.querySelector(".filter-sidebar");
                if (!filterSidebar) return;

                const filterTop = filterSidebar.offsetTop;
                const scrollTop = window.scrollY;

                this.isScrolled = scrollTop > filterTop;
                this.checkFooterVisibility();
            },
            checkFooterVisibility() {
                const footer = document.querySelector("footer");
                const filterSidebar = document.querySelector(".filter-sidebar");
                const scrolled = document.querySelector(".scrolled");

                if (!scrolled) {
                    if (filterSidebar) {
                        filterSidebar.style.position = "";
                    }
                    return;
                }

                if (!footer || !filterSidebar) return;

                const footerRect = footer.getBoundingClientRect();
                const isFooterVisible = footerRect.top < window.innerHeight;

                if (isFooterVisible) {
                    filterSidebar.style.position = "absolute";
                    filterSidebar.style.bottom = "0";
                } else {
                    filterSidebar.style.position = "fixed";
                    filterSidebar.style.bottom = "auto";
                }
            }
        },
        mounted() {
            const filterSidebar = document.querySelector(".filter-sidebar");
            if (filterSidebar) {
                this.sidebarTop = filterSidebar.offsetTop;
            }
            window.addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    };
</script>

<style scoped>
    .filter-sidebar {
        position: absolute;
        width: 260px;
        height: 1160px;
        left: 0;
        top: 261px;
        border-right: 1px solid #ebedf5;
        padding: 12px 24px;
    }

    /* Toggle */
    .toggle-container {
        /* display: flex; */
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 21px 0;
    }

    .toggle-label {
        font-size: 14px;
        font-weight: 600;
        line-height: 17.3px;
        text-align: left;
        width: 128px;
        height: 17px;
    }

    .toggle-btn {
        width: 40px;
        height: 22px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .toggle-icon {
        width: 40px;
        height: 20px;
        background: #dcdce6;
        border-radius: 12px;
        position: relative;
        transition: background 0.3s;
    }

    .toggle-icon::before {
        content: "";
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 3px;
        transform: translateY(-50%);
        transition: 0.3s;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .toggle-icon.active {
        background: #000;
    }

    .toggle-icon.active::before {
        left: 20px;
    }

    /* Filter Sections */
    .filter-section {
        width: 100%;
    }

    .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 17.3px;
        text-align: left;
        padding: 20px 0px 15px 0px;
    }

    .arrow {
        z-index: 1;
        transition: transform 0.3s;
        width: 24px;
        height: 24px;
    }

    .rotate-up {
        transform: rotate(180deg);
    }

    .divider {
        position: relative;
        left: -25px;
        width: 260px !important;
        border-bottom: 1px solid #b4bad6;
    }

    /* Radio Buttons */
    .radio-spacing {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 20px;
    }

    @media (max-width: 991.98px) {
        .filter-sidebar-main {
            display: none;
        }

        .text-set {
            left: 24px;
        }
    }

    .scrolled .filter-sidebar {
        position: fixed;
        top: 125px;
        left: 0;
        height: calc(100vh - 125px);
        background: #fff;
        z-index: 1000;
        overflow-x: hidden;
        overflow-y: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none;
    }

    .scrolled .filter-sidebar::-webkit-scrollbar {
        display: none;
    }

    .footer-visible .filter-sidebar {
        position: relative;
        top: -261px;
    }
</style>