import { PrismaClient } from "@prisma/client";
import AddUser from "./addUser";

export default async function Home() {
  const client = new PrismaClient();
  const users = await client.user.findMany({
    orderBy: { name: "asc" },
    include: { books: { orderBy: { title: "asc" } } },
  });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AddUser />
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} /{" "}
              {user.books.map((book) => (
                <span className="ml-1" key={book.id}>
                  {book.title}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
