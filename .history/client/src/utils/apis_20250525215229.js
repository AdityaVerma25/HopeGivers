import login from "../../../server/controllers/login";

const apis = () => {
   
    const local='http://localhost:5555/';

    const list={
        registerUser:`${local}user/register`,
        loginUsr
    }

    return list;
}

export default apis;