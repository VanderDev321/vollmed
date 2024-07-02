export interface TokenInterface {
  token:string;

}
export interface Login {
  login:string,
  senha:string
}

export interface Paciente {
  id?: number,
  nome: string,
  cpf: string,
  email: string,
  telefone: string,
  endereco: Endereco;
}

export interface Endereco {
  logradouro: string,
  bairro: string,
  numero?: string,
  cep: string
}
