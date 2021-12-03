const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './my-uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploader = multer({ storage: storage });
app.post('/upload', uploader.single('file'), (req,res) => {
  console.log('done');
});

// app.use(express.json()); // parse body

// app.get('/get-test', (req, res) => {
//   //req represents connection from client
//   //res used for sending data back
//   console.log(req.query);
//   res.send('hello');
// });

// app.post('/post-test', (req, res) => {
//   console.log(req.body);
//   console.log(req.query);
//   res.send('hello from post');
// });

app.listen(3003, () => console.log('running'));