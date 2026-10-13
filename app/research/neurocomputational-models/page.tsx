import { permanentRedirect } from 'next/navigation';

export default function LegacyResearchPage() {
  permanentRedirect('/research');
}
