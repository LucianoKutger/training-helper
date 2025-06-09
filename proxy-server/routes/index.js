require("dotenv").config();

const express = require("express");
const router = express.Router();
const { appendValues } = require("../services/googleSheets")



router.use(express.json());




router.post("/googleSheet", async (req, res) => {
  const { spreadsheetId, range, values } = req.body;

  console.log(req.body)

  if (!spreadsheetId || !range || !Array.isArray(values)) {
    return res.status(400).json({ error: 'Fehlende oder ungültige Daten.' });
  }

  try {
    const result = await appendValues(spreadsheetId, range, values);
    res.json({ message: 'Werte erfolgreich hinzugefügt.', result });
  } catch (err) {
    console.error('Fehler beim Anhängen:', err);
    res.status(500).json({ error: 'Interner Serverfehler.' });
  }

});



module.exports = router;
