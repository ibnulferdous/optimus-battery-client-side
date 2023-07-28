import HeaderNav from "./Header_Nav";

export default function Layout({ children }) {
  return (
    <>
      <HeaderNav />
      <>{children}</>;
    </>
  );
}
