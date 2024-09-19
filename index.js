const express = require('express');
const cors = require('cors')
const authRoutes = require('./routes/auth-route')
const userRoutes = require('./routes/user-route')
const productRoutes = require('./routes/product-route')


const app = express();
app.use(cors())

app.use(express.json());

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/product', productRoutes)

app.listen(8000, () => console.log('Server is running on port 8000'));