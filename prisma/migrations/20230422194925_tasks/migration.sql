/*
  Warnings:

  - You are about to drop the column `subject_id` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `nama_matkul` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_subject_id_fkey`;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `subject_id`,
    ADD COLUMN `nama_matkul` VARCHAR(191) NOT NULL;
