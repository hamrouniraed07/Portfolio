import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { chatbotReply, type Lang, T } from "@/lib/portfolio-data";

type Msg = { role: "user" | "bot"; text: string };

export function Chatbot({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = T[lang];

  useEffect(() => {
    setMsgs([{ role: "bot", text: t.chat_welcome as string }]);
  }, [lang, t.chat_welcome]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    const reply = chatbotReply(q, lang);
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: reply }]);
    setInput("");
  };

  const suggestions =
    lang === "fr"
      ? ["Projets ?", "Compétences ?", "Expérience ?", "Contact ?"]
      : lang === "ar"
        ? ["المشاريع؟", "المهارات؟", "الخبرة؟", "تواصل؟"]
        : ["Projects?", "Skills?", "Experience?", "Contact?"];

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 end-6 z-50 size-14 rounded-full grid place-items-center text-primary-foreground hover-glow"
        style={{ background: "var(--grad-primary)", boxShadow: "var(--shadow-glow)" }}
        aria-label="Open chatbot"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="m"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            className="fixed bottom-24 end-6 z-50 w-[min(92vw,380px)] h-[min(70vh,520px)] glass-strong rounded-2xl flex flex-col overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5), var(--shadow-glow)" }}
          >
            <div className="px-4 py-3 border-b flex items-center gap-3">
              <div
                className="size-9 rounded-full grid place-items-center"
                style={{ background: "var(--grad-primary)" }}
              >
                <Sparkles className="size-4 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-sm">{t.chat_title}</div>
                <div className="text-xs text-muted-foreground">● online</div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user" ? "text-primary-foreground" : "glass border"
                    }`}
                    style={m.role === "user" ? { background: "var(--grad-primary)" } : {}}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setInput(s);
                    setTimeout(send, 0);
                  }}
                  className="text-xs px-2.5 py-1 rounded-full glass border hover:border-primary/40 transition"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="p-3 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={t.chat_placeholder as string}
                className="flex-1 bg-transparent border rounded-full px-4 py-2 text-sm outline-none focus:border-primary/60"
              />
              <button
                onClick={send}
                className="size-9 grid place-items-center rounded-full text-primary-foreground"
                style={{ background: "var(--grad-primary)" }}
                aria-label={t.chat_send as string}
              >
                <Send className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
