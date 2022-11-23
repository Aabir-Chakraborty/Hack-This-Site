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

// Nth Root Algorithm
exports.firstQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Shoot',
      question: 'Road to Salem',
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
    console.log(number);
    while (number % 10 == 0) {
      number = Math.floor(Math.random() * 89 + 10);
    }
    res.status(200).json({
      status: 'success',
      data: number,
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
      link: "jdadoakas"
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
exports.secondQuestion1=(req,res,next)=> {
  try {
    const data = 'lkcj';
    res.status(200).json({
    status: 'success',
    data
  });} catch(err) { res.status(400).json({
    status: 'failed',
    message: err.message,
  });}
}

// Cookie hider
exports.thirdQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Yummm',
      question: 'Tim Hortons > Starbucks',
      link: 'fhjsdaodoa',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
// Cookie hider generator
exports.thirdQuestion = (req, res, next) => {
  try {
    const answer = randomString(12);

    res.cookie(':)', answer);

    res.status(200).json({
      status: 'success',
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
      link: 'jnfaneajkw',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
// Component Hider Generator
exports.fourthQuestion = (req, res, next) => {
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
      name: 'Apes',
      link: 'ahduandiuas',
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
    string: 'k',
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
    data: 'res.json',
    cool: 'stringify',
  });
};
exports.fifthQuestion3 = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    food: 'yagi',
    taste: 'ok',
    review: '3',
    string: 'm',
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
    data: 'res.json',
    cool: 'stringfy',
  });
};

exports.sixthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Detective',
      link: '221B street',
    });
  } catch (err) {
    res.status(400).json({
      status: 'success',
      message: err.message,
    });
  }
};

exports.seventhQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Login',
      link: 'jdfhawifwiaf',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.eighthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Nalin',
      question: 'Nalin',
      link: 'Nalin',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.ninthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Hello',
      question: 'Welcome to the site please introduce yourself to us',
      link: 'placeholder',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.tenthQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'The Big Three',
      link: 'reversing file',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.eleventhQuestion = (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      name: 'Nalin',
      question: 'Nalin',
      link: 'Nalin',
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
