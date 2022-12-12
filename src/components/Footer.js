import git from "../assets/git.png";

export default function Footer() {
  return (
    <footer className=" border-t-4  boreder-st border-t-slate-600 h-[5%] flex justify-center items-center text-lg font-[monospace]">
      Crafted by Tjsm{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Tribhuwan-Joshi"
      >
        <img
          src={git}
          width="18px"
          alt="github"
          style={{ marginLeft: "10px" }}
        />
      </a>{" "}
    </footer>
  );
}
