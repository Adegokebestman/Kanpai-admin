import ShipAddress from "../components/ShippingAddress";
import BuyerProfile from "../components/BuyerProfile";
import PaymentMethod from "../components/PaymentMethod";
const BuyerDetails = () => {
	return <div>
	<BuyerProfile />
	<PaymentMethod />
	<ShipAddress />
	</div>;
};
export default BuyerDetails;
