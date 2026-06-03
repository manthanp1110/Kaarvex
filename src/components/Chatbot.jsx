import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { v4 as uuidv4 } from 'uuid';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are the official Kaarvex AI Assistant. 
Kaarvex is a premium digital agency specializing in Web Applications, Mobile Apps, AI Models, and Enterprise Resource Planning (ERP) systems. 
Our aesthetic is high-end, dark, and glassmorphic. We build things that are fast, dynamic, and beautiful. 
Notable clients: DCPEMS (A comprehensive School Website & App ERP system).
Your goal: Answer client questions concisely, professionally, and enthusiastically. Recommend them to "Book a Free Call" if they want to start a project. Keep answers under 3-4 sentences.`;

const Chatbot = () => {
  const isConfigured = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_GEMINI_API_KEY;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    return isConfigured 
      ? [] 
      : [{ role: 'assistant', content: 'Hello! I am the Kaarvex AI. (API keys missing - please configure them in .env)' }];
  });
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
    if (isConfigured && supabase) {
      fetchMessages(sessionId);
    }
  }, [isConfigured, sessionId]);

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
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    if (!isConfigured) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Demo mode: Please add VITE_GEMINI_API_KEY and VITE_SUPABASE_URL to your .env file to enable real AI responses.' }]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      // 1. Save User Message to Supabase
      if (supabase) {
        await supabase.from('chat_messages').insert([{
          session_id: sessionId,
          role: 'user',
          content: userMessage.content
        }]);
      }

      // 2. Call Gemini API
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-1.5-flash',
        systemInstruction: SYSTEM_PROMPT
      });

      // Format history for Gemini
      const history = messages.filter(m => m.role === 'user' || m.role === 'assistant').map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userMessage.content);
      const botResponseText = result.response.text();

      // 3. Save Assistant Message to Supabase
      if (supabase) {
        await supabase.from('chat_messages').insert([{
          session_id: sessionId,
          role: 'assistant',
          content: botResponseText
        }]);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: botResponseText }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '100px', // Next to WhatsApp button
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
          transform: isOpen ? 'scale(0.9)' : 'scale(1)'
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
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
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }}></div>
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
                color: '#fff',
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
