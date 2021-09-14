import { Router } from "express"
import cors from 'cors'

import ValidateUser from '../middlewares/user-validate.js'
import RegisterValidation from "../validations/register.js"
import Register from "../controllers/users/register.js"
import LoginValidation from "../validations/login.js"
import Login from "../controllers/users/login.js"
import verifyToken from "../middlewares/verify-token.js"

import GetSiegeWeapon from "../controllers/equipaments/siege-weapons.js/get.js"
import SiegeWeapon from "../controllers/equipaments/siege-weapons.js/post.js"
import DeleteSiegeWeapon from "../controllers/equipaments/siege-weapons.js/delete.js"
import GetEquipaments from "../controllers/equipaments/general-equipaments/get.js"
import Equipaments from "../controllers/equipaments/general-equipaments/post.js"
import ModifyEquipaments from "../controllers/equipaments/general-equipaments/patch.js"
import DeleteEquipaments from "../controllers/equipaments/general-equipaments/delete.js"
import ModifySiegeWeapon from "../controllers/equipaments/siege-weapons.js/patch.js"
import Soldier from "../controllers/soldier/post.js"
import DeleteSoldier from "../controllers/soldier/delete.js"
import GetSoldier from "../controllers/soldier/get.js"
import ModifySoldier from "../controllers/soldier/patch.js"
import swaggerUi from 'swagger-ui-express'
import { createRequire } from "module"
import BattleRegister from "../controllers/battle/battle-register.js"
import SetWar from "../controllers/battle/war.js"
const require = createRequire(import.meta.url)
const swaggerFile = require("../swagger-output.json")


const routes = Router()

const corsOpition = {
  exposedHeaders: 'auth-token',
}

routes.use(cors(corsOpition))

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes.post('/register', ValidateUser(RegisterValidation), Register.UserRegister)
routes.post('/login', ValidateUser(LoginValidation), Login.UserLogin)

routes.post('/soldiers', verifyToken, Soldier.CreateSoldier)
routes.delete('/soldiers', verifyToken, DeleteSoldier.DelSoldier)
routes.get('/soldiers', verifyToken, GetSoldier.GetOneSoldier)
routes.get('/all-soldiers', verifyToken, GetSoldier.GetAllSoldiers)
routes.get('/user/soldiers', verifyToken, GetSoldier.GetByOwnerSoldiers)
routes.get('/category/soldiers', verifyToken, GetSoldier.GetCategorySoldiers)
routes.patch('/soldiers', verifyToken, ModifySoldier.ModSoldier)

routes.post('/war', verifyToken, SetWar.War)
routes.get('/battle-registers', verifyToken, BattleRegister.Register)

routes.get('/user/siege-weapons', verifyToken, GetSiegeWeapon.GetByOwnerSiegeWeapon)
routes.get('/all-siege-weapons', verifyToken, GetSiegeWeapon.GetAllSiegeWeapon)
routes.get('/siege-weapons', verifyToken, GetSiegeWeapon.GetOneSiegeWeapon)
routes.post('/siege-weapons', verifyToken, SiegeWeapon.CreateSiegeWeapon)
routes.delete('/siege-weapons', verifyToken, DeleteSiegeWeapon.DelSiegeWeapon)
routes.patch('/siege-weapons', verifyToken, ModifySiegeWeapon.ModSiegeWeapon)

routes.post('/equipaments', verifyToken, Equipaments.CreateEquipaments)
routes.patch('/equipaments', verifyToken, ModifyEquipaments.ModEquipaments)
routes.delete('/equipaments', verifyToken, DeleteEquipaments.DelEquipaments)
routes.get('/equipaments', verifyToken, GetEquipaments.GetOneEquipaments)
routes.get('/all-equipaments', verifyToken, GetEquipaments.GetAllEquipaments)
routes.get('/user/equipaments', verifyToken, GetEquipaments.GetByOwnerEquipaments)


export default routes