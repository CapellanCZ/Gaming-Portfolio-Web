import DarkVeil from "./blocks/Backgrounds/DarkVeil/DarkVeil";
import CardNav from "./blocks/Components/CardNav/CardNav";

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <>
      <div className="relative h-screen w-screen bg-[#060111]">
        <DarkVeil />
        <CardNav
          logo={"https://imgs.search.brave.com/L9hAUtDfMqZXziRur2H_wHJEFHCA3vmm49JHPdsCuaw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZTAyNTRiMThkNzJj/YzdmMDc4YThhMzUv/NWUwN2Q2MGZlZDJh/Mjc3MDk0NzBjYzRk/X3JlZGJpdC1sb2dv/LXdoaXRlLnN2Zw"}
          logoAlt="Company Logo"
          items={items}
          baseColor="black"
          menuColor="white"
          ease="circ.out"
          className='border-1 border-[#382e4f] rounded-[10px]'
        />
      </div>
    </>
  );
}

export default App;
