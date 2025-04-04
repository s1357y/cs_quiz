CREATE TABLE key_word(
    `id` bigint unsigned not null auto_increment primary key,
    `name` varchar(200) not null,
    `essential` boolean not null default false,
    `point` int not null default 0, /* 평가 점수 */
    `quiz_info_id` bigint unsigned not null,
    UNIQUE KEY(`name`, `quiz_info_id`),
    constraint `kw_quiz_info_id` foreign key(`quiz_info_id`) references quiz_info(`id`) ON DELETE CASCADE
);