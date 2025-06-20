import { Button, Modal, Tooltip } from "antd";
import ReactToPrint from "react-to-print";


const UpdatedInvoice=({visible,setVisible})=>{

return(<>

<Modal
        width={1200}
        title={null}
        centered
        open={visible}
        closable={false}
        onCancel={() => setVisible(false)}
        footer={false}
        // footer={
        //   <div className="flex w-full justify-end" style={{}}>
        //     <Button
        //       type="primary"
        //       onClick={() => setVisible(false)}
        //       style={{ marginRight: '10px' }}
        //     >
        //       Print
        //     </Button>
        //     <Button
        //       type="primary"
        //       onClick={() => {
        //         setVisible(false);
        //       }}
        //     >
        //       Close
        //     </Button>
        //   </div>
        // }
        bodyStyle={{ width: '1200px', fontSize: '1.125rem',lineHeight: '1.75rem',  justifyContent: 'center', backgroundColor: 'white' }}
      >

{/* <ReactToPrint
            trigger={() => (
              <Tooltip title="Print Out Slip">
             
                <Button type='primary' size='large'className='mr-16'>print Invoice</Button>
         
              </Tooltip>
            )}
            content={() => componentRef1?.current}
          /> */}

        <div  >
 

        <div className="p-10 bg-grey-100 h-full " > 
          <div className=" w-full flex " style={{ borderLeft: '2px solid black' , borderTop: '2px solid black' }}>
            <div className="w-2/4 p-2">
              <div className="flex flex-row w-full ">
                <div className="w-2/3">
                  <div className="uppercase text-3xl font-semibold py-2">HighNSky</div>

                  <div className="uppercase  font-semibold ">ABC- (from 1-Apr-22)</div>
                  <div className="uppercase  ">Scf-22 , S.S.T. Nagar Patiala</div>
            
              
              
                  <div className="flex flex-row ">
                    <div
                      className="uppercase "
                      style={{ width: '130px' }}
                    >
                   GSTIN/UIN
                    </div>
                    <div className="">03BFMPS7903G3Z8</div>
                  </div>

              
                  <div className="flex flex-row ">
                    <div
                      className="uppercase   "
                      style={{  width: '130px' }}
                    >
                   State Name
                    </div>
                    <div className="">
                        {/* {orderData?.addressss?.state},  Code : {orderData?.addressss?.pinCode} */}
                        
                        </div>
                  </div>
                  

                  <div className="flex flex-row ">
                    <div
                      className="uppercase  "
                      style={{ width: '130px' }}
                    >
                      Contact
                    </div>
                    <div className="">0175-5003548, <br/>9872913201</div>
                  </div>
                  
                  <div className="flex flex-row">
                    <div
                      className="uppercase  "
                      style={{  width: '130px' }}
                    >
                      Email
                    </div>
                    <div className="font-medium">abc@gmail.com</div>
                  </div>

                  
                </div>
                <div className="mt-6 ">
                  {/* <img
                    src={logo1}
                    alt="OHM Wholesale"
                    style={{ height: 120, width: 180, marginRight: '20px' }}
                  /> */}
                </div>
              </div>
            </div>
            <div className="w-2/4 " style={{ borderLeft: '2px solid black' }}>
          
              <div className="flex flex-row w-full">
                <div className="w-1/2 ">

                <div
                    className="text-center "
                    style={{ borderBottom: '2px solid black',height:'70px', borderRight: '2px solid black' }}
                  >
                 Invoice No
                 {/* <p className='font-semibold'>{orderData?._id}</p> */}
                 
                  </div>
                <div
                    className="text-center"
                    style={{ borderBottom: '2px solid black',height:'70px', borderRight: '2px solid black' }}
                  >
  
                  </div>

                  <div
                    className="text-center"
                    style={{ borderBottom: '2px solid black',height:'70px', borderRight: '2px solid black' }}
                  >
                  Supplier Reference
                  </div>
                  <div className="text-center  " style={{height:'70px', borderRight: '2px solid black' }}>
                  Buyer's Order No
                  </div>
                </div>
                <div className="w-1/2">

                <div
                    className="text-center"
                    style={{ borderBottom: '2px solid black',borderRight: '2px solid black', height:'70px',  }}
                  >
                 Invoice Date
                 {/* <p className='font-semibold'> {dayjs(orderData?.createdAt).format('DD-MMM-YYYY')}</p> */}
                  </div>

                <div
                    className="text-center"
                    style={{ borderBottom: '2px solid black',borderRight: '2px solid black', height:'70px',  }}
                  >
     Payment Terms
                  </div>

                  <div className="text-center" style={{ height:'70px',borderBottom: '2px solid black',borderRight: '2px solid black', }}>
                  Other Reference(s)
                  </div>
                  <div style={{height:'70px',borderRight: '2px solid black',}} className="text-center " >
                  Dated
                  </div>
                </div>
              </div>

             

            </div>
          </div>
          <div className="w-full flex  h-full" style={{ border: '2px solid black' }}>
            <div className=" w-1/2 h-full">
              <div style={{ borderRight: '2px solid black' }}>
                <div className="h-1/3 p-2 " >
                <div > Consignee</div>
                  {/* <div className='font-semibold' > {orderData?.user?.name}</div> */}
                  {/* <div > {orderData?.user?.mobileNumber}</div> */}
                  {/* <div > State Name  : {orderData?.addressss?.state}, Code :{orderData?.addressss?.pinCode}</div> */}
                 
             
                </div>
                <div className="p-2 h-2/3">
                  {/* <div className="uppercase">{orderData?.user?.companyName}</div> */}
                  <div > Buyer</div>
                  {/* <div className='font-semibold' > {orderData?.user?.name}</div> */}
                  {/* <div > {orderData?.user?.mobileNumber}</div> */}
                  {/* <div > State Name  : {orderData?.addressss?.state}, Code :{orderData?.addressss?.pinCode}</div> */}
                  {/* <div > Place of Supply  :{orderData?.addressss?.city} , {orderData?.addressss?.addressLine1}</div> */}
               
                </div>
              </div>
            </div>
            {/* <div className=" w-1/2 h-full">
              <div className="h-1/3 p-2 text-base" style={{ borderBottom: '3px solid black' }}>
                Bill To
              </div> */}
              <div className="p-2 h-2/3">
              Terms of Delivery
              </div>
            {/* </div> */}
          </div>

          <div className='p-4 text-lg' style={{borderLeft:'2px solid black',borderRight:'2px solid black'}}>Message : <span className='font-semibold'> Thank you for your order.</span></div>
          <div className=" " style={{ border: '2px solid black' }}>
            <div className="flex">
              <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
            
                  width: '10%',
                  textAlign: 'center',
                  height: '30px',
                  borderBottom: '2px solid black',
                }}
              >
                S.no
              </div>
              <div
                className="w-3/6 px-2 font-semibold "
                style={{
                  borderRight: '2px solid black',
           
                  textAlign: 'center',
                  height: '30px',
                  width: '50%',

                  borderBottom: '2px solid black',
                }}
              >
                Description
              </div>
              <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
          
                  textAlign: 'center',
                  height: '30px',
                  width: '15%',

                  borderBottom: '2px solid black',
                }}
              >
                Per Item Price
              </div>
              <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
    

                  textAlign: 'center',
                  width: '13%',

                  height: '30px',
                  borderBottom: '2px solid black',
                }}
              >
                Gst
              </div>
              <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
         
                  textAlign: 'center',
                  width: '13%',

                  height: '30px',
                  borderBottom: '2px solid black',
                }}
              >
                Quantity
              </div>
              {/* <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
                  fontSize: 16,
                  textAlign: 'center',
                  width: '10%',
                  height: '30px',

                  borderBottom: '2px solid black',
                }}
              >
              Item Total 
              </div> */}
              <div
                className="  font-semibold"
                style={{
               
                  width: '10%',
                  height: '30px',
                  textAlign: 'center',
                  borderBottom: '2px solid black',
                }}
              >
                Amount
              </div>
            </div>

            <div className="w-full" style={{}}>
              {/* {orderData?.products?.map((item, index) => {
                return (
                  <div key={item?._id} style={{}} className="text-center  flex ">
                    <div
                      className="  "
                      style={{
                  
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRight: '2px solid black',
                        height: '60px',
                        width: '10%',
                      }}
                    >
                      {index + 1}
                    </div>
                    <div
                      className="pl-5"
                      style={{
                     
                        textAlign: 'left',
                        borderRight: '2px solid black',
                        height: '60px',
                        display: 'flex',
                        width: '50%',

                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      {item?.sku}
                    </div>
                    <div
                      className=" font-medium "
                      style={{
                       
                        width: '15%',

                        textAlign: 'center',
                        borderRight: '2px solid black',
                        height: '60px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {item?.price}
                    </div>
                    <div
                      className="uppercase"
                      style={{
                       
                        width: '13%',

                        textAlign: 'center',
                        borderRight: '2px solid black',
                        height: '60px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                

                      {item?.gst} %
                    </div>
                    <div
                      className=" font-medium "
                      style={{
                   
                        width: '13%',

                        textAlign: 'center',
                        borderRight: '2px solid black',
                        height: '60px',
                        display: 'flex',

                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      
                      {item?.quantity}
                    </div>
           

                    <div
                      className=" font-medium "
                      style={{
                    
                        textAlign: 'center',
                        height: '60px',
                        width: '10%',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                     
                    </div>
                  </div>
                );
              })} */}
            </div>

            <div className="flex border-t " style={{ borderTop: '2px solid black' }}>
              <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
                  fontSize: 16,
                  width: '10%',
                  textAlign: 'center',
                  height: '30px',
                }}
              ></div>
              <div
                className="w-3/6 px-2 font-semibold "
                style={{
                  borderRight: '2px solid black',
                  fontSize: 16,
                  textAlign: 'center',
                  height: '30px',
                  width: '50%',
                }}
              >
                Total
              </div>
              <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
                  fontSize: 16,
                  textAlign: 'center',
                  height: '30px',
                  width: '15%',
                }}
              >
                {/* Per Item Price */}
              </div>
              <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
                  fontSize: 15,

                  textAlign: 'center',
                  width: '13%',

                  height: '30px',
                }}
              >
                {/* Gst */}
              </div>
              <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
                  fontSize: 15,

                  textAlign: 'center',
                  width: '13%',

                  height: '30px',
                }}
              >
                {/* {orderData?.products?.reduce((total, item) => {
                  return total + item.quantity;
                }, 0)}{' '} */}
                Pc
                {/* item?.quantity
               PC  */}
              </div>
              {/* <div
                className="  font-semibold"
                style={{
                  borderRight: '2px solid black',
                  fontSize: 16,
                  textAlign: 'center',
                  width: '10%',
                  height: '30px',

                  borderBottom: '2px solid black',
                }}
              >
              Item Total 
              </div> */}
              <div
                className="  font-semibold"
                style={{
                  fontSize: 16,
                  width: '10%',
                  height: '30px',
                  textAlign: 'center',
                }}
              >
                Rs.
              </div>
            </div>
          </div>
          <div
            style={{
              borderLeft: '2px solid black',
              borderRight: '2px solid black',
              borderBottom: '2px solid black',
            }}
          >
            <p className="flex justify-between px-4 pt-2">
              Amount Chargeable (in words) <span> E. & O.E </span>
            </p>

            <div className="font-semibold pl-5" >INR Eleven Thousand Only</div>
          </div>

          <div
            className="flex"
            style={{
              height: '200%',

              // borderBottom:'2px solid black'
            }}
          >
            <div
              style={{
                borderRight: '2px solid black',
                borderLeft: '2px solid black',
                width: '20%',

                // borderBottom:'2px solid black'
              }}
            >
              <div style={{ borderBottom: '2px solid black', height: '60px',textAlign:'center' }}>HSN/SAC</div>
              <div className='pl-5' style={{ borderBottom: '2px solid black', height: '30px' }}>8712010</div>
              <div className="pl-5  font-semibold " style={{ height: '30px' }}>Total</div>
            </div>
            <div style={{ borderRight: '2px solid black', width: '20%' }}>
              <div style={{ borderBottom: '2px solid black', height: '60px',textAlign:'center'  }}>Taxable Value</div>
              <div className='pl-5' style={{ borderBottom: '2px solid black', height: '30px' }}>9,821.43</div>
              <div  style={{ height: '30px' }} className="  font-semibold pl-5">
                9,821.43
              </div>
            </div>
            <div style={{ borderRight: '2px solid black', width: '20%' }}>
              <div>
                <div style={{ borderBottom: '2px solid black', height: '30px',textAlign:'center'  }}>Central Tax</div>

                <div className="flex" >
                  <div style={{ borderRight: '2px solid black',borderBottom: '2px solid black',textAlign:'center', width: '50%', height: '30px' }}>
                    Rate
                  </div>
                  <div style={{ borderBottom: '2px solid black', width: '50%', height: '30px' ,textAlign:'center'}}>Amount</div>
                </div>
              </div>

              <div className="flex">
                <div  className='pl-5' style={{ borderRight: '2px solid black', borderBottom: '2px solid black',width: '50%' ,height: '30px'}}>6%</div>
                <div  className='pl-5' style={{borderBottom: '2px solid black',width: '50%' ,height: '30px'}}>589.29</div>
              </div>

              <div className="flex">
                <div style={{ borderRight: '2px solid black', width: '50%' ,height: '30px'}}></div>
                <div className=" pl-5 font-semibold"  style={{width: '50%' ,height: '30px'}}>589.29</div>
              </div>
            </div>
            {/* <div style={{ borderRight: '2px solid black', width: '20%' }}>44444444</div> */}

            <div style={{ borderRight: '2px solid black', width: '20%' }}>
              <div>
                <div style={{ borderBottom: '2px solid black', height: '30px',textAlign:'center'  }}>State Tax</div>

                <div className="flex" >
                  <div style={{ borderRight: '2px solid black',borderBottom: '2px solid black', width: '50%', height: '30px',textAlign:'center' }}>
                    Rate
                  </div>
                  <div style={{ borderBottom: '2px solid black', width: '50%', height: '30px',textAlign:'center' }}>Amount</div>
                </div>
              </div>

              <div className="flex">
                <div className='pl-5' style={{ borderRight: '2px solid black', borderBottom: '2px solid black',width: '50%' ,height: '30px'}}>6%</div>
                <div className='pl-5'  style={{borderBottom: '2px solid black',width: '50%' ,height: '30px'}}>589.29</div>
              </div>

              <div className="flex">
                <div style={{ borderRight: '2px solid black', width: '50%' ,height: '30px'}}></div>
                <div className=" pl-5 font-semibold" style={{width: '50%' ,height: '30px'}}>589.29</div>
              </div>
            </div>



            {/* <div style={{ borderRight: '2px solid black', width: '20%' }}>555555</div> */}


            <div style={{ borderRight: '2px solid black', width: '20%' }}>
              <div style={{ borderBottom: '2px solid black', height: '60px' ,textAlign:'center' }}>Total Tax Amount</div>
              <div className='pl-5' style={{ borderBottom: '2px solid black', height: '30px' }}>1178.58</div>
              <div style={{ height: '30px' }} className=" pl-5 font-semibold">
              1178.58
              </div>
            </div>


            {/* <div style={{ borderRight: '2px solid black', width: '20%' }}>6666666</div>
            <div style={{ borderRight: '2px solid black', width: '20%' }}>77777777</div> */}
          </div>

          <div
            className="  "
            style={{
              border: '2px solid black',
            }}
          >
            <div
              className=" p-4"
              // style={{
              //   borderRight: '2px solid black',
        
              // }}
            >
              <p> Tax Amount (in words): <span className='font-semibold'>NR One Thousand One Hundred Seventy Eight and Fifty Eight paise Only</span></p>
              <div className="flex">

                <div className='flex'>
              <div style={{width:'90%' }}>
            
                <div className='font-semibold'>Company's PAN:  BFMPS7903G</div>
                <div style={{textDecoration:'underline'}}>Declaration</div>
                <div>
                We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.
                </div>
                </div>
                <div style={{width:'10%'}}>


               
                <div ></div>
                <div></div>
                <div>
                
                </div>
                </div>


                </div>

{/* <div className='flex'> */}


                <div style={{width:'50%' }}>
                <div>Company's Bank Details</div>
                <div>
                A/c Holder's Name
                </div>
                <div>
                Bank Name
                </div>
              <div>    A/c No.</div>
              <div>
              Branch & IFS Code

              </div>

                
                </div>

                <div style={{width:'50%' }}>
                <div></div>
                <div>
                M/s ABC
                </div>
                <div>
                STATE BANK OF INDIA CA 035937
                </div>
              <div>    5937129545</div>
              <div>
              THERI & SBIN0050524

              </div>
                </div>
                {/* </div> */}
              
              </div>
            </div>

            <div
            style={{
              borderTop: '2px solid black',
              // borderRight: '2px solid black',
              // borderBottom: '2px solid black',
            }}
          >
           
            <div className="font-semibold  py-5 px-5" style={{textDecoration:'underline', fontStyle:'italic'}}>Terms & Conditions</div>
            <p className='px-5'>1.</p>
          </div>
          <div
            style={{
              borderTop: '2px solid black',
              // borderRight: '2px solid black',
              // borderBottom: '2px solid black',
            }}
          >
          <div className="font-semibold  py-3 px-5" style={{textAlign:'right'}}>for ABC- (from 1-Apr-22)</div>
            <div className="font-semibold  py-8 px-5" style={{textAlign:'right'}}>
              Authorised Signatory
            </div>
          </div>
        
      
          </div>
          <div className=" py-5 " style={{textAlign:'center', }}>
          SUBJECT TO TEST
          <p className="py-2" style={{textAlign:'center'}}>This is a Computer Generated Invoice</p>
          </div>
        </div>
        </div>
      </Modal>


</>)



}
export default UpdatedInvoice