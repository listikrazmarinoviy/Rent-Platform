import { i18n } from "@lingui/core";
import { messages as enMessages } from "../messages/en";

// Initialize lingui
i18n.load("en", enMessages);
i18n.activate("en");

export { i18n };
