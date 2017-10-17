export  class EventService {

  getAllEvents() {
    let events = [
      {name: "Greg's tour 1", "date": "1-1-1", "artist":"Greg"},
      {name: "Greg's tour 2", "date": "2-2-2"}
    ];

    return events;
  }

  deleteEvent(id: string) {

  }
} // Formerly EventService class
