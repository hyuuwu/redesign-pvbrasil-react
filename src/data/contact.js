// Dados de contato centralizados: altere aqui e o site inteiro é atualizado.
export const CONTACT = {
  email: "vendas@pvbrasilimportacao.com.br",
  whatsappRetail: "5571986629647",
  whatsappWholesale: "5571999285059",
  address: {
    name: "Loja Barris",
    street: "Rua do Salete, 64",
    district: "Barris, Salvador - BA",
  },
  mapsUrl:
    "https://www.google.com/maps/place/PV+Brasil+Importa%C3%A7%C3%A3o+-+Salvador/data=!4m6!3m5!1s0x71605898aeaf5a3:0x433b3a7344811cab!8m2!3d-12.9850633!4d-38.5160685!16s%2Fg%2F11n5r51s4w",
  hours: [
    { days: "Segunda - Sexta", time: "08:00 - 18:00" },
    { days: "Sábado", time: "08:00 - 15:00" },
    { days: "Domingo", time: null },
  ],
};

export function whatsappLink(number, message) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function formatPhone(number) {
  // 5571986629647 -> (71) 98662-9647
  const local = number.replace(/^55/, "");
  return `(${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}`;
}
