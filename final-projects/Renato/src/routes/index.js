import { Router } from "express"
import cors from "cors"
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
import { validateVehicle } from "../middlewares/vehicle-validate.js"
import { vehicleValidationSchema } from "../validation/vehicle-validation.js"
import vehicleRegisterController from "../controllers/vehicles/register.js"
import vehicleGetController from "../controllers/vehicles/get.js"
import vehiclePatchController from "../controllers/vehicles/patch.js"
import vehicleDeleteController from "../controllers/vehicles/delete.js"
import { validatePlatoon } from "../middlewares/platoon-validate.js"
import { platoonValidationSchema } from "../validation/platoon-validation.js"
import platoonRegisterController from "../controllers/platoon/register.js"
import platoonPatchController from "../controllers/platoon/patch.js"
import platoonGetController from "../controllers/platoon/get.js"
import platoonDeleteController from "../controllers/platoon/delete.js"
import { validateLanding } from "../middlewares/landing-validate.js"
import { landingValidationSchema } from "../validation/landing-validation.js"
import landingRegisterController from "../controllers/landing/register.js"
import landingPatchController from "../controllers/landing/patch.js"
import landingGetController from "../controllers/landing/get.js"
import landingDeleteController from "../controllers/landing/delete.js"
import Terms from "../controllers/Terms-Of-Services/get.js"
import swaggerUi from 'swagger-ui-express'
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const swaggerFile = require("../swagger-output.json")

const routes = Router()
const corsOption = {
  exposedHeaders: 'authorization',
}
routes.use(cors(corsOption))

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
routes.get('/terms', Terms.TermsOfServices)

routes.post('/register', validateUsers(userValidationSchema), userRegister.creatUser)
routes.post('/login', validateLogin(loginValidationSchema), userLogin.loginUser)

routes.post('/register/soldiers', verifyToken, validateSoldier(soldierValidationSchema), soldierRegisterController.creatSoldier)
routes.get('/soldiers/:id', verifyToken, soldierGetController.getSoldier)
routes.patch('/soldiers/:id', verifyToken, soldierPatchController.patchSoldier)
routes.delete('/soldiers/:id', verifyToken, soldierDeleteController.deleteSoldier)

routes.post('/register/equipments', verifyToken, validateEquipment(equipmentValidationSchema), equipmentsRegisterController.creatEquipment)
routes.get('/equipments/:id', verifyToken, equipmentGetController.getEquipment)
routes.patch('/equipments/:id', verifyToken, equipmentPatchController.patchEquipment)
routes.delete('/equipments/:id', verifyToken, equipmentDeleteController.deleteEquipment)

routes.post('/register/vehicles', verifyToken, validateVehicle(vehicleValidationSchema), vehicleRegisterController.creatVehicle)
routes.get('/vehicles/:id', verifyToken, vehicleGetController.getVehicle)
routes.get('/vehicles', verifyToken, vehicleGetController.getAllVehicle)
routes.patch('/vehicles/:id', verifyToken, vehiclePatchController.patchEquipment)
routes.delete('/vehicles/:id', verifyToken, vehicleDeleteController.deleteVehicle)

routes.post('/register/platoons', verifyToken, validatePlatoon(platoonValidationSchema), platoonRegisterController.creatEquipment)
routes.get('/platoons/:id', verifyToken, platoonGetController.getPlatoon)
routes.get('/platoons', verifyToken, platoonGetController.getAllPlatoon)
routes.patch('/platoons/:id', verifyToken, platoonPatchController.patchPlatoon)
routes.delete('/platoons/:id', verifyToken, platoonDeleteController.deletePlatoon)

routes.post('/register/landing', verifyToken, validateLanding(landingValidationSchema), landingRegisterController.creatLanding )
routes.get('/landings/:id', verifyToken, landingGetController.getLanding)
routes.get('/landings', verifyToken, landingGetController.getAllLandings)
routes.patch('/landings/:id', verifyToken, landingPatchController.patchLanding)
routes.delete('/landings/:id', verifyToken, landingDeleteController.deleteLanding)

export default routes