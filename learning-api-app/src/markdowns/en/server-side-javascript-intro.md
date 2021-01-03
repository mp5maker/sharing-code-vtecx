One of the feature of vtecxapi is that javascript functions can be used almost similar to lambda functions. You can upload the code using npm commands and this lambda function with serve your function from the server

First run create a file as below **ssr.html.tsx**
Then either run

This will deploy the file as well as watch the file that you are working on
  npm run watch:server -- --env.entry=/server/ssr.html.tsx


This will just deploy the function in the server
  npm run serve -- --env.entry=/server/ssr.html.tsx





You need keep you server script files in **src/server/** location