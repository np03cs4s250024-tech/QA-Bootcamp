interface User {
    id : string;
    name : string;
    email: string;
    status : "ACTIVE" | "INACTIVE";

} 
 interface Response <T> {
    success : boolean;
    data: T;

 }
 const userResponse : Response<User> ={
    success : true,
    data : {
        id :"101",
        name : "Roshan",
        email : "roshan@gmail.com",
        status : "ACTIVE"



    }
 } ;


 const messageResponce : Response<string> = {
    success : true,
    data : "User loding sucess fully"

 };


 console.log(userResponse.data.name);
 console.log(userResponse.data.email);
 console.log(messageResponce.data);