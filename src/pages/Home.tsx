import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Phone, ArrowRight, Award, Maximize2 } from 'lucide-react';

const Home = () => {
  // Separate intersection hooks for distinct stagger sequences
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [spaceRef, spaceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [awardRef, awardInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="overflow-hidden bg-[#FAF6F0] text-[#232323] relative">
      
      {/* PERSISTENT OMNICHANNEL UTILITIES */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <a 
          href="https://wa.me/9370253809" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
          title="WhatsApp Laxmi Nagar Branch"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a 
          href="tel:9370253809" 
          className="bg-[#853A2B] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
          title="Call Laxmi Nagar Branch"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a 
          href="https://wa.me/9623099723" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
          title="WhatsApp Dhantoli Branch"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a 
          href="tel:9623099723" 
          className="bg-[#853A2B] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
          title="Call Dhantoli Branch"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#1A110F]/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center text-[#FAF6F0] px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-[0.3em] inline-block mb-4 font-medium text-[#FAF6F0]/80">
              India&apos;s Premier Urban Wellness Sanctuary
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-normal tracking-wide mb-6 leading-tight">
              Sunway Wellness
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide italic max-w-xl mx-auto mb-10 text-[#FAF6F0]/90">
              A touch-led holistic sanctuary built to harmonise, heal, and reconnect with yourself.
            </p>
            <a className="bg-[#853A2B] hover:bg-[#6E2E22] text-[#FAF6F0] text-sm uppercase tracking-widest px-10 py-4 font-medium transition-all duration-300 hover:tracking-[0.3em] rounded-none shadow-lg" href="/contact">
              Book An Appointment
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 hidden md:flex justify-center text-xs tracking-[0.2em] text-[#FAF6F0]/70 uppercase">
          Mon to Sun • 10 AM - 9 PM
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section ref={introRef} className="py-32 px-6 md:px-12 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] text-[#853A2B] font-semibold">
                  Pioneering In-City Balance
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-normal text-[#232323] leading-[1.15]">
                  Welcome to Luxury Urban Tranquility
                </h2>
              </div>
              <p className="text-[#4A4A4A] font-light leading-relaxed text-lg max-w-2xl">
                Unlike fleeting getaway retreats, Sunway Wellness integrates deep restoration into the rhythm of your daily life. Nestled away from city chaos, our space offers a touch-led, intuitive framework addressing structural root causes rather than superficial symptoms.
              </p>
              <div className="pt-4">
                <a href="/services" className="inline-flex items-center space-x-3 text-[#853A2B] font-medium tracking-wider uppercase text-sm border-b border-[#853A2B]/30 pb-2 hover:border-[#853A2B] transition-colors group">
                  <span>Explore Our Menu of Services</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              <div className="overflow-hidden bg-[#FAF6F0] p-3 shadow-sm border border-[#EAE3D8]">
                <img
                  src="/images/img_7262.jpeg"
                  alt="Luxury holistic spa treatment"
                  className="w-full h-[500px] object-cover grayscale-[15%] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#853A2B] text-[#FAF6F0] p-6 min-w-[180px] shadow-2xl">
                <p className="font-serif text-3xl font-light mb-1">15+</p>
                <p className="text-[10px] uppercase tracking-[0.15em] opacity-80 leading-tight">
                  Years of Continuous Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE MENU & MASSAGES SECTION (New) */}
      <section id="services" ref={servicesRef} className="py-32 px-6 md:px-12 bg-[#F5EFE6] border-t border-b border-[#EAE3D8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#853A2B] font-semibold">Therapeutic Healing</span>
            <h2 className="text-4xl md:text-5xl font-serif font-normal">Our Signature Modalities</h2>
            <p className="text-[#686868] font-light italic">Every treatment is uniquely tailored following an intuitive physiological consultation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Holistic Body Therapies",
                alt: "Luxury holistic spa treatment",
                desc: "Deeply restorative full-body massages incorporating rhythmic touch, targeted trigger release, and specialized essential botanical oils.",
                img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Deep Tissue & Recovery",
                alt: "Deep tissue and recovery",
                desc: "An intense manipulation framework built to untangle severe muscular tension, decrease standard inflammation, and boost localized performance.",
                img: "/images/img_9534.jpeg"
              },
              {
                title: "Ayurvedic Hot Stone",
                alt: "Luxury hot stone therapy",
                desc: "Smooth, basalt stones heated explicitly to balance internal energy flows, detoxify structural systems, and induce severe physical calm.",
                img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group flex flex-col justify-between bg-[#FAF6F0] border border-[#EAE3D8] p-4 shadow-sm"
              >
                <div>
                  <div className="overflow-hidden mb-6 relative">
                    <img 
                      src={service.img} 
                      alt={service.alt || service.title} 
                      className="w-full h-64 object-cover filter grayscale-[20%] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-normal mb-3 text-[#232323]">{service.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-[#5A5A5A] mb-8">{service.desc}</p>
                </div>
                <button className="w-full py-3 text-center border border-[#853A2B]/20 text-[#853A2B] font-medium tracking-wider uppercase text-xs group-hover:bg-[#853A2B] group-hover:text-[#FAF6F0] transition-all duration-300">
                  Explore Modality
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE SPACE / SANCTUARY GALLERY SECTION (New) */}
      {/* <section ref={spaceRef} className="py-32 px-6 md:px-12 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#853A2B] font-semibold">Architectural Peace</span>
              <h2 className="text-4xl md:text-6xl font-serif font-normal">The Sanctuary Environment</h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-[#5A5A5A] font-light max-w-lg lg:ml-auto">
                Spanning over a pristine, private sanctuary space, our center is architectural therapy. Organic design paths, sensory ambient sound loops, and dedicated meditative chambers invite complete, uncompromised decompression.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={spaceInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="lg:col-span-7 bg-[#FAF6F0] p-3 border border-[#EAE3D8] group relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Wellness Center Therapy Suites" 
                className="w-full h-[480px] object-cover grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <Maximize2 className="text-white h-8 w-8" />
              </div>
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={spaceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-[#FAF6F0] p-3 border border-[#EAE3D8]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sound Healing Decompression Chamber" 
                  className="w-full h-[224px] object-cover grayscale-[10%]"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={spaceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-[#FAF6F0] p-3 border border-[#EAE3D8]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600334089851-9efddf5ecb06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Hydrotherapy Lounge Suite" 
                  className="w-full h-[224px] object-cover grayscale-[10%]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 5. HERITAGE & ACCOLADES SECTION (New) */}
      <section ref={awardRef} className="py-24 px-6 bg-[#853A2B] text-[#FAF6F0]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={awardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-[#FAF6F0]/10 border border-[#FAF6F0]/20 hidden sm:block">
                <Award className="h-12 w-12 text-[#FAF6F0]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#FAF6F0]/70 font-medium">Industry Benchmarks</span>
                <h3 className="text-3xl font-serif font-normal mt-1 max-w-md leading-snug">
                  Recognized as the Best Wellness Studio of the Year
                </h3>
              </div>
            </div>

            {/* Premium Split Dynamic Frame for the Award Photo */}
            <div className="w-full md:w-auto flex-shrink-0">
              <div className="bg-[#FAF6F0] p-2 max-w-[280px] mx-auto shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/award.png" 
                  alt="Best wellness studio"
                  className="w-full h-60 object-cover filter contrast-[1.05]"
                />
                <div className="pt-2 pb-1 text-center text-[#232323]">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Best Wellness Studio</p>
                  <p className="text-[9px] font-light opacity-80">Of the Year</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;