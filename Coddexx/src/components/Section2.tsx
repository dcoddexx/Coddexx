import Inxern from "../assets/InXern.png";

export const Section2 = () => {
  return (
    <div className="w-full my-[80px] py-[90px] bg-bg">
      <div className="flex gap-[10px]">
        <p className="text-accent text-[15px] md:text-[20px] font-mono">02</p>
        <p className="text-muted text-[15px] md:text-[20px] font-mono">
          SELECTED WORK
        </p>
      </div>

      <h1 className="text-text text-[38px] font-family-sans font-[600] my-[22px]">
        Built to perform. Designed to endure.
      </h1>

      <p className="text-[18px] md:text-[23px] text-muted font-family-sans">
        A focused selection of products where strategy, systems thinking, and
        exacting execution came together.
      </p>

      <div className="flex flex-col my-[46px] border border-line bg-card">
        <img
          src={Inxern}
          alt="Inxern mockup"
          className="border border-accent/20"
        />

        <div className="px-[25px]">
          <h2 className="font-family-sans text-[40px] md:text-[45px] text-text my-[50px] font-[400]">
            InXern
          </h2>

          <p className="font-family-sans text-[20px] md:text-[25px] text-text">
            The early-career platform that turns potential into opportunity.
          </p>

          <p className="text-muted my-[20px] font-family-sans">
            A high-performance job and internship portal connecting emerging
            talent with teams ready to invest in them.
          </p>
        </div>

        <div className="grid grid-cols-2 px-[25px] gap-[10px] font-mono">
          <span className="p-[10px] border border-line bg-surface text-muted">
            React
          </span>

          <span className="p-[10px] border border-line bg-surface text-muted">
            TypeScript
          </span>

          <span className="p-[10px] border border-line bg-surface text-muted">
            Supabase
          </span>

          <span className="p-[10px] border border-line bg-surface text-muted">
            Tailwind CSS
          </span>
        </div>

        <div className="flex flex-col px-[25px] py-[30px] my-[20px] mx-[20px] gap-[5px] border border-l-0 border-r-0 border-t-line border-b-line">
          <p className="font-mono text-accent text-[12px] md:text-[17px]">
            ARCHITECTURAL HIGHLIGHT
          </p>

          <p className="text-muted font-family-sans text-[12px] md:text-[17px]">
            Event-driven application pipeline with row-level security and
            optimistic UI updates.
          </p>
        </div>
      </div>
    </div>
  );
};
