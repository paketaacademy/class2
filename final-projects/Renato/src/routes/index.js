import { Router } from "express"
import verifyToken from "../middlewares/verify-token.js"
import userRegister from "../controllers/user/register.js"
import { validateUsers } from "../middlewares/users-validate.js"
import { userValidationSchema } from "../validation/users-validation.js"
import userLogin  from "../controllers/user/login.js"
import { validateLogin } from "../middlewares/login-validate.js"
import { loginValidationSchema } from "../validation/login-validation.js"
import soldierRegisterController from "../controllers/soldiers/register.js"
import { validateSoldier } from "../middlewares/soldiers-validate.js"
import { soldierValidationSchema } from "../validation/soldier-validation.js"
import soldierGetController from "../controllers/soldiers/get.js"
import soldierPatchController from "../controllers/soldiers/patch.js"
import soldierDeleteController from "../controllers/soldiers/delete.js"
import { validateEquipment } from "../middlewares/equipments-validate.js"
import { equipmentValidationSchema } from "../validation/equipment-validation.js"
import equipmentsRegisterController from "../controllers/equipments/register.js"
import equipmentGetController from "../controllers/equipments/get.js"
import equipmentPatchController from "../controllers/equipments/patch.js"
import equipmentDeleteController from "../controllers/equipments/delete.js"


const routes = Router()

routes.post('/register', validateUsers(userValidationSchema), userRegister.creatUser)
routes.post('/login', validateLogin(loginValidationSchema), userLogin.loginUser)

routes.post('/register/soldiers', verifyToken, validateSoldier(soldierValidationSchema), soldierRegisterController.creatSoldier)
routes.get('/soldiers/:id', verifyToken, soldierGetController.getSoldier)
routes.patch('/soldiers/:id', verifyToken, soldierPatchController.patchSoldier)
routes.delete('/soldiers/:id', verifyToken, soldierDeleteController.deleteSoldier)

routes.post('/register/equipments', verifyToken, validateEquipment(equipmentValidationSchema), equipmentsRegisterController.creatEquipment)
routes.get('/equipments/:id', verifyToken, equipmentGetController.getEquipment)
routes.patch('/equipments/:id', verifyToken, equipmentPatchController.patchEquipment)
routes.delete('/equipment/:id', verifyToken, equipmentDeleteController.deleteEquipment)

export default routes