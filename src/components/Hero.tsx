import rightArrow from "../assets/right-arrow.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative w-full bg-bg px-[18px] border-t-[0.5px] border-t border-line">
      <div className="absolute isolate overflow-hidden -top-[50px] -right-[160px] w-[600px] h-[600px] -z-10 pointer-events-none rounded-full bg-accent-soft blur-[100px]" />
      <p className="text-muted my-[30px] font-mono">
        AVAILABLE FOR SELECT PROJECTS
      </p>

      <div>
        <h1 className="text-[45px] text-text font-family-sans font-[600] leading-[50px]">
          Lead Frontend Engineer building <br />{" "}
          <span className="text-accent">resilient</span> web systems.
        </h1>
        <p className="text-muted font-family-sans my-10 leading-[25.5px]">
          I turn complex product challenges into fast, accessible, and
          beautifully engineered digital experiences.
        </p>
      </div>

      <div className="flex-row">
        <Link to="/projects">
          <button className="w-full h-[60px] flex justify-between items-center px-[25px] border border-accent bg-accent text-[13px] font-[700] font-family-sans text-accent-ink">
            View selected work
            <img src={rightArrow} alt="arrow" />
          </button>
        </Link>
        <button className="w-full h-[60px] flex mt-3 border border-line bg-line items-center px-[25px] text-[13px] font-[700] font-family-sans text-text border border-line">
          Get in touch
        </button>
      </div>

      <div className="w-full py-[28px] flex justify-between border-t-[0.5px] my-[50px] border-t border-line">
        <div>
          <h6 className="text-[18px] font-sans font-[600] text-text">09+</h6>
          <p className="text-[12px] text-muted-2 font-mono font-[600]">
            YEARS SHIPPING
          </p>
        </div>{" "}
        <div>
          <h6 className="text-[18px] font-sans font-[600] text-text">30+</h6>
          <p className="text-[12px] text-muted-2 font-mono font-[600]">
            PRODUCTS LAUNCHED
          </p>
        </div>{" "}
        <div>
          <h6 className="text-[18px] font-sans font-[600] text-text">99</h6>
          <p className="text-[12px] text-muted-2 font-mono font-[600]">
            AVG. LIGHTHOUSE
          </p>
        </div>
      </div>

      <div className="border relative border-muted-2 bg-line w-[85vw] md:w-[94vw] ">
        <div className="bg-line w-full h-[12px]"></div>
        <div className="border border-muted-2 bg-line w-full min-h-[386px] flex flex-1 flex-col mx-[10px]">
          <div className="h-[20px] flex-row p-[10px]">
            <div className="flex gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
              <span className="w-[10px] h-[10px] rounded-full bg-muted-2"></span>
              <span className="w-[10px] h-[10px] rounded-full bg-muted-2"></span>
            </div>

            <div className="my-[20px]">
              <p className="text-accent font-mono text-[15px] md:text-[20px]">
                ➜ <span className="text-text">who-am-i</span>
              </p>
            </div>

            <div className="flex flex-col gap-[10px] my-[20px]">
              <div className="flex gap-[50px]">
                <p className="text-syntax-property font-mono text-[15px] md:text-[20px]">
                  name
                </p>

                <p className="text-muted font-mono text-[15px] md:text-[20px]">
                  "Francis Omotayo"
                </p>
              </div>

              <div className="flex gap-[50px]">
                <p className="text-syntax-property font-mono text-[15px] md:text-[20px]">
                  role
                </p>
                <p className="text-muted font-mono text-[15px] md:text-[20px]">
                  "Frontend Engineer"
                </p>
              </div>

              {/* <div className="flex gap-[10px]">
                <p className="text-syntax-property font-mono text-[15px] md:text-[20px]">
                  focus
                </p>
                <p className="text-muted font-mono text-[15px] md:text-[20px]">
                  ["Architecture", "DX", "Craft"]
                </p>
              </div> */}

              <div className="flex gap-[50px]">
                <p className="text-syntax-property font-mono text-[15px] md:text-[20px]">
                  location
                </p>
                <p className="text-muted font-mono text-[15px] md:text-[20px]">
                  "Remote / Worldwide"
                </p>
              </div>

              <div className="my-[20px]">
                <p className="text-accent font-mono text-[15px] md:text-[20px]">
                  ➜ <span className="text-text">current_status</span>
                </p>

                <div className="flex items-center gap-[8px] mx-[20px] my-[10px]">
                  <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>

                  <p className="text-muted font-mono text-[15px] md:text-[20px]">
                    Open to meaningful collaborations
                  </p>
                </div>

                <p className="my-[40px] text-accent font-mono text-[15px] md:text-[20px]">
                  ➜{" "}
                  <span className="h-4 w-2 bg-accent animate-[blink_1s_steps(1)_infinite]">
                    |
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[40px] border border-muted-2 bg-line flex items-center justify-between px-[10px]">
          <p className="font-mono text-accent">main*</p>

          <div className="text-muted font-mono flex gap-[12px]">
            <p>TypeScript</p>
            <p>UTF-8</p>
          </div>
        </div>
      </div>
    </div>
  );
};
