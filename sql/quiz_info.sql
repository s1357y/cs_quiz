create table quiz_info(
    `id` bigint unsigned not null auto_increment primary key,
    `question` text not null,
    `answer` varchar(512) not null,
    `key_words` text,
    `question_type_id` bigint unsigned,
    `created_at` datetime not null default current_timestamp,
    `updated_at` datetime not null default current_timestamp ON UPDATE current_timestamp,
    constraint `qi_qt_id` foreign key(`question_type_id`) references `question_type`(`id`)
);