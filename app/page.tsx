import MainLayout from "../layout/mainLayout";
import { Navbar, Topbar } from "@/components";

export default function Home() {
  return (
    <MainLayout>
      <Topbar />
      <Navbar />
    </MainLayout>
  )
}
