import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>About the Event</span>
                <h2>
                  What is <b>Looms 3.0</b>?
                </h2>
                <p>
                  Looms 3.0 is a three-day global conclave themed 'Empowering
                  Traditional Industries with AI & Digital Intervention',
                  bringing together entrepreneurs, policymakers, academicians,
                  and artisans to explore how technology can revitalize
                  traditional sectors.
                </p>
                <p>
                  With participants from across ASEAN, Africa, and Latin
                  America, it promises a powerful mix of insights, innovation,
                  and impact. This unique convergence will showcase how digital
                  transformation can breathe new life into age-old crafts and
                  industries.
                </p>

                <div className="signature">
                  <Image
                    src="/images/signature.png"
                    alt="signature"
                    width={142}
                    height={68}
                  />
                </div>

                <Link href="/about-us" className="btn btn-primary">
                  Learn More
                  <i className="icofont-double-right"></i>
                </Link>

                <Link href="#" className="btn btn-secondary">
                  Register Now
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/about1.jpg"
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
                />
                <Image
                  src="/images/about2.jpg"
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                />
                <Image
                  src="/images/shapes/5.png"
                  className="shape-img"
                  alt="about"
                  width={111}
                  height={111}
                />

                <Link href="/about-us" className="btn btn-primary">
                  Explore More About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
