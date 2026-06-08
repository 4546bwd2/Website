import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import {
  ChatMessage,
  QuickReply,
  openingMessage,
  matchKeywords,
  getQuickReplyResponse,
  generateMessageId,
} from "../lib/chatbot-logic";

// ── Typing Indicator ──────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3 bg-[#2a2a2a] rounded-lg rounded-bl-none max-w-[80px]" aria-label="Mr. Ali Bot is typing">
      <span className="typing-dot" aria-hidden="true" />
      <span className="typing-dot" aria-hidden="true" />
      <span className="typing-dot" aria-hidden="true" />
    </div>
  );
}

// ── Quick Reply Button ────────────────────────────────────
function QuickReplyButton({
  reply,
  onClick,
}: {
  reply: QuickReply;
  onClick: (reply: QuickReply) => void;
}) {
  return (
    <button
      onClick={() => onClick(reply)}
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#C9A84C] border border-[#C9A84C]/40 rounded-full hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-1 focus-visible:ring-offset-[#1A1A1A] whitespace-nowrap"
      aria-label={`Quick reply: ${reply.label}`}
    >
      {reply.label}
    </button>
  );
}

// MessageBubble is rendered inline in the message list below

// ── Scissors Icon for Chat Button ────────────────────────
function ScissorsIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 8.5 L20 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 15.5 L20 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 12 L20 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ── Main ChatBot Component ────────────────────────────────
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Show greeting when first opened
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: generateMessageId(),
            role: "bot",
            text: openingMessage.text,
            buttons: openingMessage.buttons,
            timestamp: new Date(),
          },
        ]);
      }, 800);
    }
  }, [isOpen, hasGreeted]);

  // Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        openButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Add bot response with typing delay
  const addBotResponse = useCallback(
    (text: string, buttons?: QuickReply[]) => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: generateMessageId(),
            role: "bot",
            text,
            buttons,
            timestamp: new Date(),
          },
        ]);
      }, 800);
    },
    []
  );

  // Handle quick reply button click
  const handleQuickReply = useCallback(
    (reply: QuickReply) => {
      // Add user message
      setMessages((prev) => [
        ...prev,
        {
          id: generateMessageId(),
          role: "user",
          text: reply.label,
          timestamp: new Date(),
        },
      ]);

      // Get bot response
      const response = getQuickReplyResponse(reply.action);
      addBotResponse(response.text, response.buttons);
    },
    [addBotResponse]
  );

  // Handle typed message submission
  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isTyping) return;

    setInputValue("");

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: generateMessageId(),
        role: "user",
        text: trimmed,
        timestamp: new Date(),
      },
    ]);

    // Match keywords and get response
    const response = matchKeywords(trimmed);
    addBotResponse(response.text, response.buttons);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Get the latest bot message's buttons for display
  const latestBotMessage = [...messages].reverse().find((m) => m.role === "bot");

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            role="dialog"
            aria-label="Chat with Mr. Ali Bot"
            aria-modal="true"
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-sm shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
            style={{ height: "500px" }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#232323] border-b border-[#C9A84C]/15 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center">
                  <ScissorsIcon size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F5F0E8] text-sm font-semibold">Mr. Ali Bot 🪒</span>
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                      aria-label="Online"
                      role="img"
                    />
                  </div>
                  <p className="text-[#F5F0E8]/40 text-[10px]">Ask me anything about the shop!</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openButtonRef.current?.focus();
                }}
                className="p-1.5 text-[#F5F0E8]/40 hover:text-[#F5F0E8] hover:bg-white/5 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
                aria-label="Close chat window"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div
              className="flex-1 overflow-y-auto chat-scroll p-4 flex flex-col gap-4"
              role="log"
              aria-label="Chat messages"
              aria-live="polite"
              aria-atomic="false"
            >
              {/* Messages */}
              {messages.map((message) => {
                const isLatestBotMessage =
                  message.role === "bot" && message.id === latestBotMessage?.id;

                return (
                  <div key={message.id}>
                    {/* Bot/User bubble */}
                    <div
                      className={`flex flex-col gap-2 ${
                        message.role === "bot" ? "items-start" : "items-end"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className={`max-w-[85%] px-4 py-3 rounded-lg text-sm leading-relaxed ${
                          message.role === "bot"
                            ? "bg-[#2a2a2a] text-[#C9A84C] rounded-bl-none"
                            : "bg-[#C9A84C] text-[#1A1A1A] rounded-br-none font-medium"
                        }`}
                      >
                        {message.text}
                      </motion.div>
                      <span className="text-[#F5F0E8]/20 text-[10px]">
                        {message.timestamp.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {/* Quick Replies — only on latest bot message */}
                    {isLatestBotMessage && message.buttons && message.buttons.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap gap-2 mt-2"
                        role="group"
                        aria-label="Quick reply options"
                      >
                        {message.buttons.map((btn) => (
                          <QuickReplyButton
                            key={btn.action}
                            reply={btn}
                            onClick={handleQuickReply}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-start"
                >
                  <TypingIndicator />
                </motion.div>
              )}

              {/* Auto-scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="shrink-0 p-3 border-t border-[#C9A84C]/10 bg-[#232323]">
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2"
                aria-label="Send a message to Mr. Ali Bot"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  disabled={isTyping}
                  className="flex-1 bg-[#1A1A1A] border border-[#F5F0E8]/10 rounded-sm px-3 py-2 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 focus:outline-none focus:border-[#C9A84C]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Type your message here"
                  maxLength={500}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-[#C9A84C] text-[#1A1A1A] rounded-sm hover:bg-[#E2C47A] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-1 focus-visible:ring-offset-[#232323] shrink-0"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </form>
              <p className="text-[#F5F0E8]/20 text-[10px] text-center mt-2">
                Press Enter to send · Esc to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Open Button */}
      <motion.button
        ref={openButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#C9A84C] text-[#1A1A1A] shadow-xl shadow-[#C9A84C]/30 flex items-center justify-center hover:bg-[#E2C47A] active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
        aria-label={isOpen ? "Close chat with Mr. Ali Bot" : "Open chat with Mr. Ali Bot"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20, delay: 2 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification dot when closed */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-[72px] right-[14px] sm:right-[22px] z-50 w-3 h-3 rounded-full bg-green-400 border-2 border-[#1A1A1A] pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5 }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
