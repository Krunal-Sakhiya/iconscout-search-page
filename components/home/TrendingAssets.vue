<template>
    <div class="container my-5">
        <h2 class="h2 mb-8">Explore other trending assets on IconScout</h2>

        <div class="position-relative">
            <!-- Navigation buttons -->
            <button class="btn btn-light rounded-circle position-absolute nav-btn nav-prev" @click="scrollLeft">
                <span>&lsaquo;</span>
            </button>

            <div class="assets-container" ref="scrollContainer">
                <div v-for="(asset, index) in assets" :key="index" class="asset-card">
                    <div class="asset-image">
                        <img :src="asset.image" :alt="asset.title" class="img-fluid" />
                    </div>
                    <div class="asset-info">
                        <h5 class="asset-title">{{ asset.title }}</h5>
                        <p class="asset-description">{{ asset.description }}</p>
                    </div>
                </div>
            </div>

            <button class="btn btn-light rounded-circle position-absolute nav-btn nav-next" @click="scrollRight">
                <span>&rsaquo;</span>
            </button>
        </div>

        <!-- Pagination dots -->
        <div class="dots-container text-center mt-4">
            <span v-for="i in paginationDots" :key="i" :class="['dot', currentDot === i ? 'active' : '']"
                @click="scrollToPosition(i)"></span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentDot: 0,
                scrollAmount: 300,
                assets: [
                    {
                        title: "Unicons",
                        description: "7,000+ pixel-perfect interface icons",
                        bgColor: "#ff9ff3",
                        image: "https://cdna.iconscout.com/img/unicons-card.00220c2.png?f=webp"
                    },
                    {
                        title: "Animated Stickers",
                        description: "3,000+ high-quality animated stickers",
                        bgColor: "#feca57",
                        image: "https://cdna.iconscout.com/img/animated-stickers.0c805f3.png?f=webp"
                    },
                    {
                        title: "3D Icons",
                        description: "335,000+ high-quality 3D icons",
                        bgColor: "#ff6b6b",
                        image: "https://cdna.iconscout.com/img/3d-icon.8a5b31b.png?f=webp"
                    },
                    {
                        title: "AI Illustration Generator",
                        description: "Generate illustrations with AI",
                        bgColor: "#48dbfb",
                        image: "https://cdna.iconscout.com/img/ai-illustration-generator.647d903.png?f=webp"
                    },
                    {
                        title: "Animated Icons",
                        description: "94,000+ stunning animated icons",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/3d-characters.f468118.png?f=webp"
                    },
                    {
                        title: "Animated Icons",
                        description: "94,000+ stunning animated icons",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/templates.e00e5e6.png?f=webp"
                    },
                    {
                        title: "Avatars",
                        description: "189,000+ ready-to-use avatars",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/ai-illustration-generator.647d903.png?f=webp"
                    },
                    {
                        title: "Customize Templates",
                        description: "1000+ of ready-to-use design templates",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/templates.e00e5e6.png?f=webp"
                    },
                    {
                        title: "Stickers",
                        description: "100,000+ high-quality stickers",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/stickers.a11563f.png?f=webp"
                    },
                    {
                        title: "Emojis",
                        description: "80,000+ exclusive emoji assets",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/emoji-card.5892757.png?f=webp"
                    },
                    {
                        title: "AI 3D Generator",
                        description: "Generate 3D Illustrations with AI",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/ai-illustration-generator.647d903.png?f=webp"
                    },
                    {
                        title: "Notion Icons",
                        description: "1,300+ minimalist Notion icons",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/notion-card.8c30233.svg?f=webp"
                    },
                    {
                        title: "Illustration Kit",
                        description: "Create illustration variations",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/illustration-kit.0ccd052.png?f=webp"
                    },
                    {
                        title: "glTF 3D Editor",
                        description: "147,000+ editable 3D Assets",
                        bgColor: "#ff9f43",
                        image: "https://cdna.iconscout.com/img/3d-gltf-card.0573819.png?f=webp"
                    },
                ],
            };
        },
        computed: {
            paginationDots() {
                return Math.ceil(this.assets.length);
            }
        },
        methods: {
            scrollLeft() {
                if (this.$refs.scrollContainer) {
                    this.$refs.scrollContainer.scrollLeft -= this.scrollAmount;
                    this.updateActiveDot();
                }
            },
            scrollRight() {
                if (this.$refs.scrollContainer) {
                    this.$refs.scrollContainer.scrollLeft += this.scrollAmount;
                    this.updateActiveDot();
                }
            },
            updateActiveDot() {
                if (this.$refs.scrollContainer) {
                    const scrollPosition = this.$refs.scrollContainer.scrollLeft;
                    const maxScroll = this.$refs.scrollContainer.scrollWidth - this.$refs.scrollContainer.clientWidth;
                    const dotPosition = Math.round((scrollPosition / maxScroll) * (this.paginationDots - 1));
                    this.currentDot = Math.max(0, Math.min(dotPosition, this.paginationDots - 1));
                }
            },
            scrollToPosition(dotIndex) {
                if (this.$refs.scrollContainer) {
                    const maxScroll = this.$refs.scrollContainer.scrollWidth - this.$refs.scrollContainer.clientWidth;
                    const scrollTo = (dotIndex / (this.paginationDots - 1)) * maxScroll;
                    this.$refs.scrollContainer.scrollLeft = scrollTo;
                    this.currentDot = dotIndex;
                }
            }
        },
        mounted() {
            // Add scroll event listener to update active dot
            if (this.$refs.scrollContainer) {
                this.$refs.scrollContainer.addEventListener('scroll', this.updateActiveDot);
            }
        },
        beforeDestroy() {
            // Clean up event listener
            if (this.$refs.scrollContainer) {
                this.$refs.scrollContainer.removeEventListener('scroll', this.updateActiveDot);
            }
        }
    };
