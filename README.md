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

### Stripe Payment

Github: react-stripe-checkout documentation [https://github.com/azmenak/react-stripe-checkout](https://github.com/azmenak/react-stripe-checkout)

### Heroku

Download Heroku CLI documentation: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

`brew tap heroku/brew && brew install heroku`
`heroku --version`
`heroku login` 
`Logged in as <youremail>`

#### useful heroku command

* You don't have to run npm build with next command
`heroku create devzons-clothing --buildpack https://github.com/mars/create-react-app-buildpack.git`

* After setting up build pack, push project files 
`git push heroku master`

* Buildpack documentation
here [https://github.com/mars/create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)

### After Deploying Heroku

* Add heroku domain to Firebase to test Google Sign in

### Remove logger only in production

* update store.js file
```
const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
```
* next command will rebuild the app
`git push heroku master`

## Advanced Topics

### Live app
Here [https://devzons-clothing.herokuapp.com](https://devzons-clothing.herokuapp.com/)

### Firebase 

Firebase documentation [https://firebase.google.com/docs/firestore/quickstart](https://firebase.google.com/docs/firestore/quickstart)

* QueryReferences
* QuerySnapshot
* Security Rules

### QueryReference

`firestore.doc('/users/:userId')`
`firestore.collections('/users')`

#### DocumentReference vs CollectionReference

| DocumentReference | CollectionReference |
|---|---|
| documentRef | collectionRef |
|.set(), .get(), .update(), .delete() | .add() |