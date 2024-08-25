// eslint-disable-next-line no-unused-vars
import React from 'react'
import { formateDate } from '../../../utils/formateDate'

const DoctorAbout = () => {
    return (
      <div>
          <div>
              <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                  Thông tin về
                  <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                      Munhibur Rahman
                  </span>
                  </h3>
                  <p className='text__para'>
                  Munhibur Rahman là một người có kiến thức chuyên sâu và kinh nghiệm phong phú trong lĩnh vực của mình. 
                  Anh ấy không chỉ thể hiện sự hiểu biết rộng rãi mà còn luôn sẵn sàng giúp đỡ và chia sẻ kiến thức với 
                  mọi người xung quanh. Tính cách trung thực, kiên nhẫn và nhiệt tình của anh ấy đã tạo ra một môi trường 
                  làm việc thoải mái và hiệu quả. 
                  </p>
          </div>

          <div className='mt-12'>
              <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                  Quá trình học vấn
              </h3>
              <ul className='pt-4 md:p-5'>
                  <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                  <div>
                      <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
                      </span>
                      <p className='text-[16px] leading-6 font-medium text-textColor'>
                          PHD in Sureon
                      </p>
                  </div>
                  <p className='text-[14px] leading-5 font-medium text-textColor'>
                          New Apollo Hospital, New York.
                      </p>
                  </li>
                  <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                  <div>
                      <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                          {formateDate("07-04-2010")} - {formateDate("09-13-2014")}
                      </span>
                      <p className='text-[16px] leading-6 font-medium text-textColor'>
                          PHD in Sureon
                      </p>
                  </div>
                  <p className='text-[14px] leading-5 font-medium text-textColor'>
                          New Apollo Hospital, New York.
                    </p>
                  </li>  
              </ul>
          </div>


          <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                 Kinh nghiệm
            </h3>
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formateDate("07-04-2010")} - {formateDate("09-13-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                          New Apollo Hospital, New York.
                    </p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formateDate("07-04-2010")} - {formateDate("09-13-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                          New Apollo Hospital, New York.
                    </p>
                </li>
            </ul>
          </div>
      </div>
    )
  }

export default DoctorAbout
