Prisma ❤️

0. Slide
- Co je prisma
- Co dneska ukážeme

1. Install next.js `yarn create next-app ./`
2. Install Prisma CLI
   - Prisma CLI je konzolová aplikace (v Rustu) na práci s databází
   - Tahle věc nemá nic společného s FE
   - Na webu Prisma.io je super dokumentace
   - Dev dependency, není potřeba v runtime, může se instalovat globálně
   - Máte ji tedy na svém počítači, ale je i na serveru, na produkci, kde pak služba poběží
3. Vytvoříme si databázi
   - **Musíme ji inicializovat `yarn prisma init`**
   - Vytvořilo se schéma, to obsahuje konfiguraci a také strukturu databáze...
   - Nechem pouzívat postgress ale SQLite, to je souborová databáze, ideální pro demo
   - Máme tu `.env` takhle hezky připravený, tak ho použijeme
   - Je celkem dobrý nápad mít Extension ve studiu
   - **Vyrobíme první migraci `yarn prisma migrate dev`**
   - Prisma umí kromě vytvoření databáze také spustit jednoduché studio...
4. Data do aplikace
   - **Musíme vygenerovat Prisma Client** `yarn prisma generate`
   - Prisma přidala do package.json knihovnu klienta, importujeme ho do appky
   - **Je to plně otypované !!!**
   - **Kód toho klienta běží jen na serveru - není to browser kód**

5. Rozšíříme databázi
    - Extenze pomáhá, formátuje, validuje občas něco doplní
    - Prisma umí všechny možné druhy vazeb 1-1 1-m m-m
    - SQL query skládáme jako JSON

6. Uložíme data z aplikace
    - Prisma běží na serveru, zvolíme si strategii - API/Server komponenty








TODO:
- Poslat slide