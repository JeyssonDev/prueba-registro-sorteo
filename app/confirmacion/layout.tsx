import { ReactNode, Suspense } from 'react';

export const metadata = {
  title: '¡Registro completado!',
};

export default function ConfirmacionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
