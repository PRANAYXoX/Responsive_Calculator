class Product{
    constructor(title,qty){
        this.name=title,
        this.qty=qty
    }
    getName(){
        console.log("***",this.name);
        return this;
    }
    getQty(){
        console.log("***",this.qty);
    }

}

var p1=new Product("Watch",12);
p1.getName().getQty();

