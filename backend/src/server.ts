import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello MyApp GoStack'})
})

app.listen(3333, () => {
  console.log('Server started')
})