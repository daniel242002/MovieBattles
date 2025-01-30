import { UsersModel } from "../model/users.js";
import { validateUser } from "../schemas/users.js";
import { validatePartialUser } from "../schemas/users.js";

export class UsersController {
  static async login(req, res) {
    const result = validatePartialUser(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const access = await UsersModel.login({ input: result.data });

    res.status(200).json(access);
  }

  static async register(req, res) {
    const result = validateUser(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newUser = await UsersModel.register({ input: result.data });

    res.status(201).json(newUser);
  }
}
