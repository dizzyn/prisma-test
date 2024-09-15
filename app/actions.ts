"use server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const addUser = (name: string) => {
  return client.user.create({ data: { name } });
};
