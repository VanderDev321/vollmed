export interface TokenInterface {
  token:string;
}
export interface Login {
  login:string,
  senha:string
}

export interface Paciente {
  id?: string ,
  nome: string,
  cpf: string,
  email: string,
  telefone: string,
  cep: string,
  logradouro: string,
  bairro: string,
  numero: string,
  estado: string,
  complemento?: string
}
export interface Medico {
  id?:string ,
  nome:string,
  crm:string,
  email:string,
  telefone:string,
  especialidade:string,
  cep:string,
  logradouro:string,
  bairro:string,
  numero:string,
  estado:string,
  complemento?:string
}
export interface Consulta{
  id?:string,
  especialidade:string,
  paciente:string,
  medico:string,
  data:Date,
  hora:Date,
  ativo:boolean,
  motivoCancelamento:string
}
export interface DTOConsulta{
  cpfPaciente:string,
  paciente:string,
  medico:string,
  data:Date,
  hora:Date,
  especialidade:string
}

