import Image from "next/image";
import * as React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="search..." />
      </div>
      {/* ICON AND USER */}
      <div className="">
        <div className=" bg-white rounded-full w-7 h-7">
          <Image src="/message.png/" alt="" width={20} height={20}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
