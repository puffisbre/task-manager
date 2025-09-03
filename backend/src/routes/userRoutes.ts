import express from 'express';
import getUser from '../../db/CRUD/userCrud.ts';
import {User} from '../../db/models/User.ts';

const router = express.Router();

router.get("/", async (req, res) => {
try {
    const allUsers = await getUser();
    return res.status(200).json(allUsers);
} catch (error) {
    return res.status(400).json({error: "Something went wrong" + error})
}
})

export default router;