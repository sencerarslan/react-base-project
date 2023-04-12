export const config = () => {
    return {
        apiURL: process.env.REACT_APP_API_BASE_URL,
        webSocketUrl: process.env.REACT_APP_SOCKET_BASE_URL,
    };
};
