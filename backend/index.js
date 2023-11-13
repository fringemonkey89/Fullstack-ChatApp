const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "bc1187b0-2665-4528-b447-ecccda5be371" } }
    )
    return res.status(r.status).json( r.data );
  } catch(e) {
    return res.status(e.response.status).json(e.response.data)
  }
  
});



app.listen(3001, () => {
    console.log('server is running on port 3001')
});