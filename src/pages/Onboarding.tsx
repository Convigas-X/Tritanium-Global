import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Onboarding = () => {
  const [searchParams] = useSearchParams();
  const planName = searchParams.get('plan') || 'Starter';

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companySize: '',
    industry: '',
    budget: '',
    projectDescription: '',
    timeline: '',
    additionalInfo: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Onboarding form submitted:', { plan: planName, ...formData });
    // You can add API call here
    setShowSuccessPopup(true);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      companySize: '',
      industry: '',
      budget: '',
      projectDescription: '',
      timeline: '',
      additionalInfo: '',
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background with same theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
        {/* Dark Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(222 98% 49% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(222 98% 49% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Subtle Blue Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <img src={logo} alt="Tritanium Global" className="h-16 md:h-20 w-auto mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Get Started with <span className="gradient-text-blue">{planName}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Let's begin your journey with Tritanium Global. Fill out the form below and we'll get in touch.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-glow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Plan Display */}
              <div className="p-4 rounded-xl bg-primary-subtle border border-primary/20 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Selected Plan</p>
                <p className="text-xl font-bold text-primary">{planName}</p>
              </div>

              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">
                    First Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-background border-input focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">
                    Last Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-background border-input focus-visible:ring-primary"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-input focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-input focus-visible:ring-primary"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-foreground">
                    Company Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Your Company Inc."
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="bg-background border-input focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-foreground">
                    Company Size <span className="text-primary">*</span>
                  </Label>
                  <Select value={formData.companySize} onValueChange={(value) => handleSelectChange('companySize', value)}>
                    <SelectTrigger className="bg-background border-input focus:ring-primary">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="500+">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Industry and Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-foreground">
                    Industry <span className="text-primary">*</span>
                  </Label>
                  <Select value={formData.industry} onValueChange={(value) => handleSelectChange('industry', value)}>
                    <SelectTrigger className="bg-background border-input focus:ring-primary">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-foreground">
                    Budget Range
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                    <SelectTrigger className="bg-background border-input focus:ring-primary">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="projectDescription" className="text-foreground">
                  Project Description <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Tell us about your project, goals, and what you're looking to achieve..."
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-input focus-visible:ring-primary resize-none"
                />
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-foreground">
                  Expected Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                  <SelectTrigger className="bg-background border-input focus:ring-primary">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-3months">1-3 months</SelectItem>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6-12months">6-12 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-foreground">
                  Additional Information
                </Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  placeholder="Any additional details, questions, or requirements..."
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="bg-background border-input focus-visible:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full rounded-sm mt-8"
              >
                Submit Onboarding Form
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our{' '}
                <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                {' '}and{' '}
                <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      <Dialog open={showSuccessPopup} onOpenChange={(open) => !open && closePopup()}>
        <DialogContent className="sm:max-w-md border-primary/30">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-xl">Thank You!</DialogTitle>
                <DialogDescription>
                  Your onboarding form has been submitted successfully. Our team will contact you soon.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button onClick={closePopup} variant="hero" size="lg">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Onboarding;
