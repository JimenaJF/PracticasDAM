export function hey(message: unknown): unknown {

  const cleanMessage: string  = typeof message === 'string' ? message.trim() : '';
  
  switch (true) {
   
    case cleanMessage === '':
      return "Fine. Be that way!" 
    
    
    case cleanMessage.toUpperCase() === cleanMessage && cleanMessage.toLowerCase() != cleanMessage && !cleanMessage.endsWith('?'):
      return "Whoa, chill out!"
      
    
    case cleanMessage.endsWith('?') && cleanMessage.toUpperCase() === cleanMessage && cleanMessage.toLowerCase() != cleanMessage:
      return "Calm down, I know what I'm doing!"

    case cleanMessage.endsWith('?'):
      return "Sure."

    default:
      return "Whatever."
    
  }

}
