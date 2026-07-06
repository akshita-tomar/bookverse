import { Request, Response } from "express";
import { MESSAGES } from "../constants/messages";

class HomeController {
    public static home(req: Request, res: Response): void {
        res.status(200).json({
            success: true,
            message: MESSAGES.general.home,
        });
    }
}

export default HomeController;