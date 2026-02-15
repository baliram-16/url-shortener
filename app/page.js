'use client'
import { useState } from "react";

export default function Home() {
  const [bitUrl, setbitUrl] = useState("abc.com")
  return (
    <div className="main h-1/3 ">
      <div className="p-4">
      <h2 className="text-4xl text-center">BitLinks</h2>
      </div>
      <div className="mt-6 p-5 flex flex-col align-center gap-2.5">
        <input type="text" name="" id="" placeholder="Enter url..." className="p-2 text-center bg-violet-300 rounded-md"/>
        <button type="submit" className="bg-violet-900 p-2 rounded-md">Submit</button>
        <div className="text-center w-full flex justify-between gap-1"><span className="w-10/12 bg-violet-900 rounded-md p-2">{bitUrl}</span> <button type="button" className="bg-violet-900 p-2 rounded-md w-2/12">Copy</button></div>
      </div>
    </div>
  );
}
