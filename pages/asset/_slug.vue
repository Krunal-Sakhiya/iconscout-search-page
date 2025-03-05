<template>
    <div>
        <Content />
        <div>
            <Sidebar />
            <Scrollable />
            <Allcontent v-if="asset === 'all'" :slugData="slug" />
            <Asset v-else :assetData="asset" :slugData="slug" :perPage="Number(perPage)" :pagination="pagination" />
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
            return {
                asset,
                slug: this.$route.params.slug,
                perPage: 60,
                pagination: true,
            };
        },
    };
</script>


<style scoped></style>