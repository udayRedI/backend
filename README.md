# Starter boilerplate code to build server-side code with nodeJs, ES6, webpack4, nodemon, babel, jest, supertest and docker.
This project can help you bootstrap your server-side codebase.
I've added basic unit and integration tests to help further.

## What you get out of the box?
- [nodeJs](https://nodejs.org/en/)
- [ES6](http://es6-features.org) (with [babel](https://babeljs.io))
- [nodemon](https://nodemon.io/)
- [jest](https://jestjs.io/)
- [supertest](https://github.com/visionmedia/supertest#readme)
- webpack4
	- Webpack Babel loader configuration
	- Hot module replacement
- [Docker](https://docs.docker.com/)

<br /><br />
## Getting Started
### Install pre-requisites
- Node.js and NPM: [Download and install](https://nodejs.org/). *I have version 10.6.0 of Node and 6.1.0 of NPM on Ubuntu*
- Git

### Clone Repo
1. Get the url of your forked project.
    - Go to https://github.com/udayRedI/node-webpack-babel-starter
2. Click on **"Clone or download"** and Copy to clipboard the url ending on .git.
3. Open your command line and go to your directoy  
*You don't need to create a specific folder for the project, it will be created by git*
4. Clone your forked repo on your machine:
```
$ git clone https://github.com/udayRedI/node-webpack-babel-starter
```  
*Note: That will create a new folder called node-webpack-babel-starter with all the files in.*

### Install Project dependencies
Lets install dependencies using `npm`

```
$ cd node-webpack-babel-starter
$ npm install
```

### Start development server with Hot Reloading
```
$ npm start
```
Webpack watches `/src` folder then compiles using babel and creates a `backend.js` file in `dist` folder, next `nodemon` watches for changes in `dist` folder and restarts server on every change.


### Follow below steps to integrate docker

1. Install [docker](https://docs.docker.com/)
2. Run `docker stack deploy -c docker-compose.yml <stack-name>`

Server will is up.

### Debug docker container

1. Run `docker container ls` to checkout the docker-container infomation which is running.
2. Run 'docker exec -it <container-hash> bash' to login and debug server.
3. To stop the stack run `docker stack rm <stack-name>`.

### Your dev environment is ready! 
