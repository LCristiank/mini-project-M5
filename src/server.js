import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json()); // for

app.listen(PORT, () => {
    console.log(`PORTA RODANDO EM ${PORT}`);
})