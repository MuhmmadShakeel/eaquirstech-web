import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-[6rem] font-light leading-none text-amber">404</p>
      <h1 className="mt-6 text-[2rem] font-semibold text-ink">Page not found</h1>
      <p className="mt-4 max-w-sm text-body-sm text-body">
        The page you are looking for does not exist or may have moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/" arrow>Back to home</Button>
        <Button href="/contact" variant="outline">Contact us</Button>
      </div>
    </div>
  );
}
