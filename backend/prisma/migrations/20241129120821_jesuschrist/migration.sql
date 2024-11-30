/*
  Warnings:

  - Added the required column `groupId` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proposal" ADD COLUMN     "groupId" INTEGER NOT NULL;
