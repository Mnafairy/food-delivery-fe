// import { DashComponent } from "@/components/dashboard/dashComponent";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/components/dashboard/Dashboard"), {
  ssr: false,
});

const Page = () => {
  //is he/she signed ? continue : redirect to login
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Page;
