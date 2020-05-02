// kinda messy quickfix for computed properties, [key: string]: any 
const getProperty = (object: any, key: string) => key in object ? object[key] : undefined;

export default getProperty;