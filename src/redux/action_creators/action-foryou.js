import { 
  SAVEFORYOULIST,
  SAVETICKETALL,
  SAVETICKET
 } from '../action_type.js';

export const saveForyou = value => ({ type: SAVEFORYOULIST, data: value })

export const saveTicketAll = value => ({type:SAVETICKETALL,data:value})

export const saveTicket = value => ({type:SAVETICKET,data:value})