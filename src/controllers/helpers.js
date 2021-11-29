const isUpdated = (rowsUpdated) => {
  if (rowsUpdated && rowsUpdated[0] > 0) {
    return true;
  } else {
    return false;
  }
};

const errorMessage = (error, res) => {
  return res.status(500).send({ message: error.message });
};
module.exports = { isUpdated, errorMessage };
