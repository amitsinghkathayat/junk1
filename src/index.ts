import express, { Express, Request, Response } from 'express';
import ip from 'ip';
const PORT = 8100;
const app: Express = express();

function getRoot(re: Request, res: Response): void {
  res.send('Hello World!');
}

function handleListenEvent(): void {
  console.log(`Listening on port http://${ip.address()}:${PORT}`);
}

app.get('/', getRoot);
app.listen(PORT, handleListenEvent);
