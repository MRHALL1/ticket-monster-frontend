export class Location {
  _id: string;
  zip_code: string;
  name: string;

  constructor(_id?: string, name?: string, location?: string) {
    this._id = _id;
    this.zip_code = zip_code;
    this.name = name;
  }
}
