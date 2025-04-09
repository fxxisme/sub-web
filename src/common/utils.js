export function radomID(length = 6) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '123456789';
    const allChars = letters + numbers;
    
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      result += allChars[randomIndex];
    }
    
    return result;
  }