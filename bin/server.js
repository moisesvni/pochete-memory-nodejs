const app = require('../apps');
const port = normalizaPort(process.env.PORT || '3024');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
app.listen(port, function () {
    console.log(`pochete memory backend listening na porta ${port}`)
})