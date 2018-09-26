# SANLUCSDE003

## Running the app

1) In your terminal run ```git clone https://github.com/thegreatsantini/SANLUCSDE003.git```

2) Open two separate termianl tabs.
    a) ```cd client && npm start```
    b) ```cd server && nodemon``` *npm start runs the server also*

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


## React.js client
I choose to use React as my frontend because of my familiarity with the technology. I also used react-bootstrap because it allows me to quickly spin up a clean UI displaying data in an easy to read way using panels, rows, col and their pre styled components. Create-react-app gives you a solid boilerplate for creating a SPA in React. Essentially every component is served through App.js and rendered in through Index.js. In order to use React to its fullest I am following the design patterns that I have learned through the way. An example of this is by creating a Routes.js component uses React-Router and it's switch component. Routes.js only contains the routes that will the use can hit. I render that component in the App.js so that every child component is being rendered through App.js and it keeps App.js cleaner by abstracting the entire routes o its own component, keeping the codebase more organized as it grows. The only other component that I am rendering in App.js in the navbar because that will appear on every route.

After creating the Home.js component, which is equivalent to the landing page. I created two other containers in the Containers directory. They are containers because they "contain" one or more smaller components. The two containers that I created where Facebook.js and Goodreads.js. These two containers will be rendered in their respective routes. Both containers are similar the only difference is that they make a different API request to fetch and render different data. They both have two initial states. The initial states are fetching <bool> and data <array>, they initialized as true and empty array. The fetching state is used to give react time to receive data from the server; I am using a ternary operator in the return statement to achieve this functionality. The LoadingScreen component receives props that allows me to reuse the same component is different places and change the message that is displayed based on the incoming props. When the component mounts there is an API call that will fetch the necessary data, the fetching state is set to false allowing the data to be rendered by passing the data to its respective component. When the data arrives the fetching state is set to false allowing the other component to be rendered. This is where the Goodreads.js and Facebook.js containers differ. Goodread.js contain GOodreadsQuotes.js and Facebook.js contains FacebookPosts.js. To increase render time, I am saving the incoming data in localstorage.

GoodreadsQuotes.js receives the quotes data as props. This component has no state its only purpose is to map through the incoming data and create the carousel UI. FacebookPosts.js follows a similar logic however it returns the data in separate panels for each post. Both of these components return an organized UI to its parent component.
