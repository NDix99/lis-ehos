const axios = require('axios');
require('dotenv').config();

const defaultPostData = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    cid: process.env.CID,
    uid: process.env.UID,
    kd_user: process.env.KD_USER,
    CID: process.env.CID
};

const defaultConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    }
};

async function makePostRequest(url, additionalData = {}) {
    const postData = {...defaultPostData, ...additionalData};
    try {
        const response = await axios.post(url, new URLSearchParams(postData).toString(), defaultConfig);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        return false;
    }
}

const GetDataHasil = async () => {
    const url = `${process.env.MAIN_URL}/api/listo_has.php`;
    return makePostRequest(url, {status: '2', cari: ''});
};

const DataHasil = async (noo) => {
    const url = `${process.env.MAIN_URL}/api/dataHasil.php`;
    return makePostRequest(url, {noo});
};

const Notification = async () => {
    const url = `${process.env.MAIN_URL}/api/notif.php`;
    return makePostRequest(url, {cnk: '1'});
};

module.exports = { GetDataHasil, DataHasil, Notification };
