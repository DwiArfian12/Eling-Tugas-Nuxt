-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_subject_id_fkey` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
