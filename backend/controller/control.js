import user from "../model/coustmermodel.js";

const coustmer_details = async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

        const details = new user({
            name,
            email,
            mobile
        });

         await details.save();
        console.log("inserted");
        res.status(200).send('Inserted Successfully');
    } catch (error) {
        console.error("Error inserting customer:", error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await user.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send('Customer not found');
        }

        console.log(`Customer with ID ${id} deleted`);
        res.status(200).send('Customer deleted successfully');
    } catch (error) {
        console.error("Error deleting customer:", error);
        res.status(500).send('Internal Server Error');
    }
};
const userData=async (req, res) => {
    try {
      const data = await user.find(); 
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  };

const userDelete = async(req,res)=>{
    const email = req.params.email;
    try {
        const result = await user.findOneAndDelete({email:email});
        res.status(200).send('deleted successfully');
        console.log('deleted successfully');
    } catch (error) {
        console.log('not deleted successfully');
    }
}
const updateData = async(req,res)=>{
    const emailfind = req.params.email;
    const{name,mobile} = req.body;
    try {
        await user.findOneAndUpdate({email:emailfind},{name:name,mobile:mobile});
        console.log('updated successfully');
    } catch (error) {
        console.log('not updated successfully');
    }
}
export { coustmer_details, deleteCustomer,userData,userDelete,updateData };
