import { withRouter } from "next/router";
import PlotsPage from "../../components/widgets/plots";

export default function Page(props) {
  return (
    <div>
      <PlotsPage />
    </div>
  );
}