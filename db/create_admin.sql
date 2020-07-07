insert into blog_admin (username, hash
-- , blogName, name 
)
values ($1,$2
-- ,$3,$4
) returning id;