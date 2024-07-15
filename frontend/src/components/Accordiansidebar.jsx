import React, { useState } from "react";
import {Link} from "react-router-dom"
import { MdOutlineDoubleArrow } from "react-icons/md";
import { RiFolderVideoLine } from "react-icons/ri";

const Accordian = () => {
  const data = [
    {
      id: 1,
      section: "Intro To The Course",
      topics: [
        {
          title: "What are we going to learn in the Algo course",
          link: "2",
        },
      ],
    },
    {
      id: 2,
      section: "Basics Of Algo Trading",
      topics: [
        {
          title: "What Is ALGO Trading (Part 1)",
          duration: "15 min",
        },
        {
          title: "What Is ALGO Trading (Part 2)",
          duration: "16 min 51 sec",
        },
        {
          title: "Types Of Traders-Systematic Vs Discritionary",
          duration: "23 min 27 sec",
        },
        {
          title: "Investments & Tools Begin Algo Trading",
          duration: "12 min 24 sec",
        },
      ],
    },
    {
      id: 3,
      section: "Setting Up your Algo Trading Account",
      sessions: 6,
      time: "40 min 8 sec",
      topics: [
        {
          title: "IIFL Securities Account Opening Process",
          duration: "23 min 11 sec",
        },
        {
          title:
            "IIFL - Steps To Open Blaze Account & Get API Keys For ALGO Trading",
          duration: "",
        },
        {
          title:
            "Algotest Account Opening Process With Referral Code For Extra Credits",
          duration: "7 min 42 sec",
        },
        {
          title: "Algotest Account Opening Process",
          duration: "Not specified",
        },
        {
          title: "How To Fund Your IIFL Blaze Account",
          duration: "5 min 48 sec",
        },
        {
          title:
            "How To Link Your ALGOTEST account with IIFL BLAZE to activate algo strategies",
          duration: "3 min 26 sec",
        },
      ],
    },
    {
      id: 4,
      section: "Strategies Can Be Deployed Using ALGO",
      sessions: 9,
      time: "2 hour 7 min 9 sec",
      topics: [
        {
          title:
            "Why do we need to learn strategy creation to deploy Great Algo Strategies !",
          duration: "6 min 58 sec",
        },
        {
          title: "Bull Call Spread",
          duration: "16 min 30 sec",
        },
        {
          title: "Bull Put Spread",
          duration: "18 min 18 sec",
        },
        {
          title: "Bear Call Spread",
          duration: "7 min 5 sec",
        },
        {
          title: "Bear Put Spread",
          duration: "11 min 47 sec",
        },
        {
          title: "Short Straddle",
          duration: "20 min 33 sec",
        },
        {
          title: "Short Strangle",
          duration: "9 min 50 sec",
        },
        {
          title: "ButterFly Spread",
          duration: "17 min 7 sec",
        },
        {
          title:
            "Iron Condor - The Safest Option Selling Strategy For Consistent Returns In Long Term",
          duration: "18 min 57 sec",
        },
      ],
    },
    {
      id: 5,
      section: "How to Create, Backtest & Analyse Algo Strategies",
      sessions: 18,
      time: "5 hour 29 min 27 sec",
      topics: [
        {
          title: "Building a strategy using straddle and strangle",
          duration: "39 min 7 sec",
        },
        {
          title: "Turning Iron Condor Into Algo Strategy",
          duration: "20 min 28 sec",
        },
        {
          title: "Turning Iron Butterfly Into Algo Strategy",
          duration: "16 min 21 sec",
        },
        {
          title: "Iron Condor + Iron Butterfly - A Non Corelated Strategy Mix",
          duration: "23 min 52 sec",
        },
        {
          title:
            "Understanding All Usable Features Of Algo Platform To Create Better Strategies (part 1)",
          duration: "17 min",
        },
        {
          title:
            "Understanding All Usable Features Of Algo Platform To Create Better Strategies (part 2)",
          duration: "19 min 50 sec",
        },
        {
          title:
            "Understanding Parameters Of Your Algo System (MDD, Expectancy, Win%, ROI etc)",
          duration: "30 min 21 sec",
        },
      ],
    },
    {
      id: 6,
      section: "How to Create, Backtest & Analyse Algo Strategies",
      sessions: 18,
      time: "5 hour 29 min 27 sec",
      topics: [
        {
          title: "Building a strategy using straddle and strangle",
          duration: "39 min 7 sec",
        },
        {
          title: "Turning Iron Condor Into Algo Strategy",
          duration: "20 min 28 sec",
        },
        {
          title: "Turning Iron Butterfly Into Algo Strategy",
          duration: "16 min 21 sec",
        },
        {
          title: "Iron Condor + Iron Butterfly - A Non Corelated Strategy Mix",
          duration: "23 min 52 sec",
        },
        {
          title:
            "Understanding All Usable Features Of Algo Platform To Create Better Strategies (part 1)",
          duration: "17 min",
        },
        {
          title:
            "Understanding All Usable Features Of Algo Platform To Create Better Strategies (part 2)",
          duration: "19 min 50 sec",
        },
        {
          title:
            "Understanding Parameters Of Your Algo System (MDD, Expectancy, Win%, ROI etc)",
          duration: "30 min 21 sec",
        },
      ],
    },
    {
      id: 7,
      section: "Exclusive Access To My Personal ALGO System",
      sessions: 2,
      time: "10 min 31 sec",
      topics: [
        {
          title:
            "Understanding ALGO ACTIVATION CALENDAR - Deploy Strategies As Per The Calendar",
          duration: "10 min 31 sec",
        },
        {
          title: "Execution Settings For Your ALGO Strategies (7 pages)",
          duration: "",
        },
      ],
    },
    {
      id: 8,
      section: "Psychology & Risk Management For ALGO Trading",
      sessions: 2,
      time: "Time: 29 min 29 sec",
      topics: [
        {
          title:
            "Psychology Of An ALGO Trader (If Its a system then why do we need psychology) - Understanding with live example",
          duration: "16 min 24 sec",
        },
        {
          title:
            "The 1% Risk Management Rule For Successful Algo Trading Business",
          duration: "13 min 4 sec",
        },
      ],
    },
    {
      id: 9,
      section: "Live Deployment Of Algo Strategies",
      sessions: 3,
      time: "27 min 32 sec",
      topics: [
        {
          title: "Strategy Execution Settings To Reduce Slippages.mp4",
          duration: "21 min 16 sec",
        },
        {
          title:
            "How To Deploy Your Own Strategies In Live Market With Algotest & IIFL",
          duration: "6 min 15 sec",
        },
      ],
    },
    {
      id: 10,
      section: "Live Sessions Archives",
      sessions: 3,
      time: "6 hour 9 min 42 sec",
      topics: [
        {
          title: "Jan'24 - ALGO QnA Session",
          duration: "2 hour 33 min 36 sec",
        },
        {
          title:
            "LIVE Recording - Rolling Strangles (Contra Strategies) + Psychology & Doubts",
          duration: "2 hour 8 min 32 sec",
        },
        {
          title:
            "LIVE Recording - Understanding CONTRA Strategies (Maximising Returns Systematically) + LIVE FAQ",
          duration: "1 hour 27 min 34 sec",
        },
      ],
    },
    // Additional data items here...
  ];

  const [visibleAccordion, setVisibleAccordion] = useState(null); // State to track which accordion is open

  const toggleVisibility = (accordionId) => {
    setVisibleAccordion(visibleAccordion === accordionId ? null : accordionId);
  };

  const handleDtClick = (event, accordionId) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent elements
    toggleVisibility(accordionId); // Toggle the accordion visibility
  };

  return (
    <div id="accordion" className="w-[80%] m-auto mb-80 font-mono">
      {data.map((accordion) => (
        <div key={accordion.id} className="mt-6">
          <div className="rounded-md pl-4">
            <dt
              className="cursor-pointer flex justify-start items-center"
              onClick={(event) => handleDtClick(event, accordion.id)}
            >
              <MdOutlineDoubleArrow className="lg:text-[22px] " />
              <div className="pl-2">
                <h1 className="text-[15px] font-semibold">
                  {accordion.section}
                </h1>
              </div>
            </dt>
          </div>
          <dd
            className={`${visibleAccordion === accordion.id ? "" : "hidden"} w-[97%]  m-auto`}
          >
            {accordion.topics.map((topic, index) => (
              <div key={index} className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex justify-between items-center lg:pl-6">
                  <RiFolderVideoLine className="text-black text-[20px]" />
                  <Link ><p className="text-[13px] font-normal pl-4 py-1">{topic.title}</p></Link>
                </div>
              </div>
            ))}
          </dd>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
