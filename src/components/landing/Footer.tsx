const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container-main">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xl font-extrabold tracking-tight">Go City</span>
        <div className="flex flex-wrap gap-6 text-sm opacity-80">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Use</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Accessibility</a>
        </div>
        <div className="flex gap-4 text-sm opacity-80">
          <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Facebook</a>
        </div>
      </div>
      <div className="text-center text-xs opacity-50 mt-8">
        © 2026 Go City. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
