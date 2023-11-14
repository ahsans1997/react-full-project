
import jwt_decode from 'jwt-decode';

const Token = () => {
    
    const jwtToken = localStorage.getItem('ACCESS_TOKEN');

    let decodedToken = null;

    if (jwtToken) {
        decodedToken = jwt_decode(jwtToken);
    }

    return decodedToken;
};

export default Token;