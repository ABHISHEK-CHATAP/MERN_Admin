import { useEffect, useState } from "react";
import "./Admin.css";
import { useAuth } from "../../Store/AuthProvider";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const { authorization } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUSersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      const data = await response.json();

      if (response.ok) {
        // console.log("all users data received: " + data)
        // all users data received: [object Object]
        // ye aaise aaya hai , need to store in sate variable to access or map in page
        setUsers(data);
      }
    } catch (error) {
      console.log("all users not found :", error);
    }
  };


  //handle the delete operation

  const handleDelete=async(id)=>{
    //  console.log("deleted user:", id);
   try {
    const response = await fetch(`http://localhost:3000/admin/users/delete/${id}`,{
      method: 'DELETE',
      headers: {
      Authorization: authorization,
      },
    });
     const data = await response.json();
     console.log("after delete user :", data);

     //response hogya toh ab get all users function ko call kia [[getAllUSersData();]] => ab page refresh karne ki jaroorat nhi 
     if(response.ok){
       getAllUSersData();
     }
    
   } catch (error) {
    console.log("delete id user :", error);
   }
  }



  useEffect(() => {
    getAllUSersData();
  }, []);
  // console.log("admin users :: ",users)
  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h1>Admin User Data</h1>
        </div>

        <div className="container admin-user">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.AllAdminUser?.map((curUser, index) => {
                const {username, email, phone,_id } = curUser;
                return (
                  <>
                    <tr key={index}>
                      <th>{username}</th>
                      <th>{email}</th>
                      <th>{phone}</th>
                      <th><button><Link to={`${_id}/edit`} style={{textDecoration:"none", color:"inherit"}}> update</Link></button></th>
                      <th><button onClick={()=>handleDelete(_id)}>Delete</button></th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
