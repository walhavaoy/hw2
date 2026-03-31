import { app } from './app.js';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  process.stdout.write(`Server listening on port ${PORT}\n`);
});

export { app, server };
