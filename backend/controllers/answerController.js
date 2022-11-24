const User = require('../models/userModel');

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

// Nth ROOT
exports.firstAnswer = async (req, res, next) => {
  try {
    let correct = false;
    if (req.body.answer === 'hts{bUzZ3d}') {
      correct = true;
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0] + 1, user.flags[1], user.flags[2]],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    res.status(200).json({
      status: 'success',
      correct,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
exports.firstAnswer1 = (req, res, next) => {
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
    const flag = result && correctAnswers++ > 3 ? 'bUzZ3d' : '';

    res.status(200).json({
      status: 'success',
      correctAnswers,
      result,
      flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// JUMBLER
exports.secondAnswer = async (req, res, next) => {
  try {
    const question = shuffle('lkcj');
    const flag = question === req.body.answer ? true : false;
    let correct = false;

    if (flag) {
      // Update user score and mark that he has attempted the test
      correct = true;
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0] + 1, user.flags[1], user.flags[2]],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      status: 'success',
      correct,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// COOKIE
exports.thirdAnswer = async (req, res, next) => {
  try {
    let correct = false;
    if (req.body.answer === 'hts{g0t_m3_pUrP1e}') {
      // Update user score and mark that he has attempted the test
      correct = true;
      const user = await User.findById(req.params.id);
      console.log(user.totalFlags);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0] + 1, user.flags[1], user.flags[2]],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log(updatedUser);
    }
    res.status(200).json({
      status: 'success',
      correct,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// COMPONENT HIDER
exports.fourthAnswer = async (req, res, next) => {
  try {
    const question = req.body.question;
    const answer = req.body.answer;

    const flag = 'hts{c0sM1c_dAwN}' === answer ? true : false;
    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0] + 1, user.flags[1], user.flags[2]],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      status: 'success',
      correct: flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// PROXY
exports.fifthAnswer = async (req, res, next) => {
  try {
    const flag = req.body.answer === 'hts{att-ach-me-nt}' ? true : false;
    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0], user.flags[1] + 1, user.flags[2]],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    res.status(200).json({
      status: 'success',
      correct: flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// SHERLOCK
exports.sixthAnswer = async (req, res, next) => {
  try {
    const flag = req.body.answer === 'hts{AC0n1ND0yL5}' ? true : false;
    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0], user.flags[1] + 1, user.flags[2]],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    res.status(200).json({
      status: 'success',
      correct: flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// NoSQL QUERY INJECTION
exports.seventhAnswer = async (req, res, next) => {
  try {
    const flag = req.body.answer === 'hts{mY_p2S5}' ? true : false;
    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0], user.flags[1] + 1, user.flags[2]],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    res.status(200).json({
      status: 'success',
      correct: flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// OCINT
exports.eighthAnswer = async (req, res, next) => {
  try {
    const flag = req.body.answer === 'hts{42.717_12.111}' ? true : false;
    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0], user.flags[1] + 1, user.flags[2]],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    res.status(200).json({
      status: 'success',
      correct: flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// XSS
exports.ninthAnswer = async (req, res, next) => {
  try {
    const flag = req.body.answer === 'hts{y0u_d1D_i7}' ? true : false;
    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0], user.flags[1], user.flags[2] + 1],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    res.status(200).json({
      status: 'success',
      correct: flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// REVERSING
exports.tenthAnswer = async (req, res, next) => {
  try {
    const flag = req.body.answer === 'hts{45}' ? true : false;
    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0], user.flags[1], user.flags[2] + 1],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    res.status(200).json({
      status: 'success',
      correct: flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// AUDIO VISUALIZER
exports.eleventhAnswer = async (req, res, next) => {
  try {
    const flag = req.body.answer === 'hts{f0u3d 5e}' ? true : false;
    if (flag) {
      // Update user score and mark that he has attempted the test
      const user = await User.findById(req.params.id);
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          flags: [user.flags[0], user.flags[1], user.flags[2] + 1],
          totalFlags: user.totalFlags + 1,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    res.status(200).json({
      status: 'success',
      correct: flag,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};
