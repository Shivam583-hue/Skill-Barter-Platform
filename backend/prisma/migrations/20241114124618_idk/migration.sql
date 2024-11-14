/*
  Warnings:

  - Added the required column `title` to the `JobOpportunity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobOpportunity" ADD COLUMN     "title" TEXT NOT NULL;
