export class Restaurant implements RestaurantInterface {
  rName: string;
  address: string;
  rating: number;

  constructor(rating: number, rName: string, address: string) {
    this.rating = rating;
    this.rName = rName;
    this.address = address;
    console.log("Restaurant added ");
  }
}
