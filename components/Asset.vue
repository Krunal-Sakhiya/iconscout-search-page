<template>
    <div class="search-page">
        <div class="container-fluid">
            <!-- Loading state grid Skeleton View -->
            <div v-if="$fetchState.pending" class="grid-container" :class="{
                'grid-container-icon': assetData === 'icon',
            }">
                <div v-for="n in perPage" :key="n" class="grid-item">
                    <div class="skeleton" :class="{
                        'skeleton-icon': assetData === 'icon',
                        'skeleton-illustration': assetData === 'illustration' || assetData === 'lottie' || assetData === '3d'
                    }">
                        <!-- <div class="skeleton-animation"></div> -->
                    </div>
                </div>
            </div>

            <!-- Loaded content grid -->
            <div v-else class="grid-container" :class="{
                'grid-container-icon': displayedItems.length > 0 && displayedItems[0]?.asset === 'icon'
            }">
                <div v-for="(item, index) in displayedItems" :key="index" class="grid-item" :class="{
                    'grid-item-lottie': item.asset === 'lottie'
                }">
                    <!-- Last item with View More overlay -->
                    <div v-if="index === displayedItems.length - 1 && !page" class="grid-item-content">
                        <NuxtLink :to="convertToUrl(asset, slug)" target="_blank" class="view-more-link">
                            <div class="item-content-wrapper">
                                <img v-if="item.asset === 'icon'" :src="item.urls?.png_256" alt="View more icons"
                                    class="img-fluid icons" loading="lazy" height="140" width="140" />
                                <video v-else-if="item.asset === 'lottie'" height="210" width="280"
                                    :src="item.urls?.thumb" class="animations" autoplay loop muted playsinline></video>
                                <img v-else :src="item.urls?.thumb" alt="View more items" class="illustrations"
                                    loading="lazy" height="210" width="280" />
                            </div>

                            <!-- View More Overlay -->
                            <div class="view-more-overlay">
                                <span class="view-more-text" :class="{
                                    'view-more-text-icon': item.asset === 'icon'
                                }">View more</span>
                                <i class="uil uil-arrow-up-right view-more-arrow" :class="{
                                    'view-more-arrow-icon': item.asset === 'icon'
                                }"></i>
                            </div>
                        </NuxtLink>
                    </div>

                    <!-- Regular item -->
                    <div v-else class="grid-item-hover">
                        <NuxtLink :to="`/${item.slug}`" class="item-link">
                            <div class="item-content-wrapper">
                                <img v-if="item.asset === 'icon'" :src="item.urls?.png_256" :alt="item.name"
                                    class="img-fluid icons" loading="lazy" height="140" width="140" />
                                <video v-else-if="item.asset === 'lottie'" height="210" width="280"
                                    :src="item.urls?.thumb" class="animations" autoplay loop muted playsinline></video>
                                <img v-else :src="item.urls?.thumb" :alt="item.name" class="illustrations"
                                    loading="lazy" height="210" width="280" />
                            </div>
                        </NuxtLink>

                        <!-- Hover Card -->
                        <div class="card">
                            <!-- Action Buttons -->
                            <div class="action-buttons">
                                <button class="btn btn-light upload-btn" :class="{
                                    'upload-btn-icon': item.asset === 'icon'
                                }" @click.prevent="$emit('addToCollection', item)">
                                    <i class="uil uil-folder-plus" :class="{
                                        'upload-icon': item.asset === 'icon'
                                    }"></i>
                                </button>

                                <button class="btn btn-light download-btn" :class="{
                                    'download-btn-icon': item.asset === 'icon'
                                }" @click.prevent="download(item.uuid)">
                                    <i class="uil uil-import" :class="{
                                        'download-icon': item.asset === 'icon'
                                    }"></i>
                                </button>
                            </div>

                            <!-- Item Name -->
                            <p class="text" :class="{
                                'text-icon': item.asset === 'icon',
                            }">
                                {{ truncatedName(item.name) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="pagination-wrapper">
                <Pagination v-if="page" :currentPage="currentPage" :totalPages="totalPages" @nextPage="nextPage"
                    @firstPage="firstPage" @lastPage="lastPage" @goToPage="goToPage" />
            </div>
        </div>
    </div>
</template>

<script>
    import myMixin from "@/components/mixins/index.js";

    export default {
        mixins: [myMixin],
        props: {
            assetData: String,
            slugData: String,
            perPage: Number,
            pagination: Boolean,
            isLoad: Boolean,
        },
        data() {
            return {
                items: [],
                displayedItems: [],
                currentPage: 1,
                totalPages: 1,
                lastPages: 1,
                allLoaded: false,
                page: this.pagination,
                asset: this.assetData,
                slug: this.slugData || "",
                price: this.$route.query.price || null,
                sort: this.$route.query.sort || null,
                styles: this.$route.query.styles || null,
            };
        },
        async fetch() {
            try {
                const response = await this.fetchAllData({
                    asset: this.asset,
                    slug: this.slug,
                    price: this.price,
                    sort: this.sort,
                    styles: this.styles,
                    page: this.currentPage,
                    per_page: this.perPage,
                });

                if (response?.data && Array.isArray(response.data)) {
                    this.items = response.data;
                    this.displayedItems = this.items.slice(0, this.perPage);
                    this.totalPages = Math.ceil(response.total / this.perPage) || 1;
                    this.lastPages = response.last_page || this.totalPages;
                } else {
                    console.error("Invalid response format:", response);
                }
            } catch (error) {
                console.error("Error fetching:", error);
                this.items = [];
            }
        },
        watch: {
            "$route.query": {
                handler(newQuery) {
                    const { price, sort, styles } = newQuery;
                    if (this.price !== price || this.sort !== sort || this.styles !== styles) {
                        this.price = price;
                        this.sort = sort;
                        this.styles = styles;
                        this.currentPage = 1;
                        this.$fetch();
                    }
                },
                deep: true,
            },
            "$route.params": {
                handler(newParams) {
                    const { slug, asset } = newParams;
                    if (this.slug !== slug || this.asset !== asset) {
                        this.slug = slug;
                        this.asset = asset;
                        this.$fetch();
                    }
                },
                deep: true,
            }
        },
        methods: {
            nextPage() {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                    this.$fetch();
                }
            },
            firstPage() {
                if (this.currentPage !== 1) {
                    this.currentPage = 1;
                    this.$fetch();
                }
            },
            lastPage() {
                if (this.currentPage !== this.lastPages) {
                    this.currentPage = this.lastPages;
                    this.$fetch();
                }
            },
            goToPage(page) {
                if (page >= 1 && page <= this.totalPages) {
                    this.currentPage = page;
                    this.$fetch();
                }
            },
            previousPage() {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.$fetch();
                }
            },
            convertToUrl(assetKey, slugKey) {
                const assetMap = {
                    "3d": "3d-illustrations",
                    lottie: "lottie-animations",
                    illustration: "illustrations",
                    icon: "icons",
                    "all-assets": "all-assets",
                };
                const assetRoute = assetMap[assetKey] || "all-assets";
                return `/${assetRoute}/${slugKey}`;
            },
            toUrl(assetKey, slug, page) {
                return {
                    path: `/${assetKey}/${slug}`,
                    query: { ...this.$route.query, page },
                };
            },
            async download(uuid) {
                try {
                    await this.downloadIcon(uuid);
                } catch (error) {
                    console.error("Error fetching:", error);
                }
            },
        },
    };
