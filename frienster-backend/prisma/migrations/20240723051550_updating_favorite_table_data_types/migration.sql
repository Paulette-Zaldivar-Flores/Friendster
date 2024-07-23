/*
  Warnings:

  - Made the column `liked_status` on table `favorite` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event_id` on table `favorite` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `favorite` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "favorite" ALTER COLUMN "liked_status" SET NOT NULL,
ALTER COLUMN "event_id" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "user_id" SET DATA TYPE VARCHAR(255);
