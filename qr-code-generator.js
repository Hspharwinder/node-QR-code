const QRCode = require('qrcode');

// toDataURL
QRCode.toDataURL('I am a pony! test', function (err, url) {
    console.log('\n \n toDataURL ::: ', url);
})

// async await
const generateQR = async text => {
    try {
        console.log('\n \n async await ::::::::::: ',await QRCode.toDataURL(text))
    } catch (err) {
        console.error(err)
    }
}

const segs = [
  { data: 'ABCDEFG', mode: 'alphanumeric' },
  { data: '0123456', mode: 'numeric' }
]
generateQR(segs);

// toString
QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
    console.log('\n \n toString ::: ', url);
})

// generate QR Image
QRCode.toFile('QRCode.png', 'orderid-201, email-abc@gmail, phone-8989898, fullname-abc', {
    color: {
      dark: '#00F',  // Blue dots
      light: '#0000' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log('\n \n QRCode.png done')
})


QRCode.toFile('QRCode-blackWhite.png', 'orderid-201, email-abc@gmail, phone-8989898, fullname-abc', {
    color: {
      dark: '#000000',  // Blue dots
      light: '#ffffff' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log('\n \n QRCode-blackWhite.png done')
})

QRCode.toFile('QRCode-whiteBlack.png', 'orderid-201, email-abc@gmail, phone-8989898, fullname-abc', {
    color: {
      dark: '#ffffff',  // Blue dots
      light: '#000000' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log('\n \n QRCode-whiteBlack.png done')
})

// generate QR PDF
QRCode.toFile('QRCode.pdf', 'orderid-201, email-abc@gmail, phone-8989898, fullname-abc', {
    color: {
        dark: '#000000',  // Blue dots
        light: '#ffffff' // Transparent background
    }
}, function (err) {
    if (err) throw err
    console.log('\n \n QRCode.pdf done')
})