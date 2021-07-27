const bcrypt = require('bcrypt');

async function crypto(pws) {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(pws, salt)
    return password;
}

module.exports = {
    crypto
}