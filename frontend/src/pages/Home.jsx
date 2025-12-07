import DiscoverProcess from "../components/DiscoverProcess";
import DoctorCarousel from "../components/DoctorCarousel";
import FindDoctor from "../components/FindDoctor";
import DoctorBySpeciality from "../components/DoctorbySpeciality";
import DoctorApp from "../components/DoctorApp";

export default function Home() {
  return (
    <main>
    <FindDoctor />
		<DiscoverProcess />
	  <DoctorCarousel />
	  <DoctorBySpeciality />
		<DoctorApp />
    </main>
  );
}
