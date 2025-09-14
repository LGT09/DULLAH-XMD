const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || "DULLAH-MD;;;H4sIAAAAAAAAA5VVy47iRhT9l9qCBhsMNkgtxRhjm5fN2xDNonCV3y+qyoAZsZwvGEWtSPmPbLLrdT4i+YJ8QmS6e3oWyaTjVfn66txz7zm3/AmkWUDxGJeg9wnkJDhBhqsjK3MMeqBfuC4moA4QZBD0gKkP2oU3FYWS388mZJdE9kI6aXjq7pO9eBkIeOMhmUzP6foB3OogLw5x4HwHEHbpqHV2zLWruXHsWEJpY2XRiPuDTRaOjnaqR02ODRq26j2AW4UIAxKknpr7OMEExmNcWjAg76M/N87L68I01et4NGxA12Km5sTaARmLS1edeVszIDVhLpDh/H30bUk4be3y2Ny5/anT5E/osrKCYgh5tNzMTtwk9lnL3hyuWvZMnwZeipGBcMoCVr577klf5rRVaTbDbTbM5Hw8WlynB9O6WAZ/OnrH2ubcHszhUeCn7yNOomRTY9fxllwmnWJhbePTDI+EcNu8No9zc1wKbu2Ch5NImX5L3CKvXon+z9ypMW6PNR1Zg9N6E/My6uZC4vHePGrjUDTSoY2ifGGtwzh6H/3MTVJcENoaHkZm3J/xVhr2u/7kuh6K16LPU+Q4Whcjyebe6ENWkO+x9JrL/cpylgXX3JV9jyyzvNigMJ35tuErUwgpDQbzE7cyNdNyuRU5SGMvUxeyWbIj4vbbGUQqO1qJrZ1XHl5EttoJ5Yd7RxEuDQR6/K0OCPYCyghkQZbeY91OHUB0WmKHYHYfL9BK2zCkMshUrE0UjrlSI9zUxDDlbP2QNbWtjzvmKpOWyHsAdZCTzMGUYqQHlGWknGJKoYcp6P34sQ5SfGHPwlXlWlIduAGhbJ0WeZxB9Krq60foOFmRsmWZOkp1wAT0+LcwZixIPVrNsUghcfzghBUfMgp6Lowp/tohJhiBHiMF/rq1SoaqwXdmhiCY1hzUQXIXJECgB5qdlihxnCjxotiTpB/oh3MFC/P8Q4oZqIP4niZ0RYET+G6r25X4Kq8K10EKKyjw588/PT3+/svTow1zP4XMz2EaZOTp8Y9ff3t6/OvL5y+VGi+9VKURZjCIKegBxdpqJ7RW1EnLSuhO02TqyYong7feX030LJJTsKjZynypU27M7ZG0V5w5LDaX2mVXsHXROqb6XN2t2qEuPfwDCOiBvbIcbYVROJZ3+jwsFnqkT1hbHbfOu0ttZV9bc09cCQgW3Gbr67HqD9V90Zg1RCPTZVsZtWUDnmF/Ylttt0TGum20h4PKcXWA8Clw8LfF3MN+xjX7M3tuud2zHomL0dX0ayxqCujoCNMk9Wu1UB2sYmIpenuqK3qkU3JAg+VYNW3vsG4dt4cxqZkmWijFIGxgN3ix93294pdrLbgbr1K1enUDfL8lXgT6T5WfiVdm5G71bzBe7p1/2d2+PSH7GesYrknjVXw81tbdgX+IHZduJ2QzYZ38wvU1tba7NMDt9rEO8hgyNyNJ9RNKEcnuLiJZUbnbSN3sO8UUmTNk77nzGFImv23MKkgwZTDJQY8X26IkdNuC8JxlkSzXIfVBD6RJq3+o3F/Keb5kkL3uH5Crx4x9cPsb7M2Ta5sHAAA=",
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "DULLAH-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "263780078177",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'yes',
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'yes',
    ANTIBAD: process.env.ANTIBAD || 'no',
    GROUP_ANTILINK: process.env.GROUP_ANTILINK || 'yes',

    RMBG_KEY: "MLt7fM4Sqv63U9FAt6FdPKRL",

    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
