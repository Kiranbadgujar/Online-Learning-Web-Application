import React,{useState} from "react";
import { Link } from "react-router-dom";
import YoutubeEmbed from "../components/Youtube";
import Accordian from "../components/Accordian";
import Starrating from "../components/Starrating";
import BuyNow from "../components/BuyNow";
import { TbBulb } from "react-icons/tb";
import { FaWrench } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { PiStepsDuotone } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import img from "../assets/img2.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";

const Coursedetail = () => {
  const FQs = [
    {
      title: "How much returns can I make from Algo Trading ?",
      paragraph:
        "Algo trading is similar to running a business, it can also be compared to long term investing. The objective of Trading (Manual / Algo) is to make realistic returns that can easily beat most mutual funds and grow your capital in long term. So realistically one can make anywhere between 12% to 30% in Yearly ROI, depending on volatility throughout the year. Always remember - ALGO IS NOT MAGIC, Algo are simple trading strategies (like iron fly/iron condor/spreads) put in a system to automate their entries / exits & SL's.",
    },
    {
      title: "When can I withdraw my profits ?",
      paragraph:
        "Usually it is recommended to re-invest your profits into trading, this will help you to scale up and use the power of compounding. If you still choose to withdraw your profits, you shall do that on 6 monthly basis. This is done to make sure that you have some decent profits to withdraw as more market cycles will pass by.Although you should know that its your own DEMAT & you have 100% control over it, so you can choose to invest or withdraw at any moment.",
    },
    {
      title: "How much capital is needed to start Algo Trading ?",
      paragraph:
        "All our algorithmic strategies are HEDGED OPTION SELLING STRATEGIES & they start in a NON-DIRECTIONAL manner, which means that they start from an Iron-fly or an Iron-Condor, and they automatically keep adjusting themselves as per the market movement.The capital needed to deploy such strategies is 1.2 Lakh Per Lot & The Minimum Lot Size Needed Is 5. So the minimum capital needed to start such ALGO is 6 Lakhs.",
    },
    {
      title: "Is the profit guaranteed ?",
      paragraph:
        "Whether it's Stock Market or Any Other Business, if someone tells you that your amount of profit is guaranteed, the first thing you need to do is - Run Away From Them. A simple report by SEBI clearly states that 90% retail option traders make losses. The main reason for these losses is - EXPECTATION OF QUICK MONEY. The objective of ALGO Trading is to make sure that your emotional involvement is  , which means - there is no place for FEAR, GREED or HOPE. So, in simple words - no one in this world can guarantee you any ROI, but ALGO makes sure that you follow a systematic trading approach for long enough to make consistent and realistic ROI as discussed above in FAQ 1.",
    },
    {
      title: "Is it Ok if I forget to ACTIVATE my strategy ?",
      paragraph:
        "No, usually it's not favourable to miss any day of activation. WHY ? - Because market behaviour is uncertain & the possibility of missing out on favourable chunk of profits is always there. Activating your backtested ALGO system is equivalent to an SIP that you choose to do for long term with complete discipline in order to reap its benefits.",
    },
    {
      title: "Can I stop / pause my trading any time?",
      paragraph:
        "Definitely YES! All your Funds are always held in your own broker account (IIFL Securities) & your funds are always accessible to you and only you. You can choose to Start / Stop / Pause your ALGO's at anytime.",
    },
    {
      title: "Is my loss pre-defined ? Is Algo Safe !",
      paragraph:
        "Definitely 100% YES ! All our strategies have a pre-defined MTM StopLoss of 0.9 to 1% (Max), so no matter what happens in the market, you will never loose more than 1% of your trading capital in any given day. As you might already know - Protecting your capital is the only kep to long term profits in trading - Algo does exactly that for you. Also, all our strategies are Intraday Hedged Option Selling Strategies, which means - you are never at a risk of unlimited loss, even in a black swan event or a broker error. As far as we can say - ALGO is safer than manual trading, primarily because it involves ZERO human emotions & only operates on Hedged Risk Defined - Option Selling Strategies.",
    },
  ];

  const [showBuyNow, setShowBuyNow] = useState(false);
  const handleAddToCart = () => {
    if(!showBuyNow){
      setShowBuyNow(true); // Show BuyNow component 
    }else{
      setShowBuyNow(false);
    }

    
  };

  return (
    <section className="font-mono">
      <div className="flex flex-col justify-center items-center bg-[#0d1624] pt-16 lg:h-96">
        <h1 className="text-white text-[47px] font-light text-center">
          THE RISE OF RETAIL TRADERS BEGINS HERE.
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 py-6">
          <button className="bg-white text-black rounded-full px-4 py-1">
            Join 1,20,000 Subscriber & Follower
          </button>
          <button className="border-2 border-white text-white px-4 py-1 rounded-full">
            8m + Views On Youtube
          </button>
        </div>
      </div>

      <div className="w-[90%] m-auto flex flex-col lg:flex-row justify-center items-center gap-12 mt-14 font-sans mb-12">
        <img
          src={img}
          className="w-[327px] h-[184px] lg:w-[623px] lg:h-[350px]"
        />
        <div className="flex flex-col justify-center items-start gap-4 ">
          <h1 className="text-[36px] font-bold leading-[43px]">
            ALGO Option Strategies To 100% Automate Your Trading
          </h1>
          <p className="text-[18px] font-normal">
            Plan Like A Human. Trade Like A Machine.
          </p>
          <p className="text-[18px] font-normal">
            <span className="text-[16px] font-bold">Language: </span>Hindi
            English Mix
          </p>
          <p className="text-[18px] font-normal">
            <span className="text-[16px] font-bold">Instructors: </span>Utkarsh
            Bhargava
          </p>
          <p className="text-[18px] font-normal">
            <s>₹14999</s> 53.34% OFF
          </p>
          <p className="text-[10px] font-normal">
            <span className="text-[50px] font-semibold">₹5931.36 </span>
            excluding GST
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-3 lg:ml-[495px] mb-12">
        <Link to="/coursepreview" target="_blank">
          <button className="text-[14px] border-2 border-[#d7d7d7] bg-[#f0f0f0] px-12 py-4">
            Preview
          </button>
        </Link>
          <button
            className="border-2 border-black px-16 py-4 text-[14px] font-bold"
            onClick={handleAddToCart}
          >
            Buy Now
          </button>
      </div>

     

      <YoutubeEmbed embedId="SirkFwLBR6I" />

      <div className="flex flex-col justify-center items-center bg-[#000000] pt-8 gap-6 pb-14">
        <h1 className="text-white text-[30px] lg:text-[92px] font-extrabold text-center">
          HEAR ME OUT
        </h1>
        <p className="text-white lg:text-[26px] font-light">
          Before You Decide To Purchase The Course
        </p>
        <p className="text-white text-[16px] font-extrabold">
          WANT TO CHAT WITH US BEFORE JOINING !
        </p>
        <button className="border-2 border-white text-white lg:text-[20px] px-8 py-1 rounded-full ">
          Chat With Support Teams
        </button>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <button className="text-white border-2 border-white bg-[#8a99ff] rounded-md px-4 py-1">
            Watch My Sensibul Verified P&L (LARGE ACCOUNT)
          </button>
          <button className="border-2 border-white text-[white] bg-[#00b8c9] px-4 py-1 rounded-md">
            Watch My Sensibul Verified P&L (SMALL ACCOUNT)
          </button>
        </div>
        <p className="text-white -mt-[20px] text-center">
          *PAST PERFORMANCE IS NOT A GUARANTEE OF FUTURE RESULTS
        </p>
      </div>

      <div className="text-center text-black pt-[25px] mt-12">
        <h1 className="-mt-[40px] pb-3 font-light text-[42px] -tracking-tighter">
          Course highlights
        </h1>
      </div>

      <div className="w-[90%] m-auto flex flex-col lg:flex-row justify-start items-start gap-2 mt-24">
        <TbBulb className="text-[65px]" />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[35px] font-light">100% Automation</h1>
          <p className="text-[21px] font-light">
            Learn how to backtest and automate your own trading strategies.
          </p>
        </div>
        <GiConfirmed className="text-[65px]" />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[35px] font-light">Predefined Strategies</h1>
          <p className="text-[21px] font-light">
            Get lifetime access to my strategy "DELTA".<br></br> Also get
            lifetime access to Discord Community of Algo Traders.
          </p>
        </div>
      </div>
      <div className="w-[90%] m-auto flex flex-col lg:flex-row justify-start items-start gap-2 mt-16 mb-20">
        <CiHeart className="text-[65px]" />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[35px] font-light">Automatically manage risk</h1>
          <p className="text-[21px] font-light">
            Never risk more than 1% of total capital - The secret successful{" "}
            <br></br>trading is achieved.
          </p>
        </div>
        <FaWrench className="text-[55px]" />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[35px] font-light">No coding needed</h1>
          <p className="text-[21px] font-light">
            Execute your strategies on a no-code algorithmic platform.
          </p>
        </div>
      </div>

      {/* accordion */}

      <Accordian />

      {/* FAQS */}

      <div className="bg-black text-white py-12">
        <h1 className="text-[48px] font-bold text-center">FAQs</h1>
        {FQs.map((item, index) => (
          <div key={index}>
            <p className="lg:text-[24px] font-semibold pl-2 lg:pl-52 py-4">
              {item.title}
            </p>
            <p className="w-[90%] pl-3 lg:pl-52">{item.paragraph}</p>
          </div>
        ))}
      </div>

      {/* HOW IT WORK */}

      <div className="w-[70%] m-auto pb-20">
        <h1 className="text-center text-[35px] lg:text-[55px] pt-36 pb-16">
          HOW IT WORKS
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-center items-center gap-2 py-2">
            <PiStepsDuotone className="text-[95px] bg-black text-white rounded-full p-2" />
            <h1 className="text-[35px] font-light">Step One</h1>
            <p className="text-[21px] font-light">
              Finish your course purchase
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 py-2">
            <MdMarkEmailRead className="text-[95px] bg-black text-white rounded-full p-2" />
            <h1 className="text-[35px] font-light">Step Two</h1>
            <p className="text-[21px] font-light text-center">
              Get joining details on your e-mail
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 py-2">
            <SiOpenaccess className="text-[90px] bg-black text-white rounded-full p-2" />
            <h1 className="text-[35px] font-light">Step Three</h1>
            <p className="text-[21px] font-light text-center">
              Get access to Course + Algo Strategies<br></br> Activation Keys
            </p>
          </div>
        </div>
      </div>

      {/* Hear from our users */}

      <div className=" bg-black py-32">
        <h1 className="text-[35px] lg:text-[47px] font-normal text-center text-white">
          Hear from our users
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 py-8">
          <img src={user1} className="w-[271px] h-[275px]" />
          <img src={user2} className="w-[271px] h-[275px]" />
          <img src={user3} className="w-[271px] h-[275px]" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 py-8">
          <img src={user4} className="w-[271px] h-[275px]" />
          <img src={user5} className="w-[271px] h-[275px]" />
          <img src={user6} className="w-[271px] h-[275px]" />
        </div>
      </div>

      {/* Rating  */}

      <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-xl sm:mx-auto">
          <div className="bg-black min-w-1xl flex flex-col rounded-md shadow-lg">
            <div className="px-12 py-5">
              <h2 className="text-white text-3xl font-semibold">
                Your opinion matters to us!
              </h2>
            </div>
            <div className="bg-black w-full flex flex-col items-center">
              <div className="flex flex-col items-center py-3">
                <span className="text-lg text-white">
                  How was quality of the course?
                </span>
              </div>
              <Starrating />
              <div className="w-3/4 flex flex-col">
                {/* <textarea
                  rows="3"
                  className="p-4 text-gray-500 rounded-xl resize-none"
                >
                  Leave a message, if you want
                </textarea> */}
                <button className="py-3 my-8 text-lg  rounded-lg bg-[#ffd200] text-white">
                  Rate now
                </button>
              </div>
            </div>
            <div className="h-20 flex items-center justify-center">
              <a
                href="#"
                className="text-white py-3 my-8 w-3/4 text-center rounded-lg hover:bg-[#ffd200]"
              >
                Maybe later
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* OUR PARTNER */}

      <div className="w-[80%] m-auto">
        <h1 className="text-[28px] font-normal pt-36 text-center">
          OUR PARTNERS
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 py-8">
          <img src={logo1} className="w-[211px] h-[60px]" />
          <img src={logo2} className="w-[211px] h-[60px]" />
          <img src={logo3} className="w-[211px] h-[60px]" />
        </div>
      </div>
      
      {/* Buy Now  */}
      {showBuyNow && <BuyNow />}
    </section>
  );
};

export default Coursedetail;
