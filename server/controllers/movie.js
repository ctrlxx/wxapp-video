const DB = require('../utils/db')

module.exports = {
  random: async (ctx, next) => {
    let movies = await DB.query('select * from movies')
    let index = Math.floor(Math.random() * movies.length)
    let referee_movie = movies[index]
    // let referee_open_id = await DB.query('SELECT open_id FROM comments WHERE id = ?',[movies[index].id])
    // let referee_info = (await DB.query('SELECT user_info FROM cSessionInfo WHERE open_id = ?', [referee_open_id]))
    ctx.state.data = { referee_movie } 
  },
  
  list: async (ctx) => {
    const movies = await DB.query('select * from movies')
    ctx.state.data = movies
  },

  show: async (ctx) => {
    const id = +ctx.params.id
    const movies = await DB.query('select * from movies where id = ?', [id])
    ctx.state.data = movies[0]
  }
}