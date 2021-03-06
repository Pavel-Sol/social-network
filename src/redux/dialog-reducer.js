const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initalState = {
   dataName : [
       { id: 1, name: 'Victor' },
       { id: 2, name: 'Sergeyr' },
       { id: 3, name: 'Marina' }
     ],
     dataMessage : [
       { id: 1, text: 'hello' },
       { id: 2, text: 'How are you' },
       { id: 3, text: 'yo' }
     ],
     newMessageBody: 'some message'
}

const dialogReducer = (state = initalState, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY: 
         return {
            ...state,
            newMessageBody : action.body
         }
         

      case SEND_MESSAGE:
         let body = state.newMessageBody
         return {
            ...state,
            dataMessage: [...state.dataMessage, { id: 4, text: body}],
            newMessageBody : ''
         }


      default:
         return state
   }
}


export let sendMessageCreator = () => {
   return { type: SEND_MESSAGE }
 }
 
 export let updateNewMessageBodyCreator = (body) => {
   return {
     type: UPDATE_NEW_MESSAGE_BODY,
     body: body
   }
 }
 

export default dialogReducer