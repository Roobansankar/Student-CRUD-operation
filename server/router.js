const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoSchema");

// Create
router.post("/", async (req, res) => {
  // console.log(req.body);
  var data = new InfoRouter({
    Name: req.body.Name,
    Age: req.body.Age,
    City: req.body.City,
  });

  await data.save();
  res.json(data);
});

// Get all records
router.get("/", async (req, res) => {
  var findData = await InfoRouter.find();
  res.json(findData);
});

// Update
router.put("/update/:id", async (req, res) => {
  var update = await InfoRouter.updateOne(
    { _id: req.body._id },
    {
      $set: {
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City,
      },
    }
  );

  res.json(update);
});

// Delete
router.delete("/del/:id", async (req, res) => {
  var deldata = await InfoRouter.findByIdAndRemove(req.params.id).then((e) => {
    res.json({ message: "Deleted successfully" });
  });
});

// Retrieve a specific record by ID
router.get("/:id", async (req, res) => {
  try {
    const record = await InfoRouter.findById(req.params.id);
    res.json(record);
  } catch (error) {
    res.status(404).json({ message: "Record not found" });
  }
});

module.exports = router;