</script>

<style scoped>
    html body {
        font-family: inherit;
        overflow-x: hidden;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .h2 {
        font-size: 33px;
        line-height: 44px;
        letter-spacing: 0.1px;
        font-weight: 700;
        color: black;
        margin-bottom: 60px;
        text-align: center;
        display: flex;
        justify-content: center;
        position: relative;
        left: 105px;
    }

    .container {
        position: relative;
        left: -100px;
    }

    .assets-container {
        width: 1330px;
        height: auto;
        max-width: 1400px;
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none;
        scrollbar-width: none;
        padding: 10px;
    }

    .assets-container::-webkit-scrollbar {
        display: none;
    }

    .asset-card {
        gap: 20px !important;
        min-width: 250px;
        width: 450px;
        height: auto;
        margin-right: 15px;
        margin-bottom: 15px;
        border-radius: 8px !important;
        padding: 8px;
        display: flex;
        flex-direction: column;
    }

    .asset-card:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    .asset-image {
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }

    .asset-image img {
        border-radius: 8px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }


    .asset-info {
        padding: 5px;
        text-align: center;
    }

    .asset-title {
        font-size: 18px;
        font-weight: bold;
        margin-top: 12px;
        margin-bottom: 0;
        line-height: 24px;
    }

    .asset-description {
        font-size: 14px;
        color: #767fad;
        margin-top: 4px;
        margin-bottom: 0;
    }

    .nav-btn {
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-btn span {
        font-size: 24px;
        line-height: 0;
    }

    .nav-prev {
        left: -40px;
    }

    .nav-next {
        right: -265px;
    }

    .dots-container {
        position: relative;
        top: 20px;
        left: 100px;
        /* padding-top: 15px; */
        padding-bottom: 50px;
    }

    .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ddd;
        margin: 0 4px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .dot.active {
        width: 12px;
        height: 12px;
        background-color: #007bff;
    }
</style>