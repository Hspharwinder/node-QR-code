const QRCode = require('qrcode');

// toDataURL
QRCode.toDataURL('I am a pony! test', function (err, url) {
    console.log('toDataURL ::: ', url);
})

// async await
const generateQR = async text => {
    try {
        console.log('async await ::::::::::: ',await QRCode.toDataURL(text))
    } catch (err) {
        console.error(err)
    }
}
generateQR(segs);

// toString
QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
    console.log('toString ::: ', url);


    const segs = [
        { data: 'ABCDEFG', mode: 'alphanumeric' },
        { data: '0123456', mode: 'numeric' }
      ]
})

// generate QR Image
QRCode.toFile('QRCode.png', 'orderid-201, email-abc@gmail, phone-8989898, fullname-abc', {
    color: {
      dark: '#00F',  // Blue dots
      light: '#0000' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
})


QRCode.toFile('QRCode-blackWhite.png', 'orderid-201, email-abc@gmail, phone-8989898, fullname-abc', {
    color: {
      dark: '#000000',  // Blue dots
      light: '#ffffff' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
})

QRCode.toFile('QRCode-whiteBlack.png', 'orderid-201, email-abc@gmail, phone-8989898, fullname-abc', {
    color: {
      dark: '#ffffff',  // Blue dots
      light: '#000000' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
})

// generate QR PDF
QRCode.toFile('QRCode.pdf', 'orderid-201, email-abc@gmail, phone-8989898, fullname-abc', {
    color: {
        dark: '#000000',  // Blue dots
        light: '#ffffff' // Transparent background
    }
}, function (err) {
    if (err) throw err
    console.log('done')
})


QRCode.decode(QRCode-whiteBlack.png)