-- AlterTable
ALTER TABLE `users` ADD COLUMN `country` INTEGER NULL,
    ADD COLUMN `firstName` VARCHAR(45) NULL,
    ADD COLUMN `lastName` VARCHAR(45) NULL,
    ADD COLUMN `phone` VARCHAR(45) NULL;

-- CreateTable
CREATE TABLE `countries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` CHAR(100) NOT NULL,
    `iso` CHAR(2) NOT NULL,

    UNIQUE INDEX `name`(`name`),
    UNIQUE INDEX `iso`(`iso`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `country_idx` ON `users`(`country`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `country` FOREIGN KEY (`country`) REFERENCES `countries`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
