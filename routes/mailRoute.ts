import { Router } from "https://deno.land/x/oak/mod.ts";
import mailController from '../controller/mailController.ts';

const router = new Router();

router.post("/sendMail", mailController.sendMail);

export default router;
