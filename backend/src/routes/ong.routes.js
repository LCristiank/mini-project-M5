
import { Router } from "express";


const ongRoute = Router();

ongRoute.get('/', (req, res) => {
    res.send('Olá, mundo! Esta é uma mensagem da rota GET.');
  });

export { ongRoute }
// Rota GET que retorna uma mensagem
