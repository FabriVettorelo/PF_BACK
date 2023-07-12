const { postUser, putUser } = require("../controllers/usersController");

const createUser = async (req, res) => {
  const { id, name, email, password, phone } = req.body;
  try {
    const response = await postUser({id, name, email, password, phone});

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, name, email, password, phone } = req.body;

    const response = await putUser({ id, name, email, password, phone });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  
  } 
}
module.exports = {
    createUser,
    updateUser
}