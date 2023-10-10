import React from 'react'

const CreateGroup = () => {
  return (
    <div className="py-8 px-24 bg-green-600 text-white">
        <h1 className="text-xl font-semibold mb-8">Create Group</h1>
        <form>
            <p className="mb-2">Group Name<span className="text-xs">(Group Creator is Group Captain by Default)</span></p>
            <input className="border p-2 rounded-md mb-6 w-[25vw] text-black" type='text' placeholder='Enter Group Name'/>
            <p className="mb-2">Email</p>
            <input className="border p-2 rounded-md mb-6 w-[25vw] text-black" type='email' placeholder='Enter your Email'/>
            <p className="mb-2">Traveling Place</p>
            <input className="border p-2 rounded-md mb-6 w-[25vw] text-black" type='text' placeholder='Enter your place of Visit'/>
            <p className="mb-2">Open to</p>
            <label className="mr-6 text-sm"><input value="Female" type='radio'/>Female</label>
            <label className="mr-6 text-sm"><input value="Male" type='radio'/>Male</label>
            <label className="mr-6 text-sm"><input value="LGBTQ" type='radio'/>LGBTQ</label>
            <div>
            <button className="px-4 py-2 bg-[#04566E] rounded-md text-white hover:opacity-90 mt-8">Create Group</button>
            </div>
        </form>
    </div>
  )
}

export default CreateGroup