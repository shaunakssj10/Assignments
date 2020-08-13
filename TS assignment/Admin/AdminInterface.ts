interface AdminInterface {
  name: string;
  password: string;

  login(name: string, password: string): boolean;
}
