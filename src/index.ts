import express from 'express';
import { config } from './config-manager';
import logger from './logger';
const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

async function main(): Promise<void> {
    app.listen(config.http.port, () => {
		logger.success(`Matchaming server was started on the port: ${config.http.port}`);
	});
}

main().catch(console.error);