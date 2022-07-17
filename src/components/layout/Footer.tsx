export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        <p className='mt-6 mb-8 text-sm text-gray-600 dark:text-gray-300'>
          © Danny Hines {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}
