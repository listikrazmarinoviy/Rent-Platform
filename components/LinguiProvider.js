"use client";

import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { useEffect } from "react";

export default function LinguiProvider({ children, locale = "en" }) {
  useEffect(() => {
    // Load messages dynamically
    import(`@/messages/${locale}`).then((messages) => {
      i18n.load(locale, messages.messages);
      i18n.activate(locale);
    });
  }, [locale]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
