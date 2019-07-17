export class Artist {
    constructor(public nom: string,
                public description: string,
                public image: string,
                public evaluation?: number,
                public id?: number) { }
}