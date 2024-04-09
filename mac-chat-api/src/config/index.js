import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb+srv://iamdabria:z6b4cr2L%%@cluster0.jvanrsl.mongodb.net/",
  "bodyLimit": "100kb"
}
