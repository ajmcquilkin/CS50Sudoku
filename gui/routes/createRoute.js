import express from "express";
import Solve from "../components/solve";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";

const router = express.Router();

router.get("/", async (req, res) => {
  const theHtml = `
    <html>
      <head><title>Team Rocket's Sudoku</title></head>
      <body>
        <h1>My First Server Side Render</h1>
        <div id="reactele">{{{reactele}}}</div>
        <script src="/solve.js" charset="utf-8"></script>
        <script src="/vendor.js" charset="utf-8"></script>
      </body>
    </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const solveComp = renderToString(<Solve />);
  const htmlToSend = hbsTemplate({ reactele: solveComp });
  res.send(htmlToSend);
});

export default router;