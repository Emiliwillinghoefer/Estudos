
const moment = require('moment');
const conexao = require('../infraestrutura/conexao')

class atendimentos{
  adiciona(atendimentos, res){
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
    const data = moment(atendimentos.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    const dataValida= moment(data).isSameOrAfter(dataCriacao)
    const clienteValido = atendimento.clienteValido.length>=5
    
    const validacoes=[
      {
        name:'data',
        valido:dataValida,
        mensagem: 'Data deve ser maior ou igual a data atual'
      }
      {
        name:'cliente',
        valido: clienteValido,
        mensagem: 'cliente deve ter pelo menos 5 caracteres'
      }
    ]
    const erros = validacoes.filter(campo => !campo.valido)
    const existeErros = erros.length
    if (existeErros){
      res.status(400).json(erros)
    }else{
        const atendimentoDatado = {...atendimento, dataCriacao,data}
    
        const sql = 'INSERT INTO atendimento SET ?'
    
        conexao.query(sql, atendimentoDatado , (erro, resultados)=>{
          if (erro) {
            console.status(400).json(erro)
          }
          else{
            console.status(201).json(resultados)
          }
        })
    }
  }
  lista(res){
    const sql = 'SELECT * FROM Atendimento'
    conexao.query(sql,(erro, resultados) => {
      if (erro){
        res.status(400).json(erro)
      }
      else{
        res.status(200).json(resultados)
      }
    })
  }
  buscaPorId(id,res){
    const sql = `SELECT * FROM Atendimento WHERE id=${id}`
    conexao.query(sql, (erro, resultados) => {
      const atendimento = resultados[0]
      if (erro){
        res.status(400).json(erro)
      }
      else{
        res.status(200).json(atendimento)
      }
    })
  
  }
  altera(id,valores)
}
module.exports = new Atendimento