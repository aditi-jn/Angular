var item = /** @class */ (function () {
    function item(itemId, itemName, itemPrice, cateory) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.category = cateory;
    }
    return item;
}());
var object = new item(1, 'car', 500000000, 'Mercedes');
var display = function () { return console.log("itemId:", object.itemId, "itemName:", object.itemName, "itemPrice:", object.itemPrice, "category:", object.category); };
display();
