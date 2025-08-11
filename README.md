# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations and mobile-friendly navigation.

## Features

- ✨ Modern, responsive design
- 📱 Mobile-friendly navigation
- 🎨 Smooth animations and transitions
- 📊 Professional resume section
- 💼 Project showcase with technology tags
- 📧 Contact information with social links
- 🚀 Optimized for performance
- ♿ Accessibility features

## Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser to preview
3. **Customize** the content with your information
4. **Deploy** to GitHub Pages (instructions below)

## Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Update your name throughout the file -->
<title>Your Name - Portfolio</title>
<div class="nav-logo">
    <a href="#home">Your Name</a>
</div>
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
```

### 2. About Section

Update the about section with your personal information:

```html
<p>
    I'm a passionate software developer with expertise in modern web technologies. 
    I love solving complex problems and creating user-friendly applications that make a difference.
</p>
```

### 3. Skills

Modify the skills section in the about area:

```html
<div class="skill-tags">
    <span class="skill-tag">JavaScript</span>
    <span class="skill-tag">React</span>
    <span class="skill-tag">Node.js</span>
    <!-- Add your skills here -->
</div>
```

### 4. Resume/Experience

Update the timeline items with your work experience:

```html
<div class="timeline-item">
    <div class="timeline-date">2023 - Present</div>
    <div class="timeline-content">
        <h4>Your Job Title</h4>
        <p class="company">Your Company</p>
        <ul>
            <li>Your achievement 1</li>
            <li>Your achievement 2</li>
            <li>Your achievement 3</li>
        </ul>
    </div>
</div>
```

### 5. Education

Update the education section:

```html
<div class="education-item">
    <h4>Your Degree</h4>
    <p class="institution">Your University</p>
    <p class="year">2020 - 2024</p>
    <p>Your description here.</p>
</div>
```

### 6. Projects

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description.</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="your-live-link" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
        </div>
    </div>
</div>
```

### 7. Contact Information

Update your contact details:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>your.email@example.com</p>
    </div>
</div>
```

### 8. Social Links

Update the social media links:

```html
<div class="social-links">
    <a href="your-github-url" class="social-link"><i class="fab fa-github"></i></a>
    <a href="your-linkedin-url" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter-url" class="social-link"><i class="fab fa-twitter"></i></a>
</div>
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Desktop

1. **Create a new repository** on GitHub
2. **Clone the repository** to your local machine
3. **Copy all files** from this portfolio to the repository folder
4. **Commit and push** the changes
5. **Go to repository settings** → Pages
6. **Select source** as "Deploy from a branch"
7. **Choose main branch** and save
8. **Your site will be available** at `https://yourusername.github.io/repository-name`

### Method 2: Using Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Method 3: Direct Upload

1. **Create a new repository** on GitHub
2. **Upload all files** directly through GitHub web interface
3. **Enable GitHub Pages** in repository settings
4. **Select main branch** as source

## Customization Tips

### Adding Your Photo

1. **Replace the placeholder** in the hero section:
```html
<div class="profile-placeholder">
    <!-- Replace with your image -->
    <img src="path/to/your/photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --text-color: #333;
    --background-color: #ffffff;
}
```

### Adding More Sections

You can easily add new sections by following the existing pattern:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Features

- 🚀 Optimized images and assets
- 📱 Responsive design
- ⚡ Fast loading times
- 🎯 SEO optimized
- ♿ Accessibility compliant

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio or have questions about deployment, feel free to:

1. Check the GitHub repository issues
2. Create a new issue for bugs or feature requests
3. Fork the repository and submit a pull request

---

**Happy coding! 🚀** 