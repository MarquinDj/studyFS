export const nome = "Maguin";
export const sobrenome = "Santos";
export const idade = 23;
const cpf = "1234"

export function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
