class Tabelas{
  init (conxao){
    this.conxao = conxao;
    this.criarAtendimentos()
  }
  criarAtendimentos(){
    const sql = 'CREATE TABLE IF NOT EXISTS atendimento  (id int NOT NULL AUTO_INCREMENT,  cliente varchar(50) NOT NULL, pet varchar(20),  servico varchar(50) NOT NULL, data datetime NOT NULL, dataCriacao datetima NOT NULL, status varchat (20) NOT NULL, observacoes text, PRIMARY KEY (id))'
    this.conexao.query( sql, erro =>{
      if (erro){
        console.log(erro);
      }
      else{
        console.log('Tabela Atendimento criada com sucesso');
      }
    })
  }
}