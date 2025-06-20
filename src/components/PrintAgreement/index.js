import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Button, Image } from 'antd';
import dayjs from 'dayjs';
import { useReactToPrint } from 'react-to-print';
import logo from '@/assets/SiderIcons/HighNsky_Logo-1-removebg-preview-p-500.png';

const PrintAgreement = ({ form, getPrintAgreement, setOpenModal }) => {
  const printRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <div>
      <Form
        // requiredMark={false}
        layout="vertical"
        form={form}
        // onFinish={onFinish}
        name="addVehicle"
      >
        <div className=" py-2 px-2 " ref={printRef}>
          {/* <div className="mb-[30px] flex justify-center border-b">
            <h1 className="heading-7227">Rental Agreement Terms</h1>
          </div> */}
          <div className="flex justify-center border-b bg-gray-100">
            <img
              style={{
                height: '140px',
                width: '300px',
              }}
              src={logo}
            />
          </div>

          <div className="border-b pb-4 pl-4 pt-4 pb-4">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex">
                  <span className="formLabel mr-1 text-lg">First Name</span>
                  <div className="  text-lg">
                    :{getPrintAgreement?.firstName} {getPrintAgreement?.lastName}
                  </div>
                </div>
              </Col>
              {/* <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="flex">
                  <span className=" mr-1 text-lg">Last Name</span>
                  <div className="formLabel text-lg">:{getPrintAgreement?.lastName}</div>
                </div>
              </Col> */}
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex">
                  <span className="formLabel mr-1 text-lg">Phone No.</span>
                  <div className=" text-lg">:{getPrintAgreement?.phoneNo}</div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border-b py-4 bg-gray-100 pl-4">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex">
                  <span className="formLabel mr-1 text-lg">Email</span>
                  <div className="  text-lg">:{getPrintAgreement?.email}</div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex">
                  <span className="formLabel mr-1 text-lg">VehicleName</span>
                  <div className=" text-lg">:{getPrintAgreement?.CarDetails?.vehicleName}</div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={12} xl={12}></Col>
            </Row>
          </div>
          <div className="border-b py-4 pl-4 ">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex">
                  <span className="formLabel mr-1 text-lg">Pickup Date</span>
                  <div className="  text-lg">
                    :{dayjs(getPrintAgreement?.pickupDate).format('DD MM YYYY')}
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex">
                  <span className="formLabel mr-1 text-lg">Drop Off Date</span>
                  <div className="  text-lg">
                    :{dayjs(getPrintAgreement?.returnDate).format('DD MM YYYY')}
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
            </Row>
          </div>
          <div className="border-b py-4 bg-gray-100 pl-4">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex">
                  <span className="formLabel mr-1 text-lg">Pickup Time</span>
                  <div className=" text-lg">
                    :{dayjs(getPrintAgreement?.pickupTime).format('h:mm A')}
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex">
                  <span className="formLabel mr-1 text-lg">Drop Off Time</span>
                  <div className=" text-lg">
                    :{dayjs(getPrintAgreement?.returnTime).format('h:mm A')}
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                {/* <div className='flex'>
          <span className=" mr-1 text-lg">Phone No.</span>
          <div className='formLabel text-lg'>:{getPrintAgreement?.phoneNo}</div></div> */}
              </Col>
            </Row>
          </div>

          <div className="border-b py-4  pl-4">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="flex ">
                  <span className="formLabel mr-1 text-lg">Pickup Location</span>
                  <div className="  text-lg">:{getPrintAgreement?.pickupLocation}</div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border-b py-4  pl-4  bg-gray-100">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="flex ">
                  <span className="formLabel mr-1 text-lg"> Grand Total</span>
                  <div className="  text-lg">: ${getPrintAgreement?.total?.toFixed(2)}</div>
                </div>
              </Col>
            </Row>
          </div>

          <div id="printablediv" className="mx-8">
            <div className="mb-[40px]">
              <h1 className="heading-7227">Rental Agreement Terms</h1>
            </div>
            <div className="">
              <ul className="list-disc">
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    Authorised Renters and Joint Renters Must between the Age of 21-75yrs and
                    Licensed
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    All Parking &amp; Traffic Voilations are Responsibility of Renter and Must be
                    Reported at Termination of Rental
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    All Drivers Must be Registered on Contract, if not, Contract is Void.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    Renter Agrees to be Responsible to Owner for all Actions Taken by Joint Renters.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    Renter Understands and Agrees to pay up to the Chosen Full Insurance Excess
                    Amount in the Event of any Accident or Damage to the Vehicle Regardless of
                    Fault.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    Single Vehicle Accident is the Insurance Excess Amount Agreed Upon on the
                    Contract.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    Fire, Theft &amp; Animal Damage is Classified as Vehicle Accident.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    All Accidents Must be Reported Immediately and Accident Reports Completed within
                    24 hours.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    If Vehicle Insurance is not Purchased Through{' '}
                    <span className="text-span-52 font-bold">HighNsky</span>, Basic Excess Applies
                    and Must be Claimed Back Through the Third Party.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    A Security Pre-Authorisation Bond Will be Required as Part of Payment. The
                    Amount is Dependent on The Type of Insurance you Select.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="heading-291 flex mb-5 font-semibold text-lg">
                Drivers Qualifications
              </div>
              <ul className="list-disc">
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    Each Driver must be listed on the Rental Agreement and must present their
                    Drivers&#x27;s license at the time of collection. There is an additional Driver
                    fee of just $8 for as many Driver as preferred. Maximum 4 Driver per rental.
                  </div>
                </li>
              </ul>
            </div>
            <ul className="list-disc">
              <li>
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                  Authorisation to Charge $50 Processing Fee to Credit Card IF any Parking, Traffic
                  Offences or Speeding Infringements. Charged to Credit Card Provided with Rental.
                </div>
              </li>
              <li className="mt-2">
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                  Replacement Fee&#x27;s apply if Damaged or Lost - Wheel Trims, Fuel Caps,
                  Windscreen Damage, Windscreen Replacement, Windscreen Wipers, Aerials, Parcel
                  Tray, Interior Seats.
                </div>
              </li>
            </ul>
            <div className="heading-291 flex mb-5 font-semibold text-lg">International Drivers</div>
            <ul className="list-disc">
              <li>
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] sp">
                  An International Driver Licence [IDL] is only accepted as a valid driver licence
                  if it is recorded in the Roman Alphabet (e.g. A, B, C etc.). If your International
                  Driver Licence is not recorded in the Roman Alphabet, we will also require an
                  International Driving Permit [IDP] as supporting documentation. We may also ask
                  for your passport to verify your IDL and/or IDP, or for identification purposes,
                  and a copy will be kept for our records.
                </div>
              </li>
              <li>
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] ppss">
                  International drivers from China are also required to provide an International
                  Driver Licence, but may use a China National Certificate [CNC] instead of an IDP
                  as supporting documentation along with their national Chinese driver licence.
                </div>
              </li>
            </ul>
            <div className="heading-291 flex mb-5 font-semibold text-lg">
              Provisional Drivers (Australia only)
            </div>
            <ul role="list" className="list-13 list-disc">
              <li>
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] spp">
                  Australian drivers holding a Provisional Licence (P-plate) may rent from{' '}
                  <span className="text-span-52 font-bold">HighNsky</span> Rentals under the
                  following conditions.
                </div>
              </li>
              <li className="list-item">
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                  The provisional driver must have held his/her licence for a minimum period of 12
                  months.
                </div>
              </li>
              <li className="list-item-2">
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                  A P-plate must be displayed on the vehicle at all times and in keeping with the
                  rules and regulations of the state you are driving in
                </div>
              </li>
              <li>
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                  The Customer must purchase the Loss Damage Waiver [LDW] protection option at the
                  time of collection of the vehicle
                </div>
              </li>
              <li>
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                  An age surcharge applies to all provisional drivers aged between 21 to 24
                  years-old and must be reflected in the Rental Agreement at the time of collection
                  of the vehicle
                </div>
              </li>
              <li>
                <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] ppss">
                  A hard copy or digital version of the following utility bills are accepted forms
                  of identification: electricity, gas, rates, water, phone and internet bills.
                </div>
              </li>
            </ul>
            <div className="heading-291 flex mb-5 font-semibold text-lg">
              Important: Child safety
            </div>
            <div>
              <ul className="list-disc">
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] ps">
                    It is the responsibility of the Customer to ensure the appropriate child seat or
                    seats are selected and fitted for children travelling in the rental vehicle.
                    <span className="text-span-52 font-bold">HighNsky</span> Rentals takes no
                    responsibility for fines, injury or death, or any other loss associated with
                    failure to have a child seat fitted in the vehicle or failure to safely restrain
                    children in the rental vehicle. We take no responsibility for the proper
                    installation and/or adjustment of child seat restraints.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    It is the responsibility of the Customer to comply with all mandated seatbelt
                    and child seat restraint laws applicable to every State or Territory in
                    Australia. Police infringements may be issued to the driver of the vehicle for
                    any unrestrained occupants, including incorrectly fitted and adjusted child
                    restraints.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-2 px-2">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ marginTop: '32px' }}>
                <span className=" text-lg ml-6">
                  Yes, I accept all Terms and Conditions of this agreement
                </span>
              </Col>
            </Row>
          </div>
          <div className="flex justify-end">
            <Row gutter={24}>
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <span className=" mr-1 text-lg ">Signature</span>
                <div className="border mt-2 py-10 px-40"></div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="mt-4 flex justify-end border-t ">
          <div className="pt-4">
            <Button
              className="mr-2 flex gap-2 cursor-pointer bg-[#E0B34E]  rounded-[10px] border hoprintablediv:border-black text-[17px] hoprintablediv:text-black duration-1000 hoprintablediv:scale-105 px-6 py-2"
              onClick={() => {
                setOpenModal({ name: '', open: false });
              }}
              type="primary"
            >
              Cancel
            </Button>
            <Button
              className="flex gap-2 cursor-pointer bg-[#E0B34E]  rounded-[10px] border hoprintablediv:border-black text-[17px] hoprintablediv:text-black duration-1000 hoprintablediv:scale-105 px-6 py-2"
              onClick={() => {
                handlePrint();
              }}
              type="primary"
            >
              Print
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PrintAgreement;
