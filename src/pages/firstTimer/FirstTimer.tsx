import React from 'react'
import { iFirstTimer } from '../../types/interface'
import axios from 'axios';
import { url } from '../../api/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

const FirstTimer = () => {

    const [formData, setFormData] = React.useState<iFirstTimer>({ 
        name: '',
        address: '',
        county: '',
        occupation: '',
        telHome : '',
        telWork : '',
        mobile : '',
        email : '',
        visitOrStay : '',
        prayerRequest : '',
        haveJesus : '',
        pastorVisit : '',
    });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null)


    // register firstTimer
        const handleSubmit2 = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
            try {
            const response = await axios.post(`${url}/firsttimer/registerfirst`, formData);
            console.log('message sent successfully:', response.data);
            // Reset form data
            setFormData({ 
                name: '',
                address: '',
                county: '',
                occupation: '',
                telHome : '',
                telWork : '',
                mobile : '',
                email : '',
                visitOrStay : '',
                prayerRequest : '',
                haveJesus : '',
                pastorVisit : '',
            });
            setError(null);

            //   for success notification
            toast.success('Message Sent Successfully')

            } catch (err) {
            console.error('Error sending message:', err);
            setError('Failed to send mail. Please try again.');

            //   for error registration notification
            toast.error('Error Sending Message. Please, Try Again.')

            } finally {
            setLoading(false);
            }
        };

        
        // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        //     const { name, value, type } = e.target;
        
        //     // Use type assertion to tell TypeScript this is an HTMLInputElement
        //     if (type === 'checkbox') {
        //         const isChecked = (e.target as HTMLInputElement).checked; // Cast to HTMLInputElement to access 'checked'
        //         setFormData(prevState => ({
        //             ...prevState,
        //             [name]: isChecked, // Assign boolean value directly for checkboxes
        //         }));
        //     } else {
        //         // For other input types, handle normally
        //         setFormData(prevState => ({
        //             ...prevState,
        //             [name]: value, // Assign value for other input types
        //         }));
        //     }
        // };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
        

  return (
    <div className="w-full flex flex-col items-center py-[30px] bg-white">
        
        <div className="w-full h-[55vh] md:h-[50vh] flex flex-col justify-center items-center shadow-m gap-3">
            <h5 className="text-[22px] md:text-[28px] font-bold text-[#23a1db] w-[80%] md:w-full text-center">WE ARE GLAD TO SEE YOU..</h5>
            <i className="text-[15px] md:text-[18px] animate-bounce">Welcome To The Family.</i>
        </div>

        <div className="w-full md:w-[70%] lg:w-[40%] md:shadow-lg lg:p-7 flex flex-col justify-center items-center p-3 px-5 gap-4">
            <h6 className="text-[13px] md:text-[16px] lg:text-[18px] text-[#33a866]">Please, Kindly Fill The Form Below..</h6>

            <form onSubmit={handleSubmit2} className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Name</label>
                    <input type="text" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2" 
                    name="name" value={formData.name} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Address</label>
                    <input type="text" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2"  
                    name="address" value={formData.address} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">County</label>
                    <input type="text" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2"  
                    name="county" value={formData.county} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Occupation</label>
                    <input type="text" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2"  
                    name="occupation" value={formData.occupation} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">
                        Telephone(Home) 
                        {/* <span className="text-[9px] text-red-300">optional</span> */}
                    </label>
                    <input type="text" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2"  
                    name="telHome" value={formData.telHome} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">
                        Telephone(Work) 
                        {/* <span className="text-[9px] text-red-300">optional</span> */}
                    </label>
                    <input type="text" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2"  
                    name="telWork" value={formData.telWork} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Mobile</label>
                    <input type="text" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2"  
                    name="mobile" value={formData.mobile} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Email</label>
                    <input type="email" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2"  
                    name="email" value={formData.email} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Are you visiting or staying?</label>
                    <select className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] md:text-[13px] shadow-lg"
                        name='visitOrStay' value={formData.visitOrStay} onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="Visiting">Visiting</option>
                            <option value="Staying">Staying</option>
                    </select>

                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Prayer Request</label>
                    <input type="text" className="w-full h-[40px] border-none outline-none hover:border-none shadow-lg text-[12px] md:text-[13px] rounded-md p-2"  
                    name="prayerRequest" value={formData.prayerRequest} onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Have you accepted Jesus?</label>
                    <select className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] md:text-[13px] shadow-lg"
                        name='haveJesus' value={formData.haveJesus} onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                    </select>

                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[12px] md:text-[14px] text-[#33a866]">Would you want a Pastor/Counsellor to visit you?</label>
                    <select className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] md:text-[13px] shadow-lg"
                        name='pastorVisit' value={formData.pastorVisit} onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                    </select>

                </div>

                {/* <div className="flex items-center gap-1">
                    <input type="checkbox" className="w-[17px] h-[17px] border-none outline-none hover:border-none text-[11px] md:text-[13px] rounded-md"  
                    name="pastorVisit" checked={formData.pastorVisit} onChange={handleChange}
                    />
                    <label htmlFor="" className="text-[10px] md:text-[13px] text-[#33a866]">Would you want a Pastor/Counsellor to visit you?</label>
                </div> */}

                { loading ? (
                    <div className='w-full flex items-center justify-center'>
                        <DatasIsaLoading />
                    </div>
                ) : (
                    <button type="submit" className="w-full h-[40px] bg-[#33a866] text-white mt-[10px] text-[13px]">
                        Submit
                    </button>
                )}
          
                {error && <p className='text-[5px]'>{error}</p>}
            </form>
        </div>

    </div>
  )
}

export default FirstTimer