CREATE TABLE blog_posts (
    post_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50)
);

INSERT INTO blog_posts (post_id, title, content, category) VALUES (4, 'blog post 4', 'test 4', 'art')


CREATE TABLE comments (
    comment_id INT PRIMARY KEY,
    post_id INT,
    user_name VARCHAR(100) NOT NULL,
    comment_text TEXT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES blog_posts(post_id) ON DELETE CASCADE
);

