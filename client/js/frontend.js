import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

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