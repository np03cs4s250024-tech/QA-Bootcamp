interface job {
    id : string;
    title : string;
    salary : number;
    type : "FULLTIME" | "PARTTIME" | "INTERNSHIP";
}

interface Response<T> {
    success : boolean;
    data : T ;

}

const jobResponce : Response<job> = {
    success : true,
    data : {
        id : "1014",
        title : "QA",
        salary : 456000,
        type : "FULLTIME",

    }
};

const messageResponce : Response<string> = {
success : true,
data : "data is uploading ....",
};


console.log(jobResponce.data.title);
console.log(jobResponce.data.salary);
console.log(messageResponce.data);