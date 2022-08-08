const numbers0To30 = {
    title: "Numerals 0–30",
    prompts: {
        0: "nolla",
        1: "yksi",
        2: "kaksi",
        3: "kolme",
        4: "neljä",
        5: "viisi",
        6: "kuusi",
        7: "seitsemän",
        8: "kahdeksan",
        9: "yhdeksän",
        10: "kymmenen",
        11: "yksi_toista",
        12: "kaksi_toista",
        13: "kolme_toista",
        14: "neljä_toista",
        15: "viisi_toista",
        16: "kuusi_toista",
        17: "seitsemän_toista",
        18: "kahdeksan_toista",
        19: "yhdeksän_toista",
        20: "kaksi_kymmentä",
        21: "kaksi_kymmentä_yksi",
        22: "kaksi_kymmentä_kaksi",
        23: "kaksi_kymmentä_kolme",
        24: "kaksi_kymmentä_neljä",
        25: "kaksi_kymmentä_viisi",
        26: "kaksi_kymmentä_kuusi",
        27: "kaksi_kymmentä_seitsemän",
        28: "kaksi_kymmentä_kahdeksan",
        29: "kaksi_kymmentä_yhdeksän",
        30: "kolme_kymmentä",
    },
};

const app = Vue.createApp({
    data() {
        return {
            title: numbers0To30.title,
            i: 1,
            answer: "yksi",
        };
    },
    methods: {
        getPrompt() {
            const map = new Map(Object.entries(numbers0To30.prompts));
            let keys = Array.from(map.keys());
            return keys[Math.floor(Math.random() * keys.length)];
        },
        getAnswer(x) {
            return numbers0To30.prompts[x];
        },
        sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
    },
    async mounted() {
        // this.i = 0;

        this.timer = setInterval(async () => {
            nextPrompt = this.getPrompt();
            console.log(`Got ${nextPrompt}`);
            this.answer = "🤔";
            this.i = nextPrompt;
            await this.sleep(3000);
            this.answer = this.getAnswer(nextPrompt);
            await this.sleep(1500);
            console.log(`Sleeping...`);
        }, 4500);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
});

app.mount("#app");
