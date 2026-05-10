import { getUser} from "./controller.js"
import { Router } from "express"

const router = Router();

router.get("/:id",  (req, res) => {
    res.set('Access-Control-Allow-Origin','http://localhost:5173');
    res.set('Content-type', 'aplication/json');
}, getUser)

export default router;


