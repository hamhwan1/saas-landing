import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">Y</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Yettey
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Manage and transform your media with AI. The complete operating system for modern content teams.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><button className="hover:text-primary transition-colors">Digital Asset Management</button></li>
              <li><button className="hover:text-primary transition-colors">AI Tools</button></li>
              <li><button className="hover:text-primary transition-colors">Video Transformation</button></li>
              <li><button className="hover:text-primary transition-colors">Collaboration</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><button className="hover:text-primary transition-colors">Marketing Teams</button></li>
              <li><button className="hover:text-primary transition-colors">Creators</button></li>
              <li><button className="hover:text-primary transition-colors">Agencies</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><button className="hover:text-primary transition-colors">Blog</button></li>
              <li><button className="hover:text-primary transition-colors">Guides</button></li>
              <li><button className="hover:text-primary transition-colors">Documentation</button></li>
              <li><button className="hover:text-primary transition-colors">Help Center</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Yettey. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
