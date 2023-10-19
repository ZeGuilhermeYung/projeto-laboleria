import { getUserbyId } from "../repositories/users.repository.js";
import { findUserServices } from '../repositories/users.repository.js';

async function getUser (req, res) {
  try {
      const user = await getUserbyId (res.locals.user.user_id);
      const userServices = await findUserServices (res.locals.user.user_id);
      if(user)
      {
          delete user.password;
          user.services = userServices;
      }
      return res.status(200).send(user);
  } catch (error) {
      return res.status(500).send('Internal server error');
  };
};

async function getUserServices (req, res) { ////trocar de services para posts
    try {
        const userServices = await findUserServices(Number(req.params.id));
        if(!userServices) return res.sendStatus(404);
        return res.status(200).send(userServices);
    } catch (error) {
        return res.status(500).send('Internal server error');
    };
};

export { getUser, getUserServices };