  /*Overall purpose
This is the route handler (controller layer). It receives a POST request,
delegates saving to the service, and replies with the saved baggage */
  
  import { Router } from "express";
   import { create } from "../services/baggage.js";

  const BAGGAGE_ROUTER = Router();

  BAGGAGE_ROUTER.post("/", async (req, res, next) => {
      const baggage = await create(req.body);// create ={"name ": "jacket"}
       res.status(201).json({ data: baggage });
 });

  export default BAGGAGE_ROUTER;
