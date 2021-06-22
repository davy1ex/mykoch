import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';
// const url_ya_map = "https://api-maps.yandex.ru/2.1/?apikey=" + process.env.api_key +"&lang=ru_RU";
// import * as ymaps from url_ya_map;

new Vue({
    el: '#app',
    data() {
        return {workouts: [], previewSection: false}

        
    },
    
    methods: {
        async showPreviewSection(workout) {            
            this.previewSection = !this.previewSection;
            console.log(this.previewSection)
            this.workout = workout
            
            
            console.log('map is here')
            var myMap;
            
            // Дождёмся загрузки API и готовности DOM.
            ymaps.ready(init);
    
            function init () {
                // Создание экземпляра карты и его привязка к контейнеру с
                // заданным id ("map").
                myMap = new ymaps.Map('map', {
                    // При инициализации карты обязательно нужно указать
                    // её центр и коэффициент масштабирования.
                    center: [55.76, 37.64], // Москва
                    zoom: 10
                }, {
                    searchControlProvider: 'yandex#search'
                });
    
            }
            console.log('map is here')
        },

        async hidePreviewSection() {            
            console.log('haha')
            this.previewSection = !this.previewSection
        },

        
            
        
    },

    async mounted() {
        this.workouts = await request('/api/get_workouts')
        console.log(this.workouts)
        this.loading = false
    }
})

async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body

        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response.json()
    }
    catch (e) {
        console.warn('Error:', e.message)
    }
}

