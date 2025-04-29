// Function to send commission requests to Discord webhook

export const sendDiscordWebhook = async (username: string): Promise<boolean> => {
  try {
    const response = await fetch(
      'https://discord.com/api/webhooks/1366057048625778799/Oxt9V943DM2iXB1Nohg7271i1YPjfX1NRDni6TGzlQrBZ2Kdwk2p0qVh7QNLcBz-czP1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New commission request from: ${username}`,
          username: 'Commission Bot',
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error('Error sending webhook:', error);
    return false;
  }
};