export const INSTAGRAM_URL = "https://www.instagram.com/casadelmar.meriti/";

const number = import.meta.env.VITE_WHATSAPP_NUMBER?.trim() ?? "";
const message =
  "Olá! Conheci a Del Mar Congelados pelo site e gostaria de consultar os produtos disponíveis e os preços.";

export const WHATSAPP_URL = /^[1-9]\d{7,14}$/.test(number)
  ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  : null;
