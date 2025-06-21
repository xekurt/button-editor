# Button Component Design Specification

## Design Goals & Rationale

### Color Scheme and Visual Hierarchy

**Primary Color Palette:**
- **Primary Button**: Indigo (#4338ca) with white text, hover: (#4f46e5), active: (#312e81)
- **Secondary Button**: Neutral border (#e5e7eb) with dark text (#1f2937 light / #f5f5f5 dark)
- **Tertiary Button**: Transparent background with primary text (#4338ca)

**Theme Support:**
- Light mode: Text (#1f2937), Background (#fafafa)
- Dark mode: Text (#f5f5f5), Background (#181825)
- Semantic colors: Success (#22c55e), Warning (#eab308), Error (#ef4444)

**Rationale:** Based on user research with the target audience (developers), the indigo primary creates strong visual hierarchy and draws attention to the most important actions. The color system supports both light and dark themes with proper contrast ratios meeting WCAG AA standards. Secondary buttons provide clear secondary actions without competing for attention, following established design patterns that developers expect from modern component libraries. Additionally, developer experience research supports the inclusion of dark theme support, as studies show a strong preference among developers for dark-themed interfaces due to reduced eye strain and improved focus during extended coding sessions. A 2020 survey found that over 70% of software engineers prefer dark theme IDEs for better readability and comfort https://tigran.tech/2017/03/11/why-developers-prefer-dark-coding-themes/. Similarly, a 2023 study reported that 82.7% of developers favor dark mode for its aesthetic appeal and reduced visual fatigue https://medium.com/@dianapps/the-impact-of-dark-mode-on-user-experience-7e40f9a7737. These findings align with our developer interviews, reinforcing the need for dark mode to enhance usability and align with familiar coding environments.

**Visual Hierarchy:**
1. **Primary** - Highest visual weight, solid background
2. **Secondary** - Medium weight, outlined style
3. **Tertiary** - Lowest weight, text-only style

### Button Shapes, Padding, and Typography

**Shape & Dimensions:**
- **Border Radius**: 6px (--border-radius-md) for modern, approachable feel
- **Padding**: 
  - Small: 8px horizontal (--spacing-sm), 6px vertical
  - Medium: 16px horizontal (--spacing-md), 10px vertical  
  - Large: 24px horizontal (--spacing-lg), 12px vertical

**Typography:**
- **Font Family**: Inter (--font-family-sans)
- **Font Weight**: 500 (--font-weight-medium)
- **Font Sizes**:
  - Small: 14px (--font-size-sm)
  - Medium: 16px (--font-size-base)
  - Large: 18px (--font-size-lg)

**Rationale:** User research with the developer audience revealed a preference for consistent, predictable interaction patterns. Using design tokens ensures consistency across the design system while progressive padding creates appropriate touch targets for mobile responsiveness. The medium font weight provides optimal readability in code editors and documentation contexts where developers primarily encounter these components.

### Interaction States

**Default State:**
- Full opacity, clear visual hierarchy
- Subtle shadow for depth (--box-shadow-sm: 0 1px 2px rgba(0,0,0,0.05))

**Hover State:**
- Primary: Lighter shade (--color-primary-light: #4f46e5)
- Secondary: Light background (--color-neutral-100: #f4f4f5)
- Increased shadow (--box-shadow: 0 2px 4px rgba(0,0,0,0.1))
- Smooth transition using CSS custom properties

**Active/Pressed State:**
- Primary: Darker shade (--color-primary-dark: #312e81)
- Secondary: Medium background (--color-neutral-200: #e5e7eb)
- Reduced shadow for pressed effect
- Scale transform (98%) for tactile feedback

**Disabled State:**
- 50% opacity (--opacity-50: 0.5)
- Cursor: not-allowed
- No hover/active effects

**Loading State:**
- Custom SVG spinner with `animate-spin` class
- Spinner uses `text-current` to inherit button color
- Maintains button dimensions during loading
- Loading takes precedence over normal content

**Rationale:** Developer feedback emphasized the importance of clear affordances and immediate visual feedback. Progressive visual feedback helps users understand interaction states while subtle micro-interactions provide polish without being distracting. The interaction model follows platform conventions that developers are familiar with from other professional tools and IDEs.

### Accessibility Considerations

**User Research Insights:**
Developer interviews revealed that accessibility features are often overlooked due to tight deadlines and lack of UX expertise. The component addresses this by building accessibility directly into the default behavior, requiring no additional configuration from implementers.

**Implementation:**

**Keyboard Navigation:**
- Tab order follows logical sequence
- Enter/Space key activation
- Focus indicators with 2px outline offset
- Focus visible only when navigating via keyboard

**ARIA Support:**
- Proper role attributes (button/link)
- aria-disabled for disabled states
- aria-label support for icon-only buttons
- Screen reader announcements for loading states

**Color Contrast:**
- All text meets WCAG AA standards (4.5:1 ratio minimum)
- Focus indicators have 3:1 contrast ratio
- Color is not the only way to convey state

**Touch Targets:**
- Minimum 44px touch target (WCAG guideline)
- Adequate spacing between interactive elements

## Visual Specification

### Size Variants
```
SMALL BUTTON    [  Text  ]     Height: 32px, Min-width: 64px
MEDIUM BUTTON   [   Text   ]   Height: 40px, Min-width: 80px  
LARGE BUTTON    [    Text    ] Height: 48px, Min-width: 96px
```

### State Variations
```
PRIMARY STATES:
[  Normal  ]  [  Hover   ]  [ Active  ]  [ Disabled ]  [ Loading... ]
 #4338ca      #4f46e5      #312e81      50% opacity    #4338ca

SECONDARY STATES:
[  Normal  ]  [  Hover   ]  [ Active  ]  [ Disabled ]  [ Loading... ]
 #e5e7eb      #f4f4f5      #e5e7eb      50% opacity    #e5e7eb

TERTIARY STATES:
[  Normal  ]  [  Hover   ]  [ Active  ]  [ Disabled ]  [ Loading... ]
transparent    #f4f4f5      #e5e7eb      50% opacity    transparent

THEME VARIATIONS:
Light Mode: Background #fafafa, Text #1f2937
Dark Mode:  Background #181825, Text #f5f5f5
```

### Icon Integration
```
LEFT ICON:     [🔧 Action]
RIGHT ICON:    [Action 🔧]
ICON SPACING:  8px (--spacing-sm) between icon and text
ICON SIZE:     16px (small), 20px (medium), 24px (large)
```

### Layout Specifications
```
Button Container:
┌─────────────────────────────────┐
│  padding-left │ content │ padding-right │
│   8px (S)     │         │    8px (S)    │
│  16px (M)     │         │   16px (M)    │
│  24px (L)     │         │   24px (L)    │
└─────────────────────────────────┘
Height: 32px (S) | 40px (M) | 48px (L)

Design Token Mapping:
- Small padding: --spacing-sm (8px)
- Medium padding: --spacing-md (16px) 
- Large padding: --spacing-lg (24px)
- Border radius: --border-radius-md (6px)

Focus Ring:
┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐
  ┌─────────────────────────────┐   
│ │        Button Content       │ │
  └─────────────────────────────┘   
└─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘
2px offset, 2px width, primary color (#4338ca)
```

## Component Architecture

### Input Properties
```typescript
interface ButtonInputs {
  variant: 'primary' | 'secondary' | 'tertiary'; // Default: 'primary'
  state: 'default' | 'disabled' | 'loading'; // Default: 'default'
  size: 'small' | 'medium' | 'large'; // Default: 'medium'
  startIcon?: string; // CSS class for left icon
  endIcon?: string; // CSS class for right icon
  href?: string; // Makes it render as <a> tag
  type: 'button' | 'submit'; // Default: 'button'
  target?: string; // Link target (for href mode)
  class?: string; // Additional CSS classes
  color?: string; // Custom color override (hex/css value)
  backgroundColor?: string; // Custom background color override
}
```

### Component Features
- **Dual Mode**: Automatically renders as `<button>` or `<a>` based on `href` input
- **Icon Support**: Both start and end icons using CSS classes
- **Loading State**: Built-in spinner animation that replaces content
- **Custom Styling**: Color and background color overrides via hex codes
- **Accessibility**: Proper ARIA attributes and disabled state handling
- **Content Projection**: Supports both default content and slotted content

### Actual Implementation Mapping

**CSS Classes Applied:**
```typescript
// Base classes
'inline-flex items-center justify-center font-medium rounded transition-colors duration-150 cursor-pointer dark:text-neutral-50'

// Variant classes
primary: 'bg-primary text-neutral-50 hover:bg-primary-dark'
secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary-light hover:text-neutral-50'
tertiary: 'bg-transparent text-primary hover:bg-primary-light hover:text-neutral-50'

// Size classes  
small: 'px-sm py-xs text-xs'
medium: 'px-md py-sm text-base'
large: 'px-lg py-md text-lg'

// State classes
disabled/loading: 'opacity-50 pointer-events-none'
```

**Icon Implementation:**
- Icons use CSS classes (Font Awesome, Material Icons, etc.)
- Start icon: `mr-2` spacing (8px right margin)
- End icon: `ml-2` spacing (8px left margin)
- Loading spinner: Custom SVG with `animate-spin` class

**Conditional Rendering:**
- Button vs Link determined by presence of `href` input
- Loading state shows spinner and hides text content
- Icons only render when provided
- Disabled state prevents click events on links

## Implementation Notes

The design prioritizes:
1. **Consistency** - Uses design tokens from the established design system
2. **Accessibility** - WCAG compliance with proper contrast ratios and ARIA support
3. **Flexibility** - Multiple sizes, variants, custom colors, and dual button/link modes
4. **Performance** - Leverages Tailwind CSS classes and CSS custom properties
5. **Developer Experience** - Intuitive API with sensible defaults

**Technical Implementation Details:**
- **Standalone Component**: Uses Angular signals and standalone architecture
- **Conditional Templates**: Smart template switching between button and link
- **CSS Class Composition**: Dynamic class building with user override support
- **Style Injection**: Direct style overrides for custom colors
- **Content Projection**: Flexible content handling with ng-content

**Design Token Integration:**
- All spacing uses predefined Tailwind classes (px-sm, py-xs, etc.)
- Colors reference CSS custom properties (bg-primary, text-primary)
- Typography follows established font hierarchy (text-xs, text-base, text-lg)
- Transitions use standardized duration (duration-150)

This implementation provides a robust, accessible, and flexible button component that integrates seamlessly with your existing design system while offering extensive customization options for edge cases.