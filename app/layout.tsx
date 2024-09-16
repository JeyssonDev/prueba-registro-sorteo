import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Registro',
  description:
    'Formulario de registro para los clientes actuales de la marca en Bogotá.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
