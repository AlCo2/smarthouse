-- CreateTable
CREATE TABLE `notes` (
    `note_id` INTEGER NOT NULL AUTO_INCREMENT,
    `note_name` CHAR(100) NULL,
    `note_body` CHAR(200) NULL,

    PRIMARY KEY (`note_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
