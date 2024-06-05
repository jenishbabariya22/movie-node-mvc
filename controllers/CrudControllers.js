const UserModel = require("../models/UserModels")

const viewuser = async (req, res) => {
  try {
    let users = UserModel.find({})

    return res.render('view', {
      all: users
    })

  } catch (error) {
    console.log(error);
    return false
  }
}

const adduser = (req, res) => {
  return res.render('add')
}

const createuser = async (req, res) => {
  try {
    let { movie, ticket } = req.body;
    let image = req.file.path

    if (!movie || !ticket || !image) {
      console.log("All fileld is required");
      return res.redirect('/adduser')
    }

    const user = await UserModel.create({
      movie: movie,
      ticket: ticket,
      image:image
    });
    
    return res.redirect('/')
  } catch (error) {
    console.log(error);
    return false
  }

 
}

module.exports = {
  createuser, viewuser, adduser
}