# Custom Button Component

## Overview

The `CustomButtonComponent` is a versatile Angular standalone component that provides consistent button styling and behavior across your application. It's built with flexibility in mind, supporting multiple variants, sizes, states, and can function as both a button and a link.

**Key Features:**
- Supports three visual variants (primary, secondary, tertiary)
- Multiple sizes (small, medium, large)
- State management (default, disabled, loading)
- Icon support (start and end positions)
- Can render as button or link
- Fully accessible and keyboard navigable
- Dark mode support
- Customizable through additional CSS classes

## API Reference

### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual style variant |
| `state` | `'default' \| 'disabled' \| 'loading'` | `'default'` | Interactive state |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `startIcon` | `string \| undefined` | `undefined` | Icon to display at start of button |
| `endIcon` | `string \| undefined` | `undefined` | Icon to display at end of button |
| `href` | `string \| undefined` | `undefined` | URL for link behavior |
| `type` | `'button' \| 'submit'` | `'button'` | Button type (only applies when not a link) |
| `target` | `string \| undefined` | `undefined` | Link target (e.g., '_blank') |
| `class` | `string` | `''` | Additional CSS classes |

### Outputs

*Note: This component doesn't define custom outputs. Use standard Angular event binding on the rendered element.*

## Usage

### Button vs Link Behavior

The component automatically renders as a link (`<a>`) when the `href` input is provided, otherwise it renders as a button (`<button>`).

**As Button:**
```html
<app-custom-button>Click me</app-custom-button>
```

**As Link:**
```html
<app-custom-button href="/dashboard">Go to Dashboard</app-custom-button>
```

### Basic Usage Examples

#### Standard Button
```html
<app-custom-button 
  variant="primary" 
  size="medium">
  Save Changes
</app-custom-button>
```

#### With Icons
```html
<!-- Start icon -->
<app-custom-button 
  variant="secondary" 
  startIcon="plus">
  Add Item
</app-custom-button>

<!-- End icon -->
<app-custom-button 
  variant="tertiary" 
  endIcon="arrow-right">
  Learn More
</app-custom-button>

<!-- Both icons -->
<app-custom-button 
  startIcon="download" 
  endIcon="external-link">
  Download File
</app-custom-button>
```

#### Different States
```html
<!-- Disabled -->
<app-custom-button 
  state="disabled" 
  variant="primary">
  Cannot Click
</app-custom-button>

<!-- Loading -->
<app-custom-button 
  state="loading" 
  variant="primary">
  Processing...
</app-custom-button>
```

#### As Link
```html
<!-- Internal link -->
<app-custom-button 
  href="/profile" 
  variant="secondary">
  View Profile
</app-custom-button>

<!-- External link -->
<app-custom-button 
  href="https://example.com" 
  target="_blank" 
  endIcon="external-link">
  Visit Website
</app-custom-button>
```

#### Form Submission
```html
<form (ngSubmit)="onSubmit()">
  <app-custom-button 
    type="submit" 
    variant="primary">
    Submit Form
  </app-custom-button>
</form>
```

#### Custom Styling
```html
<app-custom-button 
  class="w-full shadow-lg" 
  variant="primary">
  Full Width Button
</app-custom-button>
```

## Design Guidelines

### When to Use Each Variant

**Primary (`variant="primary"`)**
- Main call-to-action buttons
- Form submissions
- Critical actions users should take
- Limit to 1-2 primary buttons per view

**Secondary (`variant="secondary"`)**
- Alternative actions
- Cancel/dismiss buttons
- Navigation buttons
- Secondary calls-to-action

**Tertiary (`variant="tertiary"`)**
- Subtle actions
- Text-based links that need button styling
- Less important actions
- When you need minimal visual weight

### Button Usage Best Practices

#### For Non-UI Engineers

1. **Use Descriptive Labels**
   ```html
   <!-- Good -->
   <app-custom-button>Save Draft</app-custom-button>
   <app-custom-button>Delete Account</app-custom-button>
   
   <!-- Avoid -->
   <app-custom-button>OK</app-custom-button>
   <app-custom-button>Click Here</app-custom-button>
   ```

2. **Choose Appropriate Variants**
   - Use primary for the main action users should take
   - Use secondary for alternative or cancel actions
   - Use tertiary for less important actions

3. **Size Guidelines**
   - Small: Use in compact spaces, toolbars, or table actions
   - Medium: Default for most use cases
   - Large: Use for prominent calls-to-action or hero sections

4. **Icon Usage**
   - Use icons to clarify action (save, delete, download)
   - Keep icon usage consistent across similar actions
   - Don't overuse icons - sometimes text is clearer

5. **States**
   - Always set `state="disabled"` for actions that aren't currently available
   - Use `state="loading"` during async operations
   - Provide feedback for user actions

6. **Accessibility**
   - Button text should clearly describe the action
   - Use `type="submit"` for form submissions
   - Consider keyboard navigation and screen readers

#### Common Patterns

```html
<!-- Modal actions -->
<div class="flex gap-3 justify-end">
  <app-custom-button variant="secondary">Cancel</app-custom-button>
  <app-custom-button variant="primary">Confirm</app-custom-button>
</div>

<!-- Form actions -->
<div class="flex gap-3">
  <app-custom-button type="submit" variant="primary">Save</app-custom-button>
  <app-custom-button variant="tertiary">Save as Draft</app-custom-button>
</div>

<!-- Navigation -->
<app-custom-button href="/back" variant="secondary" startIcon="arrow-left">
  Back to List
</app-custom-button>
```

## Technical Notes

- The component is standalone and can be imported directly
- Uses Angular's new signal-based inputs
- Automatically handles button vs link rendering based on `href` presence
- Supports dark mode through CSS classes
- Custom classes are applied with highest specificity for easy overrides