import { Router } from 'express'

export interface Controller {
    path : string
    router : string | Router
}