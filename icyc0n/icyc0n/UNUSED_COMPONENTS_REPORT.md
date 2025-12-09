# Unused Components & Pages Report

This report identifies pages and UI components that are not currently being used in the application.

## 📄 Unused Pages

The following pages exist in the codebase but are **NOT** registered in `App.tsx` routes:

1. **`pages/SocialPage.tsx`**
   - Status: ❌ Not routed
   - Content: Social media marketing features page
   - Can be accessed if route is added to `App.tsx`

2. **`pages/ServicesPage.tsx`**
   - Status: ❌ Not routed
   - Content: Deep dive into services page
   - Can be accessed if route is added to `App.tsx`

3. **`pages/SEOPage.tsx`**
   - Status: ❌ Not routed
   - Content: SEO optimization features page
   - Can be accessed if route is added to `App.tsx`

4. **`pages/EmailPage.tsx`**
   - Status: ❌ Not routed
   - Content: Email marketing features page
   - Can be accessed if route is added to `App.tsx`

### Currently Active Routes (for reference):
- `/` → `Home.tsx`
- `/pricing` → `PricingPage.tsx`
- `/optimisation` → `OptimisationPage.tsx`
- `/reach` → `ReachPage.tsx`
- `/growth` → `GrowthPage.tsx`
- `/auth` → `AuthPage.tsx`
- `/dashboard` → `Dashboard.tsx`

---

## 🎨 Unused UI Components

The following UI components exist but are **NOT** imported or used anywhere:

1. **`components/ui/StarButton.tsx`**
   - Status: ❌ Not imported anywhere
   - Description: Animated star background button component
   - File exists but no imports found in codebase

2. **`components/ui/lamp.tsx`**
   - Status: ❌ Not imported anywhere
   - Description: Lamp demo component with gradient text effect
   - File exists but no imports found in codebase

---

## 🧩 Unused Regular Components

The following components exist but are **NOT** imported or used:

1. **`components/Testimonials.tsx`**
   - Status: ❌ Not imported anywhere
   - Description: Testimonials section component
   - Not used in Home.tsx or any other page

2. **`components/Services.tsx`**
   - Status: ❌ Not imported anywhere
   - Description: Services grid component (different from CoreServicesCarousel)
   - Not used in Home.tsx or any other page

---

## ✅ Currently Used UI Components

For reference, these UI components **ARE** being used:

- ✅ `InteractiveNebulaShader.tsx` - Used in `Hero.tsx`
- ✅ `RotatingEarth.tsx` - Used in `Hero.tsx`
- ✅ `LoadingScreen.tsx` - Used in `App.tsx`
- ✅ `SkeletonLoaders.tsx` - Used in `Home.tsx`
- ✅ `progressive-carousel.tsx` - Used in `CoreServicesCarousel.tsx`
- ✅ `wavy-background.tsx` - Used in `ReachPage.tsx`, `OptimisationPage.tsx`, `GrowthPage.tsx`
- ✅ `background-paths.tsx` - Used in `CTA.tsx`
- ✅ `button.tsx` - Used in `background-paths.tsx`
- ✅ `HelixRings.tsx` - Used in `WhyChooseUs.tsx`

---

## 📊 Summary

- **Unused Pages:** 4 files
- **Unused UI Components:** 2 files
- **Unused Regular Components:** 2 files
- **Total Unused Files:** 8 files

---

## 💡 Recommendations

1. **If these are intentionally unused:**
   - Consider removing them to reduce bundle size
   - Or document them as "planned features" for future use

2. **If these should be used:**
   - Add routes for unused pages in `App.tsx`
   - Import and use the components where appropriate
   - Consider if they replace existing components (e.g., `Services.tsx` vs `CoreServicesCarousel.tsx`)

3. **For performance:**
   - Unused files still take up disk space
   - They may be included in type checking/analysis
   - Removing them can simplify the codebase

---

**Generated:** $(date)
**Scanned:** All files in `pages/` and `components/` directories

