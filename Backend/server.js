import express from 'express';

const app = express()

// app.get('/', (req, res) =>{
//     res.send("Server is ready")
// })

//get a list of five jokes
app.get('/jokes', (req, res) =>{
    const jokes = [
  {
    id: 1,
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs!"
  },
  {
    id: 2,
    setup: "Why did the developer go broke?",
    punchline: "Because he used up all his cache."
  },
  {
    id: 3,
    setup: "Why do Java developers wear glasses?",
    punchline: "Because they can't C#."
  },
  {
    id: 4,
    setup: "How many programmers does it take to change a light bulb?",
    punchline: "None. It's a hardware problem."
  },
  {
    id: 5,
    setup: "Why was the function feeling sad?",
    punchline: "Because it didn't get a callback."
  },
  {
    id: 6,
    setup: "Why couldn’t the React component get a date?",
    punchline: "Because it didn’t know how to handle props!"
  }
];
    res.send(jokes);

})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`)
})