
// require('./qr-code-generator');
// require('./qr-code-reader');
const express = require('express')
const app = express()
const port = 3000


// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const QRCode = require('qrcode');
    // toDataURL
   QRCode.toDataURL('I am a pony! test',  function (err, imagePath) {
    console.log('\n \n  toDataURL ::: ', imagePath);
    console.log('\n \n  toDataURL ::: ', err);
     return res.render('pages/index', { imagePath });
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})