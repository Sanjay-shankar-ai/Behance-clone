import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { BsImage } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { RiArrowDropDownFill } from "react-icons/ri";
import { tagName } from '../Data';

const Heroine = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <header className='border-b sticky top-0 bg-white z-10'>
      <div className='search-area p-5'>
        <div className='container-fluid flex'>
          <div className={`filter-section ${filterVisible ? 'expanded' : 'collapsed'}`}>
            <button 
              className='flex items-center text-[#777] font-bold text-xl border-2 border-[#e0e0e0] rounded-full px-5 py-2 bg-white hover:bg-[#e0e0e0]'
              onClick={toggleFilterVisibility}
            >
              <VscSettings className='mr-2' /> Filter
            </button>
            {filterVisible && (
              <div className='behance-tools p-2 mt-4'>
                <div className='flex flex-col'>
                  {['Projects', 'Assets', 'Images', 'People'].map((option) => (
                    <div key={option} className='rounded-full bg-white border px-3 py-2 my-2'>
                      <p className='text-sm font-bold text-center'>{option}</p>
                    </div>
                  ))}
                  {tagName.map((tools, index) => (
                    <React.Fragment key={tools.tags}>
                      <div className='tools-item flex justify-between items-center py-2'>
                        <div className='t-icon'>
                          {tools.tagsIcon}
                        </div>
                        <div className='tname px-1'>
                          <p className='text-sm font-bold'>{tools.tags}</p>
                        </div>
                        <div className='dt-arrow'>
                          <RiArrowDropDownFill />
                        </div>
                      </div>
                      {index < tagName.length - 1 && <hr className='my-2' />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
          {filterVisible && (
            <div className='separator border-l-2 mx-2'></div>
          )}
          <div className='search-section flex-1 ml-2'>
            <div className='search-box w-full border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between'>
              <div className='input-box relative lg:w-full'>
                <input 
                  type='text' 
                  placeholder='Search the creative world at work' 
                  className='bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-xl font-bold text-[#222] placeholder:text-[#777]' 
                />
                <div className='search-icon text-2xl text-[#777] absolute top-[2px] left-3'>
                  <IoSearchSharp />
                </div>
              </div>
              <div className='tags-search px-5 py-3 flex-items-center'>
                <button className='flex items-center bg-white rounded-full border text-[#777] font-bold text-x px-4 py-4'>
                  <BsImage className='mr-1' /> Search by image
                </button>
              </div>
            </div>
          </div>
          <div className='Recm-items'>
            <span className='text-xs font-bold text-[#333] '>Sort</span>
            <div className='flex items-center '>
                <p className='text-sm font-medium '>Recommended</p>
                <RiArrowDropDownFill />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Heroine;
