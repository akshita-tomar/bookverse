import app from "./app";
import ENV from "./config/env";
import { initializeDatabase } from "./config/database";
import { MESSAGES } from "./constants/messages";

const startServer = async (): Promise<void> => {
    try {
        await initializeDatabase();

        app.listen(ENV.PORT, () => {
            console.log(MESSAGES.server.started);
            console.log(`Server running on port ${ENV.PORT}`);
        });
    } catch (error) {
        console.error(MESSAGES.server.startupFailed, error);
        process.exit(1);
    }
};

startServer();