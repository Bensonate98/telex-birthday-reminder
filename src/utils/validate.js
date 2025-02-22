export const isValidBirthdaySaverCommand = (message)=>{
  const regex = /^\/add-birthday\s+[^#@\n]+\s+\d{4}-\d{2}-\d{2}$/;
  return regex.test(message);
}
