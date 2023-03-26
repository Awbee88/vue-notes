const app = { 
    data() {
        return {
            counter: 0,
            title: "Список заметок",
            inputValue: '',
            notes: ["Заметка 1", "Заметка 2", "Заметка 3", "Заметка 4", "Заметка 5"]
        }
    },
    methods: {
        pushNote() {
            if (this.inputValue) {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        removeNote(ind) {
            this.notes.splice(ind, 1);
            console.log(ind);
        }
    },
}

Vue.createApp(app).mount("#app");

