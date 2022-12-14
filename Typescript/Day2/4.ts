class item{
    itemId:number;
    itemName:string;
    itemPrice:number;
    category:string;
    constructor(itemId:number,itemName:string,itemPrice:number,cateory:string){
        this.itemId=itemId;
        this.itemName=itemName;
        this.itemPrice=itemPrice;
        this.category=cateory;
    }
}
let object:item=new item(1,'car',500000000,'Mercedes');
let display=()=>console.log("itemId:", object.itemId, "itemName:", object.itemName,"itemPrice:",object.itemPrice,"category:",object.category);
display();