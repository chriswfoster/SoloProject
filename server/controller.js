


module.exports ={
    createPost: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const{story_title, story_text, influence, back_story, user_id} = req.body;

        dbInstance.create_post(story_title, story_text, influence, back_story, user_id)
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )
    },

    getAllYourPosts: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_your_posts()
        .then( products => res.status(200).send(products))
        .catch (() => res.status(500).send())
    },

    getAllPosts: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all_posts()
        .then( response => res.status(200).send(response))
        .catch(() => res.status(500).send())
    }



}