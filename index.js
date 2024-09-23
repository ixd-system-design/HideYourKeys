// import Express library and activate it
import express from "express";
const app = express();
// publish our static frontend files
app.use('/',express.static('./public')) 


// listen for requests from the frontend
app.get("/picture/:chosenDate", (req, res) => {   
    // assemble a url for NASA API
    let url = new URL ('https://api.nasa.gov/planetary/apod')
    url.searchParams.set('date', req.params.chosenDate)     // chosenDate via the URL.
    url.searchParams.set('api_key', process.env.NASA_KEY)   // API key via environment variable.
    // Relay the results back to the frontend
    fetch(url)
        .then(response => response.json())
        .then(json => res.send(json) )  
}); 



// Start Express
app.listen(process.env.PORT, () => { 
    console.log(`Express is now Live.`) 
    console.log(`Public URL: `+ process.env.PUBLIC_URL)
}); 
