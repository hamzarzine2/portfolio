import "./globals.css";
import Navbar  from "../component/Navbar/Navbar";
import Presentation from "@/component/Presentation/Presentation";
const RootLayout=({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Presentation/>
        {children}
        </body>
    </html>
  );
}

export default RootLayout