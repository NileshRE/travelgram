import React from 'react'


const JoinPge = () => {
  return (
    <div className="py-8 px-24 bg-green-600 text-white">
        <h1 className="text-xl font-semibold mb-8">Join the Group</h1>
        <p className="font-medium text-md mb-6">Join Group Name</p>
        <form>
            <p className="mb-2">Name</p>
            <input className="border p-2 rounded-md mb-6 w-[25vw] text-black" type='text' placeholder='Enter your Name'/>
            <p className="mb-2">Email</p>
            <input className="border p-2 rounded-md mb-6 w-[25vw] text-black" type='email' placeholder='Enter your Email'/>
            <p className="mb-2">Place</p>
            <input className="border p-2 rounded-md mb-6 w-[25vw] text-black" type='text' placeholder='Enter your place name'/>
            <p className="mb-2">Age</p>
            <input className="border p-2 rounded-md mb-6 w-[10vw] text-black" type='number'/>
            <div>
            <button className="px-4 py-2 bg-[#04566E] rounded-md text-white hover:opacity-90 mt-8">Request to Join</button>
            </div>
        </form>
    </div>
  )
}

export default JoinPge