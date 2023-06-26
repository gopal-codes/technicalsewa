import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import Copyright from "../../components/Copyright";
import Footerinfo from "../../components/Footerinfo";
import Topbar from "../../components/Topbar";
import Footer from "../../components/mblviewComponents/Footer";
import Head from "next/head";
import { NextSeo } from "next-seo";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <NextSeo
        title="Terms of use | Technical Sewa"
        description="Terms of use page of Technical Sewa"
      />
      <Topbar />
      <div className="bg-[#2591b2ca]  md:h-[389px] xsm:h-[200px] text-white text-5xl flex items-center">
        <h2 className="xsm:w- md:w-[800px] m-auto text-center font-extrabold xsm:text-2xl  lg:text-4xl">
          Terms of Use
        </h2>
      </div>
      <div className=" w-full px-10 lg:px-0 m-auto text-justify content text-lg  my-10 max-w-[70rem]">
        <strong>Introduction</strong>
        <br />
        <br />
        Welcome to technicalsewa.com. These Terms of Use govern your use of our
        website, including any content, features, and services offered on or
        through the website.
        <br />
        <br />
        <strong>Acceptance of Terms</strong>
        <br />
        <br />
        By using technicalsewa.com, you agree to be bound by these Terms of Use
        and our Privacy Policy. If you do not agree to these Terms of Use or our
        Privacy Policy, you should not use our website.
        <br />
        <br />
        <strong>Changes to Terms</strong>
        <br />
        <br />
        We reserve the right to modify these Terms of Use at any time without
        prior notice. Your continued use of technicalsewa.com after we make
        changes to these Terms of Use constitutes your acceptance of the
        changes.
        <br />
        <br />
        <strong>Intellectual Property</strong>
        <br />
        <br />
        All content on technicalsewa.com, including text, graphics, logos,
        images, and software, is our property or the property of our licensors,
        and is protected by United States and international copyright laws. You
        may not use any of our content without our express written consent.
        <br />
        <br />
        <strong>User Conduct</strong>
        <br />
        <br />
        You agree to use technicalsewa.com only for lawful purposes and in a way
        that does not infringe on the rights of others or restrict or inhibit
        anyone else's use of the website. You may not use technicalsewa.com in
        any way that could damage, disable, overburden, or impair our servers or
        networks.
        <br />
        <br />
        <strong>Disclaimer of Warranties</strong>
        <br />
        <br />
        technicalsewa.com is provided on an "as is" and "as available" basis,
        without any warranties of any kind, either express or implied. We do not
        warrant that technicalsewa.com will be error-free, uninterrupted, or
        free from viruses or other harmful components.
        <br />
        <br />
        <strong>Limitation of Liability</strong>
        <br />
        <br />
        We will not be liable to you or any third party for any damages,
        including indirect, incidental, special, or consequential damages,
        arising from your use of technicalsewa.com or your inability to use
        technicalsewa.com.
        <br />
        <br />
        <strong>Indentification</strong>
        <br />
        <br />
        You agree to indemnify and hold us harmless from any claims, losses,
        damages, or expenses (including attorney's fees) arising from your use
        of technicalsewa.com, your violation of these Terms of Use, or your
        violation of any third-party rights.
        <br />
        <br />
        <strong>Governing Law</strong>
        <br />
        <br />
        These Terms of Use will be governed by and construed in accordance with
        the laws of the Nepal, without regard to its conflicts of law
        provisions.
        <br />
        <br />
        <strong>Dispute Resolution</strong>
        <br />
        <br />
        Any disputes arising from your use of technicalsewa.com will be resolved
        through binding arbitration in accordance with the rules of the Nepal
        Arbitration Association. The arbitration will take place in Kathmandu,
        Nepal.
        <br />
        <br />
        <strong>Entire Agreement</strong>
        <br />
        <br />
        These Terms of Use, along with our Privacy Policy, constitute the entire
        agreement between you and us regarding your use of technicalsewa.com. If
        any provision of these Terms of Use is found to be invalid or
        unenforceable, the remaining provisions will remain in full force and
        effect.
        <br />
        <br />
        <strong>Contact Us</strong>
        <br />
        <br />
        If you have any questions about these Terms of Use, please contact us at
        <strong className="underline mx-2"> 977-1-590066 </strong>
        or
        <strong className="underline mx-2"> 9851201580 </strong>.
        <br />
        <br />
      </div>
      {/* Bottom navbar */}
      <BottomNavbar />
      {/* footerSection */}
      {/* <FooterSection /> */}
      {/* copyright */}
      <Footerinfo />
      <Copyright />
      <Footer />
    </div>
  );
};

export default TermsOfUse;
