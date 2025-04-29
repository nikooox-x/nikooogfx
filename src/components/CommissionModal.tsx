import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { commissionStatus } from '../data/commissionStatus';
import { sendDiscordWebhook } from '../utils/sendDiscordWebhook';
import { useModal } from '../context/ModalContext';

const CommissionModal: React.FC = () => {
  const { closeModal } = useModal();
  const [status, setStatus] = useState<'loading' | 'closed' | 'open'>('loading');
  const [discordUsername, setDiscordUsername] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setStatus(commissionStatus.isOpen ? 'open' : 'closed');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!discordUsername.trim()) {
      setMessage('Please enter your Discord username');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const success = await sendDiscordWebhook(discordUsername);
      
      if (success) {
        setMessage('Your request has been sent, wait till I get in contact with you!');
        setDiscordUsername('');
      } else {
        setMessage('There was an error sending your request. Please try again.');
      }
    } catch (error) {
      setMessage('There was an error sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
      <div className="bg-[#0a0a1a] border-2 border-[#0012ff] p-8 rounded-lg shadow-lg max-w-md w-full relative text-white">
        <button 
          onClick={closeModal}
          className="absolute top-2 right-2 text-white hover:text-[#0012ff] transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          {status === 'loading' && (
            <div className="py-8">
              <div className="animate-pulse text-xl font-bold mb-4">Fetching commission status...</div>
              <div className="w-12 h-12 border-4 border-[#0012ff] border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          )}

          {status === 'closed' && (
            <div className="py-8">
              <h2 className="text-2xl font-bold mb-4 text-[#0012ff]">Commission Status</h2>
              <p className="text-xl">My commissions are closed, come back another time!</p>
            </div>
          )}

          {status === 'open' && (
            <div className="py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#0012ff]">Get in contact with me!</h2>
              
              {message ? (
                <div className="mb-4 text-xl">{message}</div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-left">
                    <label htmlFor="discord" className="block text-lg mb-2">
                      Please enter your Discord username
                    </label>
                    <input
                      id="discord"
                      type="text"
                      value={discordUsername}
                      onChange={(e) => setDiscordUsername(e.target.value)}
                      className="w-full p-3 bg-[#121225] border border-[#0012ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0012ff] text-white"
                      placeholder="Your Discord username"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0012ff] hover:bg-[#000dbb] text-white py-3 px-6 rounded-md transition-colors text-lg font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommissionModal;