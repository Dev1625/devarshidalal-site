import FundClient from './FundClient';

export default async function FundPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string; filter?: string }>;
}) {
  const { view, filter } = await searchParams;
  return <FundClient view={view} filter={filter} />;
}
