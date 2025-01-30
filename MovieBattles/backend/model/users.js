import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../../config.js";

const config = {
  host: "localhost",
  user: "root",
  port: "3306",
  password: "",
  database: "movie_battles_db",
};

const conection = mysql.createConnection(config);

export class UsersModel {
  static async login({ input }) {
    const { username, password } = input;

    const validateUser = await (await conection).query("SELECT * FROM users");

    const userExisted = validateUser[0].find(
      (user) => user.username === username
    );

    if (userExisted === undefined) {
      throw new Error("user does not exist");
    }

    const isValid = bcrypt.compareSync(password, userExisted.password);

    if (!isValid) {
      throw new Error("wrong password");
    }

    return true;

    // return {
    //   id: userExisted.id,
    //   username: userExisted.username,
    // };
  }

  static async register({ input }) {
    const { username, email, password } = input;

    const validateUser = await (await conection).query("SELECT * FROM users;");

    const userExisted = validateUser[0].find(
      (user) => user.username === username
    );

    if (userExisted) {
      throw new Error("username already exists");
    }

    const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);

    const result = await (
      await conection
    ).query("INSERT INTO users (username, email, password) VALUES (?,?,?)", [
      username,
      email,
      hashedPassword,
    ]);

    console.log(result);
  }
}
