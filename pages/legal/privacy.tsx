import React from "react";
import Link from "next/link";

export default function Privacy() {
    
    return (
        <div className="relative overflow-hidden bg-white py-16">
          <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
            <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
              <svg
                className="absolute top-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
              </svg>
              <svg
                className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
              </svg>
              <svg
                className="absolute bottom-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <Link href="/">
                  <span className="block text-center text-lg font-semibold text-indigo-600">Protecting Your Privacy</span>
                  <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Maron Co Privacy Policy
                  </span>
                </Link>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-500">
              At Maron Co, we value your privacy and are committed to safeguarding your personal information. This privacy policy outlines how we collect, use, and protect your personal data while providing our intelligent job matching services through maron.ai.
              </p>
            </div>
            <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <h2>Information Collection and Use</h2>

              <p>
              Maron Co collects personal information necessary for providing our services, including your name, contact information, and professional background. We use this data to match you with suitable job opportunities, improve our services, and communicate with you. We do not share your data with third parties except for Google, Clerk, OpenAI, Cloudflare, AWS, and other infrastructure technologies necessary for the operation and improvement of our services.
              </p>
              <p>
              Sensitive data, such as financial information, is kept off the grid using PlanetScale technology to ensure the highest level of protection. We will not sell, rent, or share your personal information with any other third parties without your consent, unless required by law or in the good faith belief that such action is necessary to protect the rights, property, or personal safety of Maron Co, its users, or the public.
              </p>
              <h2>Security Measures</h2>
              <p>
              Maron Co employs industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include encryption, access control, and secure storage solutions. While we strive to ensure the highest level of protection, no data transmission over the internet or electronic storage can be guaranteed to be absolutely secure. Consequently, we cannot warrant the absolute security of the information you provide to us.
              </p>
              <h2>Updates and Changes to This Privacy Policy</h2>
              <p>
              Maron Co reserves the right to modify this privacy policy at any time. We will notify you of any significant changes by posting a notice on our website or by sending an email to your registered email address. Your continued use of our services after any changes to this privacy policy constitutes your acceptance of the updated terms.
              </p>
              <p>
              By using our services, you consent to the collection, use, and disclosure of your personal information in accordance with this privacy policy. If you have any questions or concerns about our privacy practices, please contact us at privacy@maron.ai
              </p>
            </div>
          </div>
        </div>
      )
    }