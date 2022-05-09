const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://henrico:henrico100905@fiaptecnico.jm5sh.mongodb.net/test')
}

module.exports = conexao
