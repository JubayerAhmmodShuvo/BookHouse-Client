import React from 'react';
import advice from "../../images/advices.png";
import dev from "../../images/dev.png";
import pln from "../../images/pln.png";
import stra from "../../images/strategy.png";


const About = () => {
  return (
    <div className="mb-20">
      <div className="container mt-6 bg-violet-50 py-14">
        <p className="mt-8 text-2xl font-semibold mb-4 font-serif   text-center ">
          WE WORK HARD, WE PLAY HARD
        </p>
        <h1 className="text-center text-4xl font-bold  font-serif  mb-16 ">
          WHY WORK WITH US <span className="text-red-600">?</span>
        </h1>

        <div className="  ">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10 mb-20 ">
            <div className="mx-auto bg-slate-300	 rounded	 pt-8 px-8">
              <img className="rounded-full" src={advice} alt="" />
              <p className="text-center text-xl font-serif p-6 "> Advisory</p>
            </div>
            <div className="mx-auto bg-slate-300 rounded	 pt-8 px-8">
              <img className="rounded-full" src={dev} alt="" />
              <p className="text-center text-xl font-serif p-6">Development</p>
            </div>
            <div className="mx-auto bg-slate-300 rounded	 pt-8 px-8">
              <img className="rounded-full" src={pln} alt="" />
              <p className="text-center text-xl font-serif p-6">Planning</p>
            </div>
            <div className="mx-auto bg-slate-300 rounded	 pt-8 px-8">
              <img className="rounded-full" src={stra} alt="" />
              <p className="text-center text-xl font-serif p-6">Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;