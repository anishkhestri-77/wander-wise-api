/*Overall purpose
This is a service layer function. It receives data (e.g. {name:"jacket"}),
tells the Baggage model to save it to the database, and returns
the saved record (with id, timestamps, etc.) to whoever called it.
*/
import Baggage from "../models/baggage.js";

export const create = async (data) => { //data => {name: "jacket "}
    const baggage = await Baggage.create(data);/*Call the database model to insert a new row — wait for it
await pauses here until the DB operation completes, then stores the result*/
return baggage;
}