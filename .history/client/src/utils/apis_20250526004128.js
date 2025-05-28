import { options } from "../../../server/routes/user";

const apis = () => {
   
    const local='http://localhost:5555/';

    const list={
        registerUser:`${local}user/register`,
        loginUser:`${local}user/login`,
        forgetPassword:`${local}user/forget/password`,
        options
    }   

    return list;
}

export default apis;