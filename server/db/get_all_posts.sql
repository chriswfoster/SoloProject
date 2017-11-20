SELECT dp.post_id, dp.likes, dp.story_text, dp.influence, dp.back_story, dp.user_id, dp.story_title, dp.post_date, du.displayname, du.nickname
FROM dream_posts dp
JOIN dream_user du on dp.user_id = du.user_id
ORDER BY post_id desc limit 10