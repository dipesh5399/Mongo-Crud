const User = require('../models/user.model');

exports.GetUserList = async (req, res) => {
    if (req.params.id) {
        // await User.findById(req.params.id).then((result) => res.status(200).json(result)).catch((e) => res.status(400).json(e));
        await User.find({ userId: req.params.id}).then((result) => res.status(200).json(result)).catch((e) => res.status(400).json(e));
    }
    else {
        await User.find().then((result) => res.status(200).json(result)).catch((e) => res.status(400).json(e));
    }
}

exports.AddNewUser = async (req, res) => {
    let parseBody = req.body;
    try {
        let userObj = parseBody;
        const userInsertRes = await User.create(userObj);
        return res.status(200).send(userInsertRes);
    } catch (e) {
        console.log(e, 'insert user error');
        return res.status(200).json(e);
    }
}

exports.UpdateUser = async (req, res) => {
    try {
        let Id = req.params.id;
        let userObj = req.body;
        // const userUpdateRes = await User.findByIdAndUpdate(_id, {$set:req.body},{new:true});
        // const userUpdateRes = await User.findOneAndUpdate({ userId: _id }, {$set:req.body},{new:true});
        const userUpdateRes = await User.update({ userId: Id }, { $set: req.body }, { new: true });

        return res.status(200).send(userUpdateRes);
    } catch (e) {
        console.log(e, 'update user error');
        return res.status(200).json(e);
    }
}

exports.DeleteUser = async (req, res) => {
    try {
        let _id = req.params.id;
        let userObj = req.body;
        console.log(_id, userObj, 'params');
        // const userUpdateRes = await User.findByIdAndDelete(_id);
        const userUpdateRes = await User.findOneAndDelete({ userId: _id});

        return res.status(200).send(userUpdateRes);
    } catch (e) {
        console.log(e, 'update user error');
        return res.status(200).json(e);
    }
}