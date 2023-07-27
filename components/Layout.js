import HeaderNav from "./Header_Nav";
import HeaderNavTwo from "./Header_Nav_2";

export default function Layout({ children }) {
  return (
    <>
      {/* <HeaderNav /> */}
      <HeaderNavTwo />
      <>{children}</>;
    </>
  );
}
