"use client";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    console.log(data);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      alert("Your response has been received!");
    } else {
      alert("There was an error. Please try again in a while.");
    }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* ── Page header ──────────────────────────────────────── */}
      <section
        className="scanlines relative border-b border-zinc-800/60 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 border border-amber-500/25 rounded bg-amber-500/[0.07]">
            <span className="rec-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
            <span className="font-data text-amber-400/90 text-[10px] tracking-[0.28em] uppercase">
              Get in Touch
            </span>
          </div>
          <h1
            className="font-display text-white leading-none tracking-wide"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            CONTACT
            <br />
            <span className="text-amber-400">US.</span>
          </h1>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — info */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
            <div>
              <h2 className="font-display text-white text-3xl sm:text-4xl tracking-wider leading-none mb-4">
                WE&apos;D LOVE TO
                <br />
                <span className="text-amber-400">HEAR FROM YOU.</span>
              </h2>
              <p className="font-data text-zinc-400 text-sm leading-relaxed tracking-wide">
                Whether you have a question about features, pricing, need a
                demo, or anything else — our team is ready to help.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-amber-500/60 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-data text-[10px] tracking-[0.2em] uppercase text-amber-400/70 mb-0.5">Address</p>
                  <address className="font-data text-zinc-400 text-xs not-italic leading-relaxed">
                    282 Lake Brook Dr.<br />Houston, TX 77096
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-amber-500/60 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <div>
                  <p className="font-data text-[10px] tracking-[0.2em] uppercase text-amber-400/70 mb-0.5">Phone</p>
                  <a href="tel:7134444444" className="font-data text-zinc-400 text-xs hover:text-amber-400 transition-colors duration-150">
                    713-444-4444
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6 sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Jane Smith"
                    className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="jane@example.com"
                      className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                      Phone <span className="text-zinc-700">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="713-000-0000"
                      className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-data text-[11px] tracking-[0.2em] uppercase font-semibold py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-px mt-1"
                >
                  Send Inquiry
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M4.5 7.5H10.293L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5a.5.5 0 010-1z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
