<<<<<<< HEAD
var os = require('os');

console.log(os.hostname);
console.log(os.freemem);
console.log(os.totalmem);
console.log(os.cpus);
console.log(os.networkInterfaces);
=======
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});
>>>>>>> de982b1e4032b90cb8104b2be4c589fbd5cc8df6
