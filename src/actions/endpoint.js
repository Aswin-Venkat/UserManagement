
export const callEndpoint = ({
    url = '',
    method = 'POST',
    body
}) => async () => {
    const response = await window.fetch(url, {
        method,
        credentials: 'same-origin',
        body: body,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/javascript, */*; q=0.01'
        }
    })
    return response
}