# Learning Git with a Node.js app

A small Express application for practicing local Git workflows and publishing
to GitHub.

## Run locally

Install dependencies with `npm install`, then run `npm start`.
The app listens at http://localhost:8000. Nodemon restarts it when files change.

## Routes

- `GET /` returns `hello from skillsoft`.
- `POST /addemployee` accepts `empName` and `empPass` in a JSON or
	URL-encoded request body and returns the tutorial's confirmation message.

Use dummy values only: this learning exercise echoes the submitted password.
It does not store employees or implement authentication.

The entry point configures Express and body parsing; the routes module registers
the endpoints. Nodemon is a development dependency, and Git ignores node_modules.

## Git exercises

- Created and merged the `feature-router` branch into `main`.
- Practiced restoring an intentional uncommitted change.
- Extracted routing in three commits, then squashed them with an interactive
	rebase and amended the resulting message.
- Created annotated `v1.0.0` and lightweight `v1.0.0-lw` tags.
- Practiced checking out a tag and creating a temporary branch from it.

The PDF occasionally calls the POST endpoint `/employees`; the implemented route
in its code examples is `/addemployee`, which is the endpoint used here.
