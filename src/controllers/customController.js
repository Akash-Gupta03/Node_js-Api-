const Custom = require("../models/customModel");

exports.getAll = async (req, res) => {
  try {
    const data = await Custom.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) return res.status(400).json({ error: "All fields required" });

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Phone check (digits only, length 10-15)
    if (!/^\d{10,15}$/.test(phone)) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

    const newEntry = await Custom.create({ name, email, phone });
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    await Custom.update(id, { name, email, phone });
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    await Custom.remove(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
