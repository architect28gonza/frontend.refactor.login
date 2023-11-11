
export const setValidarStatusResponse = (response: any | undefined): boolean => { 
    return (response?.error === undefined);
}