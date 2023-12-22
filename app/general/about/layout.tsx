
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <h1>Hello Root Layout Root Name</h1>
      {children}
    </div>
  );
}