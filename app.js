let hasEnabledVoice = false;

const enableTtsButton = document.getElementById("enable_tts")

enableTtsButton.addEventListener('click', () => {
  if (hasEnabledVoice) {
    return;
  }
  const enabled = new SpeechSynthesisUtterance('Enabled');
  speechSynthesis.speak(enabled);
  hasEnabledVoice = true;
});

const wordSets = {
    numbers0To10: {
        title: "0–10",
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
        },
    },
    numbers0To30: {
        title: "0–30",
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
    },
    numbers0To100: {
        title: "0–100",
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
            31: "kolme_kymmentä_yksi",
            32: "kolme_kymmentä_kaksi",
            33: "kolme_kymmentä_kolme",
            34: "kolme_kymmentä_neljä",
            35: "kolme_kymmentä_viisi",
            36: "kolme_kymmentä_kuusi",
            37: "kolme_kymmentä_seitsemän",
            38: "kolme_kymmentä_kahdeksan",
            39: "kolme_kymmentä_yhdeksän",
            40: "neljä_kymmentä",
            41: "neljä_kymmentä_yksi",
            42: "neljä_kymmentä_kaksi",
            43: "neljä_kymmentä_kolme",
            44: "neljä_kymmentä_neljä",
            45: "neljä_kymmentä_viisi",
            46: "neljä_kymmentä_kuusi",
            47: "neljä_kymmentä_seitsemän",
            48: "neljä_kymmentä_kahdeksan",
            49: "neljä_kymmentä_yhdeksän",
            50: "viisi_kymmentä",
            51: "viisi_kymmentä_yksi",
            52: "viisi_kymmentä_kaksi",
            53: "viisi_kymmentä_kolme",
            54: "viisi_kymmentä_neljä",
            55: "viisi_kymmentä_viisi",
            56: "viisi_kymmentä_kuusi",
            57: "viisi_kymmentä_seitsemän",
            58: "viisi_kymmentä_kahdeksan",
            59: "viisi_kymmentä_yhdeksän",
            60: "kuusi_kymmentä",
            61: "kuusi_kymmentä_yksi",
            62: "kuusi_kymmentä_kaksi",
            63: "kuusi_kymmentä_kolme",
            64: "kuusi_kymmentä_neljä",
            65: "kuusi_kymmentä_viisi",
            66: "kuusi_kymmentä_kuusi",
            67: "kuusi_kymmentä_seitsemän",
            68: "kuusi_kymmentä_kahdeksan",
            69: "kuusi_kymmentä_yhdeksän",
            70: "seitsemän_kymmentä",
            71: "seitsemän_kymmentä_yksi",
            72: "seitsemän_kymmentä_kaksi",
            73: "seitsemän_kymmentä_kolme",
            74: "seitsemän_kymmentä_neljä",
            75: "seitsemän_kymmentä_viisi",
            76: "seitsemän_kymmentä_kuusi",
            77: "seitsemän_kymmentä_seitsemän",
            78: "seitsemän_kymmentä_kahdeksan",
            79: "seitsemän_kymmentä_yhdeksän",
            80: "kahdeksan_kymmentä",
            81: "kahdeksan_kymmentä_yksi",
            82: "kahdeksan_kymmentä_kaksi",
            83: "kahdeksan_kymmentä_kolme",
            84: "kahdeksan_kymmentä_neljä",
            85: "kahdeksan_kymmentä_viisi",
            86: "kahdeksan_kymmentä_kuusi",
            87: "kahdeksan_kymmentä_seitsemän",
            88: "kahdeksan_kymmentä_kahdeksan",
            89: "kahdeksan_kymmentä_yhdeksän",
            90: "yhdeksän_kymmentä",
            91: "yhdeksän_kymmentä_yksi",
            92: "yhdeksän_kymmentä_kaksi",
            93: "yhdeksän_kymmentä_kolme",
            94: "yhdeksän_kymmentä_neljä",
            95: "yhdeksän_kymmentä_viisi",
            96: "yhdeksän_kymmentä_kuusi",
            97: "yhdeksän_kymmentä_seitsemän",
            98: "yhdeksän_kymmentä_kahdeksan",
            99: "yhdeksän_kymmentä_yhdeksän",
            100: "sata",
        },
    },
    // numbers0To10Puhekieli: {
    //     title: "0–10 (Puhekieli)",
    //     prompts: {
    //         0: "nolla",
    //         1: "yks",
    //         2: "kaks",
    //         3: "kolme",
    //         4: "neljä",
    //         5: "viis",
    //         6: "kuus",
    //         7: "seittemän",
    //         8: "kaheksan",
    //         9: "yheksän",
    //         10: "kymmenen",
    //     },
    // },
    months: {
        title: "Months",
        prompts: {
            January: "tammikuu",
            February: "helmikuu",
            March: "maaliskuu",
            April: "huhtikuu",
            May: "toukokuu",
            June: "kesäkuu",
            July: "heinäkuu",
            August: "elokuu",
            September: "syyskuu",
            October: "lokakuu",
            November: "marraskuu",
            December: "joulukuu",
        },
    },
    // monthsRu: {
    //     title: "Месяцы 🔊",
    //     prompts: {
    //         январь: "tammikuu",
    //         февраль: "helmikuu",
    //         март: "maaliskuu",
    //         апрель: "huhtikuu",
    //         май: "toukokuu",
    //         июнь: "kesäkuu",
    //         июль: "heinäkuu",
    //         август: "elokuu",
    //         сентябрь: "syyskuu",
    //         октябрь: "lokakuu",
    //         ноябрь: "marraskuu",
    //         декабрь: "joulukuu",
    //     },
    // },
    daysOfTheWeek: {
        title: "Days of the week",
        prompts: {
            Monday: "maanantai",
            Tuesday: "tiistai",
            Wednesday: "keskiviikko",
            Thursday: "torstai",
            Friday: "perjantai",
            Saturday: "lauantai",
            Sunday: "sunnuntai",
        },
    },
};

const sleepAfterPromptMs = 4000;
const sleepAfterAnswerMs = 1500;

const wordSetMap = new Map(Object.entries(wordSets));

const app = Vue.createApp({
    data() {
        return {
            prompt: 1,
            answer: "yksi",
            wordSetMap: wordSetMap,
            currentWordSetName: "numbers0To10",
            currentWordSet: wordSetMap.get("numbers0To10"),
            title: wordSetMap.get("numbers0To10").title,
        };
    },
    methods: {
        getPrompt() {
            const map = new Map(Object.entries(this.currentWordSet.prompts));
            let keys = Array.from(map.keys());
            let newPrompt;
            let attempt = 1;
            do {
                console.debug(`Attempting to get prompt, attempt ${attempt}...`);
                newPrompt = keys[Math.floor(Math.random() * keys.length)];
            } while (newPrompt == this.prompt);
            return newPrompt;
        },
        getAnswer(x) {
            return this.currentWordSet.prompts[x];
        },
        sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
        change(x) {
            // clearInterval(this.timer);
            this.currentWordSetName = x;
            this.currentWordSet = wordSetMap.get(x);
            this.title = wordSetMap.get(x).title;
        },
        speak(text, language = null, rate = null) {
            let utterance = new SpeechSynthesisUtterance(text.replace("_", ""));
            if (language !== null) {
                utterance.lang = lang;
            }
            if (rate !== null) {
                utterance.rate = rate;
            }
            speechSynthesis.speak(utterance);
        }
    },
    async mounted() {
        this.timer = setInterval(async () => {
            nextPrompt = this.getPrompt();
            const shouldTalk = true;
            console.log(`shouldTalk = '${shouldTalk}'.`);
            if (shouldTalk) {
                const promptToSpeak = nextPrompt.replace("_", "");
                this.speak(promptToSpeak, this.currentWordSetName.toLowerCase().endsWith("ru") ? "ru-RU" : null);
            }

            console.log(`Got prompt: '${nextPrompt}'.`);
            this.answer = "🤔";
            this.prompt = nextPrompt;
            const answer = this.getAnswer(nextPrompt);
            console.log(`Got answer: '${answer}'.`);

            console.debug(`Sleeping for ${sleepAfterPromptMs} ms...`);
            await this.sleep(sleepAfterPromptMs);
            this.answer = answer;

            if (shouldTalk) {
                let answerUtterance = new SpeechSynthesisUtterance(answer.replace("_", ""));
                answerUtterance.lang = "fi-Fi";
                answerUtterance.rate = 0.8;
                speechSynthesis.speak(answerUtterance);
            }

            console.debug("Set answer.");
            console.debug(`Sleeping for ${sleepAfterAnswerMs} ms...`);
            await this.sleep(sleepAfterAnswerMs);
        }, sleepAfterPromptMs + sleepAfterAnswerMs);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
});

app.mount("#app");
