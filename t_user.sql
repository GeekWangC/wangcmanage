CREATE TABLE t_user(
   id INT primary key NOT NULL AUTO_INCREMENT,
   phone VARCHAR(100) NOT NULL,
   password VARCHAR(40) NOT NULL,
   nickname VARCHAR(40),
   head_img VARCHAR(40),
   personal_sign VARCHAR(40),
   level_id VARCHAR(40),
   create_time DATE,
   update_time DATE,
   is_del INT
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into t_user
   (phone,password,nickname,create_time,update_time)
values
   ('17621335305','999999','geekwangc',NOW(),now());

insert into t_user
   (phone,password,nickname,create_time,update_time)
values
   ('17621335305','999999','wangchao',NOW(),now());