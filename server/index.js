import path from 'path';
import express from 'express';
import { htmlTemplate } from './template';
import { logger } from './utils/logger.utils';

const app = express();

app.use('/', express.static(path.resolve(process.cwd(), 'static')));
app.use('/public', express.static(path.resolve(process.cwd(), 'dist')));

app.get('/*', (request, response) => {
	const html = htmlTemplate();
	response.send(html);
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
	const code = error.code || 500;
	logger.error(error);
	response.status(code).send(error.message);
});

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
	console.log(`Server started listening on PORT : ${PORT}`);
})
