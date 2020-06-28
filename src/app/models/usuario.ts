export class Usuario{
    constructor(
        public id: number,
        public tipo: number,
        public nombre: string,
        public email: string,
        public password: string
    ){}
}