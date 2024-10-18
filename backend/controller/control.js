import user from "../model/coustmermodel.js";

const coustmer_details = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    const details = new user({
      name,
      email,
      mobile,
    });

    await details.save();
    console.log("Customer inserted successfully");
    res.status(200).send("Inserted Successfully");
  } catch (error) {
    console.error("Error inserting customer:", error);
    res.status(500).send("Internal Server Error: " + error.message);
  }
};

const userData = async (req, res) => {
  try {
    const data = await user.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "An error occurred: " + error.message });
  }
};

const userDelete = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await user.findOneAndDelete({ email });
    if (result) {
      console.log("Deleted successfully");
      res.status(200).send("Deleted Successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user: " + error.message);
  }
};

const updateData = async (req, res) => {
  const email = req.params.email;
  const { name, mobile } = req.body;
  try {
    const result = await user.findOneAndUpdate({ email }, { name, mobile });
    if (result) {
      console.log("Updated successfully");
      res.status(200).send("Updated Successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Error updating user: " + error.message);
  }
};

export { coustmer_details, userData, userDelete, updateData };
