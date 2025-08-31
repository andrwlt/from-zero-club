import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              From Zero Club (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our service.
            </p>
            <p className="text-muted-foreground mb-4">
              By using From Zero Club, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              When you register for an account, we may collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Name and username</li>
              <li>Email address</li>
              <li>Profile picture</li>
              <li>Social media handles (Twitter, GitHub)</li>
              <li>Bio and professional information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">Connected Account Data</h3>
            <p className="text-muted-foreground mb-4">
              When you connect third-party accounts, we may collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Twitter metrics (followers, posts, engagement)</li>
              <li>GitHub activity (commits, repositories, contributions)</li>
              <li>Other platform metrics you choose to share</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">Usage Data</h3>
            <p className="text-muted-foreground mb-4">
              We automatically collect certain information when you use our Service:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Click patterns and feature usage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>To provide and maintain our Service</li>
              <li>To create and manage your account</li>
              <li>To display your public metrics dashboard</li>
              <li>To calculate and track your building streaks</li>
              <li>To send notifications about your account</li>
              <li>To provide customer support</li>
              <li>To analyze usage and improve our Service</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">Public Information</h3>
            <p className="text-muted-foreground mb-4">
              Your profile and metrics dashboard are public by design. This includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Username and profile information</li>
              <li>Connected social accounts</li>
              <li>Metrics and milestones</li>
              <li>Building streaks and achievements</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">Third-Party Service Providers</h3>
            <p className="text-muted-foreground mb-4">
              We may share your information with third-party service providers who help us operate our Service:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Cloud hosting providers</li>
              <li>Analytics services</li>
              <li>Payment processors</li>
              <li>Email service providers</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">Legal Requirements</h3>
            <p className="text-muted-foreground mb-4">
              We may disclose your information if required by law or in response to valid requests by public authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
            <p className="text-muted-foreground mb-4">
              Security measures include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits</li>
              <li>Limited access to personal information</li>
              <li>Secure authentication mechanisms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information.
            </p>
            <p className="text-muted-foreground mb-4">
              Types of cookies we use:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li><strong>Essential Cookies:</strong> Required for the Service to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Service</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Data Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your data</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise these rights, please contact us at privacy@fromzero.club.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground mb-4">
              Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. 
              We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children 
              under 13. If you become aware that a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground mb-4">
              Your information may be transferred to and maintained on servers located outside of your jurisdiction. By using our Service, 
              you consent to such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your personal information for as long as necessary to provide our Service and comply with legal obligations. 
              When you delete your account, we will delete or anonymize your personal information, except where required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. California Privacy Rights</h2>
            <p className="text-muted-foreground mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              We do not sell personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on 
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-muted-foreground">
              Email: privacy@fromzero.club<br />
              Address: From Zero Club, Inc.<br />
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}