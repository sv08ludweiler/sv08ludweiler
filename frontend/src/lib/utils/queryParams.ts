
export interface ObjectToQueryStringHelperObject {
    keyPath: Array<string>;
    value: boolean | number | string;
}
const objectToQueryStringHelper = (
        object: any,
        path: Array<string> = [],
        result: Array<ObjectToQueryStringHelperObject> = []
    ): Array<ObjectToQueryStringHelperObject> => {
        return Object.entries(object).reduce((acc, [key, value]) => {
            if (typeof value === 'object') {
                acc.push(...objectToQueryStringHelper(value, [...path, key], result)) 
            } else {
                acc.push({ keyPath: [...path, key], value });
            }
            return acc;
        }, []);
    }

export const objectToQueryString = (object: any): string => {
    const simplifiedData = objectToQueryStringHelper(object);
    const queryStrings = simplifiedData.map(({ keyPath: [firstKey, ...otherKeys], value }) => {
        const nestedPath = otherKeys.map(key => `[${key}]`).join('');
        return `${firstKey}${nestedPath}=${encodeURI(`${value}`)}`
        return `${firstKey}${nestedPath}=${encodeURI(`${value}`)}`
    })
    return queryStrings.join('&');
}
