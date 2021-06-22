const express = require('express')
const path = require('path')
const app = express()

const WORKOUT_GROUNDS = [
    {id: 1, title: 'Workout 1', geo: '55\' 42\' 342\''},
    {id: 2, title: 'Workout 2', geo: '145\' 32\' 342\''},
    {id: 3, title: 'Workout 3', geo: '55\' 235\' 342\''}
]


app.get('/api/get_workouts', (req, res) => {
    res.status(200).json(WORKOUT_GROUNDS)
})


app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'), {api:process.env.api_key})
})

app.listen(3000, () => console.log('im start'))