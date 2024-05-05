import prisma from "./db";
import bcrypt from "bcrypt";

export const getUser = async (email: string, password: string) => {
  console.log("get user email", email);
  console.log("get user password", password);
  const dbUser = await prisma.user.findFirst({
    where: { email: email },
  });
  const result = await bcrypt.compare(password, dbUser.hash_password);
  console.log("get user the password is ", result);
  console.log(dbUser);
  return dbUser;
};
