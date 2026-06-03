const WhatsAppButton = ({ phoneNumber = "1234567890", message = "Hello Kaarvex, I'm interested in your AI solutions!" }) => {
  // Remove any non-numeric characters from the phone number
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Connect with us on WhatsApp"
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 0C5.388 0 0 5.388 0 12.031c0 2.128.552 4.195 1.6 6.01L.226 23.332l5.441-1.428A11.968 11.968 0 0012.031 24c6.64 0 12.031-5.388 12.031-12.031S18.672 0 12.031 0zM17.5 17.5c-.32.905-1.854 1.705-2.545 1.782-.692.078-1.503.208-4.836-1.173-4.004-1.657-6.584-5.753-6.78-6.015-.196-.263-1.616-2.15-1.616-4.1s1.026-2.915 1.39-3.298c.365-.382.784-.477 1.047-.477s.524 0 .753.013c.24.013.563-.092.88.67.317.77.1.58.555 1.066.836.486 1.053.794.757 1.304-.296.51-.453.82-.716 1.127-.263.308-.545.642-.782.906-.26.29-.533.6-.237 1.11.296.51 1.32 2.176 2.827 3.526 1.942 1.737 3.568 2.274 4.095 2.533.525.26 1.085.202 1.508-.13.593-.464.915-1.077 1.258-1.455.343-.377.685-.314 1.157-.14 4.093 1.528 2.052 1.02 2.314 1.15.263.13.88.423 1.01.656.13.232.13 1.353-.19 2.258z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
