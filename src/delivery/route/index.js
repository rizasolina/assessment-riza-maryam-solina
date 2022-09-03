const express = require('express');
const router = express.Router();
const employeeRouter = require('./employee.route');
const positionRouter = require('./position.route');
const overtimeRouter = require('./overtime.route');
const leaveRouter = require('./leave.route');
const payrollRouter = require('./payroll.route');
const EmployeeService = require('../../service/employee.service');
const PositionService = require('../../service/position.service');
const OvertimeService = require('../../service/overtime.service');
const LeaveService = require('../../service/leave.service');
const PayrollService = require('../../service/payroll.service');
const EmployeeRepository = require('../../repository/employee.repository');
const PositionRepository = require('../../repository/position.repository');
const OvertimeRepository = require('../../repository/overtime.repository');
const LeaveRepository = require('../../repository/leave.repository');
const PayrollRepository = require('../../repository/payroll.repository');
const EmployeeController = require('../controller/employee.controller');
const PositionController = require('../controller/position.controller');
const OvertimeController = require('../controller/overtime.controller');
const LeaveController = require('../controller/leave.controller');
const PayrollController = require('../controller/payroll.controller');
const db = require('../../config/db');

const employeeService = (req, res, next) => {
    req.service = EmployeeService(EmployeeRepository(db));
    next();
}

const positionService = (req, res, next) => {
    req.service = PositionService(PositionRepository(db));
    next();
}

const overtimeService = (req, res, next) => {
    req.service = OvertimeService(OvertimeRepository(db));
    next();
}

const leaveService = (req, res, next) => {
    req.service = LeaveService(LeaveRepository(db));
    next();
}

const payrollService = (req, res, next) => {
    req.service = PayrollService(PayrollRepository(db));
    next();
}

router.use('/employee', employeeService, employeeRouter(EmployeeController));
router.use('/position', positionService, positionRouter(PositionController));
router.use('/overtime', overtimeService, overtimeRouter(OvertimeController));
router.use('/leave', leaveService, leaveRouter(LeaveController));
router.use('/payroll', payrollService, payrollRouter(PayrollController));

module.exports = router;