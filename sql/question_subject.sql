create table question_subject(
	`id` bigint unsigned not null auto_increment primary key,
	`name` varchar(100) not null,
	`created_at` datetime not null default current_timestamp,
	`updated_at` datetime not null default current_timestamp ON UPDATE current_timestamp,
	UNIQUE KEY(`name`)
);