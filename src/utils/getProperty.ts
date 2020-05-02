
// : typeof object[key]
const getProperty = (object: any, key: string) => key in object ? object[key] : undefined;

export default getProperty;