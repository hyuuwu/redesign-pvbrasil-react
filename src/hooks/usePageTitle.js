import { useEffect } from "react";

const SITE_NAME = "PV Brasil Importação";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Distribuidora e Atacadista de Eletrônicos`;
  }, [title]);
}
