const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const productsRouter = require('./routes/productsRoutes')

app.use(express.json())
app.listen(8080, () => {
    console.log('Server up...');
})
app.use('/api', userRouter);
app.use('/api', productsRouter);