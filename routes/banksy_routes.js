// TODO: [1] bring in express
const express = require('express');
// TODO: [2] invoke the Router()
const banksyRouter = express.Router();

const controller = require('../controllers/banksy_controller');



// TODO: [3] list your routes in order of most specific to most general


banksyRouter.get('/add', (req, res) => {
  res.render('./quotes/banksyapp-add');
});

banksyRouter.get('/:id', controller.show);
banksyRouter.put('/:id', controller.update);
banksyRouter.delete('/:id', controller.delete);

banksyRouter.get('/', controller.index);
banksyRouter.post('/', controller.create);

banksyRouter.get('/:id/edit', controller.getOne);

// TODO: [4] export the banksyRouter
module.exports = banksyRouter;







