const apis = () => {
   
    const local='http://localhost:5555/';

    const list={
        registerUser:`${local}user/register`,
        loginUser:`${local}user/login`,
    }   

    return list;
}

export default apis;