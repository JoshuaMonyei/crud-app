const Intern = require('../models/Intern');

exports.createNewIntern = async (req, res) => {
    // check if email already exists
    let user = await Intern.findOne({email: req.body.email});

    if (user) return res.status(409).json({ statusCode: 409, message: 'Email already in use'});
    //  Retrieving data from the POST request
    Intern.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newIntern) => {
        
        if (err) {
            return res.status(500).json({message: "Insert intern full details", err});
        }
        
        else res.status(200).json({message: "New intern created", newIntern})
        
    })
}

exports.fecthInterns = function (req, res) {
    Intern.find({}, (err, interns) => {
        if (err) {
            return res.status(500).json({message: 'Request not successful', err})
        } else {
            return res.status(200).json({interns})
        }
    })  
}

exports.fetchSingleIntern = function (req, res) {
    Intern.findOne({ _id: req.params.id}, (err, intern) => {
        if (!intern) {
            return res.status(404).json({message: 'Intern not found'})
        }
        else if (err) {
            return res.status(500).json({message: err})
        }
        else {
            return res.status(200).json({intern})
        }
    })
}

exports.updateSingleIntern = function (req, res) {
    Intern.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, intern) => {
        if (!intern) {
            return res.status(404).json({message: 'Intern not found'})
        }
        else if (err) {
            return res.status(500).json({message: err})
        }
        else {
            intern.save((err, savedIntern) => {
                if (err) {
                    return res.status(500).json({message: err})
                } else {
                    return res.status(200).json({message: 'Intern updated successfully'})
                }
            }) 
        }  
    })
}

exports.deleteSingleIntern = function (req, res) {
    Intern.findByIdAndDelete(req.params.id, (err, intern) => {
        if (!intern) {
            return res.status(404).json({message: 'Intern was not found'})
        }
        else if (err) {
            return res.status(500).json({message: err})
        }
        else {
            return res.status(202).json({message: 'Intern deleted successfully'})
        }
    })
}