"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, CheckCircle, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Start",
          id: "hero",
        },
        {
          name: "Über uns",
          id: "about",
        },
        {
          name: "Speisekarte",
          id: "product",
        },
        {
          name: "Qualität",
          id: "features",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="Döner Point Kassel"
      button={{
        text: "Jetzt bestellen",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "sparkles-gradient",
      }}
      title="Der beste Döner in Kassel – frisch, hochwertig, unvergleichlich"
      description="Erleben Sie die nächste Generation des Genusses. Handverlesene Zutaten, knuspriges Brot und das Geheimnis unserer Rezeptur für Ihr Premium-Erlebnis."
      buttons={[
        {
          text: "Jetzt bestellen",
          href: "#contact",
        },
        {
          text: "Speisekarte",
          href: "#product",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/toast-sandwich-with-full-ham-vegetables_114579-2458.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Qualität, die man schmeckt"
      metrics={[
        {
          label: "Frische Zutaten",
          value: "Täglich",
          icon: CheckCircle,
        },
        {
          label: "Sauberkeit",
          value: "100%",
          icon: Shield,
        },
        {
          label: "Zufriedenheit",
          value: "99%",
          icon: Award,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Döner Point Signature",
          price: "8,90 €",
          imageSrc: "http://img.b2bpic.net/free-photo/view-tasty-shawarma-dish_23-2151805444.jpg",
        },
        {
          id: "2",
          name: "Lahmacun Deluxe",
          price: "6,50 €",
          imageSrc: "http://img.b2bpic.net/free-photo/turkish-pizza-lahmajun-with-cheese-served-with-parsley-lemon_140725-5962.jpg",
        },
        {
          id: "3",
          name: "Dönerteller Gourmet",
          price: "12,50 €",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-legs-with-herbs-wooden-board-blue_114579-16380.jpg",
        },
        {
          id: "4",
          name: "Türkische Pizza",
          price: "7,50 €",
          imageSrc: "http://img.b2bpic.net/free-photo/turkish-traditional-pide-with-stuffed-meat-herbs-wooden-board_140725-10122.jpg",
        },
        {
          id: "5",
          name: "Döner-Box Exklusiv",
          price: "9,90 €",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-colorful-cut-peppers-black-pepper-tomatoes-cucumber-cutting-board-pine-branches-dark-red-table-free-space_140725-63230.jpg",
        },
        {
          id: "6",
          name: "Spezial-Dürüm",
          price: "8,50 €",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-friends-having-lunch-luxury-restaurant_23-2151081458.jpg",
        },
      ]}
      title="Unsere Signature Gerichte"
      description="Entdecken Sie unsere handgemachten Spezialitäten, kreiert mit Liebe zum Detail und hochwertigsten Komponenten."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah M.",
          handle: "Stammkundin",
          testimonial: "Die Qualität ist unschlagbar, der Laden ist immer makellos sauber.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-adorable-blue-eyed-female-model-with-hair-knot-wears-overalls-enjoys-drinking-fruit-smoothie-looks-happily-somewhere-while-sits-cozy-restaurant-beautiful-teenage-girl-coffee-shop_273609-3038.jpg",
        },
        {
          id: "2",
          name: "Michael K.",
          handle: "Genießer",
          testimonial: "Endlich mal ein Dönerladen, der den Namen 'Gourmet' verdient hat.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-dark-eyed-girl-eating-salad-cafe-cheerful-female-model-enjoying-vegetarian-dish_197531-17195.jpg",
        },
        {
          id: "3",
          name: "Elena R.",
          handle: "Stammkundin",
          testimonial: "Tolle Auswahl und super freundliches Personal, komme immer wieder gerne.",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-holding-cup_23-2147984958.jpg",
        },
        {
          id: "4",
          name: "David L.",
          handle: "Besucher",
          testimonial: "Sehr lecker, sehr frisch, einfach eine tolle Erfahrung.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-friends-shaking-hands_23-2148395404.jpg",
        },
        {
          id: "5",
          name: "Jasmin H.",
          handle: "Gourmet",
          testimonial: "Ambiente top, Döner super – eine klare Empfehlung für Kassel.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081875.jpg",
        },
      ]}
      title="Was unsere Gäste sagen"
      description="Unsere Gäste schätzen besonders die Frische unserer Zutaten und die hohe Qualität jedes einzelnen Gerichts."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "Service",
          description: "Individuelle Zubereitung nach Wunsch",
        },
        {
          id: "2",
          value: "Stil",
          description: "Modernes Ambiente für Premium-Döner",
        },
        {
          id: "3",
          value: "Qualität",
          description: "Höchste Ansprüche an jeden Bissen",
        },
      ]}
      title="Unsere Philosophie"
      description="Individuelle Wünsche stehen bei uns im Mittelpunkt. Ihr Döner wird so zubereitet, wie Sie ihn am liebsten genießen."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Maximale Frische",
          description: "Täglich frisch angelieferte Zutaten von regionalen Partnern.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-welldressed-arabian-man-with-glass-whiskey-cigar-posed-pub_627829-5846.jpg",
        },
        {
          title: "Stilvolles Ambiente",
          description: "Modern renovierter Laden mit Wohlfühlatmosphäre.",
          imageSrc: "http://img.b2bpic.net/free-photo/twigs-leaves-near-lamp-cutlery_23-2147811213.jpg",
        },
        {
          title: "Modernes Bezahlen",
          description: "Schnell, kontaktlos und unkompliziert bezahlen.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-couple-having-lunch_23-2150598339.jpg",
        },
      ]}
      title="Warum Döner Point Kassel?"
      description="Wir setzen neue Maßstäbe in Kassel – mit Leidenschaft, Transparenz und erstklassiger Frische."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Besuchen Sie uns"
      description="Kommen Sie vorbei und erleben Sie den Unterschied. Ihr Premium-Döner in Kassel wartet auf Sie."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Ihr Name",
        },
        {
          name: "message",
          type: "text",
          placeholder: "Haben Sie spezielle Wünsche?",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/fashionable-young-woman-grey-coat-hat-walking-street-city-centre-smiling-true-emotions-stylish-lifestyle-luxury-clothes-elegant-look_197531-1885.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Döner Point Kassel"
      leftLink={{
        text: "Datenschutz",
        href: "#",
      }}
      rightLink={{
        text: "Impressum",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
