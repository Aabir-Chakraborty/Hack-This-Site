// CRYPTO ENCRYPTION DATA
const crypto = require('crypto');
const algorithm1 = 'aes-256-cbc';
const algorithm2 = 'aes-192-cbc';
const key1 = crypto.randomBytes(32);
const key2 = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm1, Buffer.from(key1), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
  let iv = Buffer.from(text.iv, 'hex');
  let encryptedText = Buffer.from(text.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv(algorithm1, Buffer.from(key1), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// var hw = encrypt('Hack-the-site-SAT');
// console.log(hw);
// console.log(decrypt(hw));

const randomString = (len = 1) => {
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < len; i++) {
    let randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
};

// FUNCTION TO SHUFFLE STRING
function shuffle(s) {
  let arr = s.split(''); // Convert String to array

  arr.sort(function () {
    return 0.5 - Math.random();
  });
  s = arr.join(''); // Convert Array to string
  return s; // Return shuffled string
}

// Nth Root Algorithm
exports.firstQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'RootN',
      link: '/findR',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
// Nth Root Algorithm number generator
exports.firstQuestion1 = (req, res, next) => {
  try {
    let number = 0;
    while (number % 10 == 0) {
      number = Math.floor(Math.random() * 89 + 10);
    }
    const num = `${Math.floor(number / 10)} ${number % 10}`;
    res.status(200).json({
      status: 'success',
      data: num,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// Rejumbled
exports.secondQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Never Give Up',
      question: 'No need to submit in hts{} format',
      link: 'https://jumbler2.netlify.app/',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
exports.secondQuestion1 = (req, res, next) => {
  try {
    let string = 'lkcj';
    shuffle(string);

    res.status(200).json({
      status: 'success',
      string,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// Cookie hider
exports.thirdQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Yummm',
      link: 'https://cookie-finder.netlify.app/',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
// Cookie hider generator
exports.thirdQuestion1 = (req, res, next) => {
  try {
    const answer = 'g0t_m3_pUrP1e';
    res.cookie(':)', answer);

    res.status(200).json({
      status: 'success',
      answer,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// Component Hider
exports.fourthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Flip',
      link: 'https://flippityflipper.netlify.app',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
// Component Hider Generator
exports.fourthQuestion1 = (req, res, next) => {
  try {
    const answer = encrypt(randomString(12));

    res.status(200).json({
      status: 'success',
      data: answer,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// Proxy
exports.fifthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      name: 'Route',
      link: 'https://proxy11.netlify.app/',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
exports.fifthQuestion1 = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    food: 'biryani',
    taste: 'good',
    review: '5',
    string: 'att',
    data: 'res.json',
    cool: 'strigify',
  });
};
exports.fifthQuestion2 = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    food: 'biryani',
    taste: 'good',
    review: '5',
    string: 'g',
    data: 'ach',
    cool: 'stringify',
  });
};
exports.fifthQuestion3 = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    food: 'yagi',
    taste: 'ok',
    review: '3',
    string: 'me',
    data: 'res.json',
    cool: 'stringiy',
  });
};
exports.fifthQuestion4 = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    food: 'paneer',
    taste: 'good',
    review: '4.5',
    string: 'f',
    data: 'nt',
    cool: 'stringfy',
  });
};

// SHERLOCK
exports.sixthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Sherlock',
      question: 'awe45cnw094fnsdc0ww3',
    });
  } catch (err) {
    res.status(400).json({
      status: 'success',
      message: err.message,
    });
  }
};

// NoSQL
exports.seventhQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Bypass',
      question: 'nnvssbveihlaswj',
      link: 'https://bypass12.netlify.app/',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// OSINT
exports.eighthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Pizza',
      question: 'Flag in this format hts{11.111_11.111}',
      link: 'https://cdn.discordapp.com/attachments/732682111462539276/997545552080281660/IMG_2901.jpg#IMG_2901.jpg',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// XSS
exports.ninthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Alert me',
      question: 'Welcome to the site please introduce yourself to us',
      link: 'https://selfalerter.netlify.app/',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// Reversing
exports.tenthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Break me',
      link: 'https://drive.google.com/file/d/1lGLjXzQQRtoZY-m4dxwxgPgiiOMNj0Cw/view?usp=sharing',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// Audio Visualizer
exports.eleventhQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Graph-ite',
      link: 'https://drive.google.com/file/d/1a3AQZ0IiLj1dc2oKY1kJ7aE9asu362fX/view?usp=sharing',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
