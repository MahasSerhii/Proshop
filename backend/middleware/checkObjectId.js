import { isValidObjectId } from "mongoose";

function checkObjectid(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    res.status(404);
    throw new Error(`Wrong ObjectId of: ${req.params.id}`);
  }
  next();
}

export default checkObjectid;
