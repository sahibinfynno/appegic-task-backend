const { Op } = require("sequelize");
const { UserDetails } = require("../models/UserDetails");

const getUserDetails = async (req, res) => {
  try {
    const { search } = req.query;
    const response = await UserDetails.findAll({
      where: {
        city: {
          [Op.substring]: search,
        },
      },
    });
    if (response?.data) return res.status(200).send(response.data);
    else return res.status(200).send(response);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getUserDetails };
