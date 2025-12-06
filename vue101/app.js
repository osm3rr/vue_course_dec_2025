const app = Vue.createApp({
    data() {
        return {
            goalsA: 'Ir a la playa',
            goalsB: 'Ir a la montaña',
            vueLink: 'https://vuejs.org/',
        }
    },
    methods: {
        changeGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                
                return this.goalsA;
            } else {
                return this.goalsB;
            }
        }
    }
});

app.mount('#goals');


