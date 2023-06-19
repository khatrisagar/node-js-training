import { Request, Response } from "express";
import bcrypt from "bcryptjs";

export const signUpUser = async (req: Request, res: Response) => {
  try {
    const { name, surname, email, password } = req.body;

    let encryptedPass = await bcrypt.hash(password, 10);
    console.log(encryptedPass);

    res.json("a");
  } catch (error) {
    res.json(error);
  }
};
