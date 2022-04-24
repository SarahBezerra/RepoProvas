/*
  Warnings:

  - You are about to drop the column `token` on the `Sessions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Sessions_token_key";

-- AlterTable
ALTER TABLE "Sessions" DROP COLUMN "token";
