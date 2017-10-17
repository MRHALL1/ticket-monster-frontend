export class Ticket {
  _id: string;
  name: string;
  price: string;

  constructor(_id?: string, name?: string, price?: string) {
    this._id = _id;
    this.name = name;
    this.price = price;
  }
}
