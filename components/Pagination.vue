<template>
    <div class="pagination">
        <NuxtLink class="next-btn" :to="convertToUrl(currentPage + 1)"
            :class="{ 'disabled': currentPage === totalPages }">
            Next Page →
        </NuxtLink>

        <div class="page-indicator">
            <input type="number" v-model="inputPage" @change="changePage" min="1" :max="totalPages" />
            <span> of {{ totalPages }} pages </span>
        </div>

        <div class="navigation-buttons">
            <NuxtLink class="nav-btn" :to="convertToUrl()" :class="{ 'disabled': currentPage === 1 }">
                «
            </NuxtLink>
            <NuxtLink class="nav-btn" :to="convertToUrl(totalPages)"
                :class="{ 'disabled': currentPage === totalPages }">
                »
            </NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            currentPage: Number,
            totalPages: Number,
        },
        data() {
            return {
                inputPage: this.currentPage,
            };
        },
        watch: {
            currentPage(newVal) {
                this.inputPage = newVal;
            },
            '$route.query.page': {
                immediate: true,
                handler(newPage) {
                    if (newPage < this.totalPages) {
                        this.$emit('nextPage', parseInt(newPage));
                    } else if (newPage == this.totalPages) {
                        this.$emit('lastPage');
                    } else if (newPage < this.inputPage) {
                        this.$emit('previousPage');
                    } else {
                        this.$emit('firstPage',);
                    }
                }
            }
        },
        methods: {
            changePage() {
                let page = parseInt(this.inputPage);
                if (page > this.totalPages) {
                    page = this.totalPages;
                } else if (page < 1) {
                    page = 1;
                }
                this.$router.push(this.convertToUrl(page));
            },
            convertToUrl(page) {
                if (page < 1) {
                    page = 1;
                }
                return {
                    path: this.$route.path,
                    query: { ...this.$route.query, page }
                };
            }
        },
    };
</script>

<style scoped>
    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 20px;
        background: #fff;
    }

    .next-btn {
        background: #007bff;
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        text-decoration: none;
    }

    .page-indicator {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .page-indicator input {
        width: 70px;
        text-align: center;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .navigation-buttons {
        display: flex;
        gap: 8px;
    }

    .nav-btn {
        padding: 8px 12px;
        text-decoration: none;
        color: #007bff;
    }

    .disabled {
        opacity: 0.5;
        pointer-events: none;
    }
</style>
