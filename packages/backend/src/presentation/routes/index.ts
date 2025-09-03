import { Router } from 'express'
import { healthController } from '../controllers/HealthController'

export const routes = Router()

routes.get('/health', healthController.check)