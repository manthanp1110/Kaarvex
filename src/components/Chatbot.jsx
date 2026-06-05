import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { v4 as uuidv4 } from 'uuid';
import '../chatbot-responsive.css';

const Chatbot = () => {

  const isSupabaseConfigured = !!import.meta.env.VITE_SUPABASE_URL;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Welcome to Kaarvex! How can I help you build something extraordinary today?' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => {
    let currentSessionId = localStorage.getItem('kaarvex_chat_session');
    if (!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem('kaarvex_chat_session', currentSessionId);
    }
    return currentSessionId;
  });
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async (sid) => {
      try {
        const { data, error } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('session_id', sid)
          .order('created_at', { ascending: true });
          
        if (error && error.code === '42P01') {
          // Table doesn't exist yet, just ignore and start fresh
          console.warn("Table 'chat_messages' does not exist yet.");
        } else if (data && data.length > 0) {
          setMessages(data);
        } else {
          setMessages([{ role: 'assistant', content: 'Welcome to Kaarvex! How can I help you build something extraordinary today?' }]);
        }
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    // Fetch previous messages if configured
    if (isSupabaseConfigured && supabase) {
      fetchMessages(sessionId);
    }
  }, [isSupabaseConfigured, sessionId]);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const currentInput = input.trim().toLowerCase();
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 1. Save User Message to Supabase
      if (isSupabaseConfigured && supabase) {
        await supabase.from('chat_messages').insert([{
          session_id: sessionId,
          role: 'user',
          content: userMessage.content
        }]);
      }

      // 2. Generate Rule-based Response
      setTimeout(async () => {
        let botResponseText = "I'm the Kaarvex AI assistant. I can help you with information about our Web Applications, Mobile Apps, AI Models, ERP systems, or our portfolio. How can I help you today?";
        
        if (currentInput.includes('hello') || currentInput.includes('hi ') || currentInput === 'hi' || currentInput === 'hey') {
          botResponseText = "Hello! Welcome to Kaarvex. How can I help you build something extraordinary today?";
        } else if (currentInput.includes('services') || currentInput.includes('what do you do') || currentInput.includes('offer')) {
          botResponseText = "We specialize in Web Applications, Mobile Apps, AI Models, and Enterprise Resource Planning (ERP) systems. Would you like to know more about any specific service?";
        } else if (currentInput.includes('web') || currentInput.includes('website')) {
          botResponseText = "We build fast, dynamic, and beautiful web applications using modern technologies like React, Next.js, and specialized UI frameworks. We focus on high-end, dark, and glassmorphic aesthetics.";
        } else if (currentInput.includes('app') || currentInput.includes('mobile')) {
          botResponseText = "We develop cross-platform and native mobile applications that provide seamless user experiences and high performance.";
        } else if (currentInput.includes('ai') || currentInput.includes('artificial intelligence') || currentInput.includes('model')) {
          botResponseText = "Our AI solutions include custom model training, LLM integration, and intelligent automation to streamline your business operations.";
        } else if (currentInput.includes('erp') || currentInput.includes('enterprise')) {
          botResponseText = "We build comprehensive ERP systems tailored to your business needs. A notable example is DCPEMS, our School Website & App ERP system.";
        } else if (currentInput.includes('portfolio') || currentInput.includes('client') || currentInput.includes('work') || currentInput.includes('dcpems')) {
          botResponseText = "Our notable clients include DCPEMS, for whom we built a comprehensive School Website & App ERP system. We pride ourselves on delivering premium digital experiences.";
        } else if (currentInput.includes('contact') || currentInput.includes('book') || currentInput.includes('call') || currentInput.includes('hire') || currentInput.includes('project')) {
          botResponseText = "We'd love to discuss your project! Please use the 'Book a Free Call' or 'Contact Us' buttons on our website to get in touch with our team.";
        } else if (currentInput.includes('price') || currentInput.includes('cost') || currentInput.includes('quote')) {
          botResponseText = "Our pricing is tailored to the specific requirements of each project. Please book a free call with us to discuss your needs and get a custom quote.";
        } else if (currentInput.includes('who are you') || currentInput.includes('what is kaarvex')) {
          botResponseText = "Kaarvex is a premium digital agency. We build things that are fast, dynamic, and beautiful, specializing in cutting-edge software solutions.";
        } else if (currentInput.includes('thank')) {
          botResponseText = "You're welcome! Let me know if you have any other questions.";
        } else {
          botResponseText = "Thanks for your message! For detailed information or to discuss a specific project, I recommend checking our services section or clicking 'Book a Free Call' to speak directly with our team.";
        }

        // 3. Save Assistant Message to Supabase
        if (isSupabaseConfigured && supabase) {
          await supabase.from('chat_messages').insert([{
            session_id: sessionId,
            role: 'assistant',
            content: botResponseText
          }]);
        }

        setMessages(prev => [...prev, { role: 'assistant', content: botResponseText }]);
        setIsLoading(false);
      }, 800); // Simulate network delay for realism

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error processing your message.' }]);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className="chatbot-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '100px', // Next to WhatsApp button on desktop
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--cyan)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0, 240, 255, 0.3)',
          zIndex: 999,
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'scale(0.9)' : 'scale(1)',
          overflow: 'hidden'
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <img src="/logo.jpg" alt="Kaarvex AI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" style={{
          position: 'fixed',
          bottom: '110px',
          right: '30px',
          width: 'min(380px, calc(100vw - 60px))',
          height: '500px',
          maxHeight: 'calc(100vh - 140px)',
          background: 'rgba(10, 10, 12, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-cyan)',
          borderRadius: '16px',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            padding: '20px',
            background: 'rgba(0, 240, 255, 0.05)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ position: 'relative' }}>
              <img src="/logo.jpg" alt="Kaarvex" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-cyan)' }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)', border: '2px solid #000' }}></div>
            </div>
            <div>
              <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#fff' }}>Kaarvex AI</h4>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>Online & Ready</p>
            </div>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                background: msg.role === 'user' ? 'var(--cyan)' : 'var(--bg-1)',
                color: msg.role === 'user' ? '#000' : 'var(--text-primary)',
                padding: '12px 16px',
                borderRadius: '12px',
                borderBottomRightRadius: msg.role === 'user' ? '4px' : '12px',
                borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '12px',
                fontSize: '0.9rem',
                lineHeight: 1.5,
                border: msg.role === 'assistant' ? '1px solid var(--border)' : 'none'
              }}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                Kaarvex AI is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} style={{
            padding: '16px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            gap: '12px',
            background: 'var(--bg-0)'
          }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about Kaarvex..."
              style={{
                flex: 1,
                background: 'var(--bg-1)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '12px 16px',
                color: '#000',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--cyan)',
                cursor: (isLoading || !input.trim()) ? 'not-allowed' : 'pointer',
                opacity: (isLoading || !input.trim()) ? 0.5 : 1,
                padding: '0 8px'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
