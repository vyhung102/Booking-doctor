/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import {AiOutlineDelete} from 'react-icons/ai'
import uploadImageToCloudinary from '../../../utils/uploadCloudinary';
import { BASE_URL, token } from "../../config"
import { toast } from "react-toastify"


const Profile = ({ doctorData }) => {
    const [formData, setFormData] = useState({
      name: doctorData?.name || "",
      email: doctorData?.email || "",
      phone: doctorData?.phone || "",
      bio: doctorData?.bio || "",
      gender: doctorData?.gender || "select",
      specialization: doctorData?.specialization || "select",
      ticketPrice: doctorData?.ticketPrice || 0,
      qualifications: doctorData?.qualifications || [],
      experiences: doctorData?.experiences || [],
      timeSlots: doctorData?.timeSlots || [],
      about: doctorData?.about || "",
      photo: doctorData?.photo || null,
    });

    useEffect(() => {
        setFormData({
          name: doctorData?.name || "",
          email: doctorData?.email || "",
          phone: doctorData?.phone || "",
          bio: doctorData?.bio || "",
          gender: doctorData?.gender || "select",
          specialization: doctorData?.specialization || "select",
          ticketPrice: doctorData?.ticketPrice || 0,
          qualifications: doctorData?.qualifications || [],
          experiences: doctorData?.experiences || [],
          timeSlots: doctorData?.timeSlots || [],
          about: doctorData?.about || "",
          photo: doctorData?.photo || null,
        });
      }, [doctorData]);

 const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData); // Kiểm tra dữ liệu form


    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      toast.success(result.message);
    } catch (err) {
        console.error("Error:", err); // In lỗi ra console
      toast.error(err.message);
    }
  };

  // Reusable function for adding item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  // Reusable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      const updatedItems = [...prevFormData[key]];

      updatedItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updatedItems,
      };
    });
  };

  // Reusable function for deleting item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const addExperience = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  const addTimeSlot = (e) => {
    e.preventDefault();

    addItem("timeSlots", { day: "", startingTime: "", endingTime: "" });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Thông tin hồ sơ
      </h2>
      <form>
        <div className="mb-5">
          <p className="form__label">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Họ tên"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Nhập email"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Nhập SDT"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            maxLength={100}
          />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Giới Tính</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3"
              >
                <option value="select">Chọn giới tính</option>
                <option value="male">nam</option>
                <option value="female">nữ</option>
                <option value="other">khác</option>
              </select>
            </div>
            <div>
              <p className="form__label">Chuyên môn</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form__input py-3"
              >
                <option value="select">Chọn chuyên môn</option>
                <option value="surgeon">Bác sĩ phẫu thuật</option>
                <option value="neurologist">Bác sĩ thần kinh</option>
                <option value="dermatologist">bác sĩ da liễu</option>
              </select>
            </div>
            <p className="form__label">Giá Vé</p>
            <input
              type="number"
              placeholder="100"
              name="ticketPrice"
              value={formData.ticketPrice}
              className="form__input"
              onChange={handleInputChange}
            />
                </div>
            </div>
            <div className="mb-5">
                <p className="form__label">Trình độ</p>
                {formData.qualifications?.map((item, index) => (
                <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">Ngày bắt đầu</p>
                                    <input 
                                    type="date" 
                                    name="startingDate"
                                    value={item.startingDate}
                                    className="form__input"
                                    onChange={e => handleQualificationChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Ngày kết thúc</p>
                                    <input 
                                    type="date" 
                                    name="endingDate"
                                    value={item.endingDate}
                                    className="form__input"
                                    onChange={e => handleQualificationChange(e, index)}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form__label">Bằng cấp</p>
                                    <input 
                                    type="text" 
                                    name="degree"
                                    value={item.degree}
                                    className="form__input"
                                    onChange={e => handleQualificationChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Đại học</p>
                                    <input 
                                    type="text" 
                                    name="university"
                                    value={item.university}
                                    className="form__input"
                                    onChange={e => handleQualificationChange(e, index)}
                                    />
                                </div>
                            </div>

                            <button 
                            onClick={e => deleteQualification(e,index)} 
                            className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]">
                                <AiOutlineDelete/>
                            </button>
                        </div>
                </div>
            ))}

            <button onClick={addQualification} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                Thêm trình độ
                </button>
            </div>

            <div className="mb-5">
                <p className="form__label">Kinh nghiệm</p>
                {formData.experiences?.map((item,index) => (
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">Ngày bắt đầu</p>
                                    <input 
                                    type="date" 
                                    name="startingDate"
                                    value={item.startingDate}
                                    className="form__input"
                                    onChange={e => handleExperienceChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Ngày kết thúc</p>
                                    <input 
                                    type="date" 
                                    name="endingDate"
                                    value={item.endingDate}
                                    className="form__input"
                                    onChange={e => handleExperienceChange(e, index)}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form__label">Chức vụ</p>
                                    <input 
                                    type="text" 
                                    name="position"
                                    value={item.position}
                                    className="form__input"
                                    onChange={e => handleExperienceChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Bệnh viện</p>
                                    <input 
                                    type="text" 
                                    name="hospital"
                                    value={item.hospital}
                                    className="form__input"
                                    onChange={e => handleExperienceChange(e, index)}
                                    />
                                </div>
                            </div>

                            <button 
                            onClick={e => deleteExperience(e,index)} 
                            className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]">
                                <AiOutlineDelete/>
                            </button>
                        </div>
                </div>
            ))}

            <button onClick={addExperience} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                Thêm Kinh nghiệm
                </button>
                <div className="mb-5">
                <p className="form__label">Khung thời gian</p>
                {formData.timeSlots?.map((item,index) => (
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                                <div>
                                    <p className="form__label">Sáng</p>
                                    <select name="day" 
                                    value={item.day} 
                                    className="form__input py-3.5"
                                    onChange={e => handleTimeSlotChange(e, index)}
                                    >
                                        <option value="">Chọn ngày</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="form__label">Giờ bắt đầu </p>
                                    <input 
                                    type="time" 
                                    name="startingTime"
                                    value={item.startingTime}
                                    className="form__input"
                                    onChange={e => handleTimeSlotChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Giờ kết thúc</p>
                                    <input 
                                    type="time" 
                                    name="endingTime"
                                    value={item.endingTime}
                                    className="form__input"
                                    onChange={e => handleTimeSlotChange(e, index)}
                                    />
                                </div>
                            </div>
                            <div onClick={e=> deleteTimeSlot(e, index)} className="flex items-center">
                            <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]
                            cursor-pointer">
                                <AiOutlineDelete/>
                            </button>
                            </div>
                        </div>
                </div>
            ))}
            <button onClick={addTimeSlot} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                Thêm khung giờ
                </button>
            </div>
            </div>
            <div className="mb-5">
                <p className="form__label">Về chúng tôi</p>
                <textarea 
                name="about" 
                rows={5} 
                value={formData.about} 
                placeholder="viết ý kiến của bạn"
                onChange={handleInputChange}
                className="form__input"
                ></textarea>
            </div>
            <div className="mb-5 flex items-center gap-3">
             {formData.photo && (
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor 
                flex items-center justify-center'>
                  <img src={formData.photo} className='w-full rounded-full' />
                </figure>
                )}

                <div className='relative w-[160px] h-[50px]'>
                  <input 
                    type="file" 
                    name='photo' 
                    id='customFile' 
                    onChange={handleFileInputChange}
                    accept='.jpg, .png' 
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center
                  px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor
                  font-semibold rounded-lg truncate cursor-pointer'>
                    Tải hình ảnh lên
                  </label>
                </div>
            </div>
                <div className="mt-7">
                    <button type="submit" onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg">Cập nhật hồ sơ</button>
                </div>
        </form>
    </div>
  )
}

export default Profile
