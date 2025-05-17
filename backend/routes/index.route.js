import { Router } from "express";
import { pool } from "../db";

const router = Router();

// router.get('/', async (req, res) => {
//     const result = await pool.query('SELECT 1 + 1 as result');
//     console.log(result);
//     res.json('ping');
// })

export default router;