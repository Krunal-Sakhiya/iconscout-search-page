<template>
    <div class="container contributor-showcase my-5">
        <!-- Contributors Floating Bubbles -->
        <div>
            <div class="contributors-container">
                <div class="profile-bubble" v-for="(user, index) in users" :key="index" :style="user.style"
                    :data-name="slugify(user.name)">
                    <div class="profile-bubble-content">
                        <div class="profile-image">
                            <img :src="user.image" alt="Profile Image" class="rounded-circle">
                            <span class="country-code">{{ user.code }}</span>
                        </div>
                        <div class="profile-info">
                            <h5 class="profile-name mb-0">{{ user.name }}</h5>
                            <p class="profile-title mb-0">{{ user.role }} from <span class="profile-country-code">{{
                                user.code }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative">
            <div class="text-center mb-4">
                <h1 class="display-4 font-weight-bold artist">Assets from thousands of<br>Artists around the world</h1>
            </div>

            <div class="text-center mb-5 contributor-btn">
                <button class="btn btn-primary btn-lg mx-2">Become a Contributor</button>
                <button class="btn btn-outline-dark btn-lg mx-2">Meet all Artists</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: [
                    { image: 'https://cdna.iconscout.com/img/attwyRSxVKtcSHTV0.1eb8aae.jpg?f=webp&w=624', name: 'Safwan Murtadha', role: '3D Designer', code: 'ID', style: 'top: -20%; left: -10%' },
                    { image: 'https://cdna.iconscout.com/img/atthTa73N2sNPT16g.214c23a.jpg?f=webp&w=624', name: 'John Doe', role: 'Illustrator', code: 'RO', style: 'top: 70%; left: -4%' },
                    { image: 'https://cdna.iconscout.com/img/att21bnkT0CLKbUH9.bc4988b.jpg?f=webp&w=624', name: 'Boyko Pictures', role: 'Illustration Designer', code: 'RU', style: 'top: 12%; left: 3%' },
                    { image: 'https://cdna.iconscout.com/img/atteMJTwXGQJmvm46.cea4a97.jpg?f=webp&w=624', name: 'Amit Kumar', role: 'Graphic Designer', code: 'PK', style: 'bottom: -5%; left: 15%' },
                    { image: 'https://cdna.iconscout.com/img/atte2XuLGGQrsW15A.d705d36.jpg?f=webp&w=624', name: 'Imam Buke', role: 'Icon Designer', code: 'ID', style: 'top: 8%; right: -5%' },
                    { image: 'https://cdna.iconscout.com/img/attxwKa8Bm09ePQZw.b55aa6b.jpg?f=webp&w=624', name: 'Nut Chanut', role: 'Icon Designer', code: 'TH', style: 'top: -20%; right: 13%' },
                    { image: 'https://cdna.iconscout.com/img/att9dAeOr8Tr6SA5u.faee0e7.jpg?f=webp&w=624', name: 'Emily Smith', role: 'Digital Artist', code: 'US', style: 'top: 75%; right: -5%' },
                    { image: 'https://cdna.iconscout.com/img/attOKsgRieYiA0XCE.cc794a9.jpg?f=webp&w=624', name: 'King Petchart', role: 'Icon Designer', code: 'TH', style: 'top: 70%; left: 80%' },
                ],
            };
        },
        methods: {
            slugify(text) {
                return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            }
        }
    }
</script>

<style scoped>
    .container-fluid {
        padding: 10px 100px;
    }

    .position-relative {
        z-index: 0;
    }

    .artist,
    .contributor-btn {
        letter-spacing: -0.015em;
        font-size: 3rem;
        line-height: 3.625rem;
        margin-bottom: .5rem;
        font-family: inherit;
        font-weight: 700;
    }

    .contributor-showcase {
        position: relative;
    }

    .contributors-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .contributor-bubble {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .contributor-bubble:hover {
        transform: scale(1.1);
        z-index: 10;
    }

    .contributor-bubble img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 2px solid #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .country-code {
        position: absolute;
        bottom: 0;
        right: 15px;
        padding: 10px !important;
        background-color: #f8f9fa;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #dee2e6;
    }

    .featured {
        width: auto;
        height: auto;
        background-color: #e1f5fe;
        border-radius: 30px;
        padding: 10px 20px 10px 10px;
    }

    .contributor-bubble-content {
        display: flex;
        align-items: center;
    }

    .contributor-bubble-content img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }

    .contributor-info {
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }

    .contributor-info {
        display: none;
    }

    .rounded-circle:hover .contributor-info {
        display: block;
    }

    /* Ensure profile bubble content (blue background) is correctly styled */
    .profile-bubble-content {
        display: flex;
        align-items: center;
        padding-right: 15px;
    }

    /* Ensure the image stays inside the blue box */
    .profile-image {
        margin-right: 10px;
    }

    .profile-image img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border: 2px solid #fff;
        border-radius: 50%;
    }

    /* Make sure profile-info is inside the blue box */
    .profile-info {
        display: none;
        flex-direction: column;
    }

    .profile-bubble[data-name] {
        display: inline-flex;
        z-index: 10;
        background-size: cover;
        position: absolute;
    }

    /* Properly style the name and role */
    .profile-name {
        font-size: 16px;
        font-weight: bold;
        color: #333;
    }

    .profile-title {
        font-size: 14px;
        color: #666;
    }

    /* Hover Effect */
    .profile-bubble:hover .profile-bubble-content {
        background-color: #e1f5fe;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 30px;
        max-width: 320px;
    }

    .profile-bubble:hover .profile-info {
        display: block !important;
    }

    .profile-bubble:hover .country-code {
        display: none !important;
    }


    /* Ensure other elements don’t move when hovering */
    /* .profile-bubble:hover {
        transform: scale(1.1);
    } */


    /* This is the critical fix - target the profile-info inside a hovered profile-bubble */
    /* .profile-bubble-content:hover {
        background-color: #e1f5fe;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
    }

    .profile-bubble-content:hover .profile-info {
        display: flex !important;
    }

    .profile-bubble-content:hover .country-code {
        display: none !important;
    } */

    /* .profile-bubble:hover .profile-bubble-content {
        background-color: #e1f5fe;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
    }

    .profile-bubble:hover .profile-info {
        display: flex !important;
    }

    .profile-bubble:hover .country-code {
        display: none !important;
    } */
</style>