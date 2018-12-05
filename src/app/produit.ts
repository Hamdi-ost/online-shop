export class Produit {
    public static fromJson(json: Object): Produit {
        console.log('kokokoko');
        return new Produit(
            json['name'],
            json['description'],
            json['prix']);
    }

    constructor(public author: string,
                public title: string,
                public body: string) {
    }
}
