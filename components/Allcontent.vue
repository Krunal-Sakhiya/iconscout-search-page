<template>
    <section class="section">
        <div>
            <p class="text-set">{{ capitalizedSlugData }} 3D Illustrations</p>
        </div>
        <Asset assetData="3d" :slugData="slugData" :perPage="Number(12)" :pagination="pagination" :isLoad="isLoad" />
        <div>
            <p class="text-set">{{ capitalizedSlugData }} Lottie Animations</p>
        </div>
        <Asset assetData="lottie" :slugData="slugData" :perPage="Number(12)" :pagination="pagination"
            :isLoad="isLoad" />
        <div>
            <p class="text-set">{{ capitalizedSlugData }} Illustrations</p>
        </div>
        <Asset assetData="illustration" :slugData="slugData" :perPage="Number(12)" :pagination="pagination"
            :isLoad="isLoad" />
        <div>
            <p class="text-set">{{ capitalizedSlugData }} Icons</p>
        </div>
        <Asset assetData="icon" :slugData="slugData" :perPage="Number(60)" :pagination="pagination" :isLoad="isLoad" />
    </section>
</template>

<script>
    export default {
        data() {
            return {
                pagination: false,
                isLoad: true,
            };
        },
        props: ["slugData"],
        computed: {
            capitalizedSlugData() {
                if (!this.slugData) return '';
                return this.slugData.charAt(0).toUpperCase() + this.slugData.slice(1);
            }
        }
    };
</script>

<style scoped>
    .section {
        overflow: hidden;
    }

    .text-set {
        position: relative;
        left: 305px;
        top: 20px;
        max-width: 100%;
        text-align: left;
        font-weight: 600;
        font-size: 24px;
        line-height: 29.66px;
        letter-spacing: 0%;
    }

    @media (max-width: 991.98px) {
        .text-set {
            left: 24px;
        }
    }
</style>
