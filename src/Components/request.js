export const request = (value) => {
    return fetch(`https://open.er-api.com/v6/latest/${value}`)
    .then(res => {
        if(!res.ok){
            throw new Error(`${res.status} - ${res.statusText}`)
        }
        return res.json()
    })
}
