/*
  Warnings:

  - Made the column `user_id` on table `attendee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event_id` on table `attendee` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "attendee" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "user_id" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "event_id" SET NOT NULL;
