import React, { useEffect } from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/slonigiraf/header'
import { Container, Row, Col } from 'reactstrap'
import FooterSection from './layouts/sections/slonigiraf/footer'

const Policy = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#0069B4')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#F6A857')
    document.body.style.setProperty('--dark', '#F19135')
  })

  return (
    <div className="theme-color" >
      <Head>
        <title>Privacy policy</title>
        <meta name='Privacy policy' content='' />
      </Head>

      <Header className="agency" />


      <section className="agency header">
        <Container>
          <Row style={{ marginTop: "150px", marginBottom: "50px", textAlign: 'left' }}>

            <h3>Privacy Policy</h3>
            <p>Effective date: 2025.05.18</p>

            <p>At <strong>DAMRI DOO</strong>, we are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose your personal information in accordance with global data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable laws worldwide.</p>

            <h4>1. Information We Collect</h4>
            <p>We may collect and process the following data:</p>
            <ul>
              <li>Personal identification information (name, email address, phone number, etc.)</li>
              <li>Technical data (IP address, browser type, device information, etc.)</li>
              <li>Usage data (pages visited, time on site, etc.)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h4>2. How We Use Your Information</h4>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Communicate with you (e.g., for support or marketing purposes)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h4>3. Legal Basis for Processing</h4>
            <p>We process your personal data on one or more of the following legal bases:</p>
            <ul>
              <li>Your consent</li>
              <li>To perform a contract with you</li>
              <li>To comply with a legal obligation</li>
              <li>For our legitimate interests, provided your rights do not override them</li>
            </ul>

            <h4>4. Sharing Your Information</h4>
            <p>We do not sell your personal data. We may share data with:</p>
            <ul>
              <li>Service providers under strict confidentiality agreements</li>
              <li>Law enforcement or authorities if legally required</li>
              <li>Other parties with your consent</li>
            </ul>

            <h4>5. International Data Transfers</h4>
            <p>We may transfer your data to countries outside your own. In such cases, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.</p>

            <h4>6. Your Rights</h4>
            <p>You have the right to:</p>
            <ul>
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time</li>
              <li>Data portability</li>
              <li>File a complaint with a data protection authority</li>
            </ul>

            <h4>7. Data Retention</h4>
            <p>We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, or to comply with legal obligations.</p>

            <h4>8. Cookies</h4>
            <p>We use cookies and similar tracking technologies. You can manage your cookie preferences through your browser settings. For more information, see our Cookie Policy.</p>

            <h4>9. Children’s Privacy</h4>
            <p>Our services are not directed to children under the age of 13 (or the equivalent age in your jurisdiction). We do not knowingly collect personal data from children without parental consent.</p>

            <h4>10. Changes to This Policy</h4>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes and update the effective date at the top of this page.</p>

            <h4>11. Contact Us</h4>
            <p>If you have questions or concerns about this policy, please contact us at:</p>
            <p>Email: <a href="mailto:reshetovdenis@gmail.com" style={{ textTransform: "none" }}>reshetovdenis@gmail.com</a></p>


            <p>Address: 85331, Kotor, Montenegro, Kriva bb</p>

          </Row>
          <Row>&nbsp;</Row>
        </Container>
      </section>

      <FooterSection />

    </div>
  )
}

export default Policy
