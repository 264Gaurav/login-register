import React from "react";

const Home=( {setLoginUser} )=>{

    const clickHandler=()=>{
        setLoginUser();
    }
    
    return(
        <div className="mx-auto ">
            <div className="mx-auto flex items-center justify-between py-4 bg-blue-600 text-blue-100 font-bold text-xl">
                <h1 className="ml-3">Home Page</h1>
                <div className="bg-white px-1 mr-3 text-blue-500 rounded-md hover:text-blue-900 hover:px-2 cursor-pointer " onClick={clickHandler}>Logout</div>
            </div>
            <p className="mt-4 justify-center  mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Porro repellendus dicta sed alias, sapiente, laudantium voluptas exercitationem aliquam totam tempore, 
                veniam sit quis consectetur.
            </p>
        </div>
    )
}

export default Home;