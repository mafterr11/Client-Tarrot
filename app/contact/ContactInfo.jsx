import React from "react";

const ContactInfo = () => {
  return (
    <section className="py-40">
      <div className="container">
      <form action="https://formsubmit.co/your-email@example.com" method="POST" className="max-w-[400px]">
            <div class="mb-4">
                <label for="nume" class="block font-semibold mb-2">Nume</label>
                <input type="text" id="nume" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-accent/15 focus:outline-none focus:border-blue-500" required/>
            </div>
            <div class="mb-4">
                <label for="email" class="block font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-accent/15 focus:outline-none focus:border-blue-500" required/>
            </div>
            <div class="mb-4">
                <label for="phone" class="block font-semibold mb-2">Număr de telefon</label>
                <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-accent/15 focus:outline-none focus:border-blue-500" required/>
            </div>
            <div class="mb-4">
                <label for="mesaj" class="block font-semibold mb-2">Mesaj</label>
                <textarea id="mesaj" name="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-accent/15 focus:outline-none focus:border-blue-500" required></textarea>
            </div>
            <div>
                <button type="submit" class="w-full bg-accent text-white font-semibold px-4 py-2 rounded-lg hover:bg-accent-light transition-all ease-in-out duration-500">Trimite</button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default ContactInfo;
