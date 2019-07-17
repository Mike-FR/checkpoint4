export class Reservation {
    constructor(public emailClient: string,
                public nameClient: string,
                public nb: number,
                public date: string,
                public id?: number) { }
}