'use client'
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaStar } from "react-icons/fa";
import parse from "html-react-parser"

export default function AccordionItem({ i, expanded, setExpanded, data }:{i:Number, expanded:Number, setExpanded:any, data:any}) {
  const isOpen = i === expanded;

  return (
    <>
      <motion.button
        initial={false}
        className={`accordion-btn ${isOpen ? "--active" : '' }`}
        onClick={(e) => setExpanded(e, isOpen ? false : i)}
      >
        <span className="leading-none p-0 m-0 accordion-btn__title">{data.title}</span><span className="accordion-btn__org">{data.org}</span><span className="accordion-btn__dates">{data.years}</span><FaPlus />
        </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, scale: 1, height: "auto" },
              collapsed: { opacity: 0, scale: 1, height: 0 }
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="accordion-item-inner">
              {parse(data.description)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};




