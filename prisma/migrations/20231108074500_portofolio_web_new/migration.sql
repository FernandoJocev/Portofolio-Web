/*
  Warnings:

  - Made the column `year` on table `skills` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `skills` MODIFY `year` VARCHAR(191) NOT NULL;
