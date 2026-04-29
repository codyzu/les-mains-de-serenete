export const getPhoneHref = (phone: string) => phone.replaceAll(/\s/g, '');

export const getWhatsappPhone = (phone: string) =>
  getPhoneHref(phone).replaceAll(/\D/g, '');

export const getWhatsappHref = (phone: string, message: string) => {
  const whatsappPhone = getWhatsappPhone(phone);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;
};

export const formatPhoneDisplay = (phone: string) => {
  const phoneHref = getPhoneHref(phone);
  const digits = phoneHref.replace('+33', '');
  const firstDigit = digits.slice(0, 1);
  const groups = digits.slice(1).match(/.{1,2}/g) ?? [];

  return `+33 ${firstDigit} ${groups.join(' ')}`;
};
