# Socket.IO and Node.js sample
====================

This sample application was developed following the DZone tutorial, found in the [http://java.dzone.com/articles/getting-started-socketio-and](http://java.dzone.com/articles/getting-started-socketio-and) URL. The code created in the tutorial was converted to CoffeeScript, to beautify it.

## Running

To run the sample, first the **socket.io** module must be installed with the following command:

    npm install socket.io

The CoffeScript file must be compiled with the following command:

    coffee --compile --output ./ ./

Having the socket.io installed and the **app.js** file generated, it's possible to start the server with the following command:

    node app.js

Now to test just point a browser that supports WebSockets to the url [http://localhost:8080](http://localhost:8080).