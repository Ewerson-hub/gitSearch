import { getUser, fakeData} from "./controller.js"
import { Router } from "express"

const router = Router();

router.get("/:id",  (req, res, next) => {
    res.set('Access-Control-Allow-Origin','http://localhost:5173');
    res.set('Content-type', 'aplication/json')
    next();
}, getUser)

export default router;


