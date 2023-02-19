import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-sourcesanspro gap-[54px] items-start justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[543px] items-center justify-center ml-[164px] mr-[181px] my-[15px] w-[76%]">
              <div className="header-row ">
                <Img
                  src="images/img_group642.svg"
                  className="common-pointer h-[50px]"
                  onClick={() => navigate("/")}
                  alt="Group645"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-row sm:hidden items-start justify-between pt-[7px] md:w-[100%] w-[38%]">
                <Text
                  className="common-pointer font-bold text-black_900 text-left w-[auto]"
                  variant="body3"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
                <div className="flex flex-col gap-[11px] items-center justify-start w-[auto]">
                  <Text
                    className="common-pointer font-bold text-left text-red_401 w-[auto]"
                    variant="body3"
                    onClick={() => navigate("/about")}
                  >
                    About
                  </Text>
                  <div className="bg-red_401 h-[6px] rounded-radius50 w-[6px]"></div>
                </div>
                <Text
                  className="common-pointer font-bold text-black_900 text-left w-[auto]"
                  variant="body3"
                  onClick={() => navigate("/works")}
                >
                  Works
                </Text>
                <Text
                  className="common-pointer font-bold text-black_900 text-left w-[auto]"
                  variant="body3"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </Text>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-start justify-start md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[91%]">
          <div className="bg-yellow_100 flex flex-col items-center justify-end md:ml-[0] sm:ml-[0] ml-[130px] p-[53px] sm:px-[20px] md:px-[40px] rounded-radius90 md:w-[100%] sm:w-[100%] w-[91%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[19px] md:w-[100%] sm:w-[100%] w-[88%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] justify-start w-[10%] md:w-[100%] sm:w-[100%]">
                <Img
                  src="images/img_ellipse11.png"
                  className="h-[89px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[89px]"
                  alt="EllipseEleven"
                />
                <div className="bg-pink_400 h-[14px] md:ml-[0] sm:ml-[0] ml-[23px] mr-[52px] rounded-radius50 w-[14px]"></div>
              </div>
              <div className="flex flex-col justify-start md:w-[100%] sm:w-[100%] w-[91%]">
                <div className="bg-deep_orange_A100 h-[14px] md:ml-[0] sm:ml-[0] ml-[706px] mr-[134px] rounded-radius50 w-[14px]"></div>
                <div className="md:h-[282px] sm:h-[282px] h-[293px] mt-[53px] relative w-[100%]">
                  <Img
                    src="images/img_ellipse13.png"
                    className="absolute h-[89px] right-[0] rounded-radius50 top-[0] w-[89px]"
                    alt="EllipseThirteen"
                  />
                  <div className="absolute bottom-[0] flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-start left-[0] w-[92%]">
                    <Text
                      className="text-black_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      <span className="sm:text-[40px] md:text-[46px] text-black_900 text-[50px] font-sourcesanspro font-bold">
                        Get to know more{" "}
                      </span>
                      <span className="sm:text-[40px] md:text-[46px] text-red_401 text-[50px] font-sourcesanspro font-bold">
                        about us
                      </span>
                    </Text>
                    <Text
                      className="font-normal leading-[40.00px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body2"
                    >
                      We are an agency engaged in the creative industry and
                      business, we are ready to help you to improve your
                      business performance together with our great team
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_ellipse12.png"
                  className="h-[89px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[676px] mt-[72px] rounded-radius50 w-[89px]"
                  alt="EllipseTwelve"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[130px] mt-[100px] md:w-[100%] sm:w-[100%] w-[91%]">
            <div className="md:gap-[20px] sm:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-[7px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle16.png"
                  className="h-[460px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleSixteen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] sm:w-[100%] w-[45%]">
                  <Text
                    className="font-bold text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Sarah Jae
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    variant="body2"
                  >
                    Branding Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-[7px] w-[100%]">
                <Img
                  src="images/img_rectangle15.png"
                  className="h-[460px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleFifteen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] sm:w-[100%] w-[40%]">
                  <Text
                    className="font-bold text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    John Doe
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    variant="body2"
                  >
                    Product Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-[8px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle17.png"
                  className="h-[460px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleSeventeen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] sm:w-[100%] w-[34%]">
                  <Text
                    className="font-bold text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Samantha
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    variant="body2"
                  >
                    SEO Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[40px] items-center justify-start rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle18.png"
                  className="h-[460px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleEighteen"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start md:w-[100%] sm:w-[100%] w-[45%]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Lila laconsia
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    UI Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[40px] items-center justify-start pb-[7px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle19.png"
                  className="h-[460px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleNineteen"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[40%]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Ana louren
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Illustrator
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[43px] items-center justify-start rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle20.png"
                  className="h-[460px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleTwenty"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Rico john
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    UX Principles
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[43px] items-center justify-start rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle21.png"
                  className="h-[460px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleTwentyOne"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start md:w-[100%] sm:w-[100%] w-[58%]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Randy okla
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Interaction Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[40px] items-center justify-start pb-[7px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle22.png"
                  className="h-[460px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleTwentyTwo"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[47%]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Sinta Marcus
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    UX Writer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[40px] items-center justify-start pb-[7px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle23.png"
                  className="h-[460px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleTwentyThree"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[41%]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Sam Rivald
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Front-end Dev
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[70px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[130px] mt-[100px] md:w-[100%] sm:w-[100%] w-[91%]">
            <Text
              className="text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Our Moment
            </Text>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[30px] items-center justify-start rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_rectangle29.png"
                  className="h-[205px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleTwentyNine"
                />
                <Img
                  src="images/img_rectangle30.png"
                  className="h-[379px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleThirty"
                />
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_rectangle31.png"
                  className="h-[379px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="RectangleThirtyOne"
                />
                <Img
                  src="images/img_manwearingbla.png"
                  className="h-[205px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="manwearingbla"
                />
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_kellysikkemac.png"
                  className="h-[175px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                  alt="kellysikkemac"
                />
                <Img
                  src="images/img_womansittingo.png"
                  className="h-[175px] sm:h-[auto] mt-[30px] object-cover rounded-radius10 w-[100%]"
                  alt="womansittingo"
                />
                <Img
                  src="images/img_personholding.png"
                  className="h-[206px] sm:h-[auto] mt-[29px] object-cover rounded-radius10 w-[100%]"
                  alt="personholding"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-gray_801 flex items-center justify-center mt-[120px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
