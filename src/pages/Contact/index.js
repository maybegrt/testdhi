import React from "react";

import { Img, Text, Input, TextArea, Button, Line } from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-sourcesanspro gap-[54px] items-start justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[543px] items-center justify-center mx-[auto] my-[15px] w-[78%]">
              <div className="header-row ">
                <Img
                  src="images/img_group642.svg"
                  className="h-[50px]"
                  alt="Group645"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-row sm:hidden items-start justify-between pr-[7px] pt-[7px] md:w-[100%] w-[39%]">
                <Text
                  className="common-pointer font-bold text-black_900 text-left w-[auto]"
                  variant="body3"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
                <Text
                  className="common-pointer font-bold text-black_900 text-left w-[auto]"
                  variant="body3"
                  onClick={() => navigate("/about")}
                >
                  About
                </Text>
                <Text
                  className="common-pointer font-bold text-black_900 text-left w-[auto]"
                  variant="body3"
                  onClick={() => navigate("/works")}
                >
                  Works
                </Text>
                <div className="flex flex-col gap-[10px] items-center justify-start mr-[10px] w-[auto]">
                  <Text
                    className="font-bold text-left text-red_401 w-[auto]"
                    variant="body3"
                  >
                    Contact
                  </Text>
                  <div className="bg-red_401 h-[6px] rounded-radius50 w-[6px]"></div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-start justify-start md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[92%]">
          <div className="bg-blue_50 flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[121px] p-[51px] sm:px-[20px] md:px-[40px] rounded-radius90 md:w-[100%] sm:w-[100%] w-[91%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-[40px] sm:gap-[40px] gap-[76px] items-center justify-end mb-[91px] mt-[72px] p-[72px] sm:px-[20px] md:px-[40px] md:w-[100%] sm:w-[100%] w-[99%]"
              style={{ backgroundImage: "url('images/img_group744.svg')" }}
            >
              <Text
                className="mt-[4px] text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                <span className="sm:text-[40px] md:text-[46px] text-black_900 text-[50px] font-sourcesanspro font-bold">
                  Get in{" "}
                </span>
                <span className="sm:text-[40px] md:text-[46px] text-red_401 text-[50px] font-sourcesanspro font-bold">
                  touch
                </span>
              </Text>
              <Text
                className="font-normal leading-[40.00px] not-italic text-center text-gray_700 sm:w-[100%] w-[86%]"
                variant="body2"
              >
                Stay connected with us, we will help you with your various
                needs. we will provide the best service in technical and
                consulting matters. You can provide your needs or something you
                ask in the form below
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[41px] items-center justify-end ml-[auto] mt-[100px] md:w-[100%] sm:w-[100%] w-[91%]">
            <div className="bg-white_A700 md:h-[425px] sm:h-[538px] h-[599px] md:mt-[0] sm:mt-[0] mt-[15px] p-[70px] sm:px-[20px] md:px-[40px] relative rounded-radius20 shadow-bs6 md:w-[100%] sm:w-[100%] w-[66%]">
              <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-[auto] pb-[72px] rounded-radius5 top-[12%] w-[75%]">
                <Input
                  className="font-bold leading-[normal] p-[0] text-[20px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Group843"
                  placeholder="Send Message"
                  size="md"
                ></Input>
                <div className="flex flex-col items-center justify-start rounded-radius5 w-[100%]">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                      <Input
                        className="flex-1 font-bold leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[auto]"
                        type="text"
                        name="Group750"
                        placeholder="Your Name"
                        shape="RoundedBorder5"
                        variant="FillGray100"
                      ></Input>
                      <Input
                        className="flex-1 font-bold leading-[normal] p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[auto]"
                        type="email"
                        name="Group751"
                        placeholder="Your Email"
                        shape="RoundedBorder5"
                        variant="FillGray100"
                      ></Input>
                    </div>
                    <TextArea
                      className="font-bold leading-[normal] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                      name="Group748"
                      placeholder="Your Message"
                    ></TextArea>
                  </div>
                </div>
              </div>
              <Button
                className="absolute bottom-[17%] cursor-pointer font-normal leading-[normal] left-[14%] min-w-[182px] not-italic text-[20px] text-center text-white_A700 w-[auto]"
                shape="CircleBorder25"
                size="sm"
                variant="OutlineGreen60063"
              >
                Send
              </Button>
            </div>
            <div className="bg-white_A700 flex flex-col items-start justify-center mb-[12px] p-[33px] sm:px-[20px] rounded-radius20 shadow-bs6 md:w-[100%] sm:w-[100%] w-[32%]">
              <div className="flex flex-col gap-[31px] items-center justify-start mb-[36px] mt-[44px] md:w-[100%] sm:w-[100%] w-[90%]">
                <div className="flex flex-col gap-[33px] items-start justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                  <Input
                    className="font-bold leading-[normal] p-[0] text-[20px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group762"
                    placeholder="Contact Information"
                    size="lg"
                  ></Input>
                  <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[4px] md:w-[100%] sm:w-[100%] w-[92%]">
                    <div className="flex flex-row gap-[25px] items-start justify-start md:w-[100%] sm:w-[100%] w-[74%]">
                      <Img
                        src="images/img_frame666.svg"
                        className="h-[24px] w-[24px]"
                        alt="Frame666"
                      />
                      <Text
                        className="text-gray_401 text-left w-[auto]"
                        variant="body4"
                      >
                        hello@nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start mt-[29px] md:w-[100%] sm:w-[100%] w-[70%]">
                      <Img
                        src="images/img_globe.svg"
                        className="h-[24px] w-[24px]"
                        alt="globe"
                      />
                      <Text
                        className="common-pointer mt-[4px] text-gray_401 text-left w-[auto]"
                        variant="body4"
                        onClick={() => navigate("")}
                      >
                        www.nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start mt-[29px] w-[100%]">
                      <Img
                        src="images/img_location.svg"
                        className="h-[24px] mt-[3px] w-[24px]"
                        alt="location"
                      />
                      <Text
                        className="sm:flex-1 text-gray_401 text-left sm:w-[100%] w-[80%]"
                        variant="body4"
                      >
                        Sudirman street, holgan, melbourne
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[54%]">
                      <Img
                        src="images/img_call.svg"
                        className="h-[24px] w-[24px]"
                        alt="call"
                      />
                      <Text
                        className="mt-[4px] text-gray_401 text-left w-[auto]"
                        variant="body4"
                      >
                        0361 - 8878
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[41px] justify-start w-[100%]">
                  <div className="flex flex-col gap-[25px] items-start justify-start mr-[8px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body2"
                    >
                      Social Media
                    </Text>
                    <Line className="bg-gray_200 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-row gap-[19px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[89%]">
                    <Img
                      src="images/img_group270.png"
                      className="h-[47px] md:h-[auto] sm:h-[auto] object-cover w-[47px]"
                      alt="Group270"
                    />
                    <Img
                      src="images/img_group271.png"
                      className="h-[47px] md:h-[auto] sm:h-[auto] object-cover w-[47px]"
                      alt="Group271"
                    />
                    <Img
                      src="images/img_group268.png"
                      className="h-[47px] md:h-[auto] sm:h-[auto] object-cover w-[47px]"
                      alt="Group268"
                    />
                    <Img
                      src="images/img_group269.png"
                      className="h-[47px] md:h-[auto] sm:h-[auto] object-cover w-[47px]"
                      alt="Group269"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-gray_801 flex items-center justify-center mt-[108px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
