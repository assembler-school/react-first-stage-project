import React from 'react'
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"

const Heading = () => {
  return (
    <div>
      <div className="flex item-center mb-10">
        {/* <Link to="/">
          <h5 className="text-gray-100 font-bold text-2x1">Task App</h5>
        </Link> */}
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/add">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold mx-2 py-2 px-4 rounded inline-flex items-center">
            <FaPlus /> Add Task
            </button>
          </Link>
          <Link to="/tasks">
            <button className="bg-blue-200 hover:bg-blue-500 text-white font-semibold mx-2 py-2 px-4 rounded inline-flex items-center">
            <FaPlus /> All tasks 
            </button>
          </Link>
          <Link to="/">
            <button className="bg-green-400 hover:bg-green-500 text-black font-semibold mx-2 py-2 px-4 rounded inline-flex items-center">
            <FaPlus /> Gifs Zone
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Heading
