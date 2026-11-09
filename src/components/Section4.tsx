import github from "../assets/github.png";
import message from "../assets/message.png";
import linkedin from "../assets/linkedin.png";
import x from "../assets/x.png";

export const Section4 = () => {
  return (
    <div className="w-full my-[80px] py-[90px] bg-bg">
      <div className="flex gap-[10px]">
        <p className="text-accent text-[15px] md:text-[20px] font-mono">03</p>
        <p className="text-muted text-[15px] md:text-[20px] font-mono">
          START A CONVERSATION
        </p>
      </div>

      <h1 className="text-text text-[38px] font-family-sans font-[600] my-[22px]">
        Have something ambitious in mind?
      </h1>

      <p className="text-[18px] md:text-[23px] text-muted font-family-sans my-[26px]">
        Tell me what you're building, where it's stuck, or what needs to scale.
        I'll reply within two business days.
      </p>

      <div className="grid grid-rows-4">
        <div className="h-[70px] border border-line p-[13px] flex items-center gap-[15px]">
          <div>
            <img src={message} alt="" className="items-center" />
          </div>
          <div>
            <p className="text-muted-2 font-mono">EMAIL</p>
            <p className="text-text font-family-sans">coddexx.dev@gmail.com</p>
          </div>
        </div>

        <div className="h-[70px] border border-line p-[13px] flex items-center gap-[15px]">
          <div>
            <img src={github} alt="" className="items-center" />
          </div>
          <div>
            <p className="text-muted-2 font-mono">GITHUB</p>
            <p className="text-text font-family-sans">dcoddexx</p>
          </div>
        </div>

        <div className="h-[70px] border border-line p-[13px] flex items-center gap-[15px]">
          <div>
            <img src={linkedin} alt="" className="items-center" />
          </div>
          <div>
            <p className="text-muted-2 font-mono">LINKEDIN</p>
            <p className="text-text font-family-sans">coddexx</p>
          </div>
        </div>

        <div className="h-[70px] border border-line p-[13px] flex items-center gap-[15px]">
          <div>
            <img src={x} alt="" className="items-center" />
          </div>
          <div>
            <p className="text-muted-2 font-mono">TWITTER</p>
            <p className="text-text font-family-sans">@coddexx_dev</p>
          </div>
        </div>
      </div>
    </div>
  );
};
