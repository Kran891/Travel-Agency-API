import express from 'express'
import { IMessageService, MessageService } from './message-service'
const route=express.Router()
const messageService:IMessageService=new MessageService()
route.route('/mail').post(messageService.sendMail)

export {route as MessageRouting}