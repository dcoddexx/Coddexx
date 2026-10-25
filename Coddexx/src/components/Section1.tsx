export const Section1 = () => {
  return (
    <div className="w-full my-[80px] py-[90px] bg-bg">
      <div className="flex gap-[10px]">
        <p className="text-accent text-[15px] md:text-[20px] font-mono">01</p>
        <p className="text-muted text-[15px] md:text-[20px] font-mono">
          CAPABILITIES
        </p>
      </div>

      <h1 className="text-text text-[38px] font-family-sans font-[600] my-[22px]">
        Tools I use to make the complex feel simple.
      </h1>

      <div className="min-h-[380px] bg-card border border-line p-[28px] my-[45px]">
        <p className="font-mono text-[15px] md:text-[20px] text-muted-2">01</p>

        <h2 className="font-family-sans text-text text-[24px] md:text-[29px] my-[52px] font-[400]">
          Frontend
        </h2>

        <div className="font-mono text-[15px] md-text-[20px] text-muted">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
            <span className="p-[10px] border border-line text-accent">
              React
            </span>
            <span className="p-[10px] border border-line">JavaScript</span>
            <span className="p-[10px] border border-line">TypeScript</span>
            <span className="p-[10px] border border-line">Design Systems</span>
            <span className="p-[10px] border border-line">Web Performace</span>
            <span className="p-[10px] border border-line">Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="min-h-[380px] bg-card border border-line p-[28px] my-[45px]">
        <p className="font-mono text-[15px] md:text-[20px] text-muted-2">02</p>

        <h2 className="font-family-sans text-text text-[24px] md:text-[29px] my-[52px] font-[400]">
          Backend / Data
        </h2>

        <div className="font-mono text-[15px] md-text-[20px] text-muted">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
            <span className="p-[10px] border border-line text-accent">
              Supabase
            </span>
            <span className="p-[10px] border border-line">PostgreSQL</span>
            <span className="p-[10px] border border-line">Node.js</span>
            <span className="p-[10px] border border-line">Edge Functions</span>
            <span className="p-[10px] border border-line">Rest API</span>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="min-h-[380px] bg-card border border-line p-[28px] my-[45px]">
        <p className="font-mono text-[15px] md:text-[20px] text-muted-2">03</p>

        <h2 className="font-family-sans text-text text-[24px] md:text-[29px] my-[52px] font-[400]">
          Tools / DevOps
        </h2>

        <div className="font-mono text-[15px] md-text-[20px] text-muted">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
            <span className="p-[10px] border border-line text-accent">
              Vite
            </span>
            <span className="p-[10px] border border-line">Github Actions</span>
            <span className="p-[10px] border border-line">Vercel</span>
          </div>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="min-h-[380px] bg-card border border-line p-[28px] my-[45px]">
        <p className="font-mono text-[15px] md:text-[20px] text-muted-2">03</p>

        <h2 className="font-family-sans text-text text-[24px] md:text-[29px] my-[52px] font-[400]">
          Design
        </h2>

        <div className="font-mono text-[15px] md-text-[20px] text-muted">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
            <span className="p-[10px] border border-line text-accent">
              Figma
            </span>
            <span className="p-[10px] border border-line">Canva</span>
          </div>
        </div>
      </div>
    </div>
  );
};
