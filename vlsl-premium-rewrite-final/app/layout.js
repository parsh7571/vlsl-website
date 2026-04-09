
export const metadata = {
  title: "Vipul Life Science & Lido Chem",
  description: "Integrated chemical solutions: development, manufacturing, and supply"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:'Arial, sans-serif',background:'#f7f5ef'}}>
        {children}
      </body>
    </html>
  );
}
