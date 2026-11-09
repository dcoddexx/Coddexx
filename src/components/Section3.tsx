export const Section3 = () => {
  return (
    <div className="w-full my-[80px] py-[90px] bg-bg">
      <div className="flex gap-[10px]">
        <p className="text-accent text-[15px] md:text-[20px] font-mono">03</p>
        <p className="text-muted text-[15px] md:text-[20px] font-mono">ABOUT</p>
      </div>

      <h1 className="text-text text-[38px] font-family-sans font-[600] my-[22px]">
        Engineering with care, curiosity, and a long view.
      </h1>

      <p className="text-[18px] md:text-[23px] text-text font-family-sans">
        I’m a frontend engineer who cares as much about the system behind the
        interface as the experience in front of it.
      </p>

      <p className="text-[18px] md:text-[23px] text-muted font-family-sans my-[26px]">
        My best work happens where product strategy, visual craft, and technical
        architecture overlap.
      </p>

      <div className="flex flex-col">
        <p className="font-mono text-muted-2 my-[70px] text-[15px] md:text-[20px]">
          MY OPERATING PRINCIPLES
        </p>

        <div className="flex gap-[10px] items-center py-[16px] border border-b-line">
          <p className="text-accent text-[12px] md:text-[17px] font-mono">01</p>
          <p className="text-text text-[15px] md:text-[20px] font-family-sans font-[400]">
            Make it clear before making it clever.
          </p>
        </div>

        <div className="flex gap-[10px] items-center py-[16px] border border-b-line">
          <p className="text-accent text-[12px] md:text-[17px] font-mono">02</p>
          <p className="text-text text-[15px] md:text-[20px] font-family-sans font-[400]">
            Accessibility is product quality.
          </p>
        </div>

        <div className="flex gap-[10px] items-center py-[16px] border border-b-line">
          <p className="text-accent text-[12px] md:text-[17px] font-mono">03</p>
          <p className="text-text text-[15px] md:text-[20px] font-family-sans font-[400]">
            Leave the system better than you found it.
          </p>
        </div>
      </div>
    </div>
  );
};
