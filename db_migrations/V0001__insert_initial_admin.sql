-- Создаем первого администратора с временным паролем
INSERT INTO admins (email, password_hash, name, role) 
VALUES ('dimanadym@yandex.ru', '$2b$12$temporary_hash_placeholder', 'Администратор', 'super_admin')
ON CONFLICT (email) DO NOTHING;

-- Заполняем начальный контент сайта
INSERT INTO site_content (section, key, value) VALUES
('hero', 'title', 'Безопасность вашего бассейна под контролем'),
('hero', 'subtitle', 'Передовая система оповещения опасности утопления Sentag AB — современное решение для бассейнов, аквапарков и закрытых водных объектов'),
('contacts', 'email', 'dimanadym@yandex.ru'),
('contacts', 'telegram', 'https://t.me/+Jcc9HDH1PphiMzA6')
ON CONFLICT (section, key) DO NOTHING;
