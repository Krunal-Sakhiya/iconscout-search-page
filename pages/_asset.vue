<template>
    <div>
        <Content />
        <div>
            <Sidebar />
            <Scrollable />
            <Allcontent v-if="asset === 'all'" :slugData="slug" />
            <section v-else class="section">
                <Asset :assetData="asset" :slugData="slug" :perPage="Number(perPage)" :pagination="pagination"
                    :isLoad="isLoad" />
            </section>
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
            const asset = assetMap[this.$route.params.asset] || "icon";
            const perPage = asset === 'icon' ? 100 : 48;
            return {
                asset,
                slug: this.$route.params.slug,
                perPage,
                pagination: true,
                isLoad: true,
            };
        },
        watch: {
            '$route.params.slug'(newSlug) {
                this.slug = newSlug;
            }
        },
    };
</script>


<style scoped></style>