const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


const uri = 'mongodb://0.0.0.0:27017/'
const client = new MongoClient(uri);



async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // client.connect();

        const userCollection = client.db("Simple_Auth").collection("user");


        // add toys from Add a toy route
        app.post('/user', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            console.log("user", user, "result:", result);
            res.send(result);
        });


        // display toys to all toys route
        app.get('/all_user', async (req, res) => {
            const cursor = await userCollection.find().toArray();
            console.log("all users from home", cursor);
            res.send(cursor);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', async (req, res) => {
    res.send('server is running');
})

app.listen(port, () => console.log(`server running on ${port}`))