# Config Updates to The ShopMate Codebase

This document contains detailed information the changes made to the ShopMate codebase. The changes aim to configure the codebase to allow developers to contribute both server and client code to the same codebase with minimal setup and overhead.

## What's New?

- **`/server` and `/client` Directories in the `/src` directory**: This setup splits the codebase into two unique sections, *client* and *server*. As the names of the directory implies, the developers working on the respective sections are meant to have the source code in the corresponding directories, client for *frontend* code, and server for *backend* code.

- **Installation of new dependencies**: I have installed a number of dependencies that are relevant to setting up this configuration. The dependencies installed include:
  - `vite-express`: Combines the power of Vite and Express.js in one codebase.
  - `@types/node`: Contains type annotations for Node.js.
  - `@types/express`: Contains type annotations for Express.js.
  - `nodemon`: Used for auto-restarting the server, when changes are made to files in the `/src/server` directory.

It is also worthy of note that changes to client side code will still update normally (not a full server reload), only changes to server code will cause the server to restart.

## Next Steps

- The developers are to come together and make a list of packages they want installed and one of them should run the installation and then push the changes.