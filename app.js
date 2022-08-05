const app = Vue.createApp({
    data() {
        return {
            i: 1,
            answer: "yksi",
        };
    },
    methods: {
        getNumber() {
            return Math.floor(Math.random() * 31);
        },
        getNumeral(x) {
            return {
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
            }[x];
        },
        sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
    },
    async mounted() {
        // this.i = 0;
        this.timer = setInterval(async () => {
            nextNumber = this.getNumber();
            console.log(`Got ${nextNumber}`);
            this.answer = "🤔";
            this.i = nextNumber;
            await this.sleep(3000);
            // console.log(`Setting ${nextNumber}...`);
            this.answer = this.getNumeral(nextNumber);
            await this.sleep(1500);
            console.log(`Sleeping...`);
            // console.log(`hey! ${this.i++}`)
            //   console.log(`hey! ${this.vueLink}`)
        }, 4500);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
});

app.mount("#app");
