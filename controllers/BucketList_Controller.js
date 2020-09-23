const express = require("express");
const router = express.Router();
const Buckets = require("../models/BucketList.js")
const seedData = require("../models/seed.js")

//seed
router.get('/bucket-list-adventure/seed', (req, res)=>{
    Buckets.create(seedData, (error, data)=>{
        res.redirect("/bucket-list-adventure")
    });
});
//drop everything
router.get('/bucket-list-adventure/drop/everything', (req, res)=>{
    Buckets.collection.drop();
    res.send("<a href='/bucket-list-adventure'>You have dropped collection</a>")
});

//NEW
router.get('/bucket-list-adventure/new', (req, res)=>{
    res.render('new.ejs');
});

//EDIT
router.post('/bucket-list-adventure/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Buckets.create(req.body, ()=>{
        res.redirect('/bucket-list-adventure');
    });
});

//INDEX
router.get('/bucket-list-adventure', (req, res)=>{
    Buckets.find({}, (error, data)=>{
        res.render(
            "index.ejs",
            {
                ads: data
            }
        )
    });
});

//
router.get('/bucket-list-adventure/:id', (req, res)=>{
    Buckets.findById(req.params.id, (err, adventure)=>{
        res.render('show.ejs', {
            ad:adventure
        });
    });
});

router.delete('/bucket-list-adventure/:id', (req, res)=>{
    Buckets.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/bucket-list-adventure')
    });
});

router.get('/bucket-list-adventure/:id/edit', (req, res)=>{
    Buckets.findById(req.params.id, (err, adventure)=>{ //find the fruit
        res.render(
    		'edit.ejs',
    		{
    			ad: adventure //pass in found fruit
    		}
    	);
    });
});

router.put('/bucket-list-adventure/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    //{new: true} tells mongoose to send the updated model into the callback
    Buckets.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel)=>{
        res.redirect('/bucket-list-adventure');
    });
});


module.exports = router;