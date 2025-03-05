<template>
    <div class="container py-5">
        <h2 class="text-center font-weight-bold">Browse assets by keywords</h2>

        <div class="d-flex justify-content-between align-items-center mt-4 tabs tabs-dropdown">
            <!-- Tabs -->
            <div class="btn-group btn-group-toggle btn-group-custom" data-toggle="buttons">
                <label class="btn btn-light" :class="{ active: selectedCategory === 'Icons' }"
                    @click="selectedCategory = 'Icons'">
                    <input type="radio" name="options" id="option1" checked> Icons
                </label>
                <label class="btn btn-light" :class="{ active: selectedCategory === 'Illustrations' }"
                    @click="selectedCategory = 'Illustrations'">
                    <input type="radio" name="options" id="option2"> Illustrations
                </label>
                <label class="btn btn-light" :class="{ active: selectedCategory === '3D Illustrations' }"
                    @click="selectedCategory = '3D Illustrations'">
                    <input type="radio" name="options" id="option3"> 3D Illustrations
                </label>
                <label class="btn btn-light" :class="{ active: selectedCategory === 'Lottie Animations' }"
                    @click="selectedCategory = 'Lottie Animations'">
                    <input type="radio" name="options" id="option4"> Lottie Animations
                </label>
            </div>

            <!-- Dropdown -->
            <div class="dropdown mr-2">
                <button class="btn dropdown-toggle dropdown-top-searches" type="button" data-toggle="dropdown">
                    Top searches
                </button>
                <div class="dropdown-menu">
                    <NuxtLink to="/" v-for="(item, index) in topSearches" :key="index" class="dropdown-item">
                        {{ item }}
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Keywords Grid -->
        <div class="row keyword-grid tabs">
            <div v-for="(col, index) in keywords" :key="index" class="keyword-column">
                <ul class="list-unstyled">
                    <li v-for="(keyword, i) in col" :key="i" class="">
                        <a :href="`${formatHref(keyword)}`" class="keyword">
                            {{ keyword }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedCategory: 'Icons', // Default category
                IconsKeywords: [
                    ["Message", "Arrow", "Document", "Weather", "File", "Chat", "Logo", "Cloud", "Alignment", "Chat Bubble", "Forecast", "Money"],
                    ["Resize", "Brand", "Emoji", "Align", "Direction", "Delete", "Currency", "Remove", "Brightness", "Image", "Picture", "Design Tool"],
                    ["Chatting", "Finance", "Email", "Comment", "Mail", "Folder", "Age Restriction", "Age Limit", "Restriction", "Age", "People", "Photo"],
                    ["Emoticon", "Media", "Business", "Sign", "Device", "Tool", "Transport", "Time", "Travel", "Sun", "Light", "Refresh"],
                    ["Text", "Format", "Minimize", "Adobe", "Avatar", "Adobe Logo", "Communication", "Arrows", "Adobe Tool", "Adobe Suit", "Location", "View More"]
                ],
                IllustrationKeywords: [
                    ["Business", "Technology", "Man", "Communication", "Woman", "Online", "Finance", "Character", "Male", "Work", "Girl", "Internet"],
                    ["People", "Network", "Female", "Employee", "Marketing", "Money", "Businessman", "Data", "Office", "Analysis", "Management", "Happy"],
                    ["Computer", "Investment", "Financial", "Avatar", "Digital", "Person", "Report", "Service", "Lady", "Mobile", "Growth", "Connection"],
                    ["Payment", "Success", "Currency", "Device", "Document", "Chart", "Boy", "Strategy", "Graph", "Analytics", "Worker", "Health"],
                    ["Job", "Message", "Development", "Young", "Information", "Security", "Banking", "Education", "Website", "Cash", "Laptop", "View More"]
                ],
                ThreeDIllustrationsKeywords: [
                    ["Business", "Finance", "Money", "Celebration", "Technology", "Decoration", "Currency", "Investment", "Coin", "Payment", "Cash", "Financial"],
                    ["Communication", "Man", "Dollar", "Holiday", "Nature", "Education", "Festival", "Document", "Happy", "Food", "People", "Banking"],
                    ["Person", "Design", "Sign", "Symbol", "Marketing", "Device", "Shopping", "Party", "Shape", "Character", "Avatar", "Book"],
                    ["Travel", "Work", "Box", "Element", "Male", "Knowledge", "Data", "Christmas", "Game", "Study", "Learning", "Abstract"],
                    ["Gift", "Love", "Cryptocurrency", "Report", "Success", "Internet", "Online", "Achievement", "Network", "Graph", "Analysis", "View More"],
                ],
                LottieAnimationsKeywords: [
                    ["Business", "Technology", "Finance", "Man", "Communication", "Character", "Money", "Male", "People", "Person", "Online", "Work"],
                    ["Progress", "Loading", "Processing", "Process", "Refresh", "Loader", "Reload", "Load", "Boy", "Investment", "Health", "Media"],
                    ["Document", "Celebration", "Preloader", "Internet", "Success", "Waiting", "Marketing", "Financial", "Healthy", "Device", "Network", "Message"],
                    ["Data", "Currency", "Payment", "Office", "Cash", "Avatar", "Mobile", "Growth", "Businessman", "Sport", "Social Media", "Education"],
                    ["Computer", "Analysis", "Social", "Graph", "Happy", "Chart", "Chat", "Woman", "Dollar", "Report", "Logo", "View More"],
                ],
                topSearches: ["Top searches", "Trending searches", "New searches"]
            };
        },
        methods: {
            formatHref(keyword) {
                const categorySlug = this.selectedCategory.replace(/\s+/g, '-').toLowerCase();
                if (keyword === 'View More') {
                    return `${categorySlug}`;
                }
                return `${categorySlug}/${keyword.toLowerCase().replace(/\s+/g, '-')}`;
            }
        },
        computed: {
            keywords() {
                switch (this.selectedCategory) {
                    case 'Icons':
                        return this.IconsKeywords;
                    case 'Illustrations':
                        return this.IllustrationKeywords;
                    case '3D Illustrations':
                        return this.ThreeDIllustrationsKeywords;
                    case 'Lottie Animations':
                        return this.LottieAnimationsKeywords;
                    default:
                        return [];
                }
            }
        }
    };
