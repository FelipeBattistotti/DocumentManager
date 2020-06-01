const crypto = require('crypto');

//const algorithm = 'aes-256-gcm';
//const key       = crypto.randomBytes(32);
//const iv        = crypto.randomBytes(16);

module.exports = function encryptPWD(pwdPar) {
    return crypto.createHash('sha256').update(pwdPar).digest('hex');
}
