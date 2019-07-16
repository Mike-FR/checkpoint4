export class Reservation {
    constructor(public id: number,
                public emailClient: string,
                public nameClient: string,
                public nb: number,
                public date: Date) { }
}