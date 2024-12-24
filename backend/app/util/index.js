const encodeBase64 = (value) => {
    return Buffer.from(value).toString('base64')
}

const decodeBase64 = (value) => {
    return Buffer.from(value, 'base64').toString()
}

module.exports = {
    encodeBase64,
    decodeBase64
}