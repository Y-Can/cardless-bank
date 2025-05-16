
import './globals.css';

export default function Home() {
  return (
    <main className="container">
      <h1>🕶️ Cardless Bank</h1>
      <p className="lead">
        The anonymous crypto bank of the future. Recharge your virtual VISA card with Monero or USDC. No KYC. No surveillance. Total freedom.
      </p>

      <section>
        <h2>How it works</h2>
        <ul>
          <li>Get a unique Monero address</li>
          <li>Send XMR anonymously</li>
          <li>Auto-swap to USDC</li>
          <li>Funds instantly available on your VISA card</li>
        </ul>
      </section>

      <section>
        <h2>Privacy by Design</h2>
        <p>
          We never ask for your name. Our system is built to preserve privacy, powered by Monero and smart routing.
        </p>
      </section>

      <section>
        <h2>Interested in partnership?</h2>
        <p>
          Contact us at <a href="mailto:contact@cardlessbank.online">contact@cardlessbank.online</a>
        </p>
      </section>
    </main>
  );
}
