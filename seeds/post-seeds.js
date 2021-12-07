const {
  Post
} = require('../models');

const postData = [{
    title: 'Jaws',
    post_url: "https://www.imdb.com/title/tt0073195/?ref_=fn_al_tt_1",
  },
  {
    title: 'The Sandlot',
    post_url: "https://www.imdb.com/title/tt0108037/?ref_=kw_li_tt",
  },
  {
    title: 'IronMan',
    post_url: "https://www.imdb.com/title/tt0371746/?ref_=fn_al_tt_1",
  },
  {
    title: 'Forrest Gump',
    post_url: "https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_0",
  },
  {
    title: 'The Matrix',
    post_url: "https://www.imdb.com/title/tt0133093/?ref_=fn_al_tt_1",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;