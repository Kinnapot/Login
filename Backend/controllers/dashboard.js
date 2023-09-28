const db = require('../models');

const getDashboard = async (req, res) => {
    const dashboard = await db.Dashboard.findAll({ where: { user_id: req.user.id } });
    res.status(200).send(dashboard);
};

const addDashboard = async (req, res) => {
    const newdash = await db.Dashboard.create({
        task: req.body.task,
        user_id: req.user.id            
    });

    res.status(201).send(newdash);
};

const deleteDashboard = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetdash = await db.Dashboard.findOne({where:{id: targetId, user_id: req.user.id}});
    if (targetdash) {
        await targetdash.destroy();
        res.status(204).send({message: "Delete is Success"});
    } else {
        res.status(404).send({message: "Dashboard not found"})
    }
};

const updateDashboard = async (req, res) => {
    const targetId = Number(req.params.id);
    const newTask = req.body.task;
    const targetdash = await db.Dashboard.findOne({where:{id: targetId, user_id: req.user.id}})
    if(targetdash){
        await targetdash.update({
            task: newTask  
        });
        res.status(200).send({ message:"updating is success"});
    } else{
        res.status(404).send({ message:"dashboard not found"});
    }
};

module.exports = {
    getDashboard,
    addDashboard,
    deleteDashboard,
    updateDashboard
};