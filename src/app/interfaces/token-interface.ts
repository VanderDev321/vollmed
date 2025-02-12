import { ConsultaPageable, Pageable } from "./pageavel";

export interface TokenInterface {
  token:string;
}
export interface Login {
  login:string,
  senha:string
}

export interface Paciente extends Pageable {
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
export interface Medico extends Pageable {
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
export interface Consulta extends ConsultaPageable{
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

export interface DTOPaginacao{
  firt:string,
  prev:string,
  next:string,
  last:string,
  pages:string,
  itens:string,
  data:Pageable[];
}
