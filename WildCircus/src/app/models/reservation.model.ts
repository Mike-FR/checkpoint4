export class Reservation {
    constructor(public email: string,
                public nom: string,
                public artiste_id: number,
                public artistes: string,
                public client_id: number,
                public date: Date,
                public description: string,
                public evaluation: number,
                public image: string,
                public nombre: string,
                public id: number,
                ) { }
}
