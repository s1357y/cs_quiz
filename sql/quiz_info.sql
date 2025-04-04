create table quiz_info(
    `id` bigint unsigned not null auto_increment primary key,
    `question` text not null,
    `answer` varchar(512) not null,
    `type` varchar(50) not null default 'SHORT', /*SHORT, DESCRIPTIVE - 단답형, 서술형*/
    `question_subject_id` bigint unsigned,
    `created_at` datetime not null default current_timestamp,
    `updated_at` datetime not null default current_timestamp ON UPDATE current_timestamp,
    constraint `qi_qs_id` foreign key(`question_subject_id`) references `question_subject`(`id`)
);