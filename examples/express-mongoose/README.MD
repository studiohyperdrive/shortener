# Express + Mongoose URL Shortener example

This repository includes a minimal example of how you would implement the usage of `@studiohyperdrive/shortener` in Express & Mongoose.

⚠️ The code included in this example is purely intented to showcase the usage of the package named aboved. You should code your actual shortener much more defensively.

## How to use:

### Prerequisites

- MongoDB should be running on localhost:27017

### Commands

1) `npm install`: install the dependencies
2) `npm start`: start the application on localhost:3000

## API

### [Routes](./routes/index.js)

#### POST `/api/shorten`
_parameters:_ `url` (the url you want to shorten)
_action:_ responds with a shortened url

#### GET `/:id`
_parameters:_ `id` (the id of the url you want to unshorten)
_action:_ redirects you to your original url

### [Controller](./controllers/url.js)

Additionally, when a shortened url is unshortened, a `counter`-property is increased in the database to keep track of how many times a shortened url has been used.
