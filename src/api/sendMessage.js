const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export default async function handler(req, res) {
  if (!botToken || !chatId) {
    console.error("Telegram environment variables are not set!");
    return res.status(500).json({ 
      success: false, 
      message: "Server configuration error: Telegram bot token or chat ID is missing." 
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { serviceName, name, email, message } = req.body;

  if (!serviceName || !name || !email) {
    return res.status(400).json({ message: 'Name, email, and service are required.' });
  }

  const text = `
Нове замовлення з сайту-портфоліо!
----------------------------------
*Послуга:* ${serviceName}
*Ім'я:* ${name}
*Email:* ${email}
*Повідомлення:*
${message || 'Порожньо'}
  `;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Telegram API error:", responseData);
      throw new Error(`Error from Telegram: ${responseData.description}`);
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return res.status(500).json({ success: false, message: `Failed to send message. ${error.message}` });
  }
} 