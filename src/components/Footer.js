import git from "../assets/git.png";

export default function Footer() {
  return (
    <footer className=" flex justify-center items-center text-lg font-[monospace]">
      Crafted by Tjsm{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Tribhuwan-Joshi"
      >
        <img
          src={git}
          width="16px"
          alt="github"
          style={{ marginLeft: "10px" }}
        />
      </a>{" "}
    </footer>
  );
}
