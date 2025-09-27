// About.jsx
import React from "react";
import {
  FaCheckCircle,
  FaUserTie,
  FaGlobe,
  FaUsers,
  FaPenNib,
} from "react-icons/fa";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Slider from "react-slick";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      {/* Hero Section */}
      <section className="relative mt-8 bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              About Pro Career
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              We help professionals tell their stories in ways that make hiring
              managers take notice. This isn’t one-size-fits-all—it’s
              strategy-driven support that meets you where you are and takes you
              where you want to go.
            </p>
            <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-xl shadow-lg text-lg font-medium transition">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Career success"
              className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section (Alternating Layout) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Interview"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At Pro Career, the mission is simple: equip job seekers with tools
              that get results. We specialize in delivering personalized resume
              writing services that go far beyond formatting.
            </p>
            <p className="text-lg">
              Whether you’re entering the workforce, pivoting into a new
              industry, or aiming for a C-suite role, our team is committed to
              delivering high-quality, tailored documents that elevate your
              professional brand.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Job Seekers Choose Pro Career
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <FaUserTie className="text-indigo-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Personalized Service
              </h3>
              <p>
                Every client receives individualized attention and custom
                documents that reflect their unique strengths.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <FaPenNib className="text-indigo-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Certified Expertise
              </h3>
              <p>
                Resumes crafted by certified writers who stay current with
                recruiter preferences & ATS standards.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <FaGlobe className="text-indigo-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Transparent Process
              </h3>
              <p>
                Clear timelines, feedback opportunities, and a collaborative
                approach that keeps you in the loop.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <FaCheckCircle className="text-indigo-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
              <p>
                Our clients have been hired by Amazon, Google, TikTok, Meta, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services (Alternating Layout) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Who We Help & What We Offer
            </h2>
            <ul className="space-y-2 text-lg mb-6">
              <li>• Professional Resume Writing</li>
              <li>• Cover Letter Writing</li>
              <li>• LinkedIn Profile Development</li>
              <li>• Career Transition Resumes</li>
              <li>• Federal Applications</li>
              <li>• Job Search Support</li>
            </ul>
            <ul className="space-y-2 text-lg">
              <li>• Students & Entry-Level Professionals</li>
              <li>• Mid-Career Professionals</li>
              <li>• Managers & Directors</li>
              <li>• Executives & C-Suite</li>
              <li>• Transitioning Veterans</li>
            </ul>
          </div>
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Resume writing"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}

      <section className=" py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Where Our Clients Have Worked
          </h2>
          <Slider
            autoplay
            autoplaySpeed={2000}
            infinite
            slidesToShow={4}
            slidesToScroll={1}
            arrows={false}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 640, settings: { slidesToShow: 2 } },
            ]}
          >
            {[
              {
                name: "Amazon",
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              },
              {
                name: "Google",
                src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "Meta",
                src: "data:image/webp;base64,UklGRg4HAABXRUJQVlA4IAIHAACwKACdASruALQAPp1OoU0lpCMiI5M4kLATiWdu4XEp3H88+xj3Nqk/g+R3LRsw9QH9A9n22z8wHlIepb0AP6r/mesA9B3y4/ZZ8l3MAO3Pn/hI5637fhTlZ8CuOLvwzEOcN6a9g79ePS19fnoXfr0Jgh3Yt7yHS5t4brFveQ6XNvDdYt7yHS5t4brFvdTn9sEzQJkThmZZTadXLc9RLIG+zEAwqeHKenXp6SBT8PtOqLp8UYcjcksgaxqJYq4JotOGQ/tNINrvf3OJVyNaS8N0LuFMKJsY19QnWIU0ro8/VSgsX0fObw/V0OHFOIkaell1EA+z3HYeitKh3PORUCiyY1Gwt2DsyJLFQhtJswFNAn/jwKi0h0fINFKLkGdGv3+utYbJG3iBRthynbPpBhSExVCaTvIdLm3husW95Dpc28N1i3vIdLm3husW95CIAP7+voAAABVIo3yCSYDxgpp733xa6zawL6Zad0rY5t/xBg0dgSPyfxcV+ILE2pOg1k6QApwinJVe0LYCbgtpA3Q0gLxWn4OF4fOffn4RZ/u5F+brkW4Iy9m9A5oHElmUnYzcNHkBYDH376K7eqI6MM6aJJgQ63cad1Te47LKfWUrmNNElEUPCLszg//99O/frEB7+caFUoY8/+MQs39+09HDkfIlQmeChx7gszKF+cSkjweexPgBB/l4WOMnIgGr80+n602b6Vy6kX8w1pprJ8LHixO+SxqYNMKQ4u6U/aRyg8TNL1/S1OHpjOjt4u5ttdW6eTsbrcq5flgOcMBaOcd35ygyIH4o0AYmTelhygsgmxLO9bNhclZDQe495cvBB1RfKKK6v7JW+lt/hO/WUn+V/HrJjaBF4LCYzcXa7944/JKnFiTwdgKStAOuhvatmGKj9O6OKGU7MseDLBfAuACLy5rsmrZJV3fFWXNOSgHrAww89R1IJlvuLq2FWVkc2/lTo3t7up9PFxMZ/zBJaqov2LsWdau+oPK2DhK1uwD3NzEsHVLSnB6v3nQ290D5q/RwsFmKRtfbg7zwi3FvsYOpQcf9vUspDqn+7B942yznKvN7qtNC20ebsWkB1oMhadDTtdx4QloGvLHym97glsdItO+HmjOEbJOPPzg0TdbquWwCxt2x39EyLcKoXSIatmXZPYckTfNT7+d4qZGmjLb16b31p0323hd8qE2YFinAMy3SzmrAZ9ZYc+fXr1z4ZHRwdJBjSUh4411R6K6sXycuHuch7GM/XZYaK3ocP6TN8WcL9B8mKFgogW/j6Qe2jStLUAESJd7/vziSrjfGrqSb5N2+p0MkFN4LOLarHT6Tx+dL1Ug8a+S/sSJhg8fv1+dgBYPBv3/9cs9fc7mnKzOrTFcNl3dck60xzmN4g5en9VebRNnOy6QzPu++0BfzE65OhG5jsFhuWkC3snA7Ity2NUN+DWehqCoRiJ9t7phoPolmkB1p/C1m8IXC95/Qz/3Pi+bzlZ+3qEg7oy9vHvPuEbSwsjTfwDWOPn24c5v3WJPseGp0knCpubcgt9xEBB7yG3hDUaXDyY4dxWHdYV/vVJzqJZMEwLP5sxQQ1+VWzGsQ5013TBW05OZ0OzWYZCm5OoNAVT/WaoLCNfax/th2JZH3Om/ggQIQvP/1QP/lMT/xiFtW6J/oAd0PVV+pj8KScxJxuxfQdrM2bb9YcjBSKqsEeXCe2GXLHg4l6GnS7Ry90KtcFTsR2LwyJPM7MHvgvekcVfWXgS0zMrSTU+Jf8IT3LLHqkyGbod4Dx/D9ObfiBHkwULY4i08X3+IMtfSrTktFJH6gOLVLdGZzHuuWJ3z+1m9Vgz+uSa3D8bR82KVj8N8JUf9H5YeSNLb6MuuZjdrgmZMdDDLRD/CpgGhkyErlivpbhKtRUDqz5OJglbmJf6+Wr6fHy4XV6SiRMjZW5OiL4g/GOZV/HIuAZTAN/JoWSDXrN67zqDj2yh845K+muBhe2uHj+PUjhAGI+Tavp20vVT/jwvxxEaoYce5Sipi7ehDeWfnK6oDf9BDQfG+J2vPKZ2f7TIgZbl62hK+Mm+ejI4bdLx3j/Hd0hWZXD2aUXUrlIFNnL3UAnunIrpn36jfPfr4W+7j+12YKxK2qi3ZeeW6zEQFnKG+wLD7vASFTuFbpfMk4Ax+Ui3hY48ixzKlWpl9EGdHXws5Dn+lqO5slrAIecXsONyvuqzyy+SWrgRDlqI1HCnq6x3zC6TU9nAYV+Tov5iHoUScHsh4B5JguBVsQObVTTzBK4+H7mU7N/ESq1RoPTpIM95ntO3/bV9G8+yzuuUJSl/4QsmdCEcV1QT+ys3UySj+hd8jHwGU510+o8m22rmUm4xKuUGMn2ozzyySjBXpf5lr/hOZS+KWaNoftiogsodrAAAAAAAA=",
              },
              {
                name: "Nike",
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
              },
              {
                name: "Goldman Sachs",
                src: "https://th.bing.com/th/id/OIP.SKZbp88JxmwJOX_UMiPJiAHaEK?w=200&h=150&c=6&o=7&pid=1.7&rm=3",
              },
              {
                name: "Wells Fargo",
                src: "https://th.bing.com/th?q=Wells+Fargo+Logo+Clip+Art&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247",
              },
            ].map((logo, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 object-contain  transition"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://i.pinimg.com/1200x/94/c7/20/94c720a1069394fecf5773084934898b.jpg"
              alt="Founder"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About The Team</h2>
            <p className="text-lg mb-4">
              Angela J. Sipes, -Founder. Angela is a Certified Resume Writer and
              Veteran Career Strategist who founded Pro Career to help job
              seekers tell their stories and land opportunities.
            </p>
            <p className="text-lg">
              She has completed 4,000+ resumes for clients worldwide,
              maintaining a 100% Job Success Score and a Top Rated badge on
              Upwork.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-slate-400 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Constantly Applying But Not Getting Interviews?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let’s fix that. We write resumes that get noticed and help you land
            more interviews, faster.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-xl shadow-lg text-lg font-medium">
            Choose My Package
          </button>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default About;
