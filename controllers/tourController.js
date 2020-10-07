const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing required name or price parameters',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).send({
    status: 'success',
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  // console.log(req.params);
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // res.status(200).send({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updates tour here ...>',
    },
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    // data: { tour: newTour },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
