import { Request, Response } from 'express'

class HealthController {
  check = (req: Request, res: Response): void => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() })
  }
}

export const healthController = new HealthController()