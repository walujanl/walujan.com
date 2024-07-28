import { FadeTransition } from '@/components/Animations/FadeTransition';
import Head from 'next/head';
import Link from 'next/link';

export default function notFound() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <FadeTransition>
        <section className="py-24 list">
          <div className="container">
            <div className="w-full px-4">
              <div className="mb-16 list-header">
                <h1 className="text-center">404 Not Found</h1>
                <p className="text-center">The page you&#39;re visiting was not found</p>
                <div className="flex justify-center">
                  <Link className="content-button" href="/">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
