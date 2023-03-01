import { withRouter } from "next/router";
import MainLayout from "../../components/layouts/main.layout"
import HomePage from "../../components/widgets/home";

export default function Page(props) {
  return (
    <div>
      <HomePage/>
    </div>
  );
}