import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-muted/20 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h2 className="heading-xl text-foreground">Page Not Found</h2>
          <p className="text-body text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-small font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-small font-medium"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-small text-muted-foreground mb-4">
            Need help? Here are some suggestions:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-caption">
            <a href="/" className="text-primary hover:underline">Home</a>
            <a href="/about" className="text-primary hover:underline">About</a>
            <a href="/contact" className="text-primary hover:underline">Contact</a>
            <a href="/help" className="text-primary hover:underline">Help Center</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;