const Sequelize = require('sequelize');

const sequelize = new Sequelize('jaderjacksondeveloper', 'cobaia', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});


//testando a conexão

//then() vai servir para saber se a conexao obteve exeto
// catch () utilizado para identificar que deu merda
sequelize.authenticate().then(function(){
console.log('Conexao Realizada com sucesso');
}).catch(function(err){
    console.log('Erro  na conexao');
});

//Fim do teste Da Conexao

//Criando uma Tabela

const Pagamento = sequelize.define('pagamentos', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }

});

//Finalizando a criacao da tabela
 Pagamento.sync({force: true});




//inserindo informacoes na tabela
//Pagamento.create({
  //  nome: "Energia",
    //valor: 1500
//});