export class Reservation {
    constructor(public id: number,
        public email_client: string,
        public name_client: string,
        public nb: number,
        public date: Date) { }
}