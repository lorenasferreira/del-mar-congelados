// Add only confirmed rules. Set complete once the client approves the full list.
// A street rule covers the whole street and must match municipality and state.
export const deliveryCoverage = {
  complete: false,
  postalCodes: [],
  streets: [],
};

const normalize = (value) => (value ?? "")
  .normalize("NFD").replace(/\p{Diacritic}/gu, "").trim().replace(/\s+/g, " ").toLowerCase();

export function getCoverage(cep, address, coverage = deliveryCoverage) {
  const street = normalize(address.logradouro);
  const city = normalize(address.localidade);
  const state = normalize(address.uf);
  const approved = coverage.postalCodes.includes(cep) || (
    street && city && state && coverage.streets.some((rule) =>
      normalize(rule.street) === street && normalize(rule.city) === city && normalize(rule.state) === state
    )
  );

  if (approved) return "covered";
  if (coverage.complete && coverage.streets.length && !street) return "pending";
  return coverage.complete ? "outside" : "pending";
}
