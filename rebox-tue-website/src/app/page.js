import NavBar from "./components/Navbar"
import Banner from "./components/Banner"
import SectionLTR from "./components/SectionLTR"
import SectionRTL from "./components/SectionRTL"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="bg-default">
      <NavBar></NavBar>
      <Banner></Banner>
      <SectionLTR></SectionLTR>
      <SectionRTL></SectionRTL>
      <Footer></Footer>
    </div>
  )
}
