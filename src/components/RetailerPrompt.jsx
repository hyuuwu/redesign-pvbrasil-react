import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const COOKIE_NAME = "pvbrasil_retailer_prompt";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function getCookie(name) {
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];
}

function saveChoice(choice) {
  document.cookie = `${COOKIE_NAME}=${choice}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
}

export default function RetailerPrompt() {
  const navigate = useNavigate();
  const yesButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(() => !getCookie(COOKIE_NAME));

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    yesButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleChoice = (choice) => {
    saveChoice(choice);
    setIsOpen(false);

    if (choice === "yes") {
      navigate("/atacado");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-navy/80 px-5 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="retailer-prompt-title"
        aria-describedby="retailer-prompt-description"
        className="relative w-full max-w-md overflow-hidden rounded-xl border border-electric-cyan/30 bg-surface-dark p-7 text-center shadow-[0_12px_60px_rgba(0,0,0,0.65)] animate-prompt-in md:p-9"
      >
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-2/3 rounded-full bg-electric-cyan/20 blur-[55px]" />

        <div className="relative z-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-electric-cyan/30 bg-electric-cyan/10 text-electric-cyan">
            <span className="material-symbols-outlined" aria-hidden="true">storefront</span>
          </div>
          <h2 id="retailer-prompt-title" className="mt-5 font-headline-lg text-headline-lg text-on-surface">
            Você é lojista?
          </h2>
          <p id="retailer-prompt-description" className="mt-3 font-body-md text-body-md text-on-surface-variant">
            Temos preços especiais para atacado! {/* devo mudar? provavelmente dad mim ajudar*/}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              ref={yesButtonRef}
              type="button"
              onClick={() => handleChoice("yes")}
              className="rounded-DEFAULT bg-electric-cyan px-5 py-3 font-button text-button uppercase text-deep-navy transition-all hover:shadow-[0_4px_20px_rgba(0,216,255,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-cyan"
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => handleChoice("no")}
              className="rounded-DEFAULT border border-electric-cyan px-5 py-3 font-button text-button uppercase text-electric-cyan transition-colors hover:bg-electric-cyan/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-cyan"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
