const app = require('./app')
const port = process.env.PORT || 8000
const mongoose = require('mongoose');

// MONGODB CLOUD CONNECTION
mongoose.connect(process.env.DATABASE).then((data) => {
    console.log(`MONGODB CONNECTED WITH SERVER: ${data.connection.host}`)
}).catch(err => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})