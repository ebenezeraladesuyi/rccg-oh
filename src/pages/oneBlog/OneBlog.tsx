// import React from 'react'

import pic1 from "../../assets/blog/Jesus-is-Calling1-768x480.jpg";


const OneBlog = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div className="w-[90%] mt-[80px] md:mt-[100px] flex flex-col gap-4 relative">
            <h6 className="bg-[#ec0e0e] p-1 px-2 text-white text-[13px] w-[100px] text-center">Blog</h6>

            <hr className="w-full border-[1px] border-gray-200 mb-[20px]" />

            <div className="w-full flex flex-col gap-3">
                <h5 className="font-bold text-[22px] md:text-[27px] lg:text-[33px] ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h5>
                
                <div className="flex items-center gap-3 text-[12px] lg:text-[14px]">
                    <h5 className="text-[#bab9c1]">BY <span className="text-[#ec2b43]">TBD</span></h5>

                    <h5 className="text-[#bab9c1]">- JUNE 15, 2023</h5>
                </div>

                <div className="w-full md:w-[65%]">
                    <img className="w-full" src={pic1} alt="" />
                </div>

                <h5 className="text-[11px] md:text-[13px] lg:text-[14px] text-justify w-full md:w-[70%]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, corrupti! Minima ab placeat provident inventore quidem rerum aliquid dolores debitis? Ratione, provident? Accusamus incidunt optio assumenda aut id aperiam veritatis, delectus itaque. Repellendus facere sunt modi, hic sapiente aspernatur aperiam. Fugiat in aspernatur officiis velit obcaecati minus dolores repudiandae illum, deserunt architecto aliquam commodi facilis, distinctio aliquid recusandae molestias non, iure esse ex unde dolorum nobis! Officiis sunt eaque, magnam ut optio natus rerum asperiores ea soluta, doloremque maiores odit, nesciunt ipsum suscipit voluptatum porro eligendi dignissimos perspiciatis assumenda nisi laudantium molestiae. Debitis sed maxime officia distinctio dolorum assumenda alias voluptatibus tenetur, corrupti ducimus. Dicta recusandae quam earum incidunt a dolorum, ratione odit? Ipsa ut culpa esse numquam saepe voluptatibus cum iure velit at! Iusto error obcaecati repellat quia aliquam atque, assumenda, unde non hic ratione veritatis? Architecto magni qui, dignissimos aliquid dolores ipsum repellendus odit culpa quia voluptas perspiciatis pariatur tempore modi, vitae in ad amet ea animi maxime quis rerum? Ea quae aspernatur possimus molestiae odio. Voluptatum accusamus obcaecati deleniti, dolores, aperiam voluptate velit eum nam natus iusto suscipit non quaerat assumenda quidem fugiat, nisi blanditiis consectetur odio maxime dicta! Enim incidunt nihil tempora laborum sit odit similique numquam dolore, quasi unde doloribus aspernatur ipsam at nobis distinctio veritatis nisi rerum perferendis eos! Dignissimos illo, assumenda quos magni, iusto, repellendus earum esse quas cupiditate eaque atque ea quibusdam nam fuga voluptate doloremque maiores commodi deserunt quasi neque odit ad delectus veniam animi! Esse asperiores minima aliquam at ab, voluptas recusandae soluta magnam totam dolores a delectus quisquam, possimus, animi ipsum aperiam quam laboriosam iusto exercitationem consectetur alias? Dicta ipsam fugit nobis sunt non atque adipisci aperiam laborum voluptas quisquam ut, sapiente dignissimos, obcaecati id esse, inventore beatae ea eaque repellendus culpa impedit exercitationem. Id hic non odio aspernatur.
                </h5>
            </div>

            <hr className="w-full border-[1px] border-gray-200 mt-[20px]" />

            

            <div className="hidden lg:flex absolute w-[300px] h-[300px] bg-whit shadow-md right-0 top-[172px] border-[1px] border-gray-200 shadow-gray-400 flex-col justify-center items-center gap-3 p-4 bg-[#23a1db] text-white">
                <h5 className="font-bold text-[20px] text-center text-[#fff]">Do Not Miss Our Next Service!!</h5>

                <h6 className="text-[14px] text-center flex flex-col">Sunday School: <span className="text-[#b6f4d1]">9:30am</span></h6>
                <h6 className="text-[14px] text-center flex flex-col">Sunday Service: <span className="text-[#b6f4d1]">10:00am - 12:00Noon</span></h6>
                <h6 className="text-[14px] text-center">Tuesday: Digging Deep/Faith Clinic: <span className="text-[#b6f4d1]">7:00pm - 9:00pm</span></h6>
            </div>

        </div>

        
    </div>
  )
}

export default OneBlog