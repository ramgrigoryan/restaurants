const express = require('express');

const { getDb, connectToDb } = require('./db')
const { ObjectId } = require('mongodb')

const app = express()
app.use(express.json())

let db

connectToDb((err) => {
  if(!err){
    app.listen(8000, () => {
      console.log('listening port 8000')
    })
    db = getDb()
  }
})

// routes
app.get('/restaurants', (req, res) => {
  let restaurants = []

  db.collection('restaurants')
    .find()
    .limit(20)
    .sort({rating:-1})
    .forEach(restaurant => restaurants.push(restaurant))
    .then(() => {
      res.status(200).json(restaurants)
    })
    .catch(() => {
      res.status(500).json({error: 'Connection problem'})
    })
})

app.get('/restaurants/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {

    db.collection('restaurants')
      .findOne({_id: new ObjectId(req.params.id)})
      .then(doc => {
        if(doc){
            res.status(200).json(doc)
        }
        else{
            res.status(500).json({mssg:"Restaurant do not listing in our DB"})
        }
      })
      .catch(err => {
        res.status(500).json({error: 'Could not display selected restaurant'})
      })
      
  } else {
    res.status(500).json({error: 'Could not display restaurant properly'})
  }
})

app.patch('/restaurants/:id', (req, res) => {
  const updates = req.body

  if (ObjectId.isValid(req.params.id)) {

    db.collection('restaurants')
      .updateOne({ _id: new ObjectId(req.params.id) }, {$set: updates})
      .then(result => {
        if(result.matchedCount){
            res.status(200).json(result)
        }
        else{
            res.status(500).json({mssg:"Routes do not match"})
        }
      })
      .catch(err => {
        res.status(500).json({error: 'Network issue. The server could not evaluate your review. Please, try again later'})
      })

  } else {
    res.status(500).json({error: 'Failed to save your review. Try again later'})
  }
})