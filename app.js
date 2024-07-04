let Resp = {};
const { GetDataHasil } = require('./helper/Bridge');

async function main() {
    Resp = await GetDataHasil();
    console.log(Resp);
}

main();
