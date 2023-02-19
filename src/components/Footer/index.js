import React from "react";

import { Img, Text, Line } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-center ml-[149px] mr-[47px] mt-[66px] w-[86%]">
          <div className="flex flex-col gap-[7px] items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] sm:w-[100%] w-[91%]">
              <div className="flex flex-row gap-[12px] items-center justify-start sm:w-[100%] w-[auto]">
                <Img
                  src="defaultNoData.png"
                  className="h-[50px] w-[50px]"
                  alt="grid One"
                />
                <Text
                  className="font-spectralsc text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  Nexus
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between sm:mt-[0] mt-[24px] sm:w-[100%] w-[auto]">
                <div className="md:h-[150px] sm:h-[150px] h-[260px] pr-[4px] pt-[4px] relative w-[auto]">
                  <div className="absolute flex flex-col gap-[56px] h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] pb-[2px] w-[90%]">
                    <Text
                      className="font-bold font-sourcesanspro text-left text-white_A700 sm:tracking-ls1 md:tracking-ls2 tracking-ls4 w-[auto]"
                      variant="body2"
                    >
                      ABOUT
                    </Text>
                    <ul className="flex flex-col items-start justify-start w-[100%] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-semibold font-sourcesanspro text-left text-white_A700 tracking-ls09 md:tracking-ls1 sm:tracking-ls1"
                          variant="body3"
                        >
                          About
                        </Text>
                      </li>
                      <li className="mt-[35px] ml-[1px] w-[auto]">
                        <a
                          className="cursor-pointer font-semibold font-sourcesanspro text-[18px] text-left text-white_A700 tracking-ls09 md:tracking-ls1 sm:tracking-ls1"
                          href="#"
                        >
                          What we do
                        </a>
                      </li>
                      <li className="mt-[35px] ml-[1px] w-[auto]">
                        <a
                          className="cursor-pointer font-semibold font-sourcesanspro text-[18px] text-left text-white_A700 tracking-ls09 md:tracking-ls1 sm:tracking-ls1"
                          href="#"
                        >
                          Works
                        </a>
                      </li>
                      <li className="mt-[34px] ml-[1px] w-[auto]">
                        <a
                          className="cursor-pointer font-semibold font-sourcesanspro text-[18px] text-left text-white_A700 tracking-ls09 md:tracking-ls1 sm:tracking-ls1"
                          href="#"
                        >
                          Testimonial
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Line className="absolute bg-deep_orange_A100 h-[2px] left-[0] top-[13%] w-[41%]" />
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-end py-[2px] w-[auto]">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold font-sourcesanspro text-left text-white_A700 sm:tracking-ls1 md:tracking-ls2 tracking-ls4 w-[auto]"
                      variant="body2"
                    >
                      FOLLOW US
                    </Text>
                    <Line className="bg-deep_orange_A100 h-[2px] w-[34%]" />
                  </div>
                  <ul className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[65%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold font-sourcesanspro text-left text-white_A700 tracking-ls09 md:tracking-ls1 sm:tracking-ls1"
                        variant="body3"
                      >
                        Dribbble
                      </Text>
                    </li>
                    <li className="mt-[37px] w-[auto]">
                      <a
                        className="cursor-pointer font-semibold font-sourcesanspro text-[18px] text-left text-white_A700 tracking-ls09 md:tracking-ls1 sm:tracking-ls1"
                        href="#"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="mt-[32px] w-[auto]">
                      <a
                        className="cursor-pointer font-semibold font-sourcesanspro text-[18px] text-left text-white_A700 tracking-ls09 md:tracking-ls1 sm:tracking-ls1"
                        href="#"
                      >
                        Behance
                      </a>
                    </li>
                    <li className="mt-[34px] w-[auto]">
                      <a
                        className="cursor-pointer font-semibold font-sourcesanspro text-[18px] text-left text-white_A700 tracking-ls09 md:tracking-ls1 sm:tracking-ls1"
                        href="#"
                      >
                        Pinterest
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Text
              className="font-bold font-sourcesanspro text-left text-white_A700 w-[auto]"
              variant="body5"
            >
              Oracle Brand - All Rights Reserved
            </Text>
          </div>
          <Img
            src="images/img_group710.svg"
            className="h-[311px] md:mt-[0] sm:mt-[0] mt-[120px] w-[24%]"
            alt="Group710"
          />
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
