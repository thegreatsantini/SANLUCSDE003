# SANLUCSDE003

## Running the app

1) In your terminal run ```git clone https://github.com/thegreatsantini/SANLUCSDE003.git```

2) Open two separate termianl tabs.
    a) ```cd client && npm start```
    b) ```cd server && npm start```

To create a UI I used React with Create-React-App as my frontend framework and Node.js with express as my server. 
I placed them in separate directories running them on separate ports because it is a decoupled app. 

## Node.js Server

My express server is very simple, I am just using what I need. I am using Morgan for minimalist CLI logging and cors to allow cross-origin-resource-sharing. I am using one controller (index route) because I only have two routes in my server with only read functionality so there was no need to abstract the controllers to different files. Finally I am listening on port 8080 that is different than my react app that will run on 3000.

/test
In my routes file I first created a /test route and used postman to test my server to make sure that it is working properly. I later used this route communicating properly to test that my react app and server are communicating properly.

/api/v1/facebook
In my Facebook route I used the asyncExecCmd package to run the python script in the terminal it runs the same function created in part 1. I used this package because it supports a callback argument that also for synchronous scripting. I need to ensure that the Facebook scraping had been completed before reading the output file and sending the data to the client. 

/api/v1/goodreads
My goodreads route leverages the same function from part 1 put instead of running the same function through the terminal. I adapted it to run directly in route. This was a simple adaptation I simply removed the file system method to write to a new file and read it. I instead just used res.send to send the json directly to the client. 

/auth 
This is where I implented some of the Oauth logic. this route implements the goodreads Oauth strategy for authentication and redirects back to the website (localhost://3000) with a 1 at the end of the url. The one means that the user has logged in successfully. This logic was used to keep the app simple and not require a DB.

passport.js
This is where I created the goodreads Oauth strategy to redirect the user to goodreads to loggin with their username and password. It also includes the callback url to ping the server back once the user has succesfully authenticated.


## React.js client
I choose to use React as my frontend because of my familiarity with the technology. I also used react-bootstrap because it allows me to quickly spin up a clean UI displaying data in an easy to read way using panels, rows, col and their pre styled components. Create-react-app gives you a solid boilerplate for creating a SPA in React. Essentially every component is served through App.js and rendered in through Index.js. One optimal React design pattern I chose to follow was placing all routes into their own Routes.js component, which uses React-Router and its 'switch' component. Routes.js only contains the routes that will the user can hit. I render that component in the App.js so that every child component is being rendered through App.js and it keeps App.js cleaner by abstracting the entire routes o its own component, keeping the codebase more organized as it grows. The only other component that I am rendering in App.js in the navbar because that will appear on every route.

After creating the Home.js component, which is equivalent to the landing page. I created two other containers in the Containers directory. They are containers because they "contain" one or more smaller components. The two containers that I created where Facebook.js and Goodreads.js. These two containers will be rendered in their respective routes. Both containers are similar the only difference is that they make a different API request to fetch and render different data. They both have two initial states. The initial states are fetching <bool> and data <array>, they initialized as true and empty array. The fetching state is used to give react time to receive data from the server; I am using a ternary operator in the return statement to achieve this functionality. The LoadingScreen component receives props that allows me to reuse the same component is different places and change the message that is displayed based on the incoming props. When the component mounts there is an API call that will fetch the necessary data, the fetching state is set to false allowing the data to be rendered by passing the data to its respective component. When the data arrives the fetching state is set to false allowing the other component to be rendered. This is where the Goodreads.js and Facebook.js containers differ. Goodreads.js contain GoodreadsQuotes.js and Facebook.js contains FacebookPosts.js. To increase render time, I am saving the incoming data in localstorage.

GoodreadsQuotes.js receives the quotes data as props. This component has no state its only purpose is to map through the incoming data and create the carousel UI. FacebookPosts.js follows a similar logic however it returns the data in separate panels for each post. Both of these components return an organized UI to its parent component.

Goodreads.js *Oauth implementation*
While I am using a terneray statement to conditionally render will the data is being retrieved. I am using a tradtional if else statement to wether the user is logged in or not. I choose to do this becuae it is cleaner to read. When the component mounts it make a check to the localStorage and the current url to see if the user has authenticated with goodreads with the checkUser function. If the url ends with a 1 than the user has just logged in this means that the logged in state will be set to true and this will also be set in localStorage. There is a second check in case the user naviagates away from that component. It checks localStorage if the user is logged in. If either of these checks are truethy then the fetchQuotes function will be ran and Mark Twain's quotes will be displayed. 