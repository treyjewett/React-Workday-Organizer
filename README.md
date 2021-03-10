# React Workday Organizer

![badge](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)

A calendar app to help manage your daily tasks.

## The Project

Every employee needs a way to manage their tasks throughout the day. This is a very simple app to help the user organize the day ahead. The user simply inputs the task they have at a specific hour and presses "save". The task will remain, even if the page is reloaded.

## Table of Contents
- [Code Utilized](#code-utilized:)
- [What to Expect](#what-to-expect:)
- [Rendered Website](#rendered-website:)
- [License](#license:)
- [Lessons Learned](#lessons-learned:)
- [More about React](#more-about-react:)

## Code Utilized

This project was constructed using React | BootStrap | React-Moment | Moment | CSS.

## What to Expect

When the Organizer is loaded:
- The user will see the title "Work Day Scheduler" as well as a short introduction sentence.
- The current date will be displayed under the title.
- Below the blue divider, blocks divided buy business hours in the day are displayed with placeholder text letting the user know where to input their tasks.
- After the user inputs the task needed for the day, they can click the blue save button and the event will remain even if the page is reloaded.
- If the user types over an existing event, the old event is replaced with the new one.
- The hour block change color depending on what time of day it is.
- If the time has passed that of the hour block, the expired block will be grayed out to signify the event has expired.
- The current hour is hilighted and attenting-grabbing so the user can find what time it is faster.
- Future time slots are colored green to show they are still available.

## Rendered Website

This application is deployed on GitHub Pages.

<img src="public\assets\img\website.png" alt="Rendered Workday Organizer">

To visit the application, please follow the link below:

<a href="https://treyjewett.github.io/React-Workday-Organizer/" target ="_blank">View the Workday Organizer Here!</a>

## License

This project is using MIT.

## Lessons Learned

React is incredibly complex, and super powerful. I took a very minimalist app that was 129 lines of code and was able to render the same app with just 54 lines using React. With that being said, I am new to React and this was a crazy learning curve. There is a lot more to explore and I am excited to see what React has to offer!

-------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------

# More about React

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
