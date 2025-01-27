import React from "react"
import Image from 'next/image';
import 'tailwindcss/tailwind.css'
import SearchBar from '../../componets/searchBar'
import NavigationBar from '../../componets/navigationBar'
import AccountAvatar from "../../componets/accountAvatar";
import DynamicBanner from "../../componets/dynamicBanner";
import AppCard from "../../componets/appCard";
import BarChart from "../../componets/barChart";
import ClaimTable from "../../componets/claimTable";
import { useRouter } from 'next/router';

const claimData = [
  {
    claimId: 12345,
    date: "2024-01-01",
    patientFirstname: "Megan",
    patientLastname: "Smith",
    status: "Paid",
    amount: 1000,
  },
  {
    claimId: 12346,
    date: "2024-02-01",
    patientFirstname: "Barry",
    patientLastname: "Smith",
    status: "Declined",
    amount: 500,
  },
  {
    claimId: 12347,
    date: "2024-03-01",
    patientFirstname: "Baz",
    patientLastname: "Smith",
    status: "Pending",
    amount: 2000,
  },
  {
    claimId: 12348,
    date: "2024-04-01",
    patientFirstname: "Foo",
    patientLastname: "Smith",
    status: "Paid",
    amount: 1000,
  },
  {
    claimId: 12349,
    date: "2024-04-01",
    patientFirstname: "Max",
    patientLastname: "Smith",
    status: "Paid",
    amount: 1000,
  },
  {
    claimId: 12350,
    date: "2024-04-01",
    patientFirstname: "Megs",
    patientLastname: "Smith",
    status: "Paid",
    amount: 1000,
  },
  {
    claimId: 12353,
    date: "2024-04-01",
    patientFirstname: "Smith",
    patientLastname: "Smith",
    status: "Declined",
    amount: 1000
  },
];

export default function DashboardHome() {

  const router = useRouter();
  const { userName } = router.query;

    return (
      <div className="bg-background-grey min-h-screen">
        
        {/* header */}
        <div className="absolute text-leaf-green px-10 py-1 z-10 w-full">
          <div className="flex items-center justify-between py-2 text-5x1">
            <div className="flex ">
            <Image
              src="/images/Denplan-logo.png"
              alt="Denplan Logo"
              width={161}
              height={61}
            />
            </div>
            <div className="flex items-center ml-40">
              <NavigationBar />
            </div>

            <div className="flex items-center">
              <AccountAvatar lastName={userName?.toString() ?? ""} role="Dentist" />
            </div>
          </div>
        </div>

        {/* banner */}
        <div className="absolute h-32 w-full mt-24">
          <DynamicBanner image={[{src: '/images/denplan-bike.png', link: 'https://www.denplan.co.uk/the-core/industry-and-company-news/cycling-conference'}, {src: "/images/DenplanSummit2025.png", link: "https://www.denplan.co.uk/dentists/events/the-denplan-summit-2025.html"}]} />
        </div>

        {/* divider */}
        <div className="absolute w-full mt-72 border-t-2 border-leaf-green-40"/>

        {/* search bar */}
        <div className="absolute px-10 py-1 z-10 w-full mt-72">
          <div className="flex items-center justify-center w-full mt-4"/>
          <div className="flex items-center justify-center w-full mt-2">
            <div className="w-2/5 bg-white rounded-full">
              <SearchBar placeholder="Search for patients, reports, settings..." onChange={() => {}} />
            </div>
          </div>
          
        </div>

        {/* content section */}
        <div className="flex justify-center items-center flex-row pt-[25rem] px-10 pb-8">         
          <div className="w-10/12">
            <div className="flex flex-row">
              <div className="bg-white border border-grey-2 rounded-xl w-7/12 mr-2 p-6" >
              <div className="flex justify-between items-center">
                    <p className="text-left leading-none">
                      <strong className="text-5xl text-black leading-none font-bold">Claims</strong><br />
                      {/* <span className="text-xl text-leaf-green-80 leading-none font-bold">Insert Sub Yext</span> */}
                    </p>
                    <button className="bg-apple-green rounded-full shadow-lg text-white text-lg font-bold py-2 px-4">
                      Create New Claim
                    </button>
                  </div>
                  <div className="mt-4 overflow-auto" style={{ maxHeight: '300px' }}>
                    <ClaimTable claims={claimData} />
                  </div>
              </div>

              <div className="bg-no-repeat bg-white border border-grey-2 rounded-xl w-5/12 ml-2 p-6" >
                <div className="flex justify-between items-center">
                    <p className="text-left leading-none">
                      <strong className="text-5xl text-black leading-none font-bold">2,134</strong><br />
                      <span className="text-xl text-leaf-green-80 leading-none font-bold">Currently Active Patients</span>
                    </p>
                    <button className="bg-apple-green rounded-full shadow-lg text-white text-lg font-bold py-2 px-4">
                      + Sign New
                    </button>
                  </div>
                  <div className="mt-6">
                    <BarChart 
                      months={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']} 
                      patientNumbers={[2000, 1900, 2010, 2040, 2003, 2134, 2200,]} 
                    />
                  </div>
                </div>
            </div>
            <div className="flex flex-row h-64 mt-6">
              <div className="border border-grey-2 rounded-xl shadow-lg px-6 py-4 w-4/12" style={{ 
                backgroundImage: `url("../images/month-report-card.png")`,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                backgroundColor: 'white'}}>
                <AppCard title={"Monthly Reports"} subTitle={"View your joiners, leavers and monthly income"} description={"x"} buttonText={"View reports"} />
              </div>
              <div className="border border-grey-2 rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12" style={{ 
                backgroundImage: `url("../images/order-lit-card.png")`,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                backgroundColor: 'white'}}>
                <AppCard title={"Order Literature Online"} subTitle={"Order stock to a practice through our hub"} description={"x"} buttonText={"Order here"} />
              </div>
              <div className="border border-grey-2 rounded-xl shadow-lg px-6 py-4 w-4/12" style={{ 
                backgroundImage: `url("../images/quality-man-card.png")`,
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                backgroundColor: 'white'}}>
                <AppCard title={"Quality Manuals"} subTitle={"Helping you stay compliant"} description={"You can view, download and personalise our documents, manuals and guides for your own needs."} buttonText={"View manuals"} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-row pt-4 px-10 border-t-2 border-leaf-green-40 "/>

        {/* footer */}
        <div className="absolute bg-background-grey px-10 w-full ">
          <div className="flex items-center justify-center py-2 text-5x1 mt-2 ml-48">
            <div className="flex items-center">
            <p className="text-left">
              <strong className="text-lg text-leaf-green underline mr-4">Accessibility</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Privacy and Legal</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Frequently Asked Questions</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Careers</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Feedback</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Sitemap</strong><strong className="text-lg text-leaf-green leading-none underline mr-4">Simplyhealth</strong><br />
              <strong className="text-lg text-leaf-green underline mr-32"></strong><span className="text-sm text-grey-4">Copyright © 2024 Megan Limited | blah blah blah legal stuff | Registered Company Number 12345678 </span>
            </p>
            </div>
            <div className="flex items-center ml-48">
              <Image
                src="/images/Denplan-B-Corp-Footer.png"
                alt="Denplan Logo"
                width={260}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    );}

    