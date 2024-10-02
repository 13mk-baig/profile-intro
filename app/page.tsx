import Link from "next/link"
export default function Home() {
  return (
    <div> 
    <ul className ="flex gap-10  bg-pink-300">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link href="/jobs">Jobs</Link>
      </li>
    </ul>
    <p><b>MY NAME IS MEMONA (COMPUTER SYSTEMS ENGINEER )</b></p>
      <p><b>& I AM NEXT WEB DEVELOPER  </b></p>
    <img src="https://jessup.edu/wp-content/uploads/2024/01/Is-Web-Development-Oversaturated.jpg" height="auto"width="50%"align= "right" alt="sorry" />
    </div>
    
  );
}
