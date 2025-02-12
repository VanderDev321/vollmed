export interface Pageable{
  nome:string,
  cpf: string,
  crm:string,
  email:string,
  telefone: string,
  cep: string,
  logradouro: string,
  bairro: string,
  numero: string,
  estado: string,
  complemento?: string,
  especialidade:string,
  paciente:string,
  medico:string,
  data:Date,
  hora:Date,
  ativo:boolean,
  motivoCancelamento:string
}

export interface ConsultaPageable extends Partial<Pageable>{

}
