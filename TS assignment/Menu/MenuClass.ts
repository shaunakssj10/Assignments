export class Menu implements MenuInterface {
  id: number;
  item: string;
  price: number;

  constructor(id: number, item: string, price: number) {
    this.id = id;
    this.item = item;
    this.price = price;
    console.log("Menu Added");
  }
}
