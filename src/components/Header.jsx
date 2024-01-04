import dollarBag from '../assets/investment-calculator-logo.png'

export default function Header() {
  return (
    <header id="header">
      <img src={dollarBag} alt="Bag with Dollar sign" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
