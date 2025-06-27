import express, { Request, Response } from "express";
import {
  cc,
  loans,
  sa,
  sacc,
  saccloans,
  saloans,
  ccloans,
  loans1,
  cc1,
  saloans1,
  sacc1,
  sa1,
  ccloans1,
  saccloans1,
  ccreject,
  loansreject,
  sareject,
} from "./constants";

const app = express();

app.get("/getEligibleTabs", (req: Request, res: Response) => {
  res.json(cc1);
  return;
});

app.get("/getHomePageData", (req: Request, res: Response) => {
  res.json(sa);
  return;
});

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
