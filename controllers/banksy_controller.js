
const banksyDB = require('../models/banksy_models');
const banksyController = {};


banksyController.index = (req, res, next) => {
  banksyDB.findAll()
    .then(banksy => {
      res.render('quotes/banksyapp-index', {
        message: 'ok',
        data: banksy,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

 banksyController.show = (req, res) => {
  banksyDB.findById(req.params.id)
    .then(banksy => {
      res.render('quotes/banksyapp-single', {
        message: 'ok',
        data: banksy,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

banksyController.delete = (req, res) => {
  banksyDB.destroy(req.params.id)
    .then(() => {
      // res.json({
      //   message: 'Quote deleted successfully!',
      // });
      res.redirect('/index');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

banksyController.create = (req, res) => {
  banksyDB.create({
    title: req.body.title,
    location: req.body.location,
    day: req.body.day,
    description: req.body.description,
  }).then(banksy => {
    // res.json({
    //   message: 'Quote added successfully!',
    //   data: banksy,
    // });
    res.redirect('/index');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

banksyController.update = (req, res) => {
  banksyDB.update({
    title: req.body.title,
    location: req.body.location,
    day: req.body.day,
    description: req.body.description,
  }, req.params.id).then(banksy => {

    res.redirect('/index');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

banksyController.getOne = (req, res) => {
  banksyDB.findById(req.params.id)
    .then(data => {
      res.render('./quotes/banksyapp-edit', { data} )
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}





module.exports = banksyController;
