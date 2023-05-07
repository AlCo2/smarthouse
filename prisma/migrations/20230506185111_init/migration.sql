/*
  Warnings:

  - The primary key for the `notes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `note_body` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `note_id` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `note_name` on the `notes` table. All the data in the column will be lost.
  - Added the required column `id` to the `notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notes` DROP PRIMARY KEY,
    DROP COLUMN `note_body`,
    DROP COLUMN `note_id`,
    DROP COLUMN `note_name`,
    ADD COLUMN `body` CHAR(200) NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` CHAR(100) NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `notes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
