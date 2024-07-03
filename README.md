# git-diff-application

## Project Structure

- We have 2 folders `client` and `server`
- The `client` directory contains the front-end code for the user interface (UI).
- The `server` directory contains the back-end code for the server.

## Prerequisites

- NodeJs version >= 18.18.2

## Setup Instructions

### Server

1. Navigate to the `server` directory:

    ```sh
    cd server
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the server:

    ```sh
    npm start
    ```

The server will run on [http://localhost:3001](http://localhost:3001) by default.

### Client

1. Navigate to the `client` directory:

    ```sh
    cd client
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the client:

    ```sh
    npm run dev
    ```

The client will run on [http://localhost:5173](http://localhost:5173) by default.
This route will show you the git diff of any commit of any public Github repository [http://localhost:5173/repositories/:owner/:repository/commit/:commitSHA](http://localhost:5173/repositories/:owner/:repository/commit/:commitSHA).

### GitHub Commit Diff Display Route

This route provides a method to display the git diff of any commit from a public GitHub repository.

#### Endpoint

- **URL:** `http://localhost:5173/repositories/:owner/:repository/commit/:commitSHA`
  - Replace `:owner` with the GitHub repository owner's username or organization name.
  - Replace `:repository` with the name of the GitHub repository.
  - Replace `:commitSHA` with the SHA (Secure Hash Algorithm) of the commit whose diff you want to display.

#### Functionality

- Retrieves and renders the git diff of the specified commit SHA.
- Presents the diff in a user-friendly format for easy review of changes made in the commit.

#### Usage

Use this route to:

- View changes made in any commit of a public GitHub repository.
- Facilitate code review and historical analysis of repository changes.

#### Example

For example, to view the git diff of commit `abc123` in the repository `myrepo` owned by `myusername`, use the following URL:

#### Notes

- Ensure you have NodeJs version >= 18.18.2 installed.
- Follow the instructions carefully for both the server and client setup.
