export class User implements UserInterface {
  name: string;
  password: string;
  phone: number;
  email: string;

  constructor(name: string, password: string, phone: number, email: string ) {
    this.name = name;
    this.password = password;
    this.phone = phone;
    this.email = email;
    console.log("User Added");
  }