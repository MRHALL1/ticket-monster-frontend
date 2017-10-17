export class Account {
  _id: string;
  username: string;
  password: string;
  email: string;
  phone: string;

  constructor(_id?: string, username?: string, password?: string, email?: string, phone?: string) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.phone = phone;
  }
}
