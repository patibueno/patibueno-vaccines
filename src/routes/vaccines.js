const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccineController");

router.post("/", controller.createVaccine);
router.get("/:id", controller.getVaccine);
router.get("/", controller.getAllVaccines);
router.patch("/:id/vaccinated", controller.updateVaccineStatus);
router.delete("/:id", controller.deleteVaccine);

module.exports = router;
