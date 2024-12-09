import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      className=" relative  flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[25px] text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className=" text-sm leading-tight mt-5 font-semibold text-[#faf4d3]">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full h-15 bg-sky-100/10   left-0 ">
        <div className=" flex items-center justify-between  px-5 py-2 mb-10 ">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-5 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <MdOutlineFileDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-800"
            } flex items-center justify-center `}
          >
            <h3 className=" text-sm text-[#0a0908] font-semibold ">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};
