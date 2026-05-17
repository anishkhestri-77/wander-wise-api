import {Router }from "express";
import BAGGAGE_ROUTER from "./baggage.js";

const HANDLERS = Router ();//it decentralize the routes to the correct department. 


HANDLERS.use("/baggages",BAGGAGE_ROUTER);//Any request that starts with /baggages — give it to BAGGAGE_ROUTER"

  export default HANDLERS;

