export class Product {

  public productClasses;

  constructor(public name: string,
              public image: string,
              public price: number,
              public quantity: number,
              public forSale: boolean) {

  }

  // set quantity(newQuantity: number) {
  //   if (newQuantity >= 0)
  //     this.quantity = newQuantity;
  //   else {
  //     console.log("Can only set quantity to minimum value of '0'");
  //     this.quantity = newQuantity;
  //   }
  // }

  decQuantity() {
    if (this.quantity > 0)
      this.quantity--;
    else {
      console.log("Attempt to set quantity to less than '0'");
      this.quantity = 0;
    }
    if (this.isQuantityZero()) {
      this.forSale = true;
    }
  }

  incQuantity() {
    this.quantity++;
    this.forSale = false;
  }

  isQuantityZero(): boolean {
    if (this.quantity == 0)
      return true;
    else return false;
  }

  isForSale(): boolean {
    return this.forSale;
  }


}
