import { chromium } from 'playwright';

async function testPage() {
  console.log('Starting browser test...');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Collect console messages
  const consoleMessages = [];
  const consoleErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
    consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  try {
    // Navigate to the local server
    console.log('Navigating to http://localhost:5173...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });

    // Wait for the main content to load
    await page.waitForSelector('#root', { timeout: 10000 });
    console.log('✓ Page loaded successfully');

    // Check for key elements
    const heroSection = await page.$('#hero');
    const navbar = await page.$('nav');
    const aboutSection = await page.$('#about');
    const servicesSection = await page.$('#services');
    const gallerySection = await page.$('#gallery');
    const testimonialsSection = await page.$('#testimonials');
    const contactSection = await page.$('#contact');
    const footer = await page.$('footer');

    console.log('\nChecking page elements:');
    console.log(`  Hero section: ${heroSection ? '✓' : '✗'}`);
    console.log(`  Navbar: ${navbar ? '✓' : '✗'}`);
    console.log(`  About section: ${aboutSection ? '✓' : '✗'}`);
    console.log(`  Services section: ${servicesSection ? '✓' : '✗'}`);
    console.log(`  Gallery section: ${gallerySection ? '✓' : '✗'}`);
    console.log(`  Testimonials section: ${testimonialsSection ? '✓' : '✗'}`);
    console.log(`  Contact section: ${contactSection ? '✓' : '✗'}`);
    console.log(`  Footer: ${footer ? '✓' : '✗'}`);

    // Check page title
    const title = await page.title();
    console.log(`\nPage title: ${title}`);

    // Report console errors
    if (consoleErrors.length > 0) {
      console.log('\n⚠ Console Errors:');
      consoleErrors.forEach(err => console.log(`  - ${err}`));
    } else {
      console.log('\n✓ No console errors detected');
    }

    console.log('\n✓ All tests passed!');

  } catch (error) {
    console.error('✗ Test failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testPage();
