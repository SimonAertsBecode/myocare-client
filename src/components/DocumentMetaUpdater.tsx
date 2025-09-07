import { useLanguage } from '../i18n/useLanguage';
import { useDocumentMeta } from '../i18n/useDocumentMeta';

export const DocumentMetaUpdater = () => {
  const { language, t } = useLanguage();
  
  useDocumentMeta(language, t);
  
  return null; // This component doesn't render anything
};