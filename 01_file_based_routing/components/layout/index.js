import MainHeader from './main-header';

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      {props.children}
    </>
  );
}
