CREATE TABLE blog_posts (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50)
);

INSERT INTO blog_posts (id, title, content, category) VALUES (4, 'blog post 4', 'test 4', 'art')


CREATE TABLE comments (
    id INT PRIMARY KEY,
    post_id INT,
    comment_content TEXT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES blog_posts(id)
);