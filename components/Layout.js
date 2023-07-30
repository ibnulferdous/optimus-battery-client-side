import Footer from "./Footer";
import HeaderNav from "./Header_Nav";

export default function Layout({ children }) {
  return (
    <>
      <HeaderNav />
      <>{children}</>;
      <Footer />
    </>
  );
}
