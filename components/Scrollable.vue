<template>
    <div class="horizontal-scroll-container">
        <button class="nav-arrow left" @click="scrollLeft" :disabled="isAtStart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>

        <div class="tabs-wrapper" ref="tabsWrapper" @scroll="checkScrollPosition">
            <div class="tabs-container">
                <div v-for="(tab, index) in tabs" :key="index" class="tab" @click="$emit('tab-click', index)">
                    {{ tab }}
                </div>
            </div>
        </div>

        <button class="nav-arrow right" @click="scrollRight" :disabled="isAtEnd">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            tabs: {
                type: Array,
                default: () => [
                    'Conversation Design Assets',
                    'Data design assets',
                    'Crypto assets',
                    'Conversation Design Assets',
                    'Crypto assets',
                    'Data design assets',
                    'Conversation Design Assets',
                    'Crypto assets',
                    'Data design assets',
                    'Conversation Design Assets',
                    'Data design assets',
                    'Crypto assets',
                    'Conversation Design Assets',
                    'Crypto assets',
                    'Data design assets',
                    'Conversation Design Assets',
                    'Crypto assets',
                    'Data design assets'
                ]
            }
        },
        data() {
            return {
                isAtStart: true,
                isAtEnd: false,
                isMobile: false
            }
        },
        mounted() {
            this.checkScrollPosition();
            this.checkMobileView();
            window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.checkScrollPosition();
                this.checkMobileView();
            },
            checkMobileView() {
                this.isMobile = window.innerWidth < 768;
            },
            scrollLeft() {
                if (this.$refs.tabsWrapper) {
                    const scrollAmount = this.isMobile ? 100 : 200;
                    this.$refs.tabsWrapper.scrollLeft -= scrollAmount;
                }
            },
            scrollRight() {
                if (this.$refs.tabsWrapper) {
                    const scrollAmount = this.isMobile ? 100 : 200;
                    this.$refs.tabsWrapper.scrollLeft += scrollAmount;
                }
            },
            checkScrollPosition() {
                if (!this.$refs.tabsWrapper) return;

                const { scrollLeft, scrollWidth, clientWidth } = this.$refs.tabsWrapper;
                this.isAtStart = scrollLeft <= 0;
                this.isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1; // -1 for rounding issues
            }
        }
    }
</script>

<style scoped>
    .horizontal-scroll-container {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 10px;
        background-color: #fff;
    }

    /* Desktop positioning */
    @media (min-width: 1024px) {
        .horizontal-scroll-container {
            left: 290px;
            width: calc(100% - 290px);
        }
    }

    /* Tablet positioning */
    @media (min-width: 768px) and (max-width: 1023px) {
        .horizontal-scroll-container {
            left: 0;
            width: 100%;
        }
    }

    /* Mobile positioning */
    @media (max-width: 767px) {
        .horizontal-scroll-container {
            left: 0;
            width: 100%;
            padding-top: 15px;
            padding-bottom: 5px;
        }
    }

    .tabs-wrapper {
        flex-grow: 1;
        overflow-x: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none;
        scrollbar-width: none;
        margin: 0 10px;
        max-width: calc(100% - 92px);
    }

    .tabs-wrapper::-webkit-scrollbar {
        display: none;
    }

    .tabs-container {
        display: inline-flex;
        gap: 10px;
    }

    .tab {
        white-space: nowrap;
        color: #666;
        border-radius: 5px;
        padding: 7px 12px;
        border: 1px solid #E4E9F2;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0px;
        cursor: pointer;
    }

    /* Mobile tab styling */
    @media (max-width: 767px) {
        .tab {
            padding: 5px 10px;
            font-size: 12px;
        }
    }

    .tab:hover {
        background-color: #f5f5f5;
    }

    .nav-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        height: 36px;
        border-radius: 50%;
        background: white;
        border: 1px solid #eaeaea;
        cursor: pointer;
        z-index: 2;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: opacity 0.3s, background-color 0.3s;
        flex-shrink: 0;
    }

    /* Mobile arrow styling */
    @media (max-width: 767px) {
        .nav-arrow {
            top: 20px;
            left: 20px;
            min-width: 32px;
            height: 32px;
        }

        .tabs-wrapper {
            position: relative;
            top: 20px;
        }

        .nav-arrow svg {
            width: 16px;
            height: 16px;
        }
    }

    /* .nav-arrow:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    } */

    .nav-arrow:not(:disabled):hover {
        background-color: #f5f5f5;
    }

    .nav-arrow:focus {
        outline: none;
    }

    .left {
        position: relative;
        left: 10px;
    }

    .right {
        position: relative;
        right: 10px;
    }

    /* Desktop arrow positioning */
    @media (min-width: 1024px) {
        .left {
            left: 30px;
        }

        .right {
            right: 30px;
        }
    }
</style>