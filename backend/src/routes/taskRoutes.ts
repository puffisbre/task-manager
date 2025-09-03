import express from 'express';
import getTasks from '../../db/CRUD/taskCrud.ts';
import {Task} from '../../db/models/Task.ts';

const router = express.Router();

router.get("/", async (req, res) => {
try {
    const allUsers = await getTasks();
    return res.status(200).json(allUsers);
} catch (error) {
    return res.status(400).json({error: "Something went wrong" + error})
}
})

export default router;