import express, { Request, Response } from "express";
import {
  cc,
  loans,
  sa,
  sacc,
  saccloans,
  saloans,
  ccloans,
  loansIAcards,
  ccIAcards,
  saloansIAcards,
  saccIAcards,
  saIAcards,
  ccloansIAcards,
  saccloansIAcards,
  ccreject,
  loansreject,
  sareject,
} from "./constants";

const app = express();

app.get("/getEligibleTabs", (req: Request, res: Response) => {
  res.json(ccIAcards);
  return;
});

app.get("/getHomePageData", (req: Request, res: Response) => {
  res.json(sareject);
  return;
});

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
