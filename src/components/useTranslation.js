'use client'

import { useContext } from 'react';
import { TranslationContext } from './TranslationProvider';

export default function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context.translations;
}
