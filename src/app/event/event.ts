export class Event
{
  _id: string;
  name: string; //Formerly public name: string
  artist: string;
  date: string;

  constructor(_id?:string, name?: string, artist?: string, date?: string){
    this._id = _id;
    this.name = name;
    this.artist = artist;
    this.date = date;
  }
}
