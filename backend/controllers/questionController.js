const errorResponse = require('../utils/catchError');

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
    let number = 0;
    console.log(number);
    while (number % 10 == 0) {
      number = Math.floor(Math.random() * 89 + 10);
    }

    res.status(200).json({
      status: 'success',
      number,
    });
  } catch (err) {
    errorResponse(404, err);
  }
};

// Rejumbled
exports.secondQuestion = (req, res, next) => {
  try {
    const question = randomString(5);

    res.status(200).json({
      status: 'success',
      question,
    });
  } catch (err) {
    errorResponse(404, err);
  }
};

// Cookie hider
exports.thirdQuestion = (req, res, next) => {
  try {
    const answer = randomString(12);

    res.cookie(':)', answer);

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    errorResponse(404, err);
  }
};

// Component Hider
exports.fourthQuestion = (req, res, next) => {
  const answer = randomString(12);

  res.status(200).json({
    status: 'success',
    answer: encrypt(answer),
  });
};

// Proxy
exports.fifthQuestion = (req, res, next) => {};

exports.sixthQuestion = (req, res, next) => {};

exports.seventhQuestion = (req, res, next) => {};

exports.eighthQuestion = (req, res, next) => {};

exports.ninthQuestion = (req, res, next) => {};

exports.tenthQuestion = (req, res, next) => {};
