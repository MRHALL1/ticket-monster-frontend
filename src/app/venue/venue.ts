export class Venue {
  _id: string;
  name: string;
  location: string;

  constructor(_id?: string, name?: string, location?: string) {
    this._id = _id;
    this.name = name;
    this.location = location;
  }
}
