# How does this app work?
Just a quick reminder of how the website works for when I come back to it.

## Frontend
- The frontend is made using React with multiple components for each part of the UI
- The app is loaded from the index.js and app.js files, app.js has the basic layout
- All the CSS is in the App.css file
- Uses the context API to manage state

### Context API
- A call from one of the components such as getTransactions goes through state
- Uses the useEffect hook
- Calls the function from GlobalState.js (in the GlobalProvider)
- These functions dispatch requests to the AppReducer
- The AppReducer functions will return the updated information and arrays required
- The GlobalState functions will also use axios to send http requests to the server

## Backend
- The backend uses Node.js, Express and MongoDB
- The DB is connected in the db.js file in config, that method is called in server.js
- server.js sets up the express server, setting up the paths and routing

### Database
- A MongoDB database, can put in your MongoDB URI in the config.env file
- The Schemas are in the Models folder for both account and transaction
- Can monitor the db in the MongoDB Atlas website

### Routing
- server.js sets up the paths and gets the routes from the routes file
- The routes file sets up which functions in the controllers will be called on a get, post or delete request
- The functions in the controllers files actually send the http requests, update the db and monitor for errors