import { Restaurant } from "../Restaurant/RestaurantClass";
import { Menu } from "../Menu/MenuClass";

export class Admin implements AdminInterface {
  name: string;
  password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  login(name: string, password: string): boolean {
    if (name == this.name && password == this.password) {
      return true;
    } else return false;
}
