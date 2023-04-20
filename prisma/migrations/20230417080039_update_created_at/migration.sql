/*
  Warnings:

  - You are about to drop the column `date_created` on the `subjects` table. All the data in the column will be lost.
  - You are about to drop the column `date_created` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `subjects` DROP COLUMN `date_created`,
    ADD COLUMN `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `date_created`,
    ADD COLUMN `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