</script>

<style scoped>
    .search-page {
        padding: 16px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    .container-fluid {
        flex: 1;
        width: calc(100% - 260px);
        margin-left: 260px;
        padding: 0 20px;
        height: calc(100vh - 16px);
        z-index: 0;
    }

    /* Skeleton Style */
    .skeleton,
    .skeleton-illustration,
    .skeleton-icon {
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        background: rgba(217, 217, 217, 0.5);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 100%;
        aspect-ratio: 4/3;
        padding: 4px;
    }

    .skeleton-icon {
        aspect-ratio: 1;
    }

    /* Grid Styles */
    .grid-container {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        justify-content: center;
        padding: 12px;
    }

    .grid-container-icon {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    .grid-item {
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        background: #f8f9fa;
        /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    .grid-item-lottie {
        background: none !important;
        border: 1px solid #EBEDF5;
    }

    .item-content-wrapper,
    .item-link {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
    }

    /* Image Styles */
    .icons,
    .animations,
    .illustrations {
        padding: 8px;
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    }

    /* Hover Card */
    .card {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(46, 51, 76, 0.3);
        border-radius: 6px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        pointer-events: none;
        border: none;
    }

    .grid-item-hover:hover .card {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        border: none;
    }

    /* Buttons */
    .upload-btn,
    .download-btn {
        position: absolute;
        background: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        transition: transform 0.2s;
    }

    .upload-btn-icon,
    .download-btn-icon {
        height: 30%;
        width: 30%;
    }

    .upload-icon,
    .download-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .upload-btn {
        top: 10px;
        right: 10px;
    }

    .download-btn {
        bottom: 10px;
        right: 10px;
    }

    /* Text */
    .text {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: #737999;
        max-width: 90%;
        font-size: 12px;
        line-height: 14.83px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 10px;
    }

    .text-icon {
        bottom: -10px !important;
    }

    /* View More Overlay */
    .view-more-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: background-color 0.2s;
    }

    .view-more-link:hover .view-more-overlay {
        background: rgba(0, 0, 0, 0.6);
    }

    .view-more-text {
        color: white;
        font-size: 16px;
        font-weight: 500;
    }

    .view-more-arrow {
        color: white;
        font-size: 20px;
    }

    .view-more-text-icon,
    .view-more-arrow-icon {
        font-size: 10px !important;
    }

    /* Media Queries */
    @media (max-width: 1024px) {
        .container-fluid {
            width: calc(100% - 240px);
            margin-left: 240px;
            padding: 16px;
        }

        .grid-container,
        .grid-container-icon {
            gap: 12px;
        }
    }

    @media (max-width: 768px) {
        .container-fluid {
            width: 100%;
            margin-left: 0;
            padding: 16px;
        }

        .grid-container,
        .grid-container-icon {
            gap: 12px;
        }

        .grid-container-icon {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
    }
</style>
