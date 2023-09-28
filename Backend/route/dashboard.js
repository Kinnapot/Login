const express = require('express');
const router = express.Router();
const dashboardContollers = require('../controllers/dashboard');
const passport = require('passport');

const authentication = passport.authenticate("jwt", { session: false });

router.get('/', authentication, dashboardContollers.getDashboard);
router.post('/', authentication, dashboardContollers.addDashboard);
router.put('/:id', authentication, dashboardContollers.updateDashboard);
router.delete('/:id', authentication, dashboardContollers.deleteDashboard);

module.exports = router;