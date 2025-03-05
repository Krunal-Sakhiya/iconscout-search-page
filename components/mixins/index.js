import axios from "axios";

export default {
    data() {
        return {
            allData: [],
        };
    },
    methods: {
        async fetchAllData(params = {}) {
            try {
                const styleArray = Array.isArray(params?.styles)
                    ? params.styles.filter(Boolean)
                    : [];
                const response = await axios.get(
                    "https://api.iconscout.com/v3/search",
                    {
                        headers: {
                            Accept: "application/json",
                        },
                        params: {
                            client_id: "259134661390354",
                            ...(params?.asset ? { asset: params.asset } : {}),
                            ...(params?.slug ? { query: params.slug } : {}),
                            ...(params?.price && params.price !== "all"
                                ? { price: params.price }
                                : {}),
                            ...(params?.sort && params.sort !== "all"
                                ? { sort: params.sort }
                                : {}),
                            ...(styleArray.length
                                ? { styles: styleArray }
                                : {}),
                            ...(params?.per_page
                                ? { per_page: params.per_page }
                                : {}),
                            ...(params?.page ? { page: params.page } : {}),
                        },
                    }
                );

                // Adjust based on actual API structure
                const allData = response.data?.response?.items || [];
                return allData;
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        },

        truncatedName(name) {
            if (!name) return "";
            const wordsLength = name.split(" ").join("");
            const words = name.trim().replace(/\s+/g, " ").split(" ");
            return wordsLength.length > 15
                ? `${words.slice(0, 3).join(" ")}...`
                : name.trim();
        },

        async downloadIcon(uuid) {
            try {
                const response = await axios.post(
                    `https://api.iconscout.com/v3/items/${uuid}/api-download`,
                    {
                        format: "svg", // Include the format in the request body if required
                    },
                    {
                        headers: {
                            Accept: "application/json",
                            "Client-ID": "259134661390354",
                            "Client-Secret": "KZQsyz8zS32woYOl5ijPc41bNuhDah64",
                        },
                    }
                );

                if (response.data && response.data?.response?.download) {
                    const downloadUrl =
                        response.data?.response?.download.download_url;

                    const a = document.createElement("a");
                    a.href = downloadUrl;
                    a.download = `${uuid}.svg`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                } else {
                    console.error("Download URL not found in the response.");
                }
            } catch (error) {
                console.error("Error downloading icon:", error);
            }
        },
    },
};
