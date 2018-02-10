import { Injectable } from '@angular/core';
import { Flight } from '../flight-list/flights';

@Injectable()
export class FlightService {

  constructor() { }

  getFlights(): Array<Flight> {
    return [
      {
        number: 42,
        gate: "32D",
        type: "Jumbo",
        departs: "18:32",
        destination: "Stockholm",
        delays: "343",
        image: "http://clipart-library.com/images/5iRrpgKeT.png"
      },
      {
        number: 323,
        gate: "16AD",
        type: "Private Jet",
        departs: "03:32",
        destination: "Bejing",
        delays: "0",
        image: "http://clipart-library.com/images/8i6orbRMT.png"
      },
      {
        number: 77,
        gate: "Classified",
        type: "Fighter",
        departs: "Classified",
        destination: "Classified",
        delays: "Classified",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7HzJGyUGXEMU6e7A2BtlS_Nz90-c4_ZJF_qH5E4IkE3DgLMyRQ"
      }
    ]
  }

}
