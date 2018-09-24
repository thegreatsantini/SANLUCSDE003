# SANLUCSDE003

To create a UI I used React with Create-React-App as my frontend framework and Node.js with express as my server. 
I placed them in separate files running them on separate ports so that it is a decoupled app. 

## Node.js Server
My express server is very simple as it is a small app. I am using Morgan for minimalist route logging and cors to allow cross-origin-access. I am using one controller (index route) because I only have two routes in my server with only read functionality so there was no need to abstract the controllers to different files. Finally I am listening on port 8080 that is different than my react app that will run on 3000.

/test
In my routes file I first created a /test route and used postman to test my server to make sure that it is working properly. I later made a fetch request in my react app to make sure that they are communicating properly. 

/api/v1/facebook
In my Facebook route I used the asyncExecCmd package to run the python script in the terminal it runs the same function created in part 1. I used this package because it supports a callback argument that also for synchronous scripting. I need to ensure that the Facebook scraping had been completed before reading the output file and sending the data to the client. 

/api/v1/goodreads
My goodreads route leverages the same function from part 1 put instead of running the same function through the terminal. I adapted it to run directly in route. This was a simple adaptation I simply removed the file system method to write to a new file and read it. I instead just used res.send to send the json directly to the client. 

## React.js client