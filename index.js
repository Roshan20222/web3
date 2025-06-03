const crypto = require('crypto');

const input = "i love pizza";
const hash = crypto.createHash('sha256').update(input).digest('hex');