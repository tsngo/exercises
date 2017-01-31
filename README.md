# Learning NodeJs using Unit Testing

## Setup
Run bash shell
run git clone https://git@github.com/tsngo/excercises ./excercises

### `GET /_health`:

Kubernetes health check endpoint that determines if:
- Express server is up
- MongoDB is up and connected

### `GET /pushback`

Get list of pushback for all companies 

### `GET /pushback/company/:company_id`

Get list of pushback for a given company 

### `POST /pushback/company/:company_id`

Add a pushback for a company

### `PUT /pushback/:pushback_id`

Update a pushback

### `DELETE /pushback/:pushback_id`

Delete a pushback

Check swagger spec for request and response schema

## yarn commands:

- `make yarn start`: start server
- `make yarn run start:dev` : start server in development mode
- `make yarn run worker`: start worker
- `make yarn run worker:dev` : start worker in development mode
- `make yarn run lint`: run eslint
- `make yarn run lint-fix`: run eslint in autofix mode
- `make yarn test`: run unit tests
- `make yarn run test:unit`: run unit tests
- `make yarn run test:e2e`: run end-to-end tests
- `make yarn run cover`: run test coverage
- `make yarn run dummy-data`: to generate dummy data

## Development:

Steps to develop

- Spin up Monolith service
- From UI microservice, Run rabbitevents worker: `while true; do make rabbitevents; done`
- `make`
- `make start`
- To check code lints: `make yarn run lint`
- To auto fix lints: `make yarn run lint-fix`
- To run tests: `make yarn test`
- To get code coverage: `make yarn run cover`