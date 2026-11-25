import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { getCoverage } from "../../../config/deliveryCoverage";
import { WHATSAPP_URL } from "../../../config/contact";
import styles from "./DeliveryCoverage.module.css";

const feedback = {
  loading: "Consultando o CEP…",
  invalid: "Informe os oito dígitos do CEP.",
  missing: "Não encontramos esse CEP. Confira os dígitos e tente novamente.",
  error: "Não foi possível consultar o CEP agora. Tente novamente em instantes.",
  pending: "Encontramos o CEP. A cobertura de entrega para esse endereço ainda precisa ser confirmada.",
  covered: "O CEP está na área de atendimento. Confirme as condições de entrega antes de pedir.",
  outside: "Este CEP está fora da área de atendimento cadastrada.",
};

function DeliveryCoverage() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const input = useRef(null);
  const request = useRef(null);

  useEffect(() => () => request.current?.abort(), []);

  function handleChange(event) {
    request.current?.abort();
    request.current = null;
    setResult(null);
    const digits = event.target.value.replace(/\D/g, "").slice(0, 8);
    setValue(digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (request.current) return;
    const cep = value.replace("-", "");
    if (cep.length !== 8) {
      setResult({ status: "invalid" });
      input.current.focus();
      return;
    }

    const controller = new AbortController();
    request.current = controller;
    setResult({ status: "loading" });
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        signal: controller.signal,
        cache: "no-store",
        referrerPolicy: "no-referrer",
      });
      if (!response.ok) throw new Error("Falha na consulta");
      const address = await response.json();
      if (request.current !== controller) return;
      if (address.erro) {
        setResult({ status: "missing" });
        return;
      }
      if (address.cep?.replace(/\D/g, "") !== cep || !address.localidade || !address.uf) {
        throw new Error("Resposta de endereço incompleta");
      }
      const locality = `${address.localidade} – ${address.uf}`;
      setResult({
        status: getCoverage(cep, address),
        address: [address.logradouro, address.bairro, locality].filter(Boolean).join(", "),
      });
    } catch {
      if (request.current === controller) setResult({ status: "error" });
    } finally {
      window.clearTimeout(timeout);
      if (request.current === controller) request.current = null;
    }
  }

  const status = result?.status;
  const invalid = status === "invalid" || status === "missing";

  return (
    <section id="area-de-atendimento" className={styles.section} aria-labelledby="coverage-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <MapPin size={30} strokeWidth={1.5} aria-hidden="true" />
          <h2>O melhor do mar, pertinho de você.</h2>
          <p>Qualidade e praticidade em pescados congelados, com foco no atendimento local na Barra Olímpica, no Rio de Janeiro.</p>
        </div>
        <div className={styles.lookup}>
          <h2 id="coverage-title">Entregamos na sua região?</h2>
          <p>Informe seu CEP e consulte nossa área de atendimento.</p>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="delivery-cep">CEP</label>
            <div className={styles.controls}>
              <input id="delivery-cep" ref={input} type="text" inputMode="numeric"
                autoComplete="postal-code" placeholder="00000-000" value={value}
                onChange={handleChange} aria-invalid={invalid || undefined}
                aria-describedby={invalid ? "coverage-feedback" : undefined} required />
              <button type="submit" aria-disabled={status === "loading"}>Consultar CEP</button>
            </div>
          </form>
          <div id="coverage-feedback" className={styles.feedback} data-error={invalid || status === "error"}
            role="status" aria-live="polite" aria-atomic="true">
            {result?.address && <strong>{result.address}</strong>}
            {status && <span>{feedback[status]}</span>}
          </div>
          {WHATSAPP_URL && <a className={styles.contact} href={WHATSAPP_URL}>Consultar as condições pelo WhatsApp</a>}
        </div>
      </div>
    </section>
  );
}

export default DeliveryCoverage;
