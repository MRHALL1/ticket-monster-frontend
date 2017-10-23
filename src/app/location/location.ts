export class Location {
  _id: string;
  zipCode: string;
  name: string;

  constructor(_id?: string, zipCode?: string, name?: string) {
    this._id = _id;
    this.zipCode = zipCode;
    this.name = name;
  }
}
