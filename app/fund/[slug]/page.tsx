import { COMPANIES, getCompanyBySlug } from '@/lib/fund';
import { getEntriesForCompany } from '@/lib/coverage';
import FundMemoClient from './FundMemoClient';

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ slug: c.id }));
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);

  const others = company ? COMPANIES.filter((c) => c.id !== company.id).slice(0, 4) : [];
  const entries = company ? getEntriesForCompany(company.id) : [];

  return <FundMemoClient company={company} others={others} entries={entries} />;
}
