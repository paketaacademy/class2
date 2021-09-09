import { Router } from "express"
import cors from 'cors'

import ValidateUser from '../middlewares/user-validate.js'
import RegisterValidation from "../validations/register.js"
import Register from "../controllers/users/register.js"
import LoginValidation from "../validations/login.js"
import Login from "../controllers/users/login.js"
import verifyToken from "../middlewares/verify-token.js"
import Weapon from "../controllers/equipaments/weapon/post.js"
import Armor from "../controllers/equipaments/armor/post.js"
import SwordMaster from "../controllers/army/sword-master/post.js"
import Knight from "../controllers/army/knight/post.js"
import Villager from "../controllers/army/villager/post.js"
import Archer from "../controllers/army/archer/post.js"
import VillagerDel from "../controllers/army/villager/delete.js"
import SMDel from "../controllers/army/sword-master/delete.js"
import KnightDel from "../controllers/army/knight/delete.js"
import ArcherDel from "../controllers/army/archer/delete.js"
import ModifyArcher from "../controllers/army/archer/patch.js"
import ModifyKnight from "../controllers/army/knight/patch.js"
import ModifySM from "../controllers/army/sword-master/patch.js"
import ModifyVillager from "../controllers/army/villager/patch.js"
import GetArcher from "../controllers/army/archer/get.js"
import GetKnight from "../controllers/army/knight/get.js"
import GetSM from "../controllers/army/sword-master/get.js"
import GetVillager from "../controllers/army/villager/get.js"
import ModifyArmor from "../controllers/equipaments/armor/patch.js"
import DeleteArmor from "../controllers/equipaments/armor/delete.js"
import GetArmor from "../controllers/equipaments/armor/get.js"
import ModifyWeapon from "../controllers/equipaments/weapon/patch.js"
import DeleteWeapon from "../controllers/equipaments/weapon/delete.js"
import GetWeapon from "../controllers/equipaments/weapon/get.js"
import GetArmy from "../controllers/users/army.js"
import GetSiegeWeapon from "../controllers/equipaments/siege-weapons.js/get.js"
import SiegeWeapon from "../controllers/equipaments/siege-weapons.js/post.js"
import DeleteSiegeWeapon from "../controllers/equipaments/siege-weapons.js/delete.js"


const routes = Router()

const corsOpition = {
  exposedHeaders: 'auth-token',
}

routes.use(cors(corsOpition))

routes.post('/register', ValidateUser(RegisterValidation), Register.UserRegister)
routes.post('/login', ValidateUser(LoginValidation), Login.UserLogin)
routes.get('/army', verifyToken, GetArmy.Army)

routes.get('/all-siege-weapons', verifyToken, GetSiegeWeapon.GetAllSiegeWeapon)
routes.get('/siege-weapons', verifyToken, GetSiegeWeapon.GetOneSiegeWeapon)
routes.post('/siege-weapons', verifyToken, SiegeWeapon.CreateSiegeWeapon)
routes.delete('/siege-weapons', verifyToken, DeleteSiegeWeapon.DelSiegeWeapon)
routes.patch('/siege-weapons', verifyToken, ModifyWeapon.ModWeapon)


routes.post('/weapons', verifyToken, Weapon.CreateWeapon)
routes.patch('/weapons', verifyToken, ModifyWeapon.ModWeapon)
routes.delete('/weapons', verifyToken, DeleteWeapon.DelWeapon )
routes.get('/weapons', verifyToken, GetWeapon.GetOneWeapon)
routes.get('/all-weapons', verifyToken, GetWeapon.GetAllWeapon)

routes.post('/armors', verifyToken, Armor.CreateArmor)
routes.patch('/armors', verifyToken, ModifyArmor.ModArmor)
routes.delete('/armors', verifyToken, DeleteArmor.DelArmor)
routes.get('/armors', verifyToken, GetArmor.GetOneArmor)
routes.get('/all-armors', verifyToken, GetArmor.GetAllArmor)

routes.delete('/sword-masters', verifyToken, SMDel.SMDelete)
routes.post('/sword-masters', verifyToken, SwordMaster.CreateSwordMaster)
routes.patch('/sword-masters', verifyToken, ModifySM.ModSM)
routes.get('/sword-masters', verifyToken, GetSM.GetOneSM)
routes.get('/all-sword-masters', verifyToken, GetSM.GetAllSM)

routes.delete('/knights', verifyToken, KnightDel.KinghtDelete)
routes.post('/knights', verifyToken, Knight.CreateKnight)
routes.patch('/knights', verifyToken, ModifyKnight.ModKnight)
routes.get('/knights', verifyToken, GetKnight.GetOneKnight)
routes.get('/all-knights', verifyToken, GetKnight.GetAllKnight)

routes.delete('/villagers', verifyToken, VillagerDel.VillagerDelete)
routes.post('/villagers', verifyToken, Villager.CreateVillager)
routes.patch('/villagers', verifyToken, ModifyVillager.ModVillager)
routes.get('/villagers', verifyToken, GetVillager.GetOneVillager)
routes.get('/all-villagers', verifyToken, GetVillager.GetAllVillager)

routes.delete('/archers', verifyToken, ArcherDel.ArcherDelete)
routes.post('/archers', verifyToken, Archer.CreateArcher)
routes.patch('/archers', verifyToken, ModifyArcher.ModArcher)
routes.get('/archers', verifyToken, GetArcher.GetOneArcher)
routes.get('/all-archers', verifyToken, GetArcher.GetAllArchers)



export default routes