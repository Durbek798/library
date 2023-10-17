/*
  Warnings:

  - You are about to drop the column `authorId` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `Sell` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Sell` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Sell` table. All the data in the column will be lost.
  - You are about to drop the column `sellerId` on the `Sell` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `book_id` to the `Sell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `Sell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Sell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seller_id` to the `Sell` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Sell" DROP CONSTRAINT "Sell_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Sell" DROP CONSTRAINT "Sell_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Sell" DROP CONSTRAINT "Sell_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Sell" DROP CONSTRAINT "Sell_sellerId_fkey";

-- AlterTable
ALTER TABLE "Books" DROP COLUMN "authorId",
DROP COLUMN "categoryId",
ADD COLUMN     "author_id" INTEGER NOT NULL,
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sell" DROP COLUMN "bookId",
DROP COLUMN "categoryId",
DROP COLUMN "clientId",
DROP COLUMN "sellerId",
ADD COLUMN     "book_id" INTEGER NOT NULL,
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD COLUMN     "client_id" INTEGER NOT NULL,
ADD COLUMN     "seller_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Sell" ADD CONSTRAINT "Sell_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sell" ADD CONSTRAINT "Sell_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sell" ADD CONSTRAINT "Sell_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sell" ADD CONSTRAINT "Sell_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
