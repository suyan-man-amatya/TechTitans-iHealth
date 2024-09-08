import React from "react";
import { MdLocalPolice } from "react-icons/md";
import { MdTraffic } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { PiFireTruckFill } from "react-icons/pi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GiRobberMask } from "react-icons/gi";
import { FaChildReaching } from "react-icons/fa6";
import { TbSolarElectricity } from "react-icons/tb";
import { BiSolidDonateBlood } from "react-icons/bi";
import { LuCross } from "react-icons/lu";
import { FaVanShuttle } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import img from "../../assets/contact.png";

function CareCenter() {
  return (
    <div className="flex bg-ambulance bg-cover  justify-around gap-20 mx-8 rounded-3xl mb-10 shadow-xl">
      <div className="emergency-nums backdrop-blur-md text-black rounded-2xl p-3 shadow-md w-1/3 h-4/5 shadow-xl m-5 py-10 px-10">
        <h1 className="font-semibold text-2xl text-center p-3">
          Emergency Contacts
        </h1>

        <div className="list-none font-semibold p-4">
          <div className="flex items-center gap-2 py-3">
            <div>
              <MdLocalPolice />
            </div>

            <div className="flex flex-row justify-between w-full">
              <div>Police Control Room -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 100">100</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <MdTraffic />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Traffic Control Room -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 103">103</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaCarRear />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Traffic Jam Information(SMS) - </div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <MdOutlineTextsms className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4321">JAM 4321</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <PiFireTruckFill />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Fire Fighters -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 101">101</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <GiPoliceOfficerHead />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Emergency Police Service -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4228435">4228435</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <GiRobberMask />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Crime Information -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4412748">4412748</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaChildReaching />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Child Missing -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 104">104</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <TbSolarElectricity />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Nepal Electricity Authority -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4153164">4153164</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <BiSolidDonateBlood />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Blood Bank -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4225344">4225344</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <LuCross />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Nepal Red Cross Society </div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4270650">4270650</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <LuCross />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Bhaktapur Red Cross -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 6611661">6611661</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaVanShuttle />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Hearse(Shav Vahan) -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 6612266">6612266</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="img-avatar w-1/3 h-2/3 py-60">
        <img src={img} alt="" />
      </div> */}

      <div className="hospital-nums backdrop-blur-md text-black rounded-2xl p-3 shadow-md w-1/3 h-4/5 shadow-xl m-5 py-10 px-10">
        <h1 className="text-black font-semibold text-2xl text-center p-3">
          Hospitals Contacts
        </h1>

        <div className="list-none font-semibold p-4">
          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Army Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4271940">4271940</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Bir Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4221988">4221988</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Bhaktapur Cancer Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 6611532">6611532</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Chirayu National Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 5905888">5905888</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Kanti Children Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4411550">4411550</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Nidan Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 9745619619">9745619619</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Norvic Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4258554">4258554</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Police Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4412430">4412430</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Patan Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 5522295">5522295</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Om Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4476225">4476225</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Star Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 5550197">5550197</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3">
            <div>
              <FaHospital />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div>Teaching Hospital -</div>
              <div className="symbol flex gap-4">
                <div className="emo">
                  <LuPhoneCall className="text-black" size={24} />
                </div>
                <div className="no">
                  {" "}
                  <a href="tel:+977 4412505">4412505</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareCenter;
