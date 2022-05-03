# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Docker Installation

In order to build the Dockerfile.dev, please type the following command

```bash 
docker build -f Dockerfile.dev . 
```

Run the application

```bash
docker run -p [portinlocal][portindocker][hashvalue]
docker run -p 3000:3000 sha256:8844b994cf5d9265f5af9228a13e87c27782bcc241daaaf26aca51f97d9e252c
```

Reference mapped running application (Docker Volume)

```bash
docker run -p 3000:3000 -v $(pwd):/app 
sha256:8844b994cf5d9265f5af9228a13e87c27782bcc241daaaf26aca51f97d9e252c
```

Adding the volume for node_modules folder as well. 

```bash
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app 
sha256:8844b994cf5d9265f5af9228a13e87c27782bcc241daaaf26aca51f97d9e252c
```

### Implementing NPM Testing

```bash
docker build -f Dockerfile.dev .
```

```bash
docker run [container-id] npm run test
```

```bash
docker run -it 9a36fef70617692cb5c95e96b77d0d8c508f48890eb5d7a85e96 npm run test
```


### Building with docker-compose.yml 

Please type the following command: 

```bash 
docker-compose up --build 
```

### Important hint about the Docker exec and Docker run

The difference between “docker run” and “docker exec” is that “docker exec” executes a command on a running container. On the other hand, “docker run” creates a temporary container, executes the command in it and stops the container when it is done.