</script>

<style scoped>
    .container {
        margin-bottom: 100px;
    }

    .tabs {
        margin-left: -105px;
        margin-right: -105px;
    }

    .btn-group-custom {
        background: #f8f9fa;
        padding: 5px;
        border-radius: 12px;
        display: flex;
    }

    .tabs-dropdown {
        margin-bottom: 3rem;
    }

    .btn-group-custom .btn {
        border-radius: 10px;
        transition: all 0.3s ease;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #000;
        text-align: center;
        width: 160px;
    }

    .btn-group>.btn:not(:last-child):not(.dropdown-toggle),
    .btn-group>.btn-group:not(:last-child)>.btn {
        border-top-right-radius: 10px !important;
        border-bottom-right-radius: 10px !important;
    }

    .btn-group-custom .btn.active,
    .btn-group-custom .btn:focus {
        background: white;
        border: none;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .btn-group-custom .btn:not(.btn.active):hover {
        background: none !important;
        border: none !important;
        box-shadow: none !important;
    }

    .keyword-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
    }

    .keyword-column {
        min-width: 150px;
    }

    .keyword {
        color: #1C2033 !important;
        font-weight: 400;
        line-height: 1.5rem;
        font-size: 1rem;
        text-decoration: none;
        display: block;
        margin-bottom: 16px !important;
    }

    .keyword:hover {
        text-decoration: underline;
    }

    .dropdown-top-searches {
        background-color: #fff;
        border: 1px solid #D8DBEB;
        border-radius: 10px !important;
    }
</style>
