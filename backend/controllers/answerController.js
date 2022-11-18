const User = require('../models/userModel');
const errorResponse = require('../utils/catchError');

// CRYPTO ENCRYPTION DATA
const crypto = require('crypto');
const { findById } = require('../models/userModel');
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

// FUNCTION TO SHUFFLE STRING
function shuffle(s) {
  let arr = s.split(''); // Convert String to array

  arr.sort(function () {
    return 0.5 - Math.random();
  });
  s = arr.join(''); // Convert Array to string
  return s; // Return shuffled string
}

exports.firstAnswer = (req, res, next) => {
  try {
    let correctAnswers = req.body.correctAnswers;
    const root = req.body.question % 10;
    const number = (req.body.question / 10) % 10;
    const givenAnswer = req.body.answer;
    const actualAnswer = Math.pow(number, 1 / root);

    const result =
      (Math.abs(givenAnswer - actualAnswer) / givenAnswer) * 100 < 3
        ? true
        : false;
    const flag = result && correctAnswers++ > 3 ? true : false;

    res.status(200).json({
      status: 'success',
      correctAnswers,
      result,
      flag,
    });
  } catch (err) {
    errorResponse(404, err);
  }
};

exports.secondAnswer = async (req, res, next) => {
  try {
    const question = shuffle(req.body.question);
    const flag = question === req.body.answer ? true : false;

    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0] + 1, user.flags[1], user.flags[2]],
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      status: 'success',
      flag,
    });
  } catch (err) {
    errorResponse(404, err);
  }
};

exports.thirdAnswer = (req, res, next) => {
  try {
    const question = req.body.question;
    const answer = req.body.answer;

    const flag = decrypt(question) === answer ? true : false;

    res.status(200).json({
      status: 'success',
      flag,
    });
  } catch (err) {
    errorResponse(404, err);
  }
};

exports.fourthAnswer = (req, res, next) => {
  try {
    const question = req.body.question;
    const answer = req.body.answer;

    const flag = decrypt(question) === answer ? true : false;

    res.status(200).json({
      status: 'success',
      flag,
    });
  } catch (err) {
    errorResponse(404, err);
  }
};

exports.fifthAnswer = (req, res, next) => {
  try {
    const flag = req.body.answer >= 80 && req.body.answer <= 89 ? true : false;

    res.status(200).json({
      status: 'success',
      flag,
    });
  } catch (err) {
    errorResponse(404, err);
  }
};

exports.sixthAnswer = (req, res, next) => {
  try {
    if (req.body.answer === '3284923ire29') {
      res.status(200).json({
        status: 'success',
        flag: true,
      });
    } else {
      res.status(200).json({
        status: 'success',
        flag: false,
      });
    }
  } catch (err) {
    errorResponse(404, err);
  }
};

exports.seventhAnswer = (req, res, next) => {
  try {
    if (req.body.answer === '4759232') {
      res.status(200).json({
        status: 'success',
        flag: true,
      });
    } else {
      res.status(200).json({
        status: 'success',
        flag: false,
      });
    }
  } catch (err) {
    errorResponse(404, err);
  }
};

exports.eighthAnswer = (req, res, next) => {
  try {
  } catch (err) {
    errorResponse(404, err);
  }
};

exports.ninthAnswer = (req, res, next) => {};
try {
} catch (err) {
  errorResponse(404, err);
}

exports.tenthAnswer = (req, res, next) => {
  try {
  } catch (err) {
    errorResponse(404, err);
  }
};
