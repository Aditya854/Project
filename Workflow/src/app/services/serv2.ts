export class MyObject{
    district!: string;
    channel!: string;
    product!: string;
    season!: string;

    constructor(district:string,channel:string,product:string,season:string){
        this.district=district;
        this.channel=channel;
        this.product=product;
        this.season=season;
    }
}