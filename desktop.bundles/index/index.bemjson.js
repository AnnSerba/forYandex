module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'content',
            content : [
                {
                    block:'point',
                    content:{
                        block : 'image',
                        url : 'http://lorempixel.com/50/50',
                        title : 'point',
                        alt : 'point'
                    }
                },
                {
                    block:'pages-points',
                    count_point:230,
                    max_count_points: 100,
                    page:1,
                    content:''
                },
            ]
        },
    ]
};
