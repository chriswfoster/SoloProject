


module.exports ={
    createPost: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log(req.body)
        const{story_title, story_text, influence, back_story, user_id} = req.body;

        dbInstance.create_post(story_title, story_text, influence, back_story, user_id)
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )
    },

    getAllYourPosts: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params} = req;

        dbInstance.read_your_posts(params.id)
        .then( response => res.status(200).send(response))
        .catch (() => res.status(500).send())
    },

    getAllPosts: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all_posts()
        .then( response => res.status(200).send(response))
        .catch(() => res.status(500).send())
    }



}