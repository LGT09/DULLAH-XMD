const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || "DULLAH-MD;;;H4sIAAAAAAAAA61Va4+iSBT9K5v6qhnljSadLCAoKoqo7WOzH0qowlJeFgWIE//7Bu2e6ezszvQmy6eiqLr3nHPPvXwFSUpyNEE16H8FGSUlZKhZsjpDoA/0AmNEQRsEkEHQB4U+my9W5DBMEq5VcttcXfLuOnHxnsnWNJ/Sen1SsxAH5+oF3NsgKw4R8X8SsKvvN1KYxN4FnmIXeUE44VXxJnVy7BNvxKdXW3c2xXC60V7AvYkICSVJaGZHFCMKowmqXUjo5+AbTkCkYTBh1XFODxE796yxYVCtHi825eW0mXemiSpcTnWsfQ5+spwu3XqwGfA3rV7My/18IvnaDm9Valiyhwt5MF3i0fH0unvCz0mYoMAOUMIIqz+t+9LdHsMyPi1ur2aJRkNvOjJcVR7GUynE6025u8jHLreuhvwndddyK2aOJ2/GROhgcnZ6aqsDaUB2slZ5tE6lCyk9FKsj8yNwl7575fxfdA9ngiPySzi4xEZpJok2Oo8yZd/F+y6uyjOt9jcn927lq+l/Dr5zWDnlRFxeh9x+rCy0gToM4k5+ZghvdzKX4m3ldKG9WwzT7/AhK+jPUHZGZMDvqTfi17ObZ+qaV0eYGatysry5G//s34JormfmhJgd6NNWycKr0ttJYiEtd3VN2UI6rRiUNDdI/duaky7nQl+8PBidUW0HoM/d24CikOSMQkbSpNlT5DaAQblEPkXsoS4IY3FenlrmRBP5XjTfIleM5LrlqIeZcDhU7HUg4Jtu4WsQvoA2yGjqozxHwYjkLKW1g/IchigH/T8ehWo4UxSnDI1JAPqAlwVFERVBEiTl9/xLdYQsh1n2JUEMtAGmaewg0Ge0QG3wuKBJlqlppsH3dMtSdEk2REUTeqba0yyB482GYfxMuiIxyhmMM9DnFEnh5K7aU+7t/wuHIlgmZ6myoKqiqnKWKfCSbPC6IoiGYvwCR+/+Zxsk6MqeNm7EF7g2wITmbJ0UWZTC4N3j7x+h76dFwpZ14hvNAlHQ/7CNGCNJmDfMigRS/0hKZDQ8QB/DKEff6o0oCt65vM0wIw0aGw4WrraZTTTQYG8C/aBNn+/+KE8Cm9NAS0IU/ZYU8QHRHLRB9LgtqyonSqqs8rwqS839Zv/+DXeTJkAMkihvxqJ7qq52Vzenq6nqrIdDzQ41I2wQvfN8b5+nP/EGW7dj6HjVwhYdWo0lN5JqPIZMW3QGawxlY3uZePPd4uHPvwcBfdBa+EfRvsYDfbSrlsORhJTN2popa32SouFlEAXJVDduy5adYbRljLfna+LO0+Jk2iy/WjE+6FeucLlDHM3Luhv26EGvXppsASqJjz4mW9SIeEc8sW3VH49O2qFw9WzWmrs0sZCp6StrgBEt1JbDIct7XcPltDvNbh3iDDv78ahrri1DVS/pqXPaCu4MX33xYFTPxn4MluhtoJO3niOPV0zQYz6+VeqXFX0Cb4zXvbc/xHibuP8ytfQtl1x9cTcwfdOYDyaqgVYS8pN6QxemW3EjvggjmZxXsWmDe9MBWQQZTmkM+iCPDxC0AU2LxsZ2gtOf/T21rq2FT9oRzJn2vTX+qduE5ymXptkI5sdGgaGoxUXj81rLsiWD7L3TgNY8drkF978AqdtrXZMIAAA="
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "DULLAH-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255716945971",              
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
