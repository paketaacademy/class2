import { Router } from "express"
import cors from "cors"
import { userValidation } from "../middlewares/userValidation"
import { userYupValidations } from "../validations/userValidations"
import { createUser } from "../controllers/UserController/register"
import { loginValidation } from "../middlewares/loginValidation"
import { loginYupValidation } from "../validations/loginValidations"
import { userLogin } from "../controllers/UserController/login"
import { authMiddlewares } from "../middlewares/tokenAuth/authMiddlewares"
import { Deposit } from "../controllers/WalletController/deposit"
import { depositValidation } from "../middlewares/depositValidation"
import { depositYupValidation } from "../validations/depositValidations"
import { withdrawValidation } from "../middlewares/withdrawValidation"
import { withdrawYupValidation } from "../validations/withdrawValidations"
import { Withdraw } from "../controllers/WalletController/withdraw"
import { ConsultBalance } from "../controllers/WalletController/consultBalance"
import { validation } from "../middlewares/validation/validation"
import { loanYupValidation } from "../validations/loanValidations"
import { HireLoan } from "../controllers/LoanController/hireLoan"

const router = Router()

const corsOption = {
  exposedHeaders: "Bearer"
}

router.use(cors(corsOption))

router.post('/users', userValidation(userYupValidations), createUser.create)
router.post('/login', loginValidation(loginYupValidation), userLogin.login)

router.patch('/deposit', depositValidation(depositYupValidation), authMiddlewares, Deposit.deposit)
router.patch('/withdraw', withdrawValidation(withdrawYupValidation), authMiddlewares, Withdraw.withdraw)
router.get('/consult-balance', authMiddlewares, ConsultBalance.consult)

router.post('/hire-loan', validation(loanYupValidation), authMiddlewares, HireLoan.hireLoan)

export { router }