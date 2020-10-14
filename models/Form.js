const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'Form',
    insecureAuth:true
})

//connect db
connection.connect((err) => {
    if(err)
        throw err;
    console.log("connnected to db with success")
})


//function to add data to formData table
function addData(firstName, lastName, email, city, occupation, bio){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO formData
            (email, firstName, lastName, occupation, city, bio)
            VALUES(?, ?, ?, ?, ?, ?)`,[email, firstName, lastName, occupation, city, bio]),
            function(err,rows){
                if(err){
                    console.log(err)
                    reject(err);
                }
                else{
                    console.log("done with success ")
                    resolve(rows);
                }
            }
    })
}

function viewFormData(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM formData`,
            function(err,rows,cols){
                if(err){
                    reject(err);
                }
                else{
                    // console.log("rows are", rows)
                    // console.log("cols are", cols)
                    
                    resolve(rows);
                }
            }

        )
    })
}

// async function getAllData() {
//     try {
//         const response = await new Promise((resolve, reject) => {
//             const query = "SELECT * FROM formdata;";

//             connection.query(query, (err, results) => {
//                 if (err) reject(new Error(err.message));
//                 resolve(results);
//             })
//         });
//         // console.log(response);
//         // return response;
//     } catch (error) {
//         console.log(error);
//     }
// }



exports=module.exports={
    addData, 
    viewFormData
}








































// function validateuser(email,password){
//     return new Promise(function(resolve, reject){
//         connection.query(
//             `SELECT * FROM formData;`,
//             function(err, rows, cols){
//                 if(err){
//                     reject(err);
//                 }
//                 else{
//                     resolve(rows);
//                 }
//             }

//         )
//     })
// }

// function viewtodo(tablename){
//     return new Promise(function(resolve,reject){
//         connection.query(
//             `SELECT TODOS FROM ${tablename};
//             `,
//             function(err,rows,cols){
//                 if(err){
//                     reject(err);
//                 }
//                 else{
//                     resolve(rows);
//                 }
//             }

//         )
//     })
// }

// function gettodos(email){
//     return new Promise(function(resolve, reject){
//         connection.query(
//             `select * from todos
//             where EMAIL="${email}";
//             `,
//             function(err,rows,cols){
//                 if(err){
//                     reject(err);
//                 }
//                 else{
//                    // console.log(rows)
//                     //console.log(cols);
//                     resolve(rows);
//                 }
//             }
//         )
//     })
// }

