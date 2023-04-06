import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import PersonalDetails from "../TabPanels/PersonalDetail/index";
import AddressDetails from "../TabPanels/AddressDetails/index";
import KycDetails from "../TabPanels/KycDetails/index";
import FamilyInformation from "../TabPanels/FamilyInformation/index";
import BusinessInformation from "../TabPanels/BusinessInformation/index";
import CurrentLoan from "../TabPanels/CurrentLoan/index";
import AssetDetails from "../TabPanels/AssetDetails/index";
import ReferenceDetails from "../TabPanels/ReferenceDetails/index";
type Props = {};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const index = ({ children, ...props }: React.ComponentProps<typeof Tab>) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const a = [
    "Personal Details",
    "Address Details",
    "KYC Details",
    "Family Information",
    "Business Information",
    "Current selfDeclared loans",
    "Type of Assets",
    "Reference",
  ];
  return (
    <>
      <div className="w-full  px-2 py-0 sm:px-0 h-screen">
        <Tab.Group
          onChange={(index: any) => {
            setSelectedIndex(index);
          }}
          selectedIndex={selectedIndex}
          defaultIndex={0}
        >
          <Tab.List
            className={`flex w-full justify-between gap-6 rounded-xl px-6 overflow-x-auto scrollbar-hide mobileLg:h-[120px] h-[120px]`}
          >
            {a.map((tab, idx) => (
              <Tab
                // disabled={idx > selectedIndex}
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "mobileLg:px-6 w-full px-6  rounded-lg py-1 text-sm font-medium  my-6 text-center outline-none",
                    "",
                    selected
                      ? "bg-white shadow border-2 text-blue-700 border-blue-500"
                      : "text-black/70 border-2 border-slate-500/20 hover:text-black"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <PersonalDetails
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
            <Tab.Panel>
              <AddressDetails
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
            <Tab.Panel>
              <KycDetails
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
            <Tab.Panel>
              {" "}
              <FamilyInformation
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
            <Tab.Panel>
              <BusinessInformation
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
            <Tab.Panel>
              <CurrentLoan
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
            <Tab.Panel>
              <AssetDetails
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
            <Tab.Panel>
              <ReferenceDetails
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default index;
